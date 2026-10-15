import { BookOpen, Dumbbell, Play, User } from "lucide-react";

import { Ring } from "./Ring";
import styles from "./ContinueDock.module.css";

const tabs = [
  { icon: BookOpen, label: "Öğren", active: true },
  { icon: Dumbbell, label: "Pratik", active: false },
  { icon: User, label: "Profil", active: false },
];

/** The next-step card docked above the tab bar, then the tab bar itself. */
export function ContinueDock() {
  return (
    <>
      <div className={styles.dock}>
        <Ring size={46} stroke={4} progress={0.4} color="var(--primary)">
          <BookOpen size={18} color="var(--primary-text)" />
        </Ring>
        <div className={styles.text}>
          <small>ÜNİTE 4 · DERS 3</small>
          <strong>Geçmişteki alışkanlıklar</strong>
        </div>
        <span className={styles.play}><Play size={20} fill="currentColor" /></span>
      </div>

      <nav className={styles.tabBar}>
        {tabs.map(({ icon: Icon, label, active }) => (
          <span key={label} className={active ? `${styles.tab} ${styles.active}` : styles.tab}>
            <Icon size={22} strokeWidth={2.4} />
            {label}
          </span>
        ))}
      </nav>
    </>
  );
}
