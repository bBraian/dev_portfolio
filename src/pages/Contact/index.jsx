import { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";
import { Footer } from "../../components/Footer";
import { Mail } from "lucide-react";

export default function Contact() {
  const { language } = useContext(AppContext);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-[calc(100vh-80px)] pt-20"
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="mb-8 p-4 rounded-full bg-blue-500/10 text-blue-500 dark:bg-blue-500/20">
          <Mail size={48} />
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-titles-light dark:text-titles-dark mb-6 transition-colors">
          {language.contact_title}
        </h1>

        <a
          href="mailto:braianvoficial@gmail.com"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient hover:scale-105 transition-transform inline-block break-all"
        >
          braianvoficial@gmail.com
        </a>

        <div className="mt-12 flex flex-col items-center gap-2 text-contents-light dark:text-contents-dark">
          <p className="text-lg">Brochier, RS - Brazil</p>
          <p className="text-lg font-medium">+55 51 99626-8989</p>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
}
