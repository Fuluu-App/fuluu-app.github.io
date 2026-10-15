import type { ReactNode } from "react";

import styles from "./LegalPage.module.css";

type LegalPageProps = {
  title: string;
  meta?: ReactNode;
  /** Set for pages written in another language than the site default (Turkish). */
  lang?: "en";
  children: ReactNode;
};

export function LegalPage({ title, meta, lang, children }: LegalPageProps) {
  return (
    <article lang={lang} className={`container ${styles.page}`}>
      <header className={styles.header}>
        <p className="eyebrow">{lang === "en" ? "Legal" : "Yasal"}</p>
        <h1 className={styles.title}>{title}</h1>
        {meta ? <p className={styles.meta}>{meta}</p> : null}
      </header>
      <div className={styles.prose}>{children}</div>
    </article>
  );
}
