"use client";

export default function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="nav-logo">SK.dev</div>
      <div className="nav-links">
        {["about", "skills", "experience", "projects", "contact"].map((id) => (
          <a key={id} onClick={() => scrollTo(id)}>
            {id}
          </a>
        ))}
      </div>
    </nav>
  );
}
