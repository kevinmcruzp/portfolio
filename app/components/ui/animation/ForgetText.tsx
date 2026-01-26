"use client";
import { motion } from "framer-motion";

// O texto esquenta e brilha ao passar o mouse, distorcendo levemente
export const ForgedText = ({ text, className = "" }: { text: string, className?: string }) => {
    return (
      <div className={`flex flex-wrap ${className}`}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            className="inline-block relative cursor-default"
            initial={{ color: "#d4b483" }} // Gold
            whileHover={{
                color: "#fff", // White hot
                textShadow: "0px 0px 8px rgba(251, 146, 60, 1), 0px 0px 20px rgba(180, 83, 9, 0.8)", // Orange glow
                scale: 1.1,
                y: -2,
                transition: { duration: 0.1 }
            }}
            animate={{
                color: "#d4b483",
                textShadow: "0px 0px 0px rgba(0,0,0,0)",
                scale: 1,
                y: 0,
                transition: { duration: 1.5 } // Cooldown lento (esfriando metal)
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>
    );
  };