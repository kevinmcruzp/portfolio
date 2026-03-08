"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import doorsOfDurin from "../../../../public/doors-of-durin.png";

export const GateLoader = ({ onComplete }: { onComplete: () => void }) => {
    return (
        <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-nordic-void overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 4, ease: "easeInOut" }}
            onAnimationComplete={onComplete}
        >
            {/* Glow central que surge antes do portão abrir */}
            <motion.div
                className="absolute rounded-full bg-amber-400 blur-3xl pointer-events-none"
                initial={{ opacity: 0, width: 80, height: 80 }}
                animate={{
                    opacity: [0, 0, 0.15, 0.4, 0],
                    width: [80, 80, 200, 600, 1400],
                    height: [80, 80, 200, 600, 1400],
                }}
                transition={{
                    duration: 4,
                    times: [0, 0.4, 0.6, 0.8, 1],
                    ease: "easeIn",
                }}
            />

            {/* Portão de Mória — zoom-through */}
            <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: [0.8, 1, 1, 6],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 4,
                    times: [0, 0.2, 0.7, 1],
                    ease: ["easeOut", "linear", "easeIn"],
                }}
            >
                <Image
                    src={doorsOfDurin}
                    alt="The Doors of Durin"
                    width={560}
                    height={560}
                    priority
                    style={{
                        height: "auto",
                        filter: "invert(1) hue-rotate(40deg) saturate(0.55) brightness(1.2)",
                    }}
                />
            </motion.div>

            {/* Inscrição "Speak friend and enter" */}
            <motion.p
                className="absolute bottom-16 font-serif text-nordic-gold/50 tracking-[0.4em] text-xs uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, times: [0, 0.2, 0.6, 0.9] }}
            >
                Speak, friend, and enter
            </motion.p>
        </motion.div>
    );
};
