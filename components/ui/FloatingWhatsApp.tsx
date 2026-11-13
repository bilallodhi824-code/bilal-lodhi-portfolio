"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/data";
import { WhatsApp } from "@/components/ui/Icons";

export function FloatingWhatsApp() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-[85] flex items-center"
    >
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="WhatsApp"
        className="group relative flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-[#0d1410]/90 px-4 py-2.5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-[#122018] hover:shadow-[0_0_30px_rgba(37,211,102,0.25)]"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </span>

        <WhatsApp className="h-4 w-4 text-emerald-400" />

        <span className="hidden text-xs font-semibold text-fg sm:inline group-hover:text-emerald-300">
          Chat on WhatsApp
        </span>
      </a>
    </motion.aside>
  );
}

