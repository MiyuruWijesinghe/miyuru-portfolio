import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="fixed inset-0 bg-gray-950 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: 1
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="text-6xl font-bold text-blue-400
        drop-shadow-[0_0_15px_rgba(59,130,246,0.9)]"
      >
        MKW
      </motion.div>
    </motion.div>
  );
}

export default Loader;