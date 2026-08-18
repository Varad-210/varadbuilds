import { AnimatedSection } from "@/components/AnimatedSection";

export const ProblemSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50/30 py-24 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">
              Your business may not need more tools.<br />
              <span className="italic text-primary">It may need a better system.</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card p-10 md:p-14 border-primary/10 shadow-lg text-center space-y-6">
            <p className="text-xl text-muted-foreground">You may already have a website.</p>
            <p className="text-xl text-muted-foreground">You may already run ads.</p>
            <p className="text-xl text-muted-foreground">You may already use spreadsheets, forms, WhatsApp, CRMs, or other software.</p>
            
            <div className="w-16 h-px bg-border mx-auto my-8"></div>

            <p className="text-2xl font-bold text-foreground">
              But if these systems don't work together, growth becomes harder than it needs to be.
            </p>

            <ul className="text-lg text-muted-foreground space-y-3 mt-8 font-medium">
              <li>Leads get missed.</li>
              <li>Follow-ups get delayed.</li>
              <li>Teams repeat manual work.</li>
              <li>Customers lose trust when your online presence feels outdated.</li>
              <li>And you keep spending time fixing problems that technology should have solved already.</li>
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-3xl font-heading font-bold text-primary underline decoration-primary/20 underline-offset-8">
              That's where VaradBuilds comes in.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
