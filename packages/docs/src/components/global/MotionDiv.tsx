import { motion } from "framer-motion";
import React from "react";

interface MotionDivProps {
    initialY?: number;
    delay?: number;
    children: React.ReactNode;
}

const MotionDiv: React.FC<MotionDivProps> = ({
    children,
    initialY = 20,
    delay = 0,
    ...props
}) => (
    <motion.div
        initial={{ opacity: 0, y: initialY }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        {...props}
    >
        {children}
    </motion.div>
);

export default MotionDiv;