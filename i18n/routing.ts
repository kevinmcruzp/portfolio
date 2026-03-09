import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "es", "en"],
  defaultLocale: "pt",
  localePrefix: "as-needed",
});
