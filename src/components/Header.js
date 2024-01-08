import React, { Component } from "react";
import Logo from '../icons/logo.svg';
import ImagemDestination from '../img/background-destination-desktop.jpg';
import ImagemHome from '../img/background-home-desktop.jpg';
import ImagemCrew from '../img/background-crew-desktop.jpg';
import ImagemTech from '../img/background-technology-desktop.jpg';
import Home from "./Home";
import Destination from "../components/Destination";
import styles from "../components/modules/Home.module.css"
import Crew from "../components/Crew";
// import Technology from "../components/Technology";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: "Home",
    };
  }

  handleMouseEnter = (id) => {
    const elements = ['a', 'b', 'c', 'd'];
    elements.forEach((elementId) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.visibility = elementId === id ? 'visible' : 'hidden';
      }
    });
  }

  handleClickSection = (section, backgroundImage) => {
    this.setState({
      activeSection: section, // dentro do click nas barras acima ele muda o activeSection
    });
    document.body.style.backgroundImage = `url(${backgroundImage})`;
  }

  renderMainSection = () => {
    const { activeSection } = this.state;

    switch (activeSection) {
      case "Home":
        return <Home />;
      case "Destination":
        return <Destination />;
      case "Crew":
        return <Crew />;
    //   case "Technology":
    //     return <Technology />;
      default:
        return null;
    }
  };

  render() {
    return (
      <>
        <header className={styles.header}>
          <img className={styles.imagem} src={Logo} alt="Logo" />
          <div className={styles.espaco}></div>
          <hr className={styles.linhaPersonalizada} />
          <div className={styles.caixaBlur}>
            <hr className={styles.linhaPersonalizada2} />
            <div className={styles.alin}>
              <div
                id={styles.barra0}
                className={styles.alinhamento}
                onClick={() => this.handleClickSection("Home", ImagemHome)}
                onMouseEnter={() => this.handleMouseEnter('a')}
              >
                <div className={styles.numeral0}>00</div>
                <div className={styles.letra0}>HOME</div>
              </div>
              <div id='a' className={styles.barra} style={{ visibility: "visible" }}></div>
            </div>
            <div className={styles.alin}>
              <div
                id={styles.barra1}
                className={styles.alinhamento}
                onClick={() => this.handleClickSection("Destination", ImagemDestination)}
                onMouseEnter={() => this.handleMouseEnter('b')}
              >
                <div className={styles.numeral0}>01</div>
                <div className={styles.letra0}>DESTINATION</div>
              </div>
              <div id='b' className={styles.barra1} ></div>
            </div>
            <div className={styles.alin}>
              <div
                id={styles.barra2}
                className={styles.alinhamento}
                onClick={() => this.handleClickSection("Crew", ImagemCrew)}
                onMouseEnter={() => this.handleMouseEnter('c')}
              >
                <div className={styles.numeral0}>02</div>
                <div className={styles.letra0}>CREW</div>
              </div>
              <div id='c' className={styles.barra}></div>
            </div>
            <div className={styles.alin4}>
              <div
                id={styles.barra3}
                className={styles.alinhamento}
                onClick={() => this.handleClickSection("Technology", ImagemTech)}
                onMouseEnter={() => this.handleMouseEnter('d')}
              >
                <div className={styles.numeral0}>03</div>
                <div className={styles.letra0}>TECHNOLOGY</div>
              </div>
              <div id='d' className={styles.barra1}></div>
            </div>
          </div>
        </header>
        {this.renderMainSection()}
      </>
    );
  }
}
