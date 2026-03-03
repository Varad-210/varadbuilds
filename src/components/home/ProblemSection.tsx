import { AnimatedSection } from "@/components/AnimatedSection";

export const ProblemSection = () => {
  return (
    <section className="section-padding bg-muted/20 py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-6">
              Your Phone Rings…<br />
              <span className="italic text-accent">Customers Leave</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <AnimatedSection delay={0.1}>
            <div className="border border-border rounded-sm p-6 bg-background hover:border-accent transition-all glow-soft text-center">
              <div className="text-4xl mb-3">📞</div>
              <p className="text-foreground font-medium">Calls missed</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="border border-border rounded-sm p-6 bg-background hover:border-accent transition-all glow-soft text-center">
              <div className="text-4xl mb-3">⏰</div>
              <p className="text-foreground font-medium">Replies delayed</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="border border-border rounded-sm p-6 bg-background hover:border-accent transition-all glow-soft text-center">
              <div className="text-4xl mb-3">❌</div>
              <p className="text-foreground font-medium">Follow-ups forgotten</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4}>
          <div className="border-2 border-accent/30 rounded-sm p-8 bg-accent/5 glow-accent text-center">
            <p className="text-xl text-foreground font-semibold mb-3">
              Customers don't wait. They call the next business.
            </p>
            <p className="text-muted-foreground">
              Most businesses lose 30–50% of enquiries because nobody responded fast enough.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
