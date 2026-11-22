import myselfImg from "../assets/delacruz.webp";

export default function Header() {
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
