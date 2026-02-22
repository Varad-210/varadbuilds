import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

export const FinalCTA = () => {
  return (
    <section className="section-padding bg-card border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="heading-xl text-foreground mb-8">
            Ready to Stop{" "}
            <span className="italic">Losing</span> Customers?
          </h2>
          <p className="body-lg text-muted-foreground max-w-xl mx-auto mb-12">
            See your AI receptionist in action. Book a free 15-minute demo and 
            hear the difference.
          </p>
          <Link
            to="/book-demo"
            className="inline-block px-12 py-5 text-lg font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300 hover:scale-[1.02]"
          >
            Book a Live Demo
          </Link>
          <p className="mt-6 text-sm text-muted-foreground">
            No commitment. No credit card. Just a conversation.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
