import './Home.css'
import profilePic from '../assets/profile_picture.jpeg'
import cvFile from '../assets/cv.pdf'

const metrics = [
  { value: '27+', label: 'Years of Service'},
  { value: '10',  label: 'Granted Patents'},
  { value: '90+', label: 'Journal Papers'},
  { value: '11',  label: 'PhD Scholars'},
]

const education = [
  {
    degree: 'B.E. Mechanical Engineering',
    institution: 'PSG College of Technology, Coimbatore',
    university: 'Bharathiar University',
    year: '1995–1999',
  },
  {
    degree: 'M.E. Manufacturing Engineering',
    institution: 'Annamalai University',
    university: 'Annamalai University',
    year: '1999–2001',
    badge: 'Gold Medalist',
  },
  {
    degree: 'Ph.D. Mechanical Engineering',
    institution: 'Anna University, Chennai',
    university: 'Anna University',
    year: '2008–2014',
  },
]

const certifications = [
  {
    title: 'Chartered Engineer',
    body: 'Institution of Mechanical Engineers (IMechE), UK',
    abbr: 'CEng (IMechE)',
    color: 'badge-navy',
  },
  {
    title: 'NEBOSH Safety Certificate',
    body: 'National Examination Board in Occupational Safety and Health',
    abbr: 'NEBOSH',
    color: 'badge-slate',
  },
]

export default function Home() {
  return (
    <div className="home">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__photo-wrap">
            <div className="hero__photo">
              <img
                src={profilePic}
                alt="Dr. Sekar Tamilperuvalathan"
                className="hero__photo-img"
              />
            </div>
          </div>

          <div className="hero__content">
            <p className="hero__eyebrow">Associate Professor &amp; Head</p>
            <h1 className="hero__name">Dr. Sekar Tamilperuvalathan</h1>
            <p className="hero__dept">
              P.G-Manufacturing Engineering<br />
              Department of Mechanical Engineering
            </p>
            <p className="hero__inst">
              Government College of Technology (GCT), Coimbatore
            </p>

            <p className="hero__summary">
              A distinguished academic and researcher with <strong>27+ years of dedicated service</strong> under
              the Tamil Nadu Educational Services. Dr. Sekar has built an exceptional career at GCT
              Coimbatore, shaping generations of engineers through rigorous teaching, pioneering research
              in advanced manufacturing technologies, and committed institutional leadership.
            </p>

            <div className="hero__actions">
              <a href="/research" className="btn btn-primary">View Research</a>
              <a href={cvFile} download="Dr_Sekar_Tamilperuvalathan_CV.pdf" className="btn btn-accent">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS ──────────────────────────────────── */}
      <section className="section metrics-section">
        <div className="container">
          <div className="metrics-grid">
            {metrics.map(m => (
              <div key={m.label} className="metric-card">
                <span className="metric-icon">{m.icon}</span>
                <span className="metric-value">{m.value}</span>
                <span className="metric-label">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────── */}
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-text">
            <h2 className="section-title">About</h2>
            <p className="section-subtitle">A career of academic excellence and national impact</p>
            <p>
              Dr. Sekar Tamilperuvalathan has been a cornerstone of the Mechanical Engineering
              Department at <strong>Government College of Technology (GCT), Coimbatore</strong> — one
              of Tamil Nadu's most prestigious autonomous engineering institutions. His tenure spans
              over two decades of contribution to teaching, research, and academic governance.
            </p>
            <p style={{ marginTop: '1rem' }}>
              His research portfolio includes <strong>10 Granted Design Registration Certificates</strong> from
              the Indian Patent Office, a funded R&amp;D project under TEQIP-III, and authorship of
              <strong> 4 books</strong> in addition to 90+ peer-reviewed journal publications indexed
              in Scopus and Web of Science. He has successfully guided <strong>6 PhD scholars</strong> to
              completion and is currently mentoring 5 more.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Beyond the laboratory, Dr. Sekar has played a pivotal administrative role — serving as
              GCT's <strong>Officer-in-Charge for Examinations</strong>, IPR Coordinator, and a key
              contributor to the Department of Technical Education (DoTE), Chennai, in implementing the
              <strong> 7.5% school-topper reservation</strong> and first-generation graduate waiver
              policies across Tamil Nadu.
            </p>
          </div>

          {/* Certifications */}
          <div className="cert-list">
            <h3 className="cert-list__heading">Professional Certifications</h3>
            {certifications.map(c => (
              <div key={c.abbr} className="cert-card card">
                <div className="cert-card__abbr">{c.abbr}</div>
                <div>
                  <p className="cert-card__title">{c.title}</p>
                  <p className="cert-card__body">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION TIMELINE ───────────────────────── */}
      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic foundations that shaped a distinguished career</p>

          <div className="timeline">
            {education.map((edu, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__content card">
                  <div className="timeline__year">{edu.year}</div>
                  <h3 className="timeline__degree">{edu.degree}</h3>
                  <p className="timeline__inst">{edu.institution}</p>
                  <p className="timeline__univ">{edu.university}</p>
                  {edu.badge && (
                    <span className="badge badge-gold" style={{ marginTop: '0.6rem' }}>
                      {edu.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
