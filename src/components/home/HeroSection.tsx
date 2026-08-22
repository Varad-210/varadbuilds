import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AIBrainLaptop from "@/components/AIBrainLaptop";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Grid pattern background for a subtle tech feel */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-[0.03]" />

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-24 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          
          {/* Left Content */}
          <div className="text-left space-y-2 z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide mb-6 border border-primary/20">
                Websites · Software · Meta Ads
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex flex-col space-y-2"
            >
              <p className="text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-6 font-body">
                DIGITAL SYSTEMS FOR GROWING BUSINESSES
              </p>
              
              {/* H1 with primary keyword — trustworthy, benefit-first */}
              <h1 className="heading-xl text-foreground mb-4">
                Web Development &amp; Digital Solutions<br />
                <span className="italic text-primary">for Growing Businesses in Pune.</span>
              </h1>
              
              {/* SEO body copy — geo-targeted intro */}
              <p className="body-lg text-muted-foreground mb-2 max-w-2xl text-lg md:text-xl font-medium leading-relaxed">
                VaradBuilds is a Pune-based digital agency helping businesses across Maharashtra build high-converting websites, automate operations with custom software, and attract qualified leads through Meta Ads.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-6 mt-2">
                  <Link
                    to="/book-demo"
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:shadow-[0_8px_35px_rgb(59,130,246,0.4)] hover:-translate-y-1"
                  >
                    Book a Free Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold bg-white border border-primary/20 text-foreground rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 shadow-sm"
                  >
                    View Our Services
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-1 pl-1">
                  <p className="text-sm text-muted-foreground font-medium">
                    Tell us what you're trying to improve. We'll help you figure out the right solution.
                  </p>
                  <Link
                    to="/about"
                    className="text-sm text-primary font-semibold hover:underline underline-offset-4 whitespace-nowrap"
                  >
                    About us →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — AIBrainLaptop 3D */}
          <div className="relative h-[420px] lg:h-[600px] w-full z-10">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full mix-blend-multiply opacity-40" />
            <AIBrainLaptop />
          </div>
        </div>
      </div>
    </section>
  );
};
