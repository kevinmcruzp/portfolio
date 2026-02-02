"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import { ForgedText } from "./components/ui/animation/ForgetText";
import Image from "next/image";
import { SnowFall } from "./components/Snowfall";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-nordic-void text-nordic-parchment selection:bg-nordic-gold selection:text-nordic-void overflow-x-hidden">      
        <SnowFall />

      <div className="max-w-350 mx-auto relative z-10 pl-6 pr-6 md:pr-32">
        <section id="hero" className="min-h-screen flex items-center pt-20 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Coluna Esquerda: Texto de Apresentação */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-nordic-gold mb-6 leading-tight">
                        <ForgedText text="KEVIN" />
                        <ForgedText text="PIZARRO" />
                    </h1>

                    <p className="text-lg text-stone-400 max-w-lg leading-relaxed mb-8 border-l-4 border-nordic-iron pl-6">
                        Desenvolvedor focado em interfaces robustas e arquiteturas escaláveis. Transformando código bruto em soluções duradouras.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="cursor-pointer px-8 py-4 bg-nordic-bronze text-white font-serif tracking-widest hover:bg-white hover:text-nordic-wood transition-colors shadow-[0_0_20px_rgba(180,83,9,0.2)]">
                            VER PORTFÓLIO
                        </button>
                        <button className="cursor-pointer px-8 py-4 border border-nordic-iron text-stone-400 font-serif tracking-widest hover:border-nordic-gold hover:text-nordic-gold transition-colors flex items-center gap-2">
                            <Download size={18} /> CV
                        </button>
                    </div>

                    <div className="flex gap-6 mt-12 opacity-60">
                        <Github className="hover:text-nordic-gold cursor-pointer transition-colors" />
                        <Linkedin className="hover:text-nordic-gold cursor-pointer transition-colors" />
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
                        <div className="absolute -inset-4 border-2 border-nordic-iron rounded-t-full z-0"></div>
                        <div className="absolute -inset-2 border border-nordic-bronze/30 rounded-t-full z-0"></div>
                        
                        {/* Container da Imagem */}
                        <div className="absolute inset-0 bg-nordic-wood rounded-t-full overflow-hidden border-b-4 border-nordic-bronze grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                             {/* Fundo gradiente para caso não tenha imagem ainda */}
                             <div className="w-full h-full bg-gradient-to-b from-stone-800 to-nordic-void flex items-center justify-center">
                                <span className="font-serif text-nordic-iron text-9xl opacity-20">img</span>
                                <Image src="https://picsum.photos/300/200?random=2" alt="photo" fill className="object-cover" />
                             </div>
                             
                             {/* Overlay gradiente inferior para integrar com o fundo */}
                             <div className="w-full absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nordic-void to-transparent" />
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
        </section>
      </div>
    </main>
  );
}