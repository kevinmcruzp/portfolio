import { motion } from "framer-motion";
import { Hammer } from "lucide-react";
import IntroLoader from "../../IntroLoader";

export const GateLoader = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-nordic-void text-nordic-gold"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 1, delay: 3, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    >
      {/* Portões se abrindo */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-nordic-wood border-r border-nordic-bronze/20 z-10"
        animate={{ x: "-100%" }}
        transition={{ duration: 1.5, delay: 2.5, ease: "circIn" }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-nordic-wood border-l border-nordic-bronze/20 z-10"
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, delay: 2.5, ease: "circIn" }}
      />

      {/* Conteúdo Central do Loader */}
      <IntroLoader />
    </motion.div>
  );
};