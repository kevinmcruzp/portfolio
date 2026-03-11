import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

const meta = {
  pt: {
    title: "Kevin Pizarro — Engenheiro de Software",
    description:
      "Portfólio de Kevin Pizarro, Engenheiro de Software especializado em Frontend e Segurança. Projetos, habilidades e experiência profissional.",
  },
  es: {
    title: "Kevin Pizarro — Ingeniero de Software",
    description:
      "Portafolio de Kevin Pizarro, Ingeniero de Software especializado en Frontend y Seguridad. Proyectos, habilidades y experiencia profesional.",
  },
  en: {
    title: "Kevin Pizarro — Software Engineer",
    description:
      "Portfolio of Kevin Pizarro, Software Engineer specialized in Frontend and Security. Projects, skills and professional experience.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale as keyof typeof meta] ?? meta.pt;

  return {
    title: m.title,
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      type: "website",
      locale:
        locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} ${cinzel.variable} bg-slate-950 text-slate-200 antialiased overflow-x-hidden`}
      >
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
