import { stripPhrases } from '../../data/site'

export default function EditorialStrip() {
  return (
    <div className="strip" aria-label="Demantragems in brief">
      <div className="shell strip__inner">
        {stripPhrases.map((phrase) => (
          <span className="strip__item" key={phrase}>
            {phrase}
            <span className="strip__dot" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
