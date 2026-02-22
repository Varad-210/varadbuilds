import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

export const PricingAnchor = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body">
            Investment
          </p>
          <h2 className="heading-lg text-foreground mb-8">
            Less Than the Cost of{" "}
            <span className="italic">One Employee</span>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            A full-time receptionist costs ₹15,000–₹25,000 per month. Our AI receptionist 
            works 24/7, never takes leave, and costs a fraction of that.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="border border-border rounded-sm p-10 md:p-16 glow-soft">
            <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-6 font-body">
              Starting at
            </p>
            <p className="font-heading text-5xl md:text-7xl font-semibold text-foreground mb-4">
              ₹4,999
              <span className="text-2xl md:text-3xl text-muted-foreground font-light">/month</span>
            </p>
            <p className="body-md text-muted-foreground mb-10">
              Unlimited calls. Unlimited bookings. Zero missed customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="px-10 py-4 text-base font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300"
              >
                Book a Live Demo
              </Link>
              <Link
                to="/pricing"
                className="px-10 py-4 text-base font-medium border border-border text-foreground rounded-sm hover:border-accent transition-all duration-300"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
