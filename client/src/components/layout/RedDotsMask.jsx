import React from "react";
import styles from "./RedDotsMask.module.css";

const RedDotsMask = () => {
  return (
    <div  className={styles.maskContainer} style={{ "--mask-position-x": "50%", "--mask-position-y": "0%" }} >
      <div  className={styles.dots} style={{ "--dots-color": "#e30202", "--dots-size": "5px" }} ></div>
      <div className={styles.spacer}></div>

      {/* <div class="display-flex s-flex-hide min-width-0 fill-width position-relative" style="min-height:var(--static-space-16)"></div> */}
      <div className={styles.fadeTop} style={{"--fade-height": "80px", "--base-color": "#ffffff", "--gradient-direction": "180deg",  }} ></div>
      <div className={styles.fadeBottom} style={{  "--fade-height": "80px", "--base-color": "#ffffff", "--gradient-direction": "0deg", }}></div>
    </div>
  );
};

export default RedDotsMask;
