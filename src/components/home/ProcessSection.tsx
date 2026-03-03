import { AnimatedSection } from "@/components/AnimatedSection";

const steps = [
  { step: "1", title: "We Understand", desc: "Learn your business & services" },
  { step: "2", title: "We Setup", desc: "Configure & train your AI" },
  { step: "3", title: "You Go Live", desc: "Start handling customers 24/7" }
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-background py-16">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <h2 className="heading-lg text-foreground text-center mb-12">
            Setup in{" "}
            <span className="italic text-accent">3–5 Days</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="text-center p-6 bg-background border border-border rounded-sm hover:border-accent transition-all glow-soft">
                <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-heading text-xl font-semibold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-muted-foreground mt-8">
            No technical knowledge required. We handle everything.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
