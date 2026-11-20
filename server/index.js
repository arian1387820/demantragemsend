import http from 'node:http'
import path from 'node:path'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import express from 'express'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const isProduction = process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT || 3000)
const dataDir = process.env.DATA_DIR || path.join(root, 'data')

const app = express()
app.disable('x-powered-by')
app.use(express.json({ limit: '64kb' }))

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

async function appendRecord(collection, record) {
  await fs.mkdir(dataDir, { recursive: true })
  await fs.appendFile(
    path.join(dataDir, `${collection}.jsonl`),
    `${JSON.stringify(record)}\n`,
    'utf8',
  )
}

const clean = (value, max = 2000) => String(value ?? '').trim().slice(0, max)

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/newsletter', async (req, res) => {
  const email = clean(req.body?.email, 200).toLowerCase()
  if (!EMAIL.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }
  try {
    await appendRecord('newsletter', { email, createdAt: new Date().toISOString() })
    return res.status(201).json({ ok: true })
  } catch (error) {
    console.error('newsletter error', error)
    return res.status(500).json({ error: 'Your subscription could not be saved. Please try again.' })
  }
})

app.post('/api/contact', async (req, res) => {
  const name = clean(req.body?.name, 120)
  const email = clean(req.body?.email, 200).toLowerCase()
  const subject = clean(req.body?.subject, 120)
  const message = clean(req.body?.message, 4000)

  if (name.length < 2) return res.status(400).json({ error: 'Please enter your name.' })
  if (!EMAIL.test(email)) return res.status(400).json({ error: 'Please enter a valid email address.' })
  if (message.length < 10) return res.status(400).json({ error: 'Please tell us a little more (at least 10 characters).' })

  try {
    await appendRecord('contact', {
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    })
    return res.status(201).json({ ok: true })
  } catch (error) {
    console.error('contact error', error)
    return res.status(500).json({ error: 'Your message could not be sent. Please try again.' })
  }
})

const httpServer = http.createServer(app)

if (isProduction) {
  app.use(express.static(path.join(root, 'dist'), { index: false }))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(root, 'dist', 'index.html'))
  })
} else {
  const { createServer } = await import('vite')
  const vite = await createServer({
    root,
    appType: 'custom',
    server: { middlewareMode: true, hmr: { server: httpServer } },
  })
  app.use(vite.middlewares)
  app.use('*', async (req, res, next) => {
    try {
      const template = await fs.readFile(path.join(root, 'index.html'), 'utf8')
      const html = await vite.transformIndexHtml(req.originalUrl, template)
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (error) {
      vite.ssrFixStacktrace(error)
      next(error)
    }
  })
}

httpServer.listen(port, '0.0.0.0', () => {
  console.log(`DEMANTRAGEMS running on http://0.0.0.0:${port} (${isProduction ? 'production' : 'development'})`)
})
