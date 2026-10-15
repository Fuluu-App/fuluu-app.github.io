import type { ReactNode } from "react";

import styles from "./LegalPage.module.css";

export function Callout({ children }: { children: ReactNode }) {
  return <div className={styles.callout}>{children}</div>;
}
