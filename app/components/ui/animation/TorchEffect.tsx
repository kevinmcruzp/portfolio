import { useMotionValue, useMotionTemplate } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const TorchEffect = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  useEffect(() => {
    const handleWindowMouseMove = (e: any) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 transition duration-300 group-hover:opacity-100"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(212, 180, 131, 0.07),
            transparent 80%
          )
        `,
      }}
    />
  );
};