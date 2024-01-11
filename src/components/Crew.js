import React, { useState } from "react";
import ShuttleworthImage from '../img/image-mark-shuttleworth.png';
import CrewImage from '../img/image-douglas-hurley.png';
import VictorGlover from '../img/image-victor-glover.png';
import AnoushehAnsari from '../img/image-anousheh-ansari.png'

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
        Crew Dragon Demo-2.<br />
        <span>&nbsp;</span><br />
      </>
    ),
  };

  const [selectedCrew, setSelectedCrew] = useState(initialCrewState); 

  const handleButtonClick1 = () => {

    const button0 = document.getElementById("botao0");
    const button1 = document.getElementById("botao1");
    const button2 = document.getElementById("botao2");
    const button3 = document.getElementById("botao3");

    button0.classList.remove(styles.botaoCrewClick);
    button0.classList.add(styles.botaoCrew);    

    button1.classList.remove(styles.botaoCrew);
    button1.classList.add(styles.botaoCrewClick);

    button2.classList.remove(styles.botaoCrewClick);
    button2.classList.add(styles.botaoCrew);

    button3.classList.remove(styles.botaoCrewClick);
    button3.classList.add(styles.botaoCrew);


    setSelectedCrew({
      
      image: ShuttleworthImage,
      title: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      text: (
        <>
          Mark Richard Shuttleworth is the founder and CEO of<br/>
          Canonical, the company behind the Linux-based Ubuntu<br/>
          operating system. Shuttleworth became the first South<br/>
          African to travel to space as a space tourist.<br />
          <span>&nbsp;</span><br />          
        </>
      ),
    });
  };

  const handleButtonClick2 = () => {
    const button0 = document.getElementById("botao0");
    const button1 = document.getElementById("botao1");
    const button2 = document.getElementById("botao2");
    const button3 = document.getElementById("botao3");
    

    button0.classList.remove(styles.botaoCrewClick);
    button0.classList.add(styles.botaoCrew);

    button1.classList.remove(styles.botaoCrewClick);
    button1.classList.add(styles.botaoCrew);

    button2.classList.remove(styles.botaoCrew);
    button2.classList.add(styles.botaoCrewClick);

    button3.classList.remove(styles.botaoCrewClick);
    button3.classList.add(styles.botaoCrew);

    setSelectedCrew({
        image: VictorGlover,
        title: "PILOT",
        name: "VICTOR GLOVER",
        text: (
            <>
                Pilot on the first operational flight of the SpaceX Crew<br/>
                Dragon to the International Space Station. Glover is a<br/>
                commander in the U.S. Navy where he pilots an F/A-18.He<br/>
                was a crew member of Expedition 64, and served as a<br/>
                station systems flight engineer.
            </>
        ),
    });
  };



  const handleButtonClick3 = () => {
    const button0 = document.getElementById("botao0");
    const button1 = document.getElementById("botao1");
    const button2 = document.getElementById("botao2");
    const button3 = document.getElementById("botao3");
    

    button0.classList.remove(styles.botaoCrewClick);
    button0.classList.add(styles.botaoCrew);

    button1.classList.remove(styles.botaoCrewClick);
    button1.classList.add(styles.botaoCrew);

    button2.classList.remove(styles.botaoCrewClick);
    button2.classList.add(styles.botaoCrew);

    button3.classList.remove(styles.botaoCrew);
    button3.classList.add(styles.botaoCrewClick);

    setSelectedCrew({
        image: AnoushehAnsari,
        title: "FLIGHT ENGINEER",
        name: "ANOUSHEH ANSARI",
        text: (
            <>
                Anousheh Ansari is an Iranian American engineer and<br/>
                co-founder of Prodea Systems. Ansari was the fourth<br/>
                self-funded space tourist, the first self-funded woman to<br/>
                fly to the ISS, and the first Iranian in space.<br/>
                <span>&nbsp;</span><br />
            </>
        ),
    });
  };






  const handleBackToInitialClick = () => {

    const button0 = document.getElementById("botao0");
    const button1 = document.getElementById("botao1");
    const button2 = document.getElementById("botao2");

    button0.classList.remove(styles.botaoCrew);
    button0.classList.add(styles.botaoCrewClick);

    button1.classList.remove(styles.botaoCrewClick);
    button1.classList.add(styles.botaoCrew);

    button2.classList.remove(styles.botaoCrewClick);
    button2.classList.add(styles.botaoCrew);


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
            <button className={styles.botaoCrewClick} id="botao0" onClick={handleBackToInitialClick}></button>
            <button className={styles.botaoCrew} id="botao1" onClick={handleButtonClick1}></button>
            <button className={styles.botaoCrew} id="botao2" onClick={handleButtonClick2}></button>
            <button className={styles.botaoCrew} id="botao3" onClick={handleButtonClick3}></button>
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