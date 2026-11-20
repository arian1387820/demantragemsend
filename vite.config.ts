import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The preview proxy reaches the dev server through a rotating sandbox hostname,
// so the host allowlist is extended only while running inside the Base44 preview.
const previewHosts: string[] = []
if (process.env.BASE44_PREVIEW_MODE === '1') {
  const publicSuffix = process.env.BASE44_PUBLIC_HOST_SUFFIX
  const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN
  if (publicSuffix) previewHosts.push(`3000-${publicSuffix}`)
  if (sandboxDomain) previewHosts.push(`.${sandboxDomain}`)
}

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    ...(previewHosts.length ? { allowedHosts: previewHosts } : {}),
    ...(process.env.CHOKIDAR_USEPOLLING === 'true'
      ? { watch: { usePolling: true, interval: 400 } }
      : {}),
  },
})
