import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center section-padding pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-silver-muted mb-8 font-body"
        >
          AI Voice Agents for Business
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="heading-xl text-foreground mb-8"
        >
          Never Miss a{" "}
          <span className="italic">Customer Call</span>
          <br />
          Again
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="body-lg text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Your AI receptionist answers every call, books appointments, and handles 
          inquiries — 24 hours a day, 7 days a week. No missed opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/book-demo"
            className="px-10 py-4 text-base font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300 hover:scale-[1.02]"
          >
            Book a Live Demo
          </Link>
          <Link
            to="/services"
            className="px-10 py-4 text-base font-medium border border-border text-foreground rounded-sm hover:border-accent transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-transparent via-silver to-transparent mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};
