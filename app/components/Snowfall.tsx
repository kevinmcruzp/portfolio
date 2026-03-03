import { useEffect, useState } from "react";
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

const Snowflake = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Eixo vertical */}
    <line x1="50" y1="5" x2="50" y2="95" stroke="white" strokeWidth="3" strokeLinecap="round" />
    {/* Eixo diagonal 1 */}
    <line x1="11" y1="27.5" x2="89" y2="72.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
    {/* Eixo diagonal 2 */}
    <line x1="89" y1="27.5" x2="11" y2="72.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
    {/* Ramos superiores */}
    <line x1="50" y1="20" x2="38" y2="32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="20" x2="62" y2="32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    {/* Ramos inferiores */}
    <line x1="50" y1="80" x2="38" y2="68" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="50" y1="80" x2="62" y2="68" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    {/* Ramos diagonais */}
    <line x1="25" y1="35" x2="30" y2="50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="75" y1="35" x2="70" y2="50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="25" y1="65" x2="30" y2="50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="75" y1="65" x2="70" y2="50" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const SnowFall = () => {
  const [snow, setSnow] = useState<SnowProps[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 18 + 10,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.5 + 0.15,
      blur: Math.random() * 1.5,
      drift: (Math.random() - 0.5) * 120,
      rotate: Math.random() * 360,
      isFlake: Math.random() > 0.6,
    }));
    setSnow(p);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-200 overflow-hidden">
      {snow.map((p) =>
        p.isFlake ? (
          <motion.div
            key={p.id}
            className="absolute top-0"
            style={{
              left: p.left,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
            }}
            animate={{
              y: ["-10vh", "110vh"],
              x: ["0px", `${p.drift}px`, "0px"],
              rotate: [p.rotate, p.rotate + 360],
              opacity: [0, p.opacity, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          >
            <Snowflake size={p.size * 2.5} />
          </motion.div>
        ) : (
          <motion.div
            key={p.id}
            className="absolute top-0 rounded-full bg-white/90"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              filter: `blur(${p.blur}px)`,
            }}
            animate={{
              y: ["-10vh", "110vh"],
              x: ["0px", `${p.drift}px`, "0px"],
              opacity: [0, p.opacity, p.opacity, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear",
            }}
          />
        )
      )}
    </div>
  );
};