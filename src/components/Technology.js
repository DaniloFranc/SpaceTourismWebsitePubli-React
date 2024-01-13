import React, { Component } from "react";
import styles from "../components/modules/Technology.module.css";  
import InitialTechImage from '../img/image-spaceport-portrait.jpg'

export default class Technology extends Component {
    constructor(props) {
        super(props);


        this.state = {
            selectedTech: {
                image: InitialTechImage,
                // destination: "MOON",
                // travel: '3 DAYS',
                // dist: '384,400 KM',
                // text1: (
                //   <>
                //     See our planet as you've never seen it before. A perfect
                //   </>
                // ),
                // text2: (
                //   <>
                //     relaxing trip away to help regain perspective and come
                //   </>
                // ),
                // text3: (
                //   <>
                //     back refreshed. While you're there, take in some history
                //   </>
                // ),
                // text4: (
                //   <>
                //     by visiting the Luna 2 and Apollo 11 landing sites.
                //   </>
                // )
              },
        }
    }

    render() {

        const { selectedTech, visibility, animation } = this.state;

        return (
            <>
                <div className={styles.caixaPrincipalTech}>
                    <div className={styles.alinhamentoTech}>
                        <div className={styles.caixaTituloTech}>
                            <div className={styles.numeroTech}>03</div>
                            <div className={styles.espacoTech}></div>
                            <div className={styles.tituloTech}>SPACE LAUNCH 101</div>
                        </div>
                        <div className={styles.caixaSecTech}>
                            <div className={styles.ordemBotoes}>
                                <button className={`${styles.botaoTech} ${styles.ajustePriBotaoTech}`} id="botTech01">1</button>
                                <button className={`${styles.botaoTech} ${styles.corBotao}`} id="botTech02">2</button>
                                <button className={`${styles.botaoTech} ${styles.corBotao}`} id="botTech03">3</button>
                            </div>
                            <div className={styles.espacoTechBotao}></div>
                            <div className={styles.caixaTextTech}>
                                <div className={styles.text0Tech}>THE TERMINOLOGY...</div>
                                <div className={styles.text1Tech}>LAUNCH VEHICLE</div>
                                <div className={styles.textTech}>
                                    <div>A launch vehicle or carrier rocket is a rocket-propelled</div>
                                    <div>vehicle used to carry a payload from Earth's surface to</div>
                                    <div>space, usually to Earth orbit or beyond. Our WEB-X</div>
                                    <div>carrier rocket is the most powerful in operation. Standing</div>
                                    <div>150 metres tall, it's quite an awe-inspiring sight on the</div>
                                    <div>launch pad!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.espacoImagem}></div>
                    <img className={styles.imagemTech} src={selectedTech.image} alt="Launch Vehicle" />
                </div>
            </>
        );
    }
}
