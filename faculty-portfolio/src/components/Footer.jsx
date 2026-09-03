import './Footer.css'
import cvFile from '../assets/cv.pdf'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Identity */}
        <div className="footer__col footer__identity">
          <div className="footer__logo">ST</div>
          <div>
            <p className="footer__full-name">Dr. Sekar Tamilperuvalathan</p>
            <p className="footer__role">Associate Professor &amp; Head</p>
            <p className="footer__dept">P.G-Manufacturing Engineering</p>
            <p className="footer__inst">Government College of Technology, Coimbatore</p>
          </div>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__list">
            <li>
              <a href="mailto:drtsekar76@gct.ac.in" className="footer__link">
                ✉ drtsekar76@gct.ac.in
              </a>
            </li>
            <li>
              <a href="mailto:tsekargct@gmail.com" className="footer__link">
                ✉ tsekargct@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sekar-t-27a707116/"
                target="_blank"
                rel="noreferrer"
                className="footer__link"
              >
                🔗 LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__list">
            <li><a href="/" className="footer__link">Home</a></li>
            <li><a href="/research" className="footer__link">Research</a></li>
            <li><a href="/publications" className="footer__link">Publications</a></li>
            <li><a href="/experience" className="footer__link">Experience</a></li>
          </ul>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {year} Dr. Sekar Tamilperuvalathan · Government College of Technology, Coimbatore</span>
        </div>
      </div>
    </footer>
  )
}
