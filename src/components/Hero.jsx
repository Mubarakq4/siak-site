import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="py-20 text-center px-6 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-white mb-6"
      >
        Meet <span className="text-blue-500">SIAK</span><br />
        Your AI Assistant for Everything
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg text-gray-300 max-w-xl mx-auto"
      >
        SIAK brings together voice, vision, real-time knowledge, and personal guidance – all in one intelligent app.
      </motion.p>
    </section>
  );
}

export default Hero;
