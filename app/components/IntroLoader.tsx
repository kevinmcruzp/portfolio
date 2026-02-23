"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Hammer, Sparkles } from "lucide-react"; // Ícone temático

export default function IntroLoader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >

      <Sparkles className="text-nordic-gold animate-pulse" />

      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="w-24 h-24 border-2 border-nordic-iron/20 rounded-full flex items-center justify-center relative">
            {/* Spinning Ring */}
            <motion.div
              className="absolute inset-0 border-t-2 border-nordic-gold rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            <Hammer className="w-14 h-14 text-nordic-gold" />
          </div>

        </motion.div>

        <motion.div
          className="mt-4 h-1 w-32 bg-slate-800 rounded overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-viking-gold"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="mt-2 text-viking-mist font-serif text-sm tracking-[0.3em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          FORJANDO...
        </motion.p>
      </div>
    </motion.div>
  );
}