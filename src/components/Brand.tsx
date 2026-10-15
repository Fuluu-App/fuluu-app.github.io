import Link from "next/link";

import { LogoMark } from "./LogoMark";
import styles from "./Brand.module.css";

export function Brand() {
  return (
    <Link href="/" className={styles.brand} aria-label="Fuluu ana sayfa">
      <LogoMark />
      <span>Fuluu</span>
    </Link>
  );
}
