// `iso` is a "YYYY-MM-DD" string. Parsed with an explicit time so it's not
// shifted a day by UTC/local timezone differences.
function toDate(iso: string) {
  return new Date(`${iso}T00:00:00`);
}

export function formatPostDate(iso: string) {
  return toDate(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function monthLabel(iso: string) {
  return toDate(iso).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function monthSlug(iso: string) {
  return monthLabel(iso).toLowerCase().replace(/\s+/g, "-");
}
