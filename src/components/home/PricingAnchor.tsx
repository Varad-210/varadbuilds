import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

export const PricingAnchor = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-blue-50/30 to-white py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">
              Choose Your{" "}
              <span className="italic text-primary">Plan</span>
            </h2>
            <p className="body-lg text-muted-foreground font-medium">
              From online presence to full automation
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
              <div className="mb-6">
                <span className="text-4xl drop-shadow-sm">🟢</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                Starter Presence
              </h3>
              <p className="text-sm text-muted-foreground mb-8 flex-grow">
                Get found online
              </p>
              <div>
                <p className="text-4xl font-heading font-bold text-foreground">
                  ₹7,999
                </p>
                <p className="text-sm text-muted-foreground mt-1 font-medium">+ ₹999/month</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-10 border-primary/40 bg-white/80 shadow-[0_20px_40px_rgb(59,130,246,0.1)] h-full relative flex flex-col transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-blue-400 text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow-md">
                POPULAR
              </div>
              <div className="mb-6">
                <span className="text-4xl drop-shadow-sm">🟡</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                Growth Automation
              </h3>
              <p className="text-sm text-muted-foreground mb-8 flex-grow">
                Auto-booking & follow-ups
              </p>
              <div>
                <p className="text-4xl font-heading font-bold text-foreground">
                  ₹19,999
                </p>
                <p className="text-sm text-muted-foreground mt-1 font-medium">+ ₹2,999/month</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="glass-card p-10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
              <div className="mb-6">
                <span className="text-4xl drop-shadow-sm">🔴</span>
              </div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                Pro AI Receptionist
              </h3>
              <p className="text-sm text-muted-foreground mb-8 flex-grow">
                24/7 AI answers calls
              </p>
              <div>
                <p className="text-4xl font-heading font-bold text-foreground">
                  ₹44,999
                </p>
                <p className="text-sm text-muted-foreground mt-1 font-medium">+ ₹6,999/month</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Link
              to="/pricing"
              className="inline-block px-10 py-3.5 text-base font-semibold border-2 border-primary/20 text-foreground bg-white/50 backdrop-blur-sm rounded-xl hover:border-primary/50 hover:bg-white transition-all duration-300 shadow-sm"
            >
              View All Packages
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
