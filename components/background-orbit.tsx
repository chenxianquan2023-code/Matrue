"use client";

import { motion } from "framer-motion";

export function BackgroundOrbit() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* 主大光团 */}
      <motion.div
        className="absolute top-[-10%] left-[10%] w-[40rem] h-[40rem] rounded-full bg-primary/18 blur-3xl"
        animate={{ x: ["0%", "8%", "-4%", "0%"], y: ["0%", "6%", "2%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* 次级光团 */}
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[36rem] h-[36rem] rounded-full bg-cyan-400/14 blur-3xl"
        animate={{ x: ["0%", "-6%", "4%", "0%"], y: ["0%", "-4%", "0%", "2%"] }}
        transition={{ duration: 48, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* 中央轻微脉动 */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[22rem] h-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [0.9, 1.05, 0.95, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

