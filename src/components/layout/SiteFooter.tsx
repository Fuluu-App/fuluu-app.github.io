import { ArrowUp, Mail } from "lucide-react";

import { footerColumns } from "@/content/footerLinks";
import { site } from "@/content/site";

import { Brand } from "../Brand";
import { FooterColumn } from "./FooterColumn";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const [appColumn, legalColumn, supportColumn] = footerColumns;
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.about}>
          <Brand />
          <p>Her gün küçük bir adımla İngilizceyi kullanarak öğren.</p>
          <span className={styles.soon}>
            <span className={styles.dot} /> Yakında App Store ve Google Play’de
          </span>
        </div>
        <FooterColumn column={appColumn} />
        <FooterColumn column={legalColumn} />
        <FooterColumn column={supportColumn}>
          <li>
            <a href={`mailto:${site.contactEmail}`} className={styles.mail}>
              <Mail size={16} aria-hidden="true" /> {site.contactEmail}
            </a>
          </li>
        </FooterColumn>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.</span>
        <a href="#" className={styles.top}>
          Başa dön <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
