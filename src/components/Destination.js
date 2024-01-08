import React, { Component } from "react";
import Moon from '../img/image-moon.png';
import styles from "../components/modules/Destination.module.css";

export default class Destination extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     activeSection: "Destination",
  //   };
  // }
  // o construtor não faz diferença?!
  render(){

  
    return (
      <div className={styles.alinha}>
        <div className={styles.linha}>
          <div className={styles.tituloDest}>
              <div className={styles.num}>01</div>
              <div className={styles.letr}>PICK YOUR DESTINATION</div>
          </div>
          <img className={styles.imagem0} src={Moon} />
        </div>
        
        
        <div className={styles.alin2}>
          <div className={styles.al}>
            <div id={styles.barra4}>
              <div className={styles.letra0}>MOON</div>
              <div id={styles.e} className={styles.subBarra0} style={{ visibility: "visible" }}></div>
            </div>
            <div id={styles.barra5}>
              <div className={styles.letra0}>MARS</div>
              <div id={styles.f} className={styles.subBarra1}></div>
            </div>
            <div id={styles.barra6}>
              <div className={styles.letra0}>EUROPA</div>
              <div id={styles.g} className={styles.subBarra2}></div>
            </div>
            <div id={styles.barra7}>
              <div className={styles.letra0}>TITAN</div>
              <div id={styles.h} className={styles.subBarra3}></div>
            </div>
          </div>
        
          <div className={styles.text0}>MOON</div>
          
          <div className={styles.text1}>See our planet as you've never seen it before. A perfect</div>
          <div className={styles.text2}>relaxing trip away to help regain perspective and come</div>
          <div className={styles.text3}>back refreshed. While you're there, take in some history</div>
          <div className={styles.text4}>by visiting the Luna 2 and Apollo 11 landing sites.</div>
          <hr className={styles.linhaPersonalizada} />
        
          <div className={styles.alin3}>
            <div>
              <div className={styles.text5}>AVG. DISTANCE</div>
              <div className={styles.numDist0}>384,400 KM</div>
            </div>
            <div className={styles.espaco1}></div>
            <div>
              <div className={styles.text5}>EST. TRAVEL TIME</div>
              <div className={styles.numDist0}>3 DAYS</div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
