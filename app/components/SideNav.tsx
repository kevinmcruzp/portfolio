"use client";
import { useState, useEffect } from "react";
import { Briefcase, Mail, MapPin, User } from "lucide-react";
import { useTranslations } from "next-intl";

export const SideNav = () => {
  const t = useTranslations("nav");
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  const links = [
    { id: "hero", label: t("home"), icon: <User size={18} /> },
    { id: "saga", label: t("saga"), icon: <MapPin size={18} /> },
    { id: "works", label: t("works"), icon: <Briefcase size={18} /> },
    { id: "contact", label: t("contact"), icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? scrollY / maxScroll : 0);

      let current = links[0].id;
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6">
      {links.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="group flex items-center justify-end gap-4 relative z-10"
          >
            <span
              className={`
                opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0
                transition-all duration-300 px-3 py-1 text-xs font-serif uppercase tracking-widest rounded shadow-xl bg-nordic-wood border
                ${isActive ? "border-nordic-gold text-nordic-gold" : "border-nordic-bronze/30 text-nordic-parchment/70"}
              `}
            >
              {link.label}
            </span>

            <div
              className={`
                relative z-10 w-10 h-10 border rounded rotate-45 flex items-center justify-center
                transition-all duration-500 shadow-lg
                ${isActive
                  ? "bg-nordic-void border-nordic-gold shadow-[0_0_20px_rgba(212,180,131,0.35)]"
                  : "bg-nordic-void border-nordic-iron group-hover:border-nordic-bronze group-hover:shadow-[0_0_15px_rgba(180,83,9,0.3)]"
                }
              `}
            >
              <div
                className={`-rotate-45 transition-colors duration-300 ${isActive ? "text-nordic-gold" : "text-nordic-parchment/50 group-hover:text-nordic-bronze"}`}
              >
                {link.icon}
              </div>
            </div>
          </a>
        );
      })}

      {/* Linha de fundo */}
      <div className="absolute top-5 bottom-5 right-[1.2rem] w-px bg-nordic-iron/40 z-0" />

      {/* Linha de progresso */}
      <div
        className="absolute top-5 right-[1.2rem] w-px bg-nordic-gold z-0 shadow-[0_0_6px_rgba(212,180,131,0.5)] transition-[height] duration-150"
        style={{ height: `calc(${scrollProgress} * (100% - 2.5rem))` }}
      />
    </nav>
  );
};
