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

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Large floating orb */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent/30 blur-3xl"
        />
        
        {/* Medium floating orb */}
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-silver/25 blur-3xl"
        />

        {/* Small floating orb */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-accent/35 blur-2xl"
        />

        {/* Additional accent orb */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-accent/25 blur-3xl"
        />

        {/* Geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-accent/40 rounded-lg backdrop-blur-sm"
          style={{ transform: "rotateX(45deg) rotateY(45deg)" }}
        />

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/3 w-24 h-24 border-2 border-silver/40 rounded-full backdrop-blur-sm"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center section-padding pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-base tracking-[0.3em] uppercase text-silver-muted mb-8 font-body"
        >
          AI Powered Solutions for Businesses
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="heading-xl text-foreground mb-8"
        >
          Never Miss a Customer —<br />
          <span className="italic text-accent">Even When You're Busy</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="body-lg text-muted-foreground mb-4">
            AI receptionist that answers calls, replies to enquiries and books customers automatically — 24/7.
          </p>
          <p className="text-muted-foreground">
            No staff needed. Setup in 3–5 days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-8"
        >
          <Link
            to="/book-demo"
            className="inline-block px-12 py-4 text-base font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300 hover:scale-105 glow-soft"
          >
            Book Free Demo
          </Link>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 border border-border rounded-sm p-6 bg-background/50 backdrop-blur-sm glow-soft"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-accent">✔</span>
              <span className="text-muted-foreground">Answers calls instantly</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✔</span>
              <span className="text-muted-foreground">Books appointments</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✔</span>
              <span className="text-muted-foreground">Works 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-accent">✔</span>
              <span className="text-muted-foreground">Hindi • Marathi • English</span>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
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
