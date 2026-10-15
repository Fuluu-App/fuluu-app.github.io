import { BookOpen, Flame, Headphones, Mic, RotateCcw, Target, type LucideIcon } from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  /** CSS custom-property prefix for the icon tile, e.g. "sky" -> --sky / --sky-soft. */
  tone: "primary" | "accent" | "success" | "streak" | "grape" | "sky";
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Target,
    tone: "primary",
    title: "Seviyeni bul",
    description: "Kısa bir seviye testiyle A1’den B2’ye, sana uygun yerden başla.",
  },
  {
    icon: BookOpen,
    tone: "accent",
    title: "Kısa ve net dersler",
    description: "Her ünite bir konuyu örneklerle anlatır; bir dersi birkaç dakikada bitirirsin.",
  },
  {
    icon: Mic,
    tone: "grape",
    title: "Sesli konuşma pratiği",
    description: "Cümleleri yüksek sesle söyle, Fuluu doğru söyleyip söylemediğini kontrol etsin.",
  },
  {
    icon: Headphones,
    tone: "sky",
    title: "Dinle, oku, yaz",
    description: "Dört beceriyi de seviyene uygun kısa alıştırmalarla geliştir.",
  },
  {
    icon: RotateCcw,
    tone: "success",
    title: "Hatalarına geri dön",
    description: "Zorlandığın konular tekrar listene eklenir ve doğru zamanda yeniden karşına çıkar.",
  },
  {
    icon: Flame,
    tone: "streak",
    title: "Düzenini koru",
    description: "Günlük hedef, seri ve hatırlatmalarla her gün küçük bir adım at.",
  },
];
