import { motion } from 'framer-motion';

const features = [
  { icon: '🌐', title: 'Live Internet Search', description: 'SIAK gives real-time answers from the web — news, YouTube, weather, and more.' },
  { icon: '🧑‍🏫', title: 'Personal AI Guru', description: 'Study help, career guidance, emotional support — all in one place.' },
  { icon: '🎤', title: 'Voice Chat', description: 'Speak to SIAK naturally and get instant responses, no typing needed.' },
  { icon: '🎨', title: 'Image Understanding', description: 'Send an image — SIAK will analyze, read, or solve it intelligently.' },
  { icon: '🧠', title: 'Multiple Personalities', description: 'Choose SIAK\'s mood: Friendly, Teacher, Peaceful Guide, or Business Coach.' },
  { icon: '🛠️', title: 'Mini Tools', description: 'In-app notes, calculator, translator, quotes, and reminders — all built in.' },
  { icon: '🔐', title: 'Private Smart Memory', description: 'SIAK remembers your name, goals, and chats — only if you allow it.' },
  { icon: '🇮🇳', title: 'India-Focused Assistant', description: 'SIAK is made for India – jobs, admissions, exams, and native languages support.' },
  { icon: '📴', title: 'Offline Mode', description: 'Use SIAK even without internet — access notes, tools, and reminders locally.' }
];

function Features() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10"
      >
        SIAK Features – More Than Just a Chatbot
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-lg hover:shadow-blue-500/20 transition"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
