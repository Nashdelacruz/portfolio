import myselfImg from "./assets/delacruz.webp";
import "./App.css";

function Header() {
  return (
    <header className="header normal">
      <div className="header__container">
        <div className="header__container_logo">
          <a href="#" className="header__logo">
            <img src={myselfImg} alt="logo" className="header__img" />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__item">
              <a href="#about">About</a>
            </li>
            <li className="header__item">
              <a href="#experiences">Experiences</a>
            </li>
            <li className="header__item">
              <a href="#projects">Projects</a>
            </li>
            <li className="header__item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <main className="hero normal">
      <div className="hero__container">
        <div className="hero__introduction">
          <p className="label">Hello! I'm</p>
          <h1 className="glassmorphism_text centered_mobile">
            Nash Alexander Dela Cruz
          </h1>
          <p className="label uppercase glassmorphism_label label_enclosed label_red">
            Student Web Developer
          </p>
          <p className="label uppercase glassmorphism_label label_enclosed label_blue">
            News Writer
          </p>
          <p className="label uppercase glassmorphism_label label_enclosed label_green">
            Multimedia
          </p>
        </div>
        <div className="hero__myself">
          <div className="hero__myselfCircle">
            <div className="hero__mySelfImg">
              <img src={myselfImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function AboutMe() {
  return (
    <section className="about normal" id="about">
      <div className="about__container glassmorphism">
        <div className="about__title">
          <h1>About Me</h1>
        </div>
        <div className="about__introduction">
          <p>
            I'm Nash Alexander Dela Cruz, an Information Technology student who
            loves web programming, enjoying writing news articles, and have
            strong interest in multimedia.
          </p>
          <p>
            It all started with my strong interest in computers and technology
            when I was a kid, but one high school subject changed how I
            perceived the world of IT, and I ended up loving programming three
            years ago.
          </p>
          <p>
            I have a passion for creating websites and game development and a
            strong interest in learning mobile development in the future, for
            which I have already published two games on a gaming platform, Y8,
            under my studio name, HorizoClipse.
          </p>
        </div>
      </div>
    </section>
  );
}

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

function Experiences() {
  return (
    <section className="experience normal" id="experiences">
      <div className="experience__container">
        <div className="experience__title">
          <h1>Experiences</h1>
        </div>
        <div className="experience__card_container">
          {/* Experience Card */}
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

function ProjectCards({ period, title, description }) {
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

function Projects() {
  return (
    <section className="projects normal" id="projects">
      <div className="projects__container">
        <div className="projects__title">
          <h1>Projects</h1>
        </div>
        <div className="projects__card_container">
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

function ContactList() {
  const contacts = [
    { id: 1, website: "GitHub", link: "https://github.com/Nashdelacruz" },
    {
      id: 2,
      website: "X",
      link: "https://x.com/NashDelacruzYT",
    },
    {
      id: 3,
      website: "LinkedIn",
      link: "https://linkedin.com/in/nash-dela-cruz-875618449",
    },
    {
      id: 4,
      website: "Facebook",
      link: "https://www.facebook.com/jane.baccay.169",
    },
    {
      id: 5,
      website: "Email",
      link: "mailto:nashalexanderdelacruz@gmail.com",
    },
  ];

  return (
    <ul>
      {contacts.map((contacts) => (
        <li key={contacts.id}>
          <a
            href={contacts.link}
            target="_blank"
            rel="noopener noreferrer"
            className="glassmorphism_button"
          >
            {contacts.website}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Contacts() {
  return (
    <section className="contact normal" id="contact">
      <div className="contact__container">
        <div className="contact__title">
          <h1>Touch with us!</h1>
        </div>
        <div className="contact__content">
          <p>
            Have your questions and want to connect? While I'm not taking on
            clients right now since I'm busy on mastering MERN stack, feel free
            to reach out via my X or Facebook profile!
          </p>
        </div>
        <div className="contact__links">
          <ContactList />
        </div>
        {/* <div className="contact__time">
          <p className="label centered bold">Philippine Standard Time (PHT)</p>
          <p id={clock} className="centered">
            Thursday, January 01, 1970 at 12:00:00 AM
          </p>
        </div> */}
      </div>
    </section>
  );
}

// App.jsx

export default function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta
        name="description"
        content="This is my portfolio website about myself, memorable experiences, and ambitious projects displayed in the page. It includes my social links in contact section."
      />
      <title>Nash Dela Cruz | Student Web Developer</title>
      <div className="body__container">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <Hero />
        <AboutMe />
        {/* Experiences */}
        <Experiences />
        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contacts />
      </div>
    </>
  );
}
