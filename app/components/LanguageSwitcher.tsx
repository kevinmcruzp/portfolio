"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTransition } from "react";

const locales = [
  { code: "pt", label: "PT" },
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
];

export const LanguageSwitcher = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (next: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-1 transition-opacity duration-300 ${isPending ? "opacity-50" : "opacity-100"}`}
    >
      {locales.map((l, i) => (
        <button
          key={l.code}
          onClick={() => switchLocale(l.code)}
          disabled={isPending}
          className={`
            px-2.5 py-1 text-[10px] font-mono tracking-widest uppercase border transition-colors duration-200
            ${locale === l.code
              ? "border-nordic-gold text-nordic-gold bg-nordic-wood"
              : "border-nordic-iron text-nordic-parchment/40 hover:border-nordic-bronze hover:text-nordic-parchment/70 bg-nordic-void"
            }
            ${i === 0 ? "" : "border-l-0"}
          `}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};
