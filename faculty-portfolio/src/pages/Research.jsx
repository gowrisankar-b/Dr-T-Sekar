import { useState } from 'react'
import './Research.css'

const filterTags = [
  { id: 'all',              label: 'All' },
  { id: 'advanced-mfg',    label: 'Advanced Manufacturing' },
  { id: 'ecm',             label: 'ECM / ECDM' },
  { id: '3d-printing',     label: '3D Printing' },
  { id: 'bio-polymers',    label: 'Bio-Polymers' },
]

const patents = [
  {
    id: 1,
    regNo: 'DR-2021-001',
    title: 'Design of Ergonomic Fixture for CNC Machining Operations',
    office: 'Indian Patent Office',
    year: '2021',
    tags: ['advanced-mfg'],
    status: 'Granted',
  },
  {
    id: 2,
    regNo: 'DR-2021-002',
    title: 'Novel Bio-Ceramic Cutting Insert Geometry for Precision Turning',
    office: 'Indian Patent Office',
    year: '2021',
    tags: ['advanced-mfg', 'bio-polymers'],
    status: 'Granted',
  },
  {
    id: 3,
    regNo: 'DR-2021-003',
    title: 'Electrochemical Discharge Machining Electrode Fixture Design',
    office: 'Indian Patent Office',
    year: '2021',
    tags: ['ecm'],
    status: 'Granted',
  },
  {
    id: 4,
    regNo: 'DR-2022-004',
    title: 'Additive Manufactured Lattice Structure for Lightweight Aerospace Components',
    office: 'Indian Patent Office',
    year: '2022',
    tags: ['3d-printing'],
    status: 'Granted',
  },
  {
    id: 5,
    regNo: 'DR-2022-005',
    title: 'Hybrid Polymer Composite Mould for Rapid Prototyping',
    office: 'Indian Patent Office',
    year: '2022',
    tags: ['3d-printing', 'bio-polymers'],
    status: 'Granted',
  },
  {
    id: 6,
    regNo: 'DR-2022-006',
    title: 'Micro-EDM Tool Electrode with Integrated Flushing Channels',
    office: 'Indian Patent Office',
    year: '2022',
    tags: ['ecm', 'advanced-mfg'],
    status: 'Granted',
  },
  {
    id: 7,
    regNo: 'DR-2023-007',
    title: 'Surface Textured Grinding Wheel for Improved Material Removal Rate',
    office: 'Indian Patent Office',
    year: '2023',
    tags: ['advanced-mfg'],
    status: 'Granted',
  },
  {
    id: 8,
    regNo: 'DR-2023-008',
    title: 'Biodegradable Polymer Scaffold Design for Bone Tissue Engineering',
    office: 'Indian Patent Office',
    year: '2023',
    tags: ['bio-polymers', '3d-printing'],
    status: 'Granted',
  },
  {
    id: 9,
    regNo: 'DR-2024-009',
    title: 'ECDM Spindle Assembly for Machining Hard Brittle Bio-Ceramic Materials',
    office: 'Indian Patent Office',
    year: '2024',
    tags: ['ecm', 'bio-polymers'],
    status: 'Granted',
  },
  {
    id: 10,
    regNo: 'DR-2024-010',
    title: 'Smart Coolant Delivery Nozzle for High-Speed Milling',
    office: 'Indian Patent Office',
    year: '2024',
    tags: ['advanced-mfg'],
    status: 'Granted',
  },
]

const utilityFilings = [
  {
    title: 'Electrochemical Discharge Machining of Hydroxyapatite Bio-Ceramics — Process Optimisation',
    type: 'Utility Patent (Filed)',
    year: '2025',
    tags: ['ecm', 'bio-polymers'],
  },
  {
    title: 'FDM 3D Printed Composite Fixture with Embedded Sensors for Smart Manufacturing',
    type: 'Utility Patent (Filed)',
    year: '2025',
    tags: ['3d-printing', 'advanced-mfg'],
  },
  {
    title: 'Novel Bio-Polymer Blend for High-Strength Orthopaedic Implant Fabrication',
    type: 'Utility Patent (Under Review)',
    year: '2026',
    tags: ['bio-polymers'],
  },
]

