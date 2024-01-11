import React, { Component } from "react";
import Mars from '../img/image-mars.png';
import styles from "../components/modules/Destination.module.css";
import InitialDestinationImage from '../img/image-moon.png';
import Europa from '../img/image-europa.png'

export default class Destination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: {
        e: "visible",
        f: "hidden",
        g: "hidden",
        h: "hidden",
      },
      animation: {
        opacity: 1,
        animation: "",
      },
      selectedDestination: {
        image: InitialDestinationImage,
        destination: "MOON",
        travel: '3 DAYS',
        dist: '384,400 KM',
        text1: (
          <>
            See our planet as you've never seen it before. A perfect
          </>
        ),
        text2: (
          <>
            relaxing trip away to help regain perspective and come
          </>
        ),
        text3: (
          <>
            back refreshed. While you're there, take in some history
          </>
        ),
        text4: (
          <>
            by visiting the Luna 2 and Apollo 11 landing sites.
          </>
        )
      },
    };
    
  }

  handleBackToInitialClick = () => {
    this.setState({
      visibility: {
        e: "visible",
        f: "hidden",
        g: "hidden",
        h: "hidden",
      },
      animation: {
        opacity: 1,
        animation: "fadeIn 2s linear",
      },
      selectedDestination: {
        image: InitialDestinationImage,
        destination: "MOON",
        travel: '3 DAYS',
        dist: '384,400 KM',
        text1: (
          <>
            See our planet as you've never seen it before. A perfect
          </>
        ),
        text2: (
          <>
            relaxing trip away to help regain perspective and come
          </>
        ),
        text3: (
          <>
            back refreshed. While you're there, take in some history
          </>
        ),
        text4: (
          <>
            by visiting the Luna 2 and Apollo 11 landing sites.
          </>
        )
      }
    });
    this.insertAnimationKeyframes("fadeIn");
  };

  handleButtonClick1 = () => {
    const { visibility } = this.state;

    this.setState({
      visibility: {
        e: "hidden",
        f: "visible",
        g: "hidden",
        h: "hidden",
      },
      animation: {
        opacity: 1,
        animation: "fadeIn 2s linear",
      },
      selectedDestination: {
        image: Mars,
        destination: "MARS",
        travel: '9 MONTHS',
        dist: '225 MIL. KM',
        text1: (
          <>
            Don't forget to pack your hiking boots. You'll need them to
          </>
        ),
        text2: (
          <>
            tackle Olympus Mons, the tallest planetary mountain in
          </>
        ),
        text3: (
          <>
            our solar system. It's two and a half times the size of
          </>
        ),
        text4: (
          <>
            Everest!
          </>
        ),
      },
    });

    this.insertAnimationKeyframes("fadeIn");
  };


  handleButtonClick2 = () => {
    const { visibility } = this.state;

    this.setState({
      visibility: {
        e: "hidden",
        f: "hidden",
        g: "visible",
        h: "hidden",
      },
      animation: {
        opacity: 1,
        animation: "fadeIn 2s linear",
      },
      selectedDestination: {
        image: Europa,
        destination: "EUROPA",
        travel: '3 YEARS',
        dist: '628 MIL. KM',
        text1: (
          <>
            The smallest of the four Galilean moons orbiting Jupiter,
          </>
        ),
        text2: (
          <>
            Europa is a winter lover's dream. With an icy surface, it's
          </>
        ),
        text3: (
          <>
            perfect for a bit of ice skating, curling, hockey, or simple
          </>
        ),
        text4: (
          <>
            relaxation in your snug wintery cabin.
          </>
        ),
      },
    });

    this.insertAnimationKeyframes("fadeIn");
  };

  handleButtonClick3 = () => {
    const { visibility } = this.state;

    this.setState({
      visibility: {
        e: "hidden",
        f: "hidden",
        g: "hidden",
        h: "visible",
      },
      animation: {
        opacity: 1,
        animation: "fadeIn 2s linear",
      },
      selectedDestination: {
        image: Europa,
        destination: "TITAN",
        travel: '7 YEARS',
        dist: '1.6 BIL. KM',
        text1: (
          <>
            The only moon known to have a dense atmosphere other
          </>
        ),
        text2: (
          <>
            than Earth, Titan is a home away from home (just a few
          </>
        ),
        text3: (
          <>
            hundred degrees colder!). As a bonus, you get striking
          </>
        ),
        text4: (
          <>
            views of the Rings of Saturn.
          </>
        ),
      },
    });

    this.insertAnimationKeyframes("fadeIn");
  };


  insertAnimationKeyframes = (keyframeName) => { // tentar entender esse metodo aqui.
    const { animation } = this.state;
    const animationCount = animation.animation ? animation.animationCount + 1 : 1;
    const dynamicKeyframeName = `${keyframeName}${animationCount}`;

    this.setState({
      animation: {
        opacity: 1,
        animation: `${dynamicKeyframeName} 2s linear`,
        animationCount: animationCount,
      },
    }); 

    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes ${dynamicKeyframeName} {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `, styleSheet.cssRules.length);
  };

  render() {
    const { selectedDestination, visibility, animation } = this.state;

    return (
      <div className={styles.alinha}>
        <div className={styles.linha}>
          <div className={styles.tituloDest}>
            <div className={styles.num}>01</div>
            <div className={styles.letr}>PICK YOUR DESTINATION</div>
          </div>
          <img id="image" src={selectedDestination.image} className={styles.imagem0} style={{ opacity: animation.opacity, animation: animation.animation }} alt="Destination" />
        </div>

        <div className={styles.alin2}>
          <div className={styles.al}>
            <div id={styles.barra4} onClick={this.handleBackToInitialClick}>
              <div className={styles.letra0}>MOON</div>
              <div id={styles.e} className={styles.subBarra0} style={{ visibility: visibility.e }}></div>
            </div>
            <div id={styles.barra5} onClick={this.handleButtonClick1}>
              <div className={styles.letra0}>MARS</div>
              <div id={styles.f} className={styles.subBarra1} style={{ visibility: visibility.f }}></div>
            </div>
            <div id={styles.barra6} onClick={this.handleButtonClick2}>
              <div className={styles.letra0}>EUROPA</div>
              <div id={styles.g} className={styles.subBarra2} style={{ visibility: visibility.g }}></div>
            </div>
            <div id={styles.barra7} onClick={this.handleButtonClick3}>
              <div className={styles.letra0}>TITAN</div>
              <div id={styles.h} className={styles.subBarra3} style={{ visibility: visibility.h }}></div>
            </div>
          </div>

          <div className={styles.text0} style={{ opacity: animation.opacity, animation: animation.animation }}>{selectedDestination.destination}</div>
          <div className={styles.text1} style={{ opacity: animation.opacity, animation: animation.animation }}>{selectedDestination.text1}</div>
          <div className={styles.text2} style={{ opacity: animation.opacity, animation: animation.animation }}>{selectedDestination.text2}</div>
          <div className={styles.text3} style={{ opacity: animation.opacity, animation: animation.animation }}>{selectedDestination.text3}</div>
          <div className={styles.text4} style={{ opacity: animation.opacity, animation: animation.animation }}>{selectedDestination.text4}</div>

          <hr className={styles.linhaPersonalizada} />

          <div className={styles.alin3}>
            <div>
              <div className={styles.text5}>AVG. DISTANCE</div>
              <div className={styles.numDist0} style={{ opacity: animation.opacity, animation: animation.animation }}>{selectedDestination.dist}</div>
            </div>
            <div className={styles.espaco1}></div>
            <div>
              <div className={styles.text5}>EST. TRAVEL TIME</div>
              <div className={styles.numDist0} style={{ opacity: animation.opacity, animation: animation.animation }}>{selectedDestination.travel}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
