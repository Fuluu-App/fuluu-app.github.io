type LogoMarkProps = {
  size?: number;
};

/** The app icon (assets/branding/icon.svg), inlined so it stays sharp at any size. */
export function LogoMark({ size = 36 }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" aria-hidden="true">
      <defs>
        <linearGradient id="fuluu-logo-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFD23F" />
          <stop offset="1" stopColor="#FFA41B" />
        </linearGradient>
      </defs>
      <rect width="1024" height="1024" rx="230" fill="url(#fuluu-logo-fill)" />
      <path
        d="M327 700 V330 H497 M327 500 H467 M557 470 V630 A70 70 0 0 0 697 630 M697 470 V700"
        fill="none"
        stroke="#1B2A41"
        strokeWidth="110"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
