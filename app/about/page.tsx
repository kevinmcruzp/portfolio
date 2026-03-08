"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Globe, Youtube, Github, Linkedin, Instagram } from "lucide-react";
import { SnowFall } from "../components/Snowfall";
import { TorchEffect } from "../components/ui/animation/TorchEffect";
import { ObsidianCard } from "../components/ObsidianCard";
import photo from "../../public/photo.jpg";

const STACK = [
    { category: "Linguagens", items: ["TypeScript", "JavaScript", "C#", "Python", "Java", "PHP"] },
    { category: "Frontend", items: ["React", "Next.js", "TailwindCSS", "ChakraUI", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Socket.io", "JWT", "REST APIs"] },
    { category: "Banco de Dados", items: ["PostgreSQL", "MongoDB", "SQLite", "Prisma ORM"] },
    { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Apache", "Docker", "GitHub Actions"] },
    { category: "Mobile", items: ["React Native", "Expo"] },
];

const EXPERIENCE = [
    {
        year: "Jan 2024 – Atual",
        role: "Frontend Developer & Segurança",
        place: "Aceno Tecnologia — Londrina, Brasil",
        desc: "Desenvolvimento de interfaces modernas e atuação em segurança de sistemas. Foco em qualidade, performance e boas práticas de segurança no frontend.",
    },
    {
        year: "2023",
        role: "Desenvolvedor de Software",
        place: "Departamento de TI — Hospital La Serena, Chile",
        desc: "Responsável pelo desenvolvimento de sistemas de aplicações web e desktop para o hospital público de La Serena.",
    },
    {
        year: "2019 – 2020",
        role: "Operador de Cash Logistic",
        place: "Brinks",
        desc: "Manipulação física de valores e quadratura na operação interna.",
    },
    {
        year: "2017",
        role: "Soldado",
        place: "13º Batalhão de Infantaria Blindado — Ponta Grossa, Brasil",
        desc: "Serviço militar obrigatório no Exército Brasileiro.",
    },
    {
        year: "2016 / 2018",
        role: "Marceneiro",
        place: "D'Luxo Móveis",
        desc: "Produção de móveis, atendimento ao cliente e administração de operações internas.",
    },
];

const EDUCATION = [
    {
        year: "2020 – 2023",
        role: "Engenharia Informática",
        place: "INACAP — Chile",
        desc: "Graduação em Engenharia Informática. Formação em arquitetura de sistemas, algoritmos, redes e engenharia de software.",
    },
    {
        year: "2020 – 2022",
        role: "Analista Programador",
        place: "INACAP — Chile",
        desc: "Liderança de equipes com metodologias ágeis, desenvolvimento e análise de soluções Full Stack. Finalizado com a segunda maior nota entre os formandos.",
    },
    {
        year: "2021",
        role: "React — 200h",
        place: "Rocketseat",
        desc: "Construção de interfaces modernas e reativas utilizando React de forma modular e escalável.",
    },
];

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-nordic-void text-nordic-parchment overflow-x-hidden">
            <SnowFall />
            <TorchEffect />

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
                        <ArrowLeft size={16} /> Voltar
                    </Link>
                    <div className="border-b border-nordic-parchment/10 pb-6">
                        <span className="text-xs font-mono tracking-[0.3em] text-nordic-bronze uppercase border border-nordic-bronze/40 px-3 py-1">
                            Engenheiro de Software
                        </span>
                        <h1 className="text-5xl font-serif text-nordic-gold mt-4">Kevin Pizarro</h1>
                    </div>
                </motion.div>

                {/* Bio + Foto */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="grid md:grid-cols-3 gap-12 mb-20"
                >
                    <div className="md:col-span-2 space-y-6">
                        <p className="text-nordic-parchment/80 leading-relaxed text-lg border-l-4 border-nordic-gold/30 pl-6">
                            Sou Engenheiro de Software formado pela INACAP (Chile), com atuação em Londrina, Brasil.
                            Hoje trabalho na Aceno Tecnologia com foco em desenvolvimento frontend e segurança de sistemas.
                        </p>
                        <p className="text-nordic-parchment/60 leading-relaxed">
                            Ao longo da minha trajetória atuei como Full Stack, o que me deu visão ampla sobre sistemas —
                            banco de dados, APIs, infraestrutura e cloud. Esse background me permite tomar decisões mais
                            precisas no frontend e identificar riscos de segurança que vão além da camada de interface.
                            Sou apaixonado por inovação e tecnologia, sempre aprendendo — atualmente evoluindo no inglês
                            e explorando criação de conteúdo no YouTube.
                        </p>

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
                                Engenharia de Software — INACAP, Chile
                            </div>
                            <div className="flex items-center gap-3 text-sm text-nordic-parchment/50">
                                <Globe size={14} className="text-nordic-bronze" />
                                Português · Español · English (intermediário)
                            </div>
                        </div>

                        <div className="flex gap-5 pt-4">
                            <a href="https://github.com/KevinMCruzP" target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Github size={20} /></a>
                            <a href="https://linkedin.com/in/kevinmcruzp" target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Linkedin size={20} /></a>
                            <a href="https://instagram.com/kevin.pizarro.cruz" target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Instagram size={20} /></a>
                            <a href="https://youtube.com/@KevinMCruzP" target="_blank" rel="noopener noreferrer" className="text-nordic-parchment/40 hover:text-nordic-gold transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div className="relative w-full aspect-[3/4] max-w-xs mx-auto md:mx-0">
                        <div className="absolute inset-0 rounded-t-full overflow-hidden border-2 border-nordic-bronze/30">
                            <Image src={photo} alt="Kevin Pizarro" fill className="object-cover sepia brightness-75" />
                            <div className="absolute inset-0 bg-amber-900/20 mix-blend-color" />
                        </div>
                    </div>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mb-20"
                >
                    <h2 className="text-2xl font-serif text-nordic-gold mb-8 pb-4 border-b border-nordic-parchment/10">Trajetória</h2>

                    <div className="grid md:grid-cols-2 gap-x-16">
                        {/* Experiência */}
                        <div>
                            <h3 className="text-xs font-mono tracking-[0.3em] text-nordic-bronze uppercase mb-6">Experiência</h3>
                            <div className="space-y-0">
                                {EXPERIENCE.map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <span className="text-xs font-mono text-nordic-bronze/60 tracking-widest whitespace-nowrap pt-1">{item.year}</span>
                                            {i < EXPERIENCE.length - 1 && <div className="w-px flex-1 bg-nordic-parchment/10 mt-2" />}
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="font-serif text-white text-base">{item.role}</h4>
                                            <p className="text-nordic-bronze text-xs tracking-widest uppercase mb-2">{item.place}</p>
                                            <p className="text-nordic-parchment/60 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Formação */}
                        <div>
                            <h3 className="text-xs font-mono tracking-[0.3em] text-nordic-bronze uppercase mb-6">Formação</h3>
                            <div className="space-y-0">
                                {EDUCATION.map((item, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <span className="text-xs font-mono text-nordic-bronze/60 tracking-widest whitespace-nowrap pt-1">{item.year}</span>
                                            {i < EDUCATION.length - 1 && <div className="w-px flex-1 bg-nordic-parchment/10 mt-2" />}
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="font-serif text-white text-base">{item.role}</h4>
                                            <p className="text-nordic-bronze text-xs tracking-widest uppercase mb-2">{item.place}</p>
                                            <p className="text-nordic-parchment/60 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mb-20"
                >
                    <h2 className="text-2xl font-serif text-nordic-gold mb-8 pb-4 border-b border-nordic-parchment/10">Arsenal Técnico</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {STACK.map((group, i) => (
                            <ObsidianCard key={i}>
                                <h3 className="font-serif text-nordic-gold text-sm tracking-widest uppercase mb-4">{group.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span key={item} className="px-2 py-0.5 bg-nordic-void border border-nordic-parchment/15 text-xs text-nordic-parchment/70 font-mono">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </ObsidianCard>
                        ))}
                    </div>
                </motion.div>

                {/* Fun Facts */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-serif text-nordic-gold mb-8 pb-4 border-b border-nordic-parchment/10">Além do Código</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <ObsidianCard>
                            <p className="text-nordic-parchment/60 leading-relaxed text-sm">
                                Antes de entrar no mundo da tecnologia, trabalhei como <span className="text-nordic-gold">pescador</span> e <span className="text-nordic-gold">marceneiro</span> — profissões que ensinaram paciência, precisão e o valor de construir coisas com as próprias mãos. Essa mentalidade acompanha cada linha de código que escrevo.
                            </p>
                        </ObsidianCard>
                        <ObsidianCard>
                            <p className="text-nordic-parchment/60 leading-relaxed text-sm">
                                Tenho interesse em criar <span className="text-nordic-gold">conteúdo para o YouTube</span> sobre desenvolvimento e tecnologia. Acredito que ensinar é a melhor forma de consolidar conhecimento — e que a comunidade cresce quando compartilhamos o que sabemos.
                            </p>
                        </ObsidianCard>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
