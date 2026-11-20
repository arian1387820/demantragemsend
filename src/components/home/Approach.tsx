import { approach } from '../../data/site'

export default function Approach() {
  return (
    <section className="section" aria-labelledby="approach-title">
      <div className="shell">
        <div className="approach__head">
          <p className="eyebrow">The Demantragems Approach</p>
          <h2 className="heading" id="approach-title">
            Where nature meets craftsmanship.
          </h2>
        </div>

        <div className="approach__grid">
          {approach.map((item) => (
            <article className="approach__item" key={item.title}>
              <div className="approach__media">
                <img src={item.image} alt={item.alt} loading="lazy" decoding="async" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
