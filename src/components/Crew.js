import React, { useState } from "react";
import ShuttleworthImage from '../img/image-mark-shuttleworth.png';
import CrewImage from '../img/image-douglas-hurley.png';
import styles from "../components/modules/Crew.module.css";

export default function Crew() {
  const initialCrewState = {
    image: CrewImage,
    title: "COMMANDER",
    name: "DOUGLAS HURLEY",
    text: (
      <>
        Douglas Gerald Hurley is an American engineer, former Marine<br />
        Corps pilot and former NASA astronaut. He<br />
        launched into space for the third time as commander of<br />
        Crew Dragon Demo-2.
      </>
    ),
  };

  const [selectedCrew, setSelectedCrew] = useState(initialCrewState);

  const handleButtonClick = () => {
    setSelectedCrew({
      image: ShuttleworthImage,
      title: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      text: (
        <>
          Mark Richard Shuttleworth is the founder and CEO of<br />
          Canonical, the company behind the Linux-based Ubuntu<br />
          operating system. Shuttleworth became the first South<br />
          African to travel to space as a space tourist.
        </>
      ),
    });
  };

  const handleBackToDouglasClick = () => {
    setSelectedCrew(initialCrewState);
  };

  return (
    <main id="main" className={styles.main}>
      <div className={styles.alinhaCrew0}>
        <div className={styles.aliCrew}>
          <div className={styles.alinhaCrew1}>
            <div className={styles.tituloCrew0}>02</div>
            <div></div>
            <div className={styles.nomeCrew0}>MEET YOUR CREW</div>
          </div>
          <div className={styles.centroCrew}>
            <div className={styles.tituloCrew}>{selectedCrew.title}</div>
            <div className={styles.nomeCrew}>{selectedCrew.name}</div>
          </div>
          <div className={styles.textCrew}>
            <div>{selectedCrew.text}</div>
            <div></div>
          </div>
          <div className={styles.conjuntoBotao}>
            <button className={styles.botaoCrewClick} id="botao0" onClick={handleBackToDouglasClick}></button>
            <button className={styles.botaoCrew} id="botao1" onClick={handleButtonClick}></button>
            <button className={styles.botaoCrew} id="botao2"></button>
            <button className={styles.botaoCrew} id="botao3"></button>
          </div>
        </div>
        <div className={styles.espacoCrew}></div>
        <div>
          <img id="destino" className={styles.imagemCrew0} src={selectedCrew.image} alt="Crew Image" />
        </div>
      </div>
    </main>
  );
}