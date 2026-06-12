export const business = {
  name: "Sanchez Innovations",
  phone: "7086827604",
  phoneDisplay: "708-682-7604",
  email: "innovationssanchez@gmail.com",
  facebook: "https://www.facebook.com",
  city: "Harvey",
  state: "IL",
} as const;

// Set NEXT_PUBLIC_SITE_URL in Vercel once the real domain is connected;
// falls back to the default *.vercel.app domain pattern until then.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://innovations-sanchez.vercel.app";
