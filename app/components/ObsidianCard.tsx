import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface ObsidianCardProps {
    children: React.ReactNode;
    className?: string;
}

export const ObsidianCard = ({ children, className = "" }: ObsidianCardProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className={`group relative bg-nordic-void/40 backdrop-blur-sm border border-nordic-parchment/10 p-6 overflow-hidden ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(212, 180, 131, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            <div className="absolute inset-0 border border-nordic-gold/0 group-hover:border-nordic-gold/30 transition-colors duration-500" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};