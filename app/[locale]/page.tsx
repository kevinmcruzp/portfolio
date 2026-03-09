"use client";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Download, ArrowDown, Layout, Database, Code,
  Shield, ExternalLink, Instagram, Youtube, Smartphone, Globe,
  Mail, MessageCircle,
} from "lucide-react";
import { ForgedText } from "../components/ui/animation/ForgetText";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { SnowFall } from "../components/Snowfall";
import { useState } from "react";
import { TorchEffect } from "../components/ui/animation/TorchEffect";
import { GateLoader } from "../components/ui/animation/GateLoader";
import { SideNav } from "../components/SideNav";
import { ObsidianCard } from "../components/ObsidianCard";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import photo from "../../public/photo.jpg";
import { PROJECTS } from "../data/projects";
import { config } from "../config";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const [isLoading, setIsLoading] = useState(true);

  const SKILLS = [
    {
      icon: <Layout />,
      title: t("saga.skill_frontend"),
      items: ["React", "Next.js", "TypeScript", "TailwindCSS", "ChakraUI", "Framer Motion", "HTML5", "CSS3"],
    },
    {
      icon: <Code />,
      title: t("saga.skill_backend"),
      items: ["Node.js", "Express.js", "C#", "PHP", "Java", "Python", "Socket.io", "JWT"],
    },
    {
      icon: <Database />,
      title: t("saga.skill_database"),
      items: ["PostgreSQL", "MongoDB", "SQLite", "Prisma ORM"],
    },
    {
      icon: <Shield />,
      title: t("saga.skill_cloud"),
      items: ["AWS", "Vercel", "Apache", "Docker", "GitHub Actions", "CI/CD"],
    },
    {
      icon: <Smartphone />,
      title: t("saga.skill_mobile"),
      items: ["React Native", "Expo"],
    },
    {
      icon: <Globe />,
      title: t("saga.skill_languages"),
      items: [t("saga.lang_pt"), t("saga.lang_es"), t("saga.lang_en")],
    },
  ];

  const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured).map((p) => ({
    ...p,
    desc: t.raw(`projects_data.${p.key}.desc`) as string | undefined,
  }));

  return (
    <main className="relative min-h-screen bg-nordic-void text-nordic-parchment selection:bg-nordic-gold selection:text-nordic-void overflow-x-hidden">
      <SnowFall />

      {isLoading && <GateLoader onComplete={() => setIsLoading(false)} tagline={t("loader.tagline")} />}

      <TorchEffect />

      <SideNav />

      <LanguageSwitcher />

      <div className="max-w-350 mx-auto relative z-10 pl-6 pr-6 md:pr-32">
        {/* --- HOME --- */}
        <section
          id="hero"
          className={`min-h-screen flex items-center pt-20 pb-20 ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 relative`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Coluna Esquerda */}
            <div className="flex flex-col">
              <span className="inline-block self-start text-xs font-mono tracking-[0.3em] text-nordic-bronze uppercase mb-5 border border-nordic-bronze/40 px-3 py-1">
                {t("hero.badge")}
              </span>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-nordic-gold mb-4 leading-tight">
                <ForgedText text="KEVIN" />
                <ForgedText text="PIZARRO" />
              </h1>

              <div className="flex items-center gap-3 text-xs font-mono text-nordic-parchment/30 tracking-widest mb-6">
                <span>Londrina, BR</span>
                <span className="w-1 h-1 rounded-full bg-nordic-bronze/40" />
                <span>Aceno Tecnologia</span>
                <span className="w-1 h-1 rounded-full bg-nordic-bronze/40" />
                <span>{t("hero.focus")}</span>
              </div>

              <p className="text-base text-stone-400 max-w-lg leading-relaxed mb-10 border-l-4 border-nordic-iron pl-6">
                {t("hero.description")}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/projects"
                  className="px-8 py-4 bg-nordic-bronze text-white font-serif tracking-widest hover:bg-white hover:text-nordic-wood transition-colors shadow-[0_0_20px_rgba(180,83,9,0.2)] text-sm"
                >
                  {t("hero.cta_projects")}
                </Link>
                <a
                  href={config.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-nordic-iron text-stone-400 font-serif tracking-widest hover:border-nordic-gold hover:text-nordic-gold transition-colors flex items-center gap-2 text-sm"
                >
                  <Download size={16} /> CV
                </a>
                <Link
                  href="/about"
                  className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors text-xs font-serif tracking-widest uppercase underline underline-offset-4 decoration-nordic-parchment/20 hover:decoration-nordic-gold"
                >
                  {t("hero.cta_about")}
                </Link>
              </div>

              <div className="flex items-center gap-5">
                <span className="text-nordic-parchment/20 text-xs font-mono tracking-widest uppercase">
                  {t("hero.socials_label")}
                </span>
                <div className="w-8 h-px bg-nordic-parchment/15" />
                <a href={config.github} target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Github size={18} /></a>
                <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Linkedin size={18} /></a>
                <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Instagram size={18} /></a>
                <a href={config.youtube} target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Youtube size={18} /></a>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-87.5 h-112.5 md:w-112.5 md:h-137.5">
                <div className="absolute -inset-10 rounded-t-full blur-3xl bg-amber-900/15 z-0 pointer-events-none" style={{ willChange: "filter", transform: "translateZ(0)" }} />
                <div className="absolute -inset-6 border border-nordic-gold/12 rounded-t-full z-0" />
                <div className="absolute -inset-4 border border-nordic-iron/50 rounded-t-full z-0" />
                <div className="absolute -inset-2 border border-nordic-bronze/35 rounded-t-full z-0" />

                <div className="absolute inset-0 bg-nordic-wood rounded-t-full overflow-hidden border-b-4 border-nordic-bronze transition-all duration-700 rune-glow group/photo">
                  <div className="w-full h-full bg-linear-to-b from-stone-800 to-nordic-void flex items-center justify-center">
                    <Image
                      src={photo}
                      alt="photo"
                      fill
                      className="object-cover sepia brightness-75 contrast-110 transition-all duration-700 group-hover/photo:brightness-90 group-hover/photo:contrast-125"
                    />
                  </div>
                  <div className="absolute inset-0 bg-amber-900/20 mix-blend-color" />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-nordic-void to-transparent" />
                </div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-nordic-wood border border-nordic-bronze p-4 shadow-xl z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-nordic-gold font-serif text-2xl font-bold">2+</div>
                  <div className="text-stone-500 text-xs tracking-widest uppercase">{t("hero.years_xp")}</div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-nordic-parchment/50"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </section>

        {/* --- SAGA (SKILLS) --- */}
        <section id="saga" className="py-32 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 flex items-end justify-between border-b border-nordic-parchment/10 pb-6">
              <h2 className="text-4xl font-serif text-nordic-gold">{t("saga.title")}</h2>
              <span className="hidden md:block text-xs font-serif tracking-widest text-nordic-parchment/40">{t("saga.subtitle")}</span>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                >
                  <ObsidianCard className="h-full">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-10 h-10 border border-nordic-iron flex items-center justify-center text-nordic-gold">
                        {skill.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-serif text-white mb-4">{skill.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-1 bg-nordic-void border border-nordic-parchment/10 text-xs text-nordic-parchment/60 font-mono hover:border-nordic-gold/30 hover:text-nordic-gold/80 transition-colors duration-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </ObsidianCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- OBRAS (PROJECTS) --- */}
        <section id="works" className="py-32 px-6 bg-nordic-void/20 relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 flex items-end justify-between border-b border-nordic-parchment/10 pb-6">
              <div>
                <h2 className="text-4xl font-serif text-nordic-gold mb-3">{t("works.title")}</h2>
                <p className="text-nordic-parchment/60 max-w-xl">{t("works.description")}</p>
              </div>
              <Link
                href="/projects"
                className="hidden md:flex items-center gap-2 text-nordic-parchment/50 hover:text-nordic-gold transition-colors text-xs tracking-widest uppercase font-serif"
              >
                {t("works.see_all")} <ExternalLink size={14} />
              </Link>
            </div>

            <div className="space-y-32">
              {FEATURED_PROJECTS.map((project, index) => (
                <motion.div
                  key={project.key}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
                >
                  {/* Imagem */}
                  <div className="w-full md:w-3/5 relative">
                    <div className="absolute -inset-4 bg-nordic-gold/5 blur-2xl rounded-full pointer-events-none" />
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block aspect-video bg-nordic-void overflow-hidden group"
                    >
                      {project.img && (
                        <Image
                          src={project.img}
                          alt={project.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-linear-to-tr from-nordic-void/80 via-transparent to-transparent z-10" />
                      <div className="absolute inset-0 z-20 pointer-events-none">
                        <div className="absolute top-0 left-0 w-0 h-px bg-nordic-gold transition-all duration-500 group-hover:w-full" />
                        <div className="absolute top-0 right-0 w-px h-0 bg-nordic-gold transition-all duration-500 delay-100 group-hover:h-full" />
                        <div className="absolute bottom-0 right-0 w-0 h-px bg-nordic-gold transition-all duration-500 delay-200 group-hover:w-full" />
                        <div className="absolute bottom-0 left-0 w-px h-0 bg-nordic-gold transition-all duration-500 delay-300 group-hover:h-full" />
                      </div>
                      <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 border border-nordic-gold flex items-center justify-center bg-nordic-void/60 backdrop-blur-sm">
                          <ExternalLink size={22} className="text-nordic-gold" />
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Detalhes */}
                  <div className="w-full md:w-2/5 space-y-5 relative">
                    <span className="absolute -top-8 -left-2 text-[7rem] font-serif font-bold text-nordic-parchment/5 leading-none select-none pointer-events-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-xs font-mono tracking-[0.3em] text-nordic-bronze uppercase">
                      {t("works.project_label")} {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-4xl font-serif text-white leading-tight">{project.title}</h3>

                    {project.desc && (
                      <p className="text-nordic-parchment/60 text-sm leading-relaxed border-l-2 border-nordic-gold/20 pl-4">
                        {project.desc}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((t_) => (
                        <span key={t_} className="px-3 py-1 bg-nordic-void border border-nordic-parchment/15 text-xs text-nordic-gold/80 font-mono">
                          {t_}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-nordic-gold border-b border-nordic-gold/30 hover:border-nordic-gold pb-0.5 transition-colors text-sm uppercase tracking-widest font-serif group"
                      >
                        {t("works.cta")} <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA mobile */}
            <div className="mt-16 flex justify-center md:hidden">
              <Link
                href="/projects"
                className="px-8 py-4 border border-nordic-bronze text-nordic-gold font-serif tracking-widest hover:bg-nordic-gold/10 transition-colors text-sm uppercase"
              >
                {t("works.mobile_cta")}
              </Link>
            </div>
          </div>
        </section>

        {/* --- CONTATO --- */}
        <section id="contact" className="py-32 px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 flex items-end justify-between border-b border-nordic-parchment/10 pb-6">
              <div>
                <h2 className="text-4xl font-serif text-nordic-gold mb-3">{t("contact.title")}</h2>
                <p className="text-nordic-parchment/60 max-w-md">{t("contact.description")}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Canais diretos */}
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${config.email}`}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 p-5 border border-nordic-parchment/10 hover:border-nordic-gold/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 border border-nordic-iron group-hover:border-nordic-gold flex items-center justify-center transition-colors duration-300 shrink-0">
                    <Mail size={20} className="text-nordic-parchment/50 group-hover:text-nordic-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest text-nordic-bronze uppercase mb-1">E-mail</p>
                    <p className="text-nordic-parchment/80 text-sm">{config.email}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={config.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 p-5 border border-nordic-parchment/10 hover:border-nordic-gold/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 border border-nordic-iron group-hover:border-nordic-gold flex items-center justify-center transition-colors duration-300 shrink-0">
                    <MessageCircle size={20} className="text-nordic-parchment/50 group-hover:text-nordic-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest text-nordic-bronze uppercase mb-1">WhatsApp</p>
                    <p className="text-nordic-parchment/80 text-sm">{config.phone}</p>
                  </div>
                </motion.a>

                <motion.a
                  href={config.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-5 p-5 border border-nordic-parchment/10 hover:border-nordic-gold/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 border border-nordic-iron group-hover:border-nordic-gold flex items-center justify-center transition-colors duration-300 shrink-0">
                    <Linkedin size={20} className="text-nordic-parchment/50 group-hover:text-nordic-gold transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest text-nordic-bronze uppercase mb-1">LinkedIn</p>
                    <p className="text-nordic-parchment/80 text-sm">linkedin.com/in/kevinmcruzp</p>
                  </div>
                </motion.a>
              </div>

              {/* Redes e encerramento */}
              <div className="flex flex-col justify-between">
                <div className="space-y-6">
                  <p className="text-nordic-parchment/50 text-sm leading-relaxed border-l-2 border-nordic-gold/20 pl-4">
                    {t("contact.direct_msg")}
                  </p>
                  <div className="flex gap-4">
                    {[
                      { href: config.github, icon: <Github size={18} />, label: "GitHub" },
                      { href: config.instagram, icon: <Instagram size={18} />, label: "Instagram" },
                      { href: config.youtube, icon: <Youtube size={18} />, label: "YouTube" },
                    ].map(({ href, icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={label}
                        className="w-11 h-11 border border-nordic-iron hover:border-nordic-gold flex items-center justify-center text-nordic-parchment/40 hover:text-nordic-gold transition-all duration-300"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-16 pt-8 border-t border-nordic-parchment/10">
                  <p className="font-serif text-nordic-gold/40 text-xs tracking-[0.3em] uppercase">
                    Kevin Pizarro © {new Date().getFullYear()}
                  </p>
                  <p className="text-nordic-parchment/20 text-xs mt-1 tracking-widest">{t("contact.footer_built")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
