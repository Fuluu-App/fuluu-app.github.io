import { BookOpen, Flame, Heart, Star, Zap } from "lucide-react";

import { ContinueDock } from "./ContinueDock";
import { LessonPath } from "./LessonPath";
import { Ring } from "./Ring";
import styles from "./AppHomeScreen.module.css";

/** The app's Learn tab, redrawn: HUD, unit plaque, lesson path, next-step dock, tab bar. */
export function AppHomeScreen() {
  return (
    <>
      <div className={styles.hud}>
        <Ring size={40} stroke={4} progress={0.7} color="var(--success)">
          <Star size={16} fill="var(--primary)" color="var(--primary)" />
        </Ring>
        <div className={styles.pills}>
          <span className={styles.pill} style={{ color: "var(--streak)" }}>
            <Flame size={16} fill="currentColor" /> 12
          </span>
          <span className={styles.pill} style={{ color: "var(--danger)" }}>
            <Heart size={16} fill="currentColor" /> 5
          </span>
          <span className={styles.pill} style={{ color: "var(--accent)" }}>
            <Zap size={16} fill="currentColor" /> 840
          </span>
        </div>
      </div>

      <div className={styles.unit}>
        <div className={styles.track} />
        <div className={styles.plaque}>
          <div className={styles.unitText}>
            <small>ÜNİTE 4 · B1</small>
            <strong>Used to</strong>
          </div>
          <span className={styles.guide}><BookOpen size={18} /></span>
          <Ring size={38} stroke={4} progress={0.4} color="var(--primary)">
            <small className={styles.percent}>40%</small>
          </Ring>
        </div>
      </div>

      <LessonPath />
      <ContinueDock />
    </>
  );
}
