import Link from "next/link";

import { site } from "@/content/site";

import { Brand } from "../Brand";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Brand />
        <nav className={styles.nav} aria-label="Ana menü">
          <Link href="/#features" className={styles.optional}>Özellikler</Link>
          <Link href="/privacy/">Gizlilik</Link>
          <a href={`mailto:${site.contactEmail}`} className={styles.contact}>İletişim</a>
        </nav>
      </div>
    </header>
  );
}
