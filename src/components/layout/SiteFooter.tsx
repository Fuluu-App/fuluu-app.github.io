import Link from "next/link";

import { site } from "@/content/site";

import { Brand } from "../Brand";
import { ContactLink } from "../ContactLink";
import styles from "./SiteFooter.module.css";

const legalLinks = [
  { href: "/privacy/", label: "Gizlilik Politikası" },
  { href: "/kvkk/", label: "KVKK Aydınlatma Metni" },
  { href: "/delete-account/", label: "Hesap Silme" },
  { href: "/en/privacy/", label: "Privacy Policy (EN)" },
];

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <Brand />
          <p className={styles.tagline}>Her gün küçük bir adımla İngilizce.</p>
        </div>
        <div>
          <h2 className={styles.heading}>Yasal</h2>
          <ul className={styles.list}>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={styles.heading}>İletişim</h2>
          <p className={styles.list}><ContactLink /></p>
        </div>
      </div>
      <div className={`container ${styles.bottom}`}>
        © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
