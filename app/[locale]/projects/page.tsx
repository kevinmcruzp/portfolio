"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SnowFall } from "../../components/Snowfall";
import { TorchEffect } from "../../components/ui/animation/TorchEffect";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { PROJECTS } from "../../data/projects";
import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations();

  return (
    <main className="relative min-h-screen bg-nordic-void text-nordic-parchment overflow-x-hidden">
      <SnowFall />
      <TorchEffect />
      <LanguageSwitcher />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Link
            href="/#works"
            className="inline-flex items-center gap-2 text-nordic-parchment/50 hover:text-nordic-gold transition-colors text-sm tracking-widest uppercase font-serif mb-8"
          >
            <ArrowLeft size={16} /> {t("projects_page.back")}
          </Link>

          <div className="border-b border-nordic-parchment/10 pb-6 flex items-end justify-between">
            <div>
              <h1 className="text-5xl font-serif text-nordic-gold mb-3">{t("projects_page.title")}</h1>
              <p className="text-nordic-parchment/50 text-sm tracking-widest uppercase font-serif">
                {t("projects_page.count", { count: PROJECTS.length })}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.key}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative border border-nordic-parchment/10 hover:border-nordic-gold/40 transition-all duration-500 overflow-hidden bg-nordic-wood/20"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden bg-nordic-void">
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={project.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-6xl text-nordic-iron/20 font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-nordic-void/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-nordic-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                  <ExternalLink size={24} className="text-nordic-gold" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-serif text-white text-lg mb-3 group-hover:text-nordic-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-nordic-void border border-nordic-parchment/15 text-xs text-nordic-gold/70 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