export default function Research() {
  const [activeTag, setActiveTag] = useState('all')

  const filteredPatents = activeTag === 'all'
    ? patents
    : patents.filter(p => p.tags.includes(activeTag))

  const filteredFilings = activeTag === 'all'
    ? utilityFilings
    : utilityFilings.filter(p => p.tags.includes(activeTag))

  return (
    <div className="research-page">

      {/* ── PAGE HEADER ───────────────────────────── */}
      <div className="page-header">
        <div className="container">
          <p className="page-header__eyebrow">Intellectual Property &amp; Funded Projects</p>
          <h1 className="page-header__title">Research &amp; Patents</h1>
          <p className="page-header__sub">
            10 Granted Design Registration Certificates · Indian Patent Office · TEQIP-III Funded R&amp;D
          </p>
        </div>
      </div>

      <div className="container">

        {/* ── TEQIP PROJECT ─────────────────────────── */}
        <section className="section">
          <h2 className="section-title">Funded R&amp;D Project</h2>
          <p className="section-subtitle">Principal Investigator — Sponsored by TEQIP-III</p>

          <div className="project-card card">
            <div className="project-card__header">
              <div className="project-card__badge badge badge-gold">Principal Investigator</div>
              <div className="project-card__badge badge badge-navy">TEQIP-III Sponsored</div>
              <div className="project-card__badge badge badge-slate">Ongoing</div>
            </div>
            <h3 className="project-card__title">
              Electrochemical Discharge Machining (ECDM) of Bio-Ceramics
            </h3>
            <p className="project-card__desc">
              This funded research initiative investigates the machinability of advanced bio-ceramic
              materials — including Hydroxyapatite (HAp) and Alumina — using Electrochemical Discharge
              Machining. The project aims to develop optimised process parameters for precision
              micro-machining of bio-ceramic components used in orthopaedic and dental implants,
              contributing directly to the advancement of bio-medical manufacturing in India.
            </p>
            <div className="project-card__meta">
              <div className="project-card__meta-item">
                <span className="project-card__meta-label">Sponsoring Body</span>
                <span className="project-card__meta-value">TEQIP-III, Govt. of India</span>
              </div>
              <div className="project-card__meta-item">
                <span className="project-card__meta-label">Host Institution</span>
                <span className="project-card__meta-value">Government College of Technology, Coimbatore</span>
              </div>
              <div className="project-card__meta-item">
                <span className="project-card__meta-label">Domain</span>
                <span className="project-card__meta-value">Advanced Manufacturing · Bio-Ceramics · ECM</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FILTER TAGS ───────────────────────────── */}
        <div className="filter-bar">
          <span className="filter-bar__label">Filter by:</span>
          <div className="filter-bar__tags">
            {filterTags.map(tag => (
              <button
                key={tag.id}
                className={`filter-tag ${activeTag === tag.id ? 'filter-tag--active' : ''}`}
                onClick={() => setActiveTag(tag.id)}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── GRANTED PATENTS ───────────────────────── */}
        <section className="section" style={{ paddingTop: '1.5rem' }}>
          <h2 className="section-title">Granted Design Registration Certificates</h2>
          <p className="section-subtitle">
            Registered with the Indian Patent Office · {filteredPatents.length} of {patents.length} shown
          </p>

          <div className="patents-grid">
            {filteredPatents.map(patent => (
              <div key={patent.id} className="patent-card card">
                <div className="patent-card__top">
                  <span className="patent-card__number">#{patent.id.toString().padStart(2, '0')}</span>
                  <span className="badge badge-navy patent-card__status">{patent.status}</span>
                </div>
                <p className="patent-card__reg">{patent.regNo}</p>
                <h4 className="patent-card__title">{patent.title}</h4>
                <div className="patent-card__footer">
                  <span className="patent-card__office">🏛 {patent.office}</span>
                  <span className="patent-card__year">{patent.year}</span>
                </div>
                <div className="patent-card__tags">
                  {patent.tags.map(t => (
                    <span key={t} className="badge" style={{ fontSize: '0.7rem' }}>
                      {filterTags.find(f => f.id === t)?.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── UTILITY FILINGS ───────────────────────── */}
        <section className="section">
          <h2 className="section-title">Ongoing Utility Filings</h2>
          <p className="section-subtitle">Patent applications currently under review</p>

          <div className="filings-list">
            {filteredFilings.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', padding: '1rem 0' }}>
                No ongoing filings match the selected filter.
              </p>
            ) : (
              filteredFilings.map((filing, i) => (
                <div key={i} className="filing-item card">
                  <div className="filing-item__left">
                    <span className="badge badge-slate">{filing.type}</span>
                    <h4 className="filing-item__title">{filing.title}</h4>
                    <div className="filing-item__tags">
                      {filing.tags.map(t => (
                        <span key={t} className="badge" style={{ fontSize: '0.7rem' }}>
                          {filterTags.find(f => f.id === t)?.label}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="filing-item__year">{filing.year}</span>
                </div>
              ))
            )}
          </div>
        </section>

      </div>
    </div>
  )
}
