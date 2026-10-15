import type { CSSProperties } from "react";

import { features } from "@/content/features";

import styles from "./Features.module.css";

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <p className="eyebrow">Neler var?</p>
        <h2 className="section-title">Öğrenmek için ihtiyacın olan her şey</h2>
        <p className="section-lead">Ezber yerine kullanım: her ders, öğrendiğini hemen pratiğe döker.</p>

        <ul className={styles.grid}>
          {features.map(({ icon: Icon, tone, title, description }) => {
            const toneStyle = {
              "--tone": `var(--${tone})`,
              "--tone-soft": `var(--${tone}-soft)`,
            } as CSSProperties;
            return (
              <li key={title} className={styles.card} style={toneStyle}>
                <span className={styles.icon}><Icon size={24} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
