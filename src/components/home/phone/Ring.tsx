import type { ReactNode } from "react";

import styles from "./Ring.module.css";

type RingProps = {
  size: number;
  stroke: number;
  /** 0–1. */
  progress: number;
  color: string;
  children?: ReactNode;
};

/** A progress ring like the app's ProgressRing: track below, colored arc from 12 o'clock. */
export function Ring({ size, stroke, progress, color, children }: RingProps) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <span className={styles.ring} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={radius} className={styles.track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - progress)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className={styles.center}>{children}</span>
    </span>
  );
}
