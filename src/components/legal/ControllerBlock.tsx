import { site } from "@/content/site";

import { ContactLink } from "../ContactLink";

type ControllerBlockProps = {
  contactLabel: string;
};

/** The data controller's identity and contact line, shared by every legal text. */
export function ControllerBlock({ contactLabel }: ControllerBlockProps) {
  return (
    <p>
      <strong>{site.controller ?? site.name}</strong>
      <br />
      {contactLabel}: <ContactLink />
    </p>
  );
}
