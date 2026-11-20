const credits = [
  {
    file: 'banner.jpg',
    title: 'Uvarovite garnet crystals, Russia',
    author: 'Parent Géry',
    license: 'Public domain',
    href: 'https://commons.wikimedia.org/wiki/File:Uvarovite_8_(Russie).jpg',
  },
  {
    file: 'approach-origin.jpg',
    title: 'Granat, demantoid — Usakos, Karibib District, Erongo Region, Namibia',
    author: 'Lech Darski',
    license: 'CC BY-SA 3.0',
    href: 'https://commons.wikimedia.org/wiki/File:Granat,_demantoid_-_Usakos,_Karibib_District,_Erongo_Region,_Namibia,_Afryka..jpg',
  },
  {
    file: 'approach-cutting.jpg',
    title: 'Faceted tsavorite garnets, Tanzania',
    author: 'Adam Kelliher / Rubble Rock and Gem',
    license: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:Faceted_tsavorite_garnets,_Tanzania.jpg',
  },
  {
    file: 'approach-beauty.jpg',
    title: 'Uvarovite garnet specimen',
    author: 'Parent Géry',
    license: 'Public domain',
    href: 'https://commons.wikimedia.org/wiki/File:Uvarovite.jpg',
  },
  {
    file: 'journal-knowledge.jpg',
    title: 'Granat demantoid — Antetezambato, Ambanja District, Madagascar',
    author: 'Lech Darski',
    license: 'CC BY 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:Granat_demantoid_-_Antetezambato,_Ambanja_District,_Diana_(Northern)_Region,_Antsiranana_Province,_Madagaskar.jpg',
  },
  {
    file: 'journal-craft.jpg',
    title: 'Primary aqueous fluid inclusion in garnet from the Tabuaço skarn deposit',
    author: 'Alina Yakovenko',
    license: 'CC BY-SA 4.0',
    href: 'https://commons.wikimedia.org/wiki/File:Primary_aqueous_fluid_inclusion_in_garnet_from_the_Tabua%C3%A7o_skarn_deposit.jpg',
  },
]

export default function Credits() {
  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">Image Credits</p>
          <h1 className="display">Photography</h1>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="lede" style={{ marginBottom: '2.5rem' }}>
            Photographs of Demantoid Garnet supplied by DEMANTRAGEMS are original brand assets. Editorial
            photographs of other garnet material are credited below and used under their respective licences.
          </p>

          <ul className="credits-list">
            {credits.map((credit) => (
              <li key={credit.file}>
                <span className="label">{credit.file}</span>
                <span>{credit.title}</span>
                <span className="muted">
                  {credit.author} · {credit.license} ·{' '}
                  <a className="text-link" href={credit.href} target="_blank" rel="noreferrer noopener">
                    Source
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
