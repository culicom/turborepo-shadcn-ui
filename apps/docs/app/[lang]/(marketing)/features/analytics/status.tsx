"use client";

import { motion } from "framer-motion";

export function Status({ y, label }) {
  return (
    <div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ height: y / 2 < 200 ? y : 200, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.5 }}
        className={`w-2 bg-gray-200 rounded-sm`}
      ></motion.div>
      <span className="text-xs">{label}</span>
    </div>
  );
}
