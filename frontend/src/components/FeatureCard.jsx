import { motion } from "framer-motion";

function FeatureCard({ icon, title, subtitle }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-slate-900 rounded-2xl p-8 text-center shadow-xl border border-slate-800 cursor-pointer"
    >
      <div className="text-5xl mb-5">{icon}</div>

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="text-gray-400 mt-3">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default FeatureCard;