import React from "react";
import styles from "./modules/Home.module.css"  // Importe os estilos do módulo

export default function Home() {
  return (
    <main id="main" className={styles.alinhar}>
      <div className={styles.textoCor}>
        <div className={styles.texto1}>SO, YOU WANT TO TRAVEL TO</div>
        <div className={styles.texto2}>SPACE</div>
        <div className={styles.texto3}>Let's face it; if you want to go to space, you might as well</div>
        <div className={styles.texto4}>genuinely go to outer space and not hover kind of on the</div>
        <div className={styles.texto5}>edge of it. Well sit back, and relax because we'll give you a</div>
        <div className={styles.texto6}>truly out of this world experience!</div>
      </div>
      <div>
        <button className={styles.botao}>EXPLORE</button>
      </div>
    </main>
  );
}
