import { LogoMark } from "../LogoMark";
import { StoreBadges } from "./StoreBadges";
import styles from "./ComingSoon.module.css";

export function ComingSoon() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.card}>
          <LogoMark size={72} />
          <h2 className="section-title">Çok yakında cebinde</h2>
          <p className={styles.lead}>Fuluu, iPhone ve Android için hazırlanıyor.</p>
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
