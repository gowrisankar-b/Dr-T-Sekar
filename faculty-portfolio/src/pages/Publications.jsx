import { useState } from 'react'
import './Publications.css'

const academicProfiles = [
  {
    platform: 'Google Scholar',
    icon: '🎓',
    description: 'Full citation index, h-index, and publication metrics',
    url: 'https://scholar.google.com',
    color: 'profile-card--scholar',
    stats: '90+ Publications',
  },
  {
    platform: 'Scopus',
    icon: '🔭',
    description: 'Scopus Author ID: 56152897600',
    url: 'https://www.scopus.com/authid/detail.uri?authorId=56152897600',
    color: 'profile-card--scopus',
    stats: 'ID: 56152897600',
  },
  {
    platform: 'Web of Science',
    icon: '🌐',
    description: 'Web of Science Researcher ID: JOK-2774-2023',
    url: 'https://www.webofscience.com',
    color: 'profile-card--wos',
    stats: 'ID: JOK-2774-2023',
  },
]

const recentWorks = [
  {
    year: '2026',
    title: 'Mechanical and Tribological Characterisation of Bio-Polymer Composites Reinforced with Natural Fillers for Orthopaedic Applications',
    journal: "Polymer Science — Springer",
    publisher: 'Springer',
    type: 'Journal Article',
    doi: '10.1007/s00289-026-xxxxx',
    tags: ['Bio-Polymers', 'Tribology', 'Composites'],
    highlight: true,
  },
  {
    year: '2026',
    title: 'Optimisation of ECDM Process Parameters for Machining Hydroxyapatite Bio-Ceramics Using Response Surface Methodology',
    journal: 'International Journal of Biological Macromolecules — Elsevier',
    publisher: 'Elsevier',
    type: 'Journal Article',
    doi: '10.1016/j.ijbiomac.2026.xxxxx',
    tags: ['ECDM', 'Bio-Ceramics', 'Advanced Mfg'],
    highlight: true,
  },
  {
    year: '2025',
    title: 'Effect of Additive Manufacturing Process Parameters on the Tensile Strength of PLA/HA Composite Scaffolds',
    journal: 'Journal of Manufacturing Processes — Elsevier',
    publisher: 'Elsevier',
    type: 'Journal Article',
    doi: '10.1016/j.jmapro.2025.xxxxx',
    tags: ['3D Printing', 'Bio-Polymers'],
    highlight: false,
  },
  {
    year: '2025',
    title: 'Machinability Analysis of Alumina Ceramics Under Varied Electrolyte Concentrations in ECDM',
    journal: 'Ceramics International — Elsevier',
    publisher: 'Elsevier',
    type: 'Journal Article',
    doi: '10.1016/j.ceramint.2025.xxxxx',
    tags: ['ECDM', 'Advanced Mfg'],
    highlight: false,
  },
  {
    year: '2024',
    title: 'Wear Behaviour of Hybrid Metal Matrix Composites Fabricated via Powder Metallurgy',
    journal: 'Materials Today: Proceedings — Elsevier',
    publisher: 'Elsevier',
    type: 'Journal Article',
    doi: '10.1016/j.matpr.2024.xxxxx',
    tags: ['Advanced Mfg', 'Composites'],
    highlight: false,
  },
  {
    year: '2024',
    title: 'Surface Roughness Prediction in CNC Turning of Ti-6Al-4V Using Artificial Neural Networks',
    journal: 'International Journal of Advanced Manufacturing Technology — Springer',
    publisher: 'Springer',
    type: 'Journal Article',
    doi: '10.1007/s00170-024-xxxxx',
    tags: ['Advanced Mfg', 'AI/ML'],
    highlight: false,
  },
  {
    year: '2023',
    title: 'Micro-Structural and Mechanical Properties of 3D-Printed Bio-Ceramic Implants',
    journal: 'Rapid Prototyping Journal — Emerald',
    publisher: 'Emerald',
    type: 'Journal Article',
    doi: '10.1108/RPJ-2023-xxxxx',
    tags: ['3D Printing', 'Bio-Ceramics'],
    highlight: false,
  },
  {
    year: '2023',
    title: 'Multi-Response Optimisation of EDM Parameters on Inconel 718 Using TOPSIS Method',
    journal: 'Materials and Manufacturing Processes — Taylor & Francis',
    publisher: 'Taylor & Francis',
    type: 'Journal Article',
    doi: '10.1080/10426914.2023.xxxxx',
    tags: ['Advanced Mfg', 'ECM'],
    highlight: false,
  },
]

const books = [
  {
    title: 'Advanced Manufacturing Processes: Theory and Practice',
    publisher: 'Springer',
    year: '2023',
    isbn: '978-3-030-XXXXX-X',
    icon: '📗',
  },
  {
    title: 'Electrochemical Machining: Fundamentals and Applications',
    publisher: 'CRC Press / Taylor & Francis',
    year: '2022',
    isbn: '978-1-032-XXXXX-X',
    icon: '📘',
  },
  {
    title: 'Bio-Polymer Composites for Biomedical Engineering',
    publisher: 'Elsevier',
    year: '2021',
    isbn: '978-0-128-XXXXX-X',
    icon: '📙',
  },
  {
    title: 'Manufacturing Technology: A Practical Approach',
    publisher: 'PHI Learning',
    year: '2019',
    isbn: '978-81-203-XXXXX-X',
    icon: '📕',
  },
]

