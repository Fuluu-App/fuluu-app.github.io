import { CircleCheck, Flame } from "lucide-react";

import { AppHomeScreen } from "./phone/AppHomeScreen";
import { PhoneFrame } from "./phone/PhoneFrame";
import styles from "./HeroVisual.module.css";

/** The phone with two floating moments from a study session around it. */
export function HeroVisual() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.glow} />
      <PhoneFrame>
        <AppHomeScreen />
      </PhoneFrame>

      <div className={`${styles.chip} ${styles.chipLeft}`}>
        <span className={styles.chipIcon} style={{ background: "var(--success-soft)", color: "var(--success)" }}>
          <CircleCheck size={22} />
        </span>
        <span>
          <strong>Harika, doğru!</strong>
          <small>+10 XP</small>
        </span>
      </div>

      <div className={`${styles.chip} ${styles.chipRight}`}>
        <span className={styles.chipIcon} style={{ background: "var(--streak-soft)", color: "var(--streak)" }}>
          <Flame size={22} fill="currentColor" />
        </span>
        <span>
          <strong>12 günlük seri</strong>
          <small>Böyle devam!</small>
        </span>
      </div>
    </div>
  );
}
