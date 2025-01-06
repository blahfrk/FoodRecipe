import styles from "./nav.module.css";
import Lottie from "lottie-react";
import animationData from "./nav-img.json";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Lottie className={styles.animation} animationData={animationData} />{" "}
      <span className={styles.header}>FoodRecipe</span>
    </div>
  );
}
