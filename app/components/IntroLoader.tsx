"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Hammer, Sparkles } from "lucide-react"; // Ícone temático

export default function IntroLoader() {

  return (
    <motion.div className="z-20 flex flex-col items-center relative">
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

        <div className="mt-4 w-48 h-1 bg-nordic-iron rounded overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-nordic-bronze to-nordic-gold"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5 }}
          />
        </div>

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