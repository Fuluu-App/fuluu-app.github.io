import { ArrowRight, MicOff, ShieldCheck, Trash2 } from "lucide-react";
import Link from "next/link";

import styles from "./PrivacyPromise.module.css";

const promises = [
  { icon: ShieldCheck, text: "Reklam yok, takip yok. Verilerini satmayız." },
  { icon: MicOff, text: "Konuşma kayıtların sunucularımıza gönderilmez, saklanmaz." },
  { icon: Trash2, text: "Hesabını ve tüm verilerini istediğin an uygulamadan silebilirsin." },
];

export function PrivacyPromise() {
  return (
    <section className="section">
      <div className={`container ${styles.inner}`}>
        <div>
          <p className="eyebrow">Gizlilik</p>
          <h2 className="section-title">Verilerin sende kalır</h2>
          <p className="section-lead">
            Yalnızca öğrenmen için gereken veriyi işleriz. Ayrıntılar gizlilik politikamızda.
          </p>
          <Link href="/privacy/" className={styles.link}>
            Gizlilik politikasını oku <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <ul className={styles.list}>
          {promises.map(({ icon: Icon, text }) => (
            <li key={text}>
              <span className={styles.icon}><Icon size={22} aria-hidden="true" /></span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
