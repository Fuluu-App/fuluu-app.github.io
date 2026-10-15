import Link from "next/link";
import type { ReactNode } from "react";

import type { FooterColumn as FooterColumnData } from "@/content/footerLinks";

import styles from "./SiteFooter.module.css";

type FooterColumnProps = {
  column: FooterColumnData;
  /** Extra items rendered after the links, e.g. the contact address. */
  children?: ReactNode;
};

export function FooterColumn({ column, children }: FooterColumnProps) {
  return (
    <div>
      <h2 className={styles.heading}>{column.title}</h2>
      <ul className={styles.links}>
        {column.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        {children}
      </ul>
    </div>
  );
}
