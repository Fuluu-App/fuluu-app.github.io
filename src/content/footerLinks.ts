export type FooterLink = { href: string; label: string };
export type FooterColumn = { title: string; links: FooterLink[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Uygulama",
    links: [
      { href: "/#features", label: "Özellikler" },
      { href: "/#levels", label: "Seviyeler" },
      { href: "/#privacy", label: "Gizlilik sözümüz" },
    ],
  },
  {
    title: "Yasal",
    links: [
      { href: "/privacy/", label: "Gizlilik Politikası" },
      { href: "/kvkk/", label: "KVKK Aydınlatma Metni" },
      { href: "/en/privacy/", label: "Privacy Policy (EN)" },
    ],
  },
  {
    title: "Destek",
    links: [{ href: "/delete-account/", label: "Hesap ve veri silme" }],
  },
];
