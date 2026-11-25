import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/About.jsx";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Gallery from "./components/Gallery.jsx";
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
        {/* Galleries */}
        <Gallery />
        {/* Contact */}
        <Contacts />
      </div>
    </>
  );
}
