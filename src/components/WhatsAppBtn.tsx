import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppBtn = () => {
  return (
    <motion.a
      href="https://wa.me/5533984286959?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20abrir%20meu%20MEI."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center group"
    >
      <div className="absolute inset-0 rounded-full border-2 border-white opacity-20 animate-ping"></div>
      <MessageCircle size={28} fill="white" className="relative z-10" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale comigo agora!
      </span>
    </motion.a>
  );
};