const allTags = ['All', 'Bio-Polymers', 'ECDM', '3D Printing', 'Advanced Mfg', 'Bio-Ceramics', 'Composites', 'AI/ML', 'ECM', 'Tribology']

const ITEMS_PER_PAGE = 4

export default function Publications() {
  const [activeTag, setActiveTag] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = activeTag === 'All'
    ? recentWorks
    : recentWorks.filter(p => p.tags.includes(activeTag))

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleTagChange = (tag) => {
    setActiveTag(tag)
    setPage(1)
  }

  return (
    <div className="publications-page">

      {/* ── PAGE HEADER ─────────────────────────── */}
      <div className="page-header">
        <div className="container">
          <p className="page-header__eyebrow">Journals · Books · Academic Profiles</p>
          <h1 className="page-header__title">Publications</h1>
          <p className="page-header__sub">
            90+ Peer-Reviewed Journals · 4 Authored Books · Indexed in Scopus &amp; Web of Science
          </p>
        </div>
      </div>

      <div className="container">

        {/* ── ACADEMIC PROFILE CARDS ──────────────── */}
        <section className="section">
          <h2 className="section-title">Academic Profiles</h2>
          <p className="section-subtitle">Indexed on major global research databases</p>

          <div className="profiles-grid">
            {academicProfiles.map(p => (
              <a
                key={p.platform}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className={`profile-card card ${p.color}`}
              >
                <div className="profile-card__icon">{p.icon}</div>
                <div className="profile-card__body">
                  <h3 className="profile-card__name">{p.platform}</h3>
                  <p className="profile-card__desc">{p.description}</p>
                  <span className="profile-card__stat">{p.stats}</span>
                </div>
                <span className="profile-card__arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── 2026 HIGHLIGHTS ─────────────────────── */}
        <section className="section" style={{ paddingTop: '0' }}>
          <h2 className="section-title">2026 Highlights</h2>
          <p className="section-subtitle">Latest publications in top-tier international journals</p>

          <div className="highlights-grid">
            {recentWorks.filter(w => w.highlight).map((work, i) => (
              <div key={i} className="highlight-card card">
                <div className="highlight-card__header">
                  <span className="badge badge-gold">New · {work.year}</span>
                  <span className={`publisher-badge publisher-badge--${work.publisher.toLowerCase().replace(/\s/g,'-')}`}>
                    {work.publisher}
                  </span>
                </div>
                <h3 className="highlight-card__title">{work.title}</h3>
                <p className="highlight-card__journal">📖 {work.journal}</p>
                <p className="highlight-card__doi">
                  DOI: <span>{work.doi}</span>
                </p>
                <div className="highlight-card__tags">
                  {work.tags.map(t => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── JOURNAL CATALOG ─────────────────────── */}
        <section className="section">
          <div className="catalog-header">
            <div>
              <h2 className="section-title">Journal Catalog</h2>
              <p className="section-subtitle">
                Showing {paginated.length} of {filtered.length} publications
                {activeTag !== 'All' && ` tagged "${activeTag}"`}
              </p>
            </div>
          </div>

          {/* Tag filter */}
          <div className="filter-bar">
            <span className="filter-bar__label">Filter:</span>
            <div className="filter-bar__tags">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`filter-tag ${activeTag === tag ? 'filter-tag--active' : ''}`}
                  onClick={() => handleTagChange(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Publication list */}
          <div className="pub-list">
            {paginated.map((pub, i) => (
              <div key={i} className="pub-item card">
                <div className="pub-item__year">{pub.year}</div>
                <div className="pub-item__body">
                  <h4 className="pub-item__title">{pub.title}</h4>
                  <p className="pub-item__journal">📖 {pub.journal}</p>
                  <p className="pub-item__doi">DOI: {pub.doi}</p>
                  <div className="pub-item__tags">
                    {pub.tags.map(t => (
                      <span key={t} className="badge" style={{ fontSize: '0.7rem' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination__btn"
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                ← Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  className={`pagination__btn ${page === n ? 'pagination__btn--active' : ''}`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
              <button
                className="pagination__btn"
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next →
              </button>
            </div>
          )}

          <p className="pub-catalog-note">
            📌 Displaying a curated selection. For the complete list of 90+ publications,
            visit the <a href="https://scholar.google.com" target="_blank" rel="noreferrer">Google Scholar profile</a> or
            download the <a href="/cv.pdf" download>Full Academic CV</a>.
          </p>
        </section>

        {/* ── BOOKS ───────────────────────────────── */}
        <section className="section">
          <h2 className="section-title">Authored Books</h2>
          <p className="section-subtitle">4 books published with leading academic publishers</p>

          <div className="books-grid">
            {books.map((book, i) => (
              <div key={i} className="book-card card">
                <div className="book-card__icon">{book.icon}</div>
                <div className="book-card__body">
                  <h4 className="book-card__title">{book.title}</h4>
                  <p className="book-card__publisher">{book.publisher} · {book.year}</p>
                  <p className="book-card__isbn">ISBN: {book.isbn}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
