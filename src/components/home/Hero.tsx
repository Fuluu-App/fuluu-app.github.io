import { HeroVisual } from "./HeroVisual";
import { StoreBadges } from "./StoreBadges";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className="eyebrow">Her gün küçük bir adım</p>
          <h1 className={styles.title}>
            İngilizceyi <span>kullanarak</span> öğren.
          </h1>
          <p className={styles.lead}>
            Kısa dersler, sesli konuşma pratiği ve seviyene göre hazırlanan günlük bir plan. Günde
            birkaç dakikayla düzenli ilerle.
          </p>
          <StoreBadges />
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
