import { ComingSoon } from "@/components/home/ComingSoon";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { LevelPath } from "@/components/home/LevelPath";
import { PrivacyPromise } from "@/components/home/PrivacyPromise";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <LevelPath />
      <PrivacyPromise />
      <ComingSoon />
    </>
  );
}
