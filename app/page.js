import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RevealSection from "@/components/RevealSection";

/* ── DATA ── */
const skills = [
  { cat: "Frontend", tags: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Next.js"] },
  { cat: "Mobile & CMS", tags: ["Flutter", "WordPress", "Shopify"] },
  { cat: "Backend", tags: ["Python", "Django", "Flask", "SQL"] },
  { cat: "Tools & Design", tags: ["Git", "GitHub", "VS Code", "Figma"] },
  { cat: "Strengths", tags: ["Rapid Prototyping", "API Integration", "Problem Solving"] },
];

const projects = [
  {
    icon: "⚡",
    name: "Quantzi.co",
    desc: "Upgraded from no-code to Next.js for dramatically better speed and SEO performance.",
    link: "https://quantzi.co",
  },
  {
    icon: "🔧",
    name: "overlook-mechancal.com",
    desc: "Pure HTML/CSS build with requirements gathered and implemented directly from client.",
    link: "https://overlook-mechancal.com",
  },
  {
    icon: "🏥",
    name:"Complete Care – Cleaning Service (Dubai)",
    desc:"Developed a clean, responsive website for a Dubai-based cleaning service",
    link:"https://completecare.ae"
  },
  {
    icon: "🏠",
    name: "XateHaus.com",
    desc: "Custom WordPress site built end-to-end — layout, responsiveness, and full client vision.",
    link: "https://xatehaus.com",
  },
  {
    icon: "🏥",
    name: "AthiniHospital.com",
    desc: "Healthcare clinic website with responsive design and clear service accessibility.",
    link: "https://athinihospital.com",
  },
  {
    icon: "📱",
    name: "Digitalroot Game UI",
    desc: "Cross-platform mobile app interfaces built with Flutter for a gaming application.",
    link: null,
  },
];

const education = [
  { degree: "MA – Public Administration", school: "Bharathidasan University", year: "2022–24" },
  { degree: "BA – Public Administration", school: "Sri Chaitanya Degree College", year: "2019–22" },
  { degree: "Python Full Stack Development", school: "QSpiders, Chrompet", year: "2023–24" },
];

const languages = ["English", "Telugu", "Tamil", "Malayalam", "Hindi"];

/* ── PAGE ── */
export default function Home() {
  return (
    <div className="portfolio">
      {/* NAV */}
      <Nav />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section id="about">
        <RevealSection>
          <div className="section-label">01 / About</div>
          <h2 className="section-title">
            Who I <em>Am</em>
          </h2>
          <div className="about-grid">
            <p className="about-text">
              I&apos;m a <strong>practical-driven Full Stack Developer</strong> with a Master&apos;s
              degree and hands-on expertise in building real-world web and mobile solutions. I work
              independently from idea to deployment — handling everything from{" "}
              <strong>UI design</strong> to <strong>backend logic</strong>.
              <br />
              <br />
              Whether it&apos;s a custom WordPress site, a high-performance Next.js app, or a
              cross-platform Flutter interface — I build it clean, fast, and with purpose.
            </p>
            <div className="stats-grid">
              {[
                { num: "5+", label: "Projects Shipped" },
                { num: "8mo", label: "Internship @ Quantzi" },
                { num: "5", label: "Languages Spoken" },
                { num: "1", label: "Cert — WordPress 2026" },
              ].map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <RevealSection>
          <div className="section-label">02 / Skills</div>
          <h2 className="section-title">
            What I <em>Build With</em>
          </h2>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.cat} className="skill-category">
                <div className="skill-cat-title">{s.cat}</div>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="skill-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <RevealSection>
          <div className="section-label">03 / Experience</div>
          <h2 className="section-title">
            Where I&apos;ve <em>Worked</em>
          </h2>
          <div className="exp-card">
            <div className="exp-header">
              <div>
                <div className="exp-role">Frontend Developer Intern</div>
                <div className="exp-company">Quantzi Infotech</div>
              </div>
              <span className="exp-date">Nov 2024 – Jul 2025</span>
            </div>
            <ul className="exp-list">
              <li>
                Independently developed and deployed end-to-end websites using React.js and Next.js
                with mobile responsiveness and high performance.
              </li>
              <li>Built cross-platform mobile application interfaces using Flutter.</li>
              <li>
                Customized and managed e-commerce solutions using Shopify and WordPress for various
                clients.
              </li>
              <li>
                Translated design wireframes into high-quality code, focusing on user experience and
                clean UI.
              </li>
            </ul>
          </div>
        </RevealSection>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <RevealSection>
          <div className="section-label">04 / Projects</div>
          <h2 className="section-title">
            Things I&apos;ve <em>Built</em>
          </h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.name} className="project-card">
                <div className="project-icon">{p.icon}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    ↗ {p.link.replace("https://", "")}
                  </a>
                )}
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <RevealSection>
          <div className="section-label">05 / Education</div>
          <h2 className="section-title">
            My <em>Background</em>
          </h2>
          <div className="edu-grid">
            {education.map((e) => (
              <div key={e.degree} className="edu-card">
                <div>
                  <div className="edu-degree">{e.degree}</div>
                  <div className="edu-school">{e.school}</div>
                </div>
                <span className="edu-year">{e.year}</span>
              </div>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* LANGUAGES */}
      <section>
        <RevealSection>
          <div className="section-label">06 / Languages</div>
          <h2 className="section-title">
            I <em>Speak</em>
          </h2>
          <div className="lang-chips">
            {languages.map((l) => (
              <span key={l} className="lang-chip">
                {l}
              </span>
            ))}
          </div>
        </RevealSection>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <RevealSection>
          <div className="section-label">07 / Contact</div>
          <h2 className="section-title">
            Let&apos;s <em>Connect</em>
          </h2>
          <div className="contact-box">
            <p className="contact-sub">
              Open to full-time roles, freelance projects, and collaborations.
            </p>
            <div className="contact-email">sreekumaar4622@gmail.com</div>
            <div className="contact-links">
              <a href="tel:8870457910" className="btn btn-primary">
                📞 8870457910
              </a>
              <a href="mailto:sreekumaar4622@gmail.com" className="btn btn-outline">
                ✉ Send Email
              </a>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* FOOTER */}
      <footer>
        <p>Designed &amp; built with care · Sree Kumaar © 2025</p>
      </footer>
    </div>
  );
}
