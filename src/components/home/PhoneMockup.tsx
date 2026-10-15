import { Flame, Zap } from "lucide-react";

import styles from "./PhoneMockup.module.css";

/** An illustration of the app's home screen, drawn in CSS so it needs no screenshots. */
export function PhoneMockup() {
  return (
    <div className={styles.phone} aria-hidden="true">
      <div className={styles.notch} />
      <div className={styles.stats}>
        <span className={styles.streak}><Flame size={16} /> 12</span>
        <span className={styles.xp}><Zap size={16} /> 840 XP</span>
      </div>

      <div className={styles.goal}>
        <div className={styles.goalText}>
          <strong>Günlük hedef</strong>
          <span>7 / 10 dk</span>
        </div>
        <div className={styles.bar}><div className={styles.fill} /></div>
      </div>

      <div className={styles.lesson}>
        <span className={styles.level}>B1 · Ünite 4</span>
        <strong>Used to ile alışkanlıklar</strong>
        <span className={styles.button}>Devam et</span>
      </div>

      <div className={styles.path}>
        <span className={styles.done} />
        <span className={styles.done} />
        <span className={styles.current} />
        <span className={styles.locked} />
      </div>
    </div>
  );
}
