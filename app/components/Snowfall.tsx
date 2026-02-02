import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type SnowProps = {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  blur: number;
  drift: number;
  rotate: number;
  isFlake: boolean;
};

export const SnowFall = () => {
  const [snow, setSnow] = useState<SnowProps[]>([]);
  const snowflakeSvg = useMemo(() => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2v20" />
        <path d="M4.5 6.5l15 11" />
        <path d="M19.5 6.5l-15 11" />
        <path d="M7 4.5l2.5 4.3" />
        <path d="M17 4.5l-2.5 4.3" />
        <path d="M7 19.5l2.5-4.3" />
        <path d="M17 19.5l-2.5-4.3" />
      </svg>
    `;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, []);

  useEffect(() => {
    // Generate snow on client side to avoid hydration mismatch
    const p = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 18 + 10,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.5 + 0.2,
      blur: Math.random() * 1.8,
      drift: Math.random() * 80 + 20,
      rotate: Math.random() * 360,
      isFlake: Math.random() > 0.65,
    }));
    setSnow(p);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snow.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            filter: `blur(${p.blur}px)`,
            backgroundColor: p.isFlake ? "transparent" : "rgba(255,255,255,0.9)",
            borderRadius: p.isFlake ? 0 : "999px",
            backgroundImage: p.isFlake ? snowflakeSvg : "none",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          animate={{
            y: ["-10vh", "110vh"],
            x: ["0px", `${p.drift}px`, "0px"],
            rotate: [p.rotate, p.rotate + 180],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};