import './Experience.css'

const phdScholars = {
  graduated: [
    {
      name: 'Scholar 1',
      topic: 'Machinability Studies on Hybrid Metal Matrix Composites',
      university: 'Anna University',
      year: '2018',
    },
    {
      name: 'Scholar 2',
      topic: 'Optimisation of EDM Parameters for Titanium Alloys',
      university: 'Anna University',
      year: '2019',
    },
    {
      name: 'Scholar 3',
      topic: 'Surface Modification of Bio-Ceramics for Implant Applications',
      university: 'Anna University',
      year: '2020',
    },
    {
      name: 'Scholar 4',
      topic: 'Development of Polymer Nanocomposites for Structural Applications',
      university: 'Anna University',
      year: '2021',
    },
    {
      name: 'Scholar 5',
      topic: 'Additive Manufacturing of Functionally Graded Materials',
      university: 'Anna University',
      year: '2022',
    },
    {
      name: 'Scholar 6',
      topic: 'Electrochemical Micromachining of Stainless Steel Components',
      university: 'Anna University',
      year: '2023',
    },
  ],
  guiding: [
    {
      name: 'Scholar 7',
      topic: 'ECDM Process Optimisation for Bio-Ceramic Machining',
      university: 'Anna University',
      status: 'Ongoing',
    },
    {
      name: 'Scholar 8',
      topic: '3D Printed Bio-Polymer Scaffolds for Bone Tissue Engineering',
      university: 'Anna University',
      status: 'Ongoing',
    },
    {
      name: 'Scholar 9',
      topic: 'Wear and Tribological Properties of Hybrid Composites',
      university: 'Anna University',
      status: 'Ongoing',
    },
    {
      name: 'Scholar 10',
      topic: 'Smart Manufacturing Using IoT-Enabled CNC Systems',
      university: 'Anna University',
      status: 'Ongoing',
    },
    {
      name: 'Scholar 11',
      topic: 'Sustainable Machining of Inconel Superalloys',
      university: 'Anna University',
      status: 'Ongoing',
    },
  ],
}

const adminRoles = [
  {
    title: 'Officer-in-Charge — Examinations',
    org: 'Government College of Technology, Coimbatore',
    scope: 'Institutional',
    desc: 'Oversaw the complete examination administration for all UG and PG programmes at GCT, coordinating scheduling, invigilation, and results processing across departments.',
  },
  {
    title: 'IPR Coordinator',
    org: 'Government College of Technology, Coimbatore',
    scope: 'Institutional',
    desc: 'Manages all Intellectual Property Rights activities at GCT — guiding faculty and students through patent filing, design registration, and copyright processes with the Indian Patent Office.',
  },
  {
    title: '7.5% School-Topper Reservation Scheme',
    org: 'Department of Technical Education (DoTE), Chennai',
    scope: 'State-Level',
    desc: 'Key coordinator in implementing Tamil Nadu\'s landmark 7.5% horizontal reservation policy for government school students in state engineering colleges — expanding access to quality technical education for rural and first-generation students.',
  },
  {
    title: 'First-Generation Graduate Waiver Scheme',
    org: 'Department of Technical Education (DoTE), Chennai',
    scope: 'State-Level',
    desc: 'Contributed to designing and rolling out fee waiver eligibility criteria and processes for first-generation graduates pursuing technical education under DoTE, directly benefiting thousands of students across Tamil Nadu.',
  },
]

const pgUgProjects = [
  { category: 'M.E. Projects Supervised',    count: 30},
  { category: 'B.E. Final Year Projects',     count: 45},
  { category: 'Industry-Collaborative Works', count: 10},
  { category: 'Inter-Disciplinary Projects',  count: 5},
  { category: 'Funded Student Projects',       count: 3},
]

const teachingStats = [
  { label: 'Years of Teaching',     value: '27+'},
  { label: 'PhD Scholars Guided',   value: '11'},
  { label: 'PG/UG Projects',        value: '75+'},
  { label: 'Courses Taught',        value: '20+'},
]

const subjects = [
  'Manufacturing Technology I & II',
  'Metrology & Measurements',
  'Computer Aided Manufacturing (CAM)',
  'Unconventional Machining Processes',
  'Metal Forming & Welding Technology',
  'Production Planning & Control',
  'Advanced Manufacturing Systems',
  'Bio-Medical Manufacturing',
  'Quality Engineering & TQM',
  'Operations Research',
]

