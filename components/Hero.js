"use client";

const badgeTags = ["React.js", "Next.js", "Flutter", "WordPress", "Shopify", "Python"];

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="hero-content">
        <div className="hero-tag">Available for opportunities</div>
        <h1 className="hero-name">
          Sree
          <br />
          <span>Kumaar</span>
        </h1>
        <p className="hero-title">Full Stack Developer</p>
        <div className="hero-badges">
          {badgeTags.map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={() => scrollTo("projects")}>
            View Projects
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo("contact")}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}
