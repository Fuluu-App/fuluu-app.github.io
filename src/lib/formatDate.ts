/** Formats an ISO date (YYYY-MM-DD) as a long date, e.g. "14 Ekim 2026". */
export function formatDate(isoDate: string, locale: "tr" | "en") {
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // The build machine's zone must not shift the day.
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
