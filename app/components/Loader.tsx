"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Initializing Data...",
    "Loading Portfolio...",
    "Almost Ready...",
    "Here We Go..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 120);

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-[#0f172a] flex flex-col items-center justify-center"
    >
      {/* Glow Circle */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-24 h-24 rounded-full bg-cyan-500/20 blur-2xl mb-10"
      />

      {/* Name */}
      <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Loading Portfolio
      </h1>

      {/* Changing Text */}
      <motion.p
        key={textIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-gray-400"
      >
        {texts[textIndex]}
      </motion.p>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-800 mt-8 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-gray-500 text-sm mt-2">{progress}%</p>
    </motion.div>
  );
}