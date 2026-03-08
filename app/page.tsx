"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Download, ArrowDown, Layout, Database, Code, Shield, ExternalLink, Instagram, Youtube, Smartphone, Globe, Mail, Phone, MessageCircle } from "lucide-react";
import { ForgedText } from "./components/ui/animation/ForgetText";
import Image from "next/image";
import Link from "next/link";
import { SnowFall } from "./components/Snowfall";
import { useState } from "react";
import { TorchEffect } from "./components/ui/animation/TorchEffect";
import { GateLoader } from "./components/ui/animation/GateLoader";
import { SideNav } from "./components/SideNav";
import { ObsidianCard } from "./components/ObsidianCard";
import photo from "../public/photo.jpg";
import { FEATURED_PROJECTS } from "./data/projects";
import { config } from "./config";

// --- DATA ---
const SKILLS = [
    {
        icon: <Layout />,
        title: "Frontend",
        desc: "React, Next.js, TypeScript, TailwindCSS, ChakraUI, Framer Motion",
    },
    {
        icon: <Code />,
        title: "Backend",
        desc: "Node.js, Express.js, C#, PHP, Java, Python, Socket.io, JWT",
    },
    {
        icon: <Database />,
        title: "Banco de Dados",
        desc: "PostgreSQL, MongoDB, SQLite, Prisma ORM",
    },
    {
        icon: <Shield />,
        title: "Cloud & DevOps",
        desc: "AWS, Vercel, Apache, GitHub, Docker, CI/CD",
    },
    {
        icon: <Smartphone />,
        title: "Mobile",
        desc: "React Native, Expo",
    },
    {
        icon: <Globe />,
        title: "Idiomas",
        desc: "Português (nativo), Español (fluente), English (intermediário)",
    },
];


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <main className="relative min-h-screen bg-nordic-void text-nordic-parchment selection:bg-nordic-gold selection:text-nordic-void overflow-x-hidden">
            <SnowFall />

            {isLoading && <GateLoader onComplete={() => setIsLoading(false)} />}

            <TorchEffect />

            <SideNav />

            <div className="max-w-350 mx-auto relative z-10 pl-6 pr-6 md:pr-32">
                {/* --- HOME SECTION --- */}
                <section 
                    id="hero" 
                    className={
                        `min-h-screen flex items-center pt-20 pb-20 ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-1000 relative`
                    }>
                    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                        {/* Coluna Esquerda: Texto de Apresentação */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <span className="inline-block text-xs font-mono tracking-[0.3em] text-nordic-bronze uppercase mb-4 border border-nordic-bronze/40 px-3 py-1">
                                Engenheiro de Software
                            </span>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-nordic-gold mb-6 leading-tight">
                                <ForgedText text="KEVIN" />
                                <ForgedText text="PIZARRO" />
                            </h1>

                            <p className="text-lg text-stone-400 max-w-lg leading-relaxed mb-8 border-l-4 border-nordic-iron pl-6">
                                Engenheiro de Software com foco em frontend e segurança — mais do que código, construo sistemas robustos, escaláveis e com propósito.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/projects" className="px-8 py-4 bg-nordic-bronze text-white font-serif tracking-widest hover:bg-white hover:text-nordic-wood transition-colors shadow-[0_0_20px_rgba(180,83,9,0.2)]">
                                    VER PROJETOS
                                </Link>
                                <a href={config.cv} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-nordic-iron text-stone-400 font-serif tracking-widest hover:border-nordic-gold hover:text-nordic-gold transition-colors flex items-center gap-2">
                                    <Download size={18} /> CV
                                </a>
                                <Link href="/about" className="px-8 py-4 border border-nordic-parchment/20 text-nordic-parchment/50 font-serif tracking-widest hover:border-nordic-gold hover:text-nordic-gold transition-colors text-sm flex items-center">
                                    SOBRE MIM
                                </Link>
                            </div>

                            <div className="flex gap-6 mt-12">
                                <a href={config.github}    target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/50 hover:text-nordic-gold transition-colors"><Github size={20} /></a>
                                <a href={config.linkedin}  target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/50 hover:text-nordic-gold transition-colors"><Linkedin size={20} /></a>
                                <a href={config.instagram} target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/50 hover:text-nordic-gold transition-colors"><Instagram size={20} /></a>
                                <a href={config.youtube}   target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/50 hover:text-nordic-gold transition-colors"><Youtube size={20} /></a>
                            </div>
                        </motion.div>

                        {/* Coluna Direita: Imagem / Moldura */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="relative w-87.5 h-112.5 md:w-112.5 md:h-137.5">
                                {/* Halo de luz atmosférico */}
                                <div className="absolute -inset-10 rounded-t-full blur-3xl bg-amber-900/15 z-0 pointer-events-none" style={{ willChange: "filter", transform: "translateZ(0)" }} />

                                {/* Anéis do portal */}
                                <div className="absolute -inset-6 border border-nordic-gold/12 rounded-t-full z-0" />
                                <div className="absolute -inset-4 border border-nordic-iron/50 rounded-t-full z-0" />
                                <div className="absolute -inset-2 border border-nordic-bronze/35 rounded-t-full z-0" />

                                {/* Container da Imagem */}
                                <div className="absolute inset-0 bg-nordic-wood rounded-t-full overflow-hidden border-b-4 border-nordic-bronze transition-all duration-700 rune-glow group/photo">
                                    <div className="w-full h-full bg-linear-to-b from-stone-800 to-nordic-void flex items-center justify-center">
                                        <span className="font-serif text-nordic-iron text-9xl opacity-20">img</span>
                                        <Image
                                            src={photo}
                                            alt="photo"
                                            fill
                                            className="object-cover sepia brightness-75 contrast-110 transition-all duration-700 group-hover/photo:brightness-90 group-hover/photo:contrast-125"
                                        />
                                    </div>

                                    {/* Overlay duotone dourado */}
                                    <div className="absolute inset-0 bg-amber-900/20 mix-blend-color" />

                                    {/* Gradiente inferior */}
                                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-nordic-void to-transparent" />
                                </div>

                                {/* Indicador de Experiência */}
                                <motion.div
                                    className="absolute -bottom-6 -left-6 bg-nordic-wood border border-nordic-bronze p-4 shadow-xl z-20"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <div className="text-nordic-gold font-serif text-2xl font-bold">2+</div>
                                    <div className="text-stone-500 text-xs tracking-widest uppercase">Anos XP</div>
                                </motion.div>
                            </div>
                        </motion.div>
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
                            <h2 className="text-4xl font-serif text-nordic-gold">Minha Saga</h2>
                            <span className="hidden md:block text-xs font-serif tracking-widest text-nordic-parchment/40">Habilidades & Ferramentas</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {SKILLS.map((skill, i) => (
                                <ObsidianCard key={i} className="h-full">
                                    <div className="mb-4 text-nordic-gold">{skill.icon}</div>
                                    <h3 className="text-xl font-serif text-white mb-2">{skill.title}</h3>
                                    <p className="text-sm text-nordic-parchment/60 leading-relaxed">
                                        {skill.desc}
                                    </p>
                                </ObsidianCard>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- OBRAS (PROJECTS) --- */}
                <section id="works" className="py-32 px-6 bg-nordic-void/20 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 flex items-end justify-between border-b border-nordic-parchment/10 pb-6">
                            <div>
                                <h2 className="text-4xl font-serif text-nordic-gold mb-3">Grandes Obras</h2>
                                <p className="text-nordic-parchment/60 max-w-xl">
                                    Cada projeto é tratado como uma arma única: feita sob medida, equilibrada e letalmente eficiente.
                                </p>
                            </div>
                            <Link
                                href="/projects"
                                className="hidden md:flex items-center gap-2 text-nordic-parchment/50 hover:text-nordic-gold transition-colors text-xs tracking-widest uppercase font-serif"
                            >
                                Ver todos <ExternalLink size={14} />
                            </Link>
                        </div>

                        <div className="space-y-24">
                            {FEATURED_PROJECTS.map((project, index) => (
                                <motion.div
                                    key={project.key}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8 }}
                                    className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                                >
                                    {/* Imagem do Projeto */}
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full md:w-3/5 aspect-video bg-nordic-void relative group cursor-pointer overflow-hidden border border-nordic-parchment/10"
                                    >
                                        {project.img && (
                                            <Image
                                                src={project.img}
                                                alt={project.alt}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-all duration-500"
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-linear-to-tr from-nordic-void/70 to-transparent z-10" />
                                        <div className="absolute inset-0 bg-nordic-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                                            <ExternalLink size={28} className="text-nordic-gold" />
                                        </div>
                                    </a>

                                    {/* Detalhes */}
                                    <div className="w-full md:w-2/5 space-y-6">
                                        <h3 className="text-4xl font-serif text-white">{project.title}</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {project.tags.map(t => (
                                                <span key={t} className="px-3 py-1 bg-nordic-void border border-nordic-parchment/20 text-xs text-nordic-gold font-mono">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="pt-4">
                                            <a
                                                href={project.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-white hover:text-nordic-gold transition-colors text-sm uppercase tracking-widest font-bold group"
                                            >
                                                Ver Projeto <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
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
                                Ver todos os projetos
                            </Link>
                        </div>
                    </div>
                </section>
                {/* --- CONTATO --- */}
                <section id="contact" className="py-32 px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-16 flex items-end justify-between border-b border-nordic-parchment/10 pb-6">
                            <div>
                                <h2 className="text-4xl font-serif text-nordic-gold mb-3">Vamos Forjar Algo</h2>
                                <p className="text-nordic-parchment/60 max-w-md">
                                    Aberto a oportunidades, freelas e conversas sobre tecnologia. Escolha a runa e entre em contato.
                                </p>
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
                                        Prefiro conversas diretas. Se tiver uma ideia, projeto ou proposta, manda mensagem — respondo rápido.
                                    </p>
                                    <div className="flex gap-4">
                                        {[
                                            { href: config.github,    icon: <Github size={18} />,    label: "GitHub"    },
                                            { href: config.instagram, icon: <Instagram size={18} />, label: "Instagram" },
                                            { href: config.youtube,   icon: <Youtube size={18} />,   label: "YouTube"   },
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

                                {/* Assinatura */}
                                <div className="mt-16 pt-8 border-t border-nordic-parchment/10">
                                    <p className="font-serif text-nordic-gold/40 text-xs tracking-[0.3em] uppercase">Kevin Pizarro © {new Date().getFullYear()}</p>
                                    <p className="text-nordic-parchment/20 text-xs mt-1 tracking-widest">Forjado com Next.js & Tailwind</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}