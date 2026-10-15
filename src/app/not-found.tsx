import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={`container ${styles.page}`}>
      <p className="eyebrow">404</p>
      <h1 className="section-title">Bu sayfa bulunamadı</h1>
      <p className={styles.lead}>Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <Link href="/" className={styles.button}>Ana sayfaya dön</Link>
    </section>
  );
}
