import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

export const FinalCTA = () => {
  return (
    <section className="section-padding bg-muted/20 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <div className="border-2 border-accent rounded-sm p-12 bg-accent/5 glow-accent">
            <h2 className="heading-lg text-foreground mb-4">
              Ready to Stop Losing Customers?
            </h2>
            <p className="body-lg text-muted-foreground mb-8">
              See the system working on your business. Free demo, no commitment.
            </p>
            <Link
              to="/book-demo"
              className="inline-block px-12 py-4 text-lg font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300 hover:scale-105 glow-soft"
            >
              Book Free Demo
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
