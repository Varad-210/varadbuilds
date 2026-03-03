import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

export const PricingAnchor = () => {
  return (
    <section className="section-padding bg-background py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">
              Choose Your{" "}
              <span className="italic text-accent">Plan</span>
            </h2>
            <p className="body-lg text-muted-foreground">
              From online presence to full automation
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <AnimatedSection delay={0.1}>
            <div className="border border-border rounded-sm p-8 hover:border-accent transition-all duration-300 glow-soft h-full">
              <div className="mb-4">
                <span className="text-2xl">🟢</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Starter Presence
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get found online
              </p>
              <div className="mb-4">
                <p className="text-3xl font-heading font-semibold text-foreground">
                  ₹7,999
                </p>
                <p className="text-sm text-muted-foreground">+ ₹999/month</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="border-2 border-accent rounded-sm p-8 bg-accent/5 glow-accent h-full relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-background px-4 py-1 rounded-full text-xs font-medium">
                POPULAR
              </div>
              <div className="mb-4">
                <span className="text-2xl">🟡</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Growth Automation
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Auto-booking & follow-ups
              </p>
              <div className="mb-4">
                <p className="text-3xl font-heading font-semibold text-foreground">
                  ₹19,999
                </p>
                <p className="text-sm text-muted-foreground">+ ₹2,999/month</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="border border-border rounded-sm p-8 hover:border-accent transition-all duration-300 glow-soft h-full">
              <div className="mb-4">
                <span className="text-2xl">🔴</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                Pro AI Receptionist
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                24/7 AI answers calls
              </p>
              <div className="mb-4">
                <p className="text-3xl font-heading font-semibold text-foreground">
                  ₹44,999
                </p>
                <p className="text-sm text-muted-foreground">+ ₹6,999/month</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Link
              to="/pricing"
              className="inline-block px-10 py-3 text-base font-medium border border-border text-foreground rounded-sm hover:border-accent transition-all duration-300"
            >
              View All Packages
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
