import { Check, Lock, Star, Trophy, type LucideIcon } from "lucide-react";

import styles from "./LessonPath.module.css";

type Node = { state: "done" | "current" | "locked"; icon: LucideIcon; offset: number };

/** Horizontal offsets give the path the app's gentle zigzag. */
const nodes: Node[] = [
  { state: "done", icon: Check, offset: 0 },
  { state: "done", icon: Check, offset: -54 },
  { state: "current", icon: Star, offset: -18 },
  { state: "locked", icon: Lock, offset: 44 },
  { state: "locked", icon: Trophy, offset: 12 },
];

export function LessonPath() {
  return (
    <div className={styles.path}>
      {nodes.map(({ state, icon: Icon, offset }, index) => (
        <div key={index} className={styles.slot} style={{ transform: `translateX(${offset}px)` }}>
          {state === "current" ? <span className={styles.bubble}>BAŞLA</span> : null}
          <span className={`${styles.node} ${styles[state]}`}>
            <Icon size={state === "current" ? 30 : 26} strokeWidth={3} fill={state === "current" ? "currentColor" : "none"} />
          </span>
        </div>
      ))}
    </div>
  );
}
