import myselfImg from "../assets/delacruz.webp";

export default function Hero() {
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