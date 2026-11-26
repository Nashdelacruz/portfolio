function ProjectCards({ period, title, description, projectSrc }) {
  if (projectSrc) {
    return (
      <div className="projects__card">
        <div className="project__card_section">{/* Placeholder */}</div>
        <div className="project__card_section">
          <div className="project__card_label">
            <p className="label">{period}</p>
          </div>
          <div className="project__card_title">
            <h2>{title}</h2>
          </div>
          <div className="project__card_desc">
            <p>{description}</p>
          </div>

          <div className="project__card_link">
            <a href={projectSrc}>Project Link</a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="projects__card">
      <div className="project__card_section">{/* Placeholder */}</div>
      <div className="project__card_section">
        <div className="project__card_label">
          <p className="label">{period}</p>
        </div>
        <div className="project__card_title">
          <h2>{title}</h2>
        </div>
        <div className="project__card_desc">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects normal" id="projects">
      <div className="projects__container">
        <div className="projects__title">
          <h1>Projects</h1>
        </div>
        <div className="projects__card_container">
          <ProjectCards
            period="2026"
            title="ChurchSpace"
            description="Won first place at #HackLaguna 2026 held at Binan, Laguna. It focuses seven problems with three core features which are gamified social feeds, separate forms for prayer request, and more!"
            projectSrc="https://github.com/mang2mas/TeamD_Alorika_Churchspace-Parable"
          />
          <ProjectCards
            period="2026"
            title="IT Skills Olympics Promotional Website"
            description="Represented PUP San Pedro Campus and EXPLICIT for web design
                  category at the 15th IT Skills Olympics held in the University
                  of Makati (UMAK) last November 4, 2026. It uses HTML and CSS."
          />
          <ProjectCards
            period="2024"
            title="Galactic Binary"
            description="A cyberspace-themed game where players solve randomized binary
                  to decimal problems from 7 bits to most toughest 16 bits. It
                  uses C# and Unity Game Development."
          />
          <ProjectCards
            period="2024"
            title="Rolling Mathematics"
            description="This is my very first game published to the internet. It uses
                  C# and Unity Game Engine"
          />
          <ProjectCards
            period="2024"
            title="Mang Inasal Kiosk"
            description="My final activity for the ICT subject. Developed by Nash and
                  Francis. It uses Visual Basic."
          />
        </div>
      </div>
    </section>
  );
}
