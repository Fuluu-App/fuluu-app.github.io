import { Smartphone } from "lucide-react";

import styles from "./StoreBadges.module.css";

const stores = ["App Store", "Google Play"];

/** Stand-ins until the store listings exist; swap for the official badges with links then. */
export function StoreBadges() {
  return (
    <div className={styles.row}>
      {stores.map((store) => (
        <div key={store} className={styles.badge} aria-label={`${store} – yakında`}>
          <Smartphone size={22} aria-hidden="true" />
          <span>
            <small>Yakında</small>
            {store}
          </span>
        </div>
      ))}
    </div>
  );
}
