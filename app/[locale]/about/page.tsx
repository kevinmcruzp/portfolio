"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Globe, Youtube, Github, Linkedin, Instagram } from "lucide-react";
import { SnowFall } from "../../components/Snowfall";
import { TorchEffect } from "../../components/ui/animation/TorchEffect";
import { ObsidianCard } from "../../components/ObsidianCard";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import photo from "../../../public/photo.jpg";
import { config } from "../../config";
import { useTranslations } from "next-intl";

const STACK = [
  { categoryKey: "stack_languages", items: ["TypeScript", "JavaScript", "C#", "Python", "Java", "PHP"] },
  { categoryKey: "stack_frontend",  items: ["React", "Next.js", "TailwindCSS", "ChakraUI", "Framer Motion"] },
  { categoryKey: "stack_backend",   items: ["Node.js", "Express.js", "Socket.io", "JWT", "REST APIs"] },
  { categoryKey: "stack_database",  items: ["PostgreSQL", "MongoDB", "SQLite", "Prisma ORM"] },
  { categoryKey: "stack_cloud",     items: ["AWS", "Vercel", "Apache", "Docker", "GitHub Actions"] },
  { categoryKey: "stack_mobile",    items: ["React Native", "Expo"] },
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};


function TimelineList({
  items,
  current,
}: {
  items: { year: string; role: string; place: string; desc: string }[];
  current?: boolean;
}) {
  return (
    <div className="relative">
      {/* growing line */}
      <motion.div
        className="absolute left-[4.5rem] top-3 bottom-0 w-px bg-gradient-to-b from-nordic-gold/50 via-nordic-parchment/10 to-transparent"
        style={{ transformOrigin: "top" }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
      />

      <div className="space-y-0">
        {items.map((item, i) => {
          const isActive = i === 0 && current;
          return (
            <motion.div
              key={i}
              className="flex gap-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            >
              {/* year */}
              <div className="flex flex-col items-end w-16 shrink-0 pt-1">
                <span className="text-[10px] font-mono text-nordic-bronze/60 tracking-widest whitespace-nowrap leading-tight text-right">
                  {item.year}
                </span>
              </div>

              {/* dot */}
              <div className="flex flex-col items-center shrink-0 pt-[6px]">
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.3, type: "spring", stiffness: 300 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-[-6px] rounded-full bg-nordic-gold/25"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 ${
                      isActive
                        ? "bg-nordic-gold border-nordic-gold shadow-[0_0_12px_4px_rgba(212,175,55,0.6)]"
                        : "bg-nordic-void border-nordic-parchment/40"
                    }`}
                  />
                </motion.div>
              </div>

              {/* content */}
              <motion.div
                className="pb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
              >
                <h4 className={`font-serif text-base ${isActive ? "text-nordic-gold" : "text-white"}`}>
                  {item.role}
                </h4>
                <p className="text-nordic-bronze text-xs tracking-widest uppercase mb-2">{item.place}</p>
                <p className="text-nordic-parchment/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function AboutPage() {
  const t = useTranslations("about");

  const EXPERIENCE = [
    { year: t("exp_current"), role: t("exp_role1"), place: t("exp_place1"), desc: t("exp_desc1") },
    { year: "2023",           role: t("exp_role2"), place: t("exp_place2"), desc: t("exp_desc2") },
    { year: "2019 – 2020",    role: t("exp_role3"), place: t("exp_place3"), desc: t("exp_desc3") },
    { year: "2017",           role: t("exp_role4"), place: t("exp_place4"), desc: t("exp_desc4") },
    { year: "2016 / 2018",    role: t("exp_role5"), place: t("exp_place5"), desc: t("exp_desc5") },
  ];

  const EDUCATION = [
    { year: "2020 – 2023", role: t("edu_role1"), place: t("edu_place1"), desc: t("edu_desc1") },
    { year: "2020 – 2022", role: t("edu_role2"), place: t("edu_place2"), desc: t("edu_desc2") },
    { year: "2021",        role: t("edu_role3"), place: t("edu_place3"), desc: t("edu_desc3") },
  ];

  return (
    <main className="relative min-h-screen bg-nordic-void text-nordic-parchment [overflow-x:clip]">
      <SnowFall />
      <TorchEffect />
      <LanguageSwitcher />

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-nordic-parchment/50 hover:text-nordic-gold transition-colors text-sm tracking-widest uppercase font-serif mb-8"
          >
            <ArrowLeft size={16} /> {t("back")}
          </Link>
          <div className="border-b border-nordic-parchment/10 pb-6">
            <span className="text-xs font-mono tracking-[0.3em] text-nordic-bronze uppercase border border-nordic-bronze/40 px-3 py-1">
              {t("badge")}
            </span>
            <h1 className="text-5xl font-serif text-nordic-gold mt-4">Kevin Pizarro</h1>
          </div>
        </motion.div>

        {/* Bio + Foto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid md:grid-cols-3 gap-12 mb-20"
        >
          <div className="md:col-span-2 space-y-6">
            <p className="text-nordic-parchment/80 leading-relaxed text-lg border-l-4 border-nordic-gold/30 pl-6">
              {t("bio1")}
            </p>
            <p className="text-nordic-parchment/60 leading-relaxed">{t("bio2")}</p>

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-nordic-parchment/50">
                <MapPin size={14} className="text-nordic-bronze" />
                Londrina, Paraná — Brasil
              </div>
              <div className="flex items-center gap-3 text-sm text-nordic-parchment/50">
                <Briefcase size={14} className="text-nordic-bronze" />
                Aceno Tecnologia
              </div>
              <div className="flex items-center gap-3 text-sm text-nordic-parchment/50">
                <GraduationCap size={14} className="text-nordic-bronze" />
                {t("edu_role1")} — INACAP, Chile
              </div>
              <div className="flex items-center gap-3 text-sm text-nordic-parchment/50">
                <Globe size={14} className="text-nordic-bronze" />
                {t("languages_spoken")}
              </div>
            </div>

            <div className="flex gap-5 pt-4">
              <a href={config.github}    target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Github size={20} /></a>
              <a href={config.linkedin}  target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Linkedin size={20} /></a>
              <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Instagram size={20} /></a>
              <a href={config.youtube}   target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <motion.div
            className="relative w-full aspect-3/4 max-w-xs mx-auto md:mx-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="absolute inset-0 rounded-t-full overflow-hidden border-2 border-nordic-bronze/30">
              <Image src={photo} alt="Kevin Pizarro" fill className="object-cover sepia brightness-75" />
              <div className="absolute inset-0 bg-amber-900/20 mix-blend-color" />
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <motion.h2
            className="text-2xl font-serif text-nordic-gold mb-8 pb-4 border-b border-nordic-parchment/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {t("timeline_title")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-x-16">
            <div>
              <h3 className="text-xs font-mono tracking-[0.3em] text-nordic-bronze uppercase mb-6">
                {t("experience_label")}
              </h3>
              <TimelineList items={EXPERIENCE} current />
            </div>

            <div>
              <h3 className="text-xs font-mono tracking-[0.3em] text-nordic-bronze uppercase mb-6">
                {t("education_label")}
              </h3>
              <TimelineList items={EDUCATION} />
            </div>
          </div>
        </div>

        {/* Stack */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-serif text-nordic-gold mb-8 pb-4 border-b border-nordic-parchment/10">
            {t("arsenal_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STACK.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              >
                <ObsidianCard>
                  <h3 className="font-serif text-nordic-gold text-sm tracking-widest uppercase mb-4">
                    {t(group.categoryKey as Parameters<typeof t>[0])}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="px-2 py-0.5 bg-nordic-void border border-nordic-parchment/15 text-xs text-nordic-parchment/70 font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </ObsidianCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Beyond Code */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-2xl font-serif text-nordic-gold mb-8 pb-4 border-b border-nordic-parchment/10">
            {t("beyond_title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              t.rich("beyond1", { gold: (chunks) => <span className="text-nordic-gold">{chunks}</span> }),
              t.rich("beyond2", { gold: (chunks) => <span className="text-nordic-gold">{chunks}</span> }),
            ].map((content, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              >
                <ObsidianCard>
                  <p className="text-nordic-parchment/60 leading-relaxed text-sm">{content}</p>
                </ObsidianCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
