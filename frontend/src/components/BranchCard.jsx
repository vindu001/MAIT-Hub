import { motion } from "framer-motion";

function BranchCard({ emoji, branch }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center cursor-pointer"
    >
      <div className="text-6xl">{emoji}</div>

      <h2 className="text-2xl font-bold text-white mt-4">
        {branch}
      </h2>

      <p className="text-gray-400 mt-2">
        Semester 1 - Semester 8
      </p>
    </motion.div>
  );
}

export default BranchCard;