import { AnimatedSection } from "@/components/AnimatedSection";
import { Settings, Brain, Rocket } from "lucide-react";

const steps = [
  {
    icon: Settings,
    number: "01",
    title: "Setup",
    description: "We configure your AI agent with your business details, services, pricing, and FAQs. Takes under 24 hours.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Training",
    description: "Your agent learns how you want calls handled — your tone, your rules, your brand. We fine-tune until perfect.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Go Live",
    description: "Connect to your phone number and start answering calls. You monitor everything from a simple dashboard.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body text-center">
            How It Works
          </p>
          <h2 className="heading-lg text-foreground text-center mb-6">
            Three Steps to{" "}
            <span className="italic">Zero Missed Calls</span>
          </h2>
          <div className="gradient-line max-w-32 mx-auto mb-16" />
        </AnimatedSection>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-12 py-12 border-b border-border last:border-b-0 group">
                <div className="flex items-center gap-6 md:w-48 shrink-0">
                  <span className="font-heading text-4xl md:text-5xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                    {step.number}
                  </span>
                  <step.icon className="w-6 h-6 text-silver-muted" />
                </div>
                <div>
                  <h3 className="heading-md text-foreground mb-3">{step.title}</h3>
                  <p className="body-md text-muted-foreground max-w-lg">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
