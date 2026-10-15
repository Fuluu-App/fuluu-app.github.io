import { BatteryFull, Signal, Wifi } from "lucide-react";
import type { ReactNode } from "react";

import styles from "./PhoneFrame.module.css";

/** A modern phone body (bezel, island, side keys and status bar) around a screen. */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className={styles.body}>
      <div className={styles.screen}>
        <div className={styles.island} />
        <div className={styles.statusBar}>
          <span>9:41</span>
          <span className={styles.statusIcons}>
            <Signal size={15} strokeWidth={2.6} />
            <Wifi size={15} strokeWidth={2.6} />
            <BatteryFull size={20} strokeWidth={2} />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
