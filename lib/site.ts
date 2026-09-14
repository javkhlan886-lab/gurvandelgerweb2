export const SITE_URL = "https://gurvandelger.com";
export const SITE_NAME = "Гурван Дэлгэр ХХК";

export const CONTACT_PHONE_DISPLAY = "+976 77230606";
export const CONTACT_PHONE_TEL = "+97677230606";
export const CONTACT_EMAIL = "info@gurvandelger.com";

// Serializes structured data for a <script type="application/ld+json"> tag,
// escaping "<" so the payload cannot close the script element.
export function toJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