export default function Experience() {
  return (
    <div className="experience-page">

      {/* ── PAGE HEADER ─────────────────────────── */}
      <div className="page-header">
        <div className="container">
          <p className="page-header__eyebrow">Teaching · Mentorship · Governance</p>
          <h1 className="page-header__title">Experience</h1>
          <p className="page-header__sub">
            27+ Years at GCT Coimbatore · State-Level Policy Contributor · Tamil Nadu Educational Services
          </p>
        </div>
      </div>

      <div className="container">

        {/* ── TEACHING STATS ──────────────────────── */}
        <section className="section">
          <div className="exp-stats-grid">
            {teachingStats.map(s => (
              <div key={s.label} className="exp-stat-card card">
                <span className="exp-stat-icon">{s.icon}</span>
                <span className="exp-stat-value">{s.value}</span>
                <span className="exp-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── PhD GUIDANCE ────────────────────────── */}
        <section className="section" style={{ paddingTop: '0' }}>
          <h2 className="section-title">PhD Research Guidance</h2>
          <p className="section-subtitle">6 Graduated · 5 Currently Guiding · Anna University</p>

          <div className="phd-columns">
            {/* Graduated */}
            <div className="phd-col">
              <div className="phd-col__header phd-col__header--graduated">
                <span className="phd-col__count">6</span>
                <div>
                  <h3 className="phd-col__title">Graduated Scholars</h3>
                  <p className="phd-col__sub">Successfully Awarded PhD</p>
                </div>
              </div>
              <div className="phd-list">
                {phdScholars.graduated.map((s, i) => (
                  <div key={i} className="phd-item card">
                    <div className="phd-item__num">{i + 1}</div>
                    <div className="phd-item__body">
                      <p className="phd-item__topic">{s.topic}</p>
                      <div className="phd-item__meta">
                        <span>{s.university}</span>
                        <span className="badge badge-navy">{s.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guiding */}
            <div className="phd-col">
              <div className="phd-col__header phd-col__header--guiding">
                <span className="phd-col__count">5</span>
                <div>
                  <h3 className="phd-col__title">Scholars Under Guidance</h3>
                  <p className="phd-col__sub">Currently Enrolled & Active</p>
                </div>
              </div>
              <div className="phd-list">
                {phdScholars.guiding.map((s, i) => (
                  <div key={i} className="phd-item card">
                    <div className="phd-item__num">{i + 7}</div>
                    <div className="phd-item__body">
                      <p className="phd-item__topic">{s.topic}</p>
                      <div className="phd-item__meta">
                        <span>{s.university}</span>
                        <span className="badge badge-slate">{s.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PG/UG PROJECTS ──────────────────────── */}
        <section className="section">
          <h2 className="section-title">PG / UG Project Supervision</h2>
          <p className="section-subtitle">75+ Projects Supervised across M.E. and B.E. programmes</p>

          <div className="projects-bar-list">
            {pgUgProjects.map((p, i) => {
              const pct = Math.round((p.count / 45) * 100)
              return (
                <div key={i} className="project-bar-item">
                  <div className="project-bar-item__header">
                    <span className="project-bar-item__icon">{p.icon}</span>
                    <span className="project-bar-item__label">{p.category}</span>
                    <span className="project-bar-item__count">{p.count}</span>
                  </div>
                  <div className="project-bar-item__track">
                    <div
                      className="project-bar-item__fill"
                      style={{ width: `${Math.min(pct, 100)}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── ADMINISTRATIVE ROLES ─────────────────── */}
        <section className="section">
          <h2 className="section-title">Administrative &amp; Governance Roles</h2>
          <p className="section-subtitle">Institutional leadership and state-level policy contributions</p>

          <div className="admin-grid">
            {adminRoles.map((role, i) => (
              <div key={i} className="admin-card card">
                <div className="admin-card__top">
                  <span className="admin-card__icon">{role.icon}</span>
                  <span className={`badge ${role.scope === 'State-Level' ? 'badge-gold' : 'badge-navy'}`}>
                    {role.scope}
                  </span>
                </div>
                <h3 className="admin-card__title">{role.title}</h3>
                <p className="admin-card__org">🏛 {role.org}</p>
                <p className="admin-card__desc">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── SUBJECTS TAUGHT ─────────────────────── */}
        <section className="section">
          <h2 className="section-title">Subjects Taught</h2>
          <p className="section-subtitle">Core courses delivered across UG and PG programmes</p>

          <div className="subjects-grid">
            {subjects.map((subj, i) => (
              <div key={i} className="subject-chip">
                <span className="subject-chip__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="subject-chip__name">{subj}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
