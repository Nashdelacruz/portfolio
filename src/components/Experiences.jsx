function ExperienceCard({ period, title, organization }) {
  return (
    <div className="experience__card">
      <div className="exp__card_section">
        <div className="exp__card_img">{/* <img src="" alt="" /> */}</div>
      </div>
      <div className="exp__card_section">
        <p className="label">{period}</p>
        <div className="exp__card_title">
          <h2>{title}</h2>
        </div>
        <div className="exp__card_org">
          <p className="label">{organization}</p>
        </div>
        <div className="exp__card_desc" />
      </div>
    </div>
  );
}

export default function Experiences() {
  return (
    <section className="experience normal" id="experiences">
      <div className="experience__container">
        <div className="experience__title">
          <h1>Experiences</h1>
        </div>
        <div className="experience__card_container">
          {/* Experience Card */}
          <ExperienceCard
            period="2026-Present"
            title="Software Developer Cadet"
            organization="Google Developer Groups on Campus
Polytechnic University of the Philippines"
          />
          <ExperienceCard
            period="2026-present"
            title="OBS Operator"
            organization="MAIA - PUP San Pedro Campus"
          />
          <ExperienceCard
            period="2026-present"
            title="News Writer"
            organization="Campus Star - PUP San Pedro Campus"
          />
          <ExperienceCard
            period="2024-2026"
            title="News Writer"
            organization="The Cornerstone Ang Haligi - Liceo de San Pedro"
          />
          <ExperienceCard
            period="2023-2024"
            title="Club Secretary"
            organization="ICT Club - Liceo de San Pedro"
          />
        </div>
      </div>
    </section>
  );
}