"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "./themeContext";

export default function PageTransition({ children }) {
  const pathName = usePathname();
  const { dark } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathName} className="relative">

        {/* Content */}
        <motion.div>
          {children}
        </motion.div>

        {/* Overlay */}
        <motion.div
          initial={{ 
            scaleY: 1,
            transformOrigin: "bottom"
          }}
          animate={{ 
            scaleY: 0,
            transformOrigin: "top"
          }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
          }}
          className={`fixed inset-0 pointer-events-none ${dark ? 'bg-white' : 'bg-black'}`}
        />
      </motion.div>
    </AnimatePresence>
  );
}
