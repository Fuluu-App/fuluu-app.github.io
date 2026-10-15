import { site } from "@/content/site";

export function ContactLink() {
  return <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>;
}
