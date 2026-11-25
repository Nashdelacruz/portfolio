import { useState } from "react";
import hackLagunaImg from "../assets/hacklaguna.webp";
import itsoImg from "../assets/itso2026.webp";
import quizBeeImg from "../assets/ictquizbee.webp";
import leadershipTrainingImg from "../assets/leadershiptraining.webp";

const GALLERYDATA = [
  {
    id: 0,
    url: hackLagunaImg,
    title: "#HACKLAGUNA 2026",
    date: "November 14, 2026",
    place: "Binan, Laguna",
    description:
      "Bagged the championship place at #HackLaguna2026, representing the Team D or Alorika.",
  },
  {
    id: 1,
    url: itsoImg,
    date: "November 4, 2026",
    place: "University of Makati",
    title: "15th IT Skills Olympics",
    description:
      "Represented PUP San Pedro Campus and EXPLICIT for web design category at the 15th IT Skills Olympics held in the University of Makati (UMAK) last November 4, 2026. It uses HTML and CSS.",
  },
  { 
    id: 2,
    url: quizBeeImg,
    date: "October 29, 2026",
    place: "PUP-San Pedro",
    title: "ICT Quiz Bee",
    description:
      "Bagged 2nd placer for the ICT Quiz Bee under the Academics Category on Q4E 2026.",
  },
  {
    id: 3,
    url: leadershipTrainingImg,
    date: "March 7, 2026",
    place: "Liceo de San Pedro",
    title: "Leadership Training 2026",
    description: "Won the highest score on the team building, Amber.",
  },
];

function GalleryCard() {
  const [index, setIndex] = useState(0);
  let { id, url, title, date, place, description } = GALLERYDATA[index];
  return (
    <div className="gallery__card">
      <div className="gallery__img">
        <img src={url} alt={title} />
      </div>
      <div className="gallery__info">
        <div className="gallery__card_title">{title}</div>
        <div className="gallery__card_date label">
          {date} | {place}{" "}
        </div>
        <div className="gallery__card_desc">{description}</div>
      </div>
      <button
        className="gallery__button glassmorphism_button "
        onClick={() => setIndex((index + 1) % GALLERYDATA.length)}
      >
        Next
      </button>
    </div>
  );
}

export default function Gallery() {
  return (
    <section className="gallery normal">
      <div className="gallery__container">
        <div className="gallery__title">
          <h1>Gallery</h1>
        </div>
        {/* This is where gallery appears */}
        <GalleryCard />
      </div>
    </section>
  );
}
