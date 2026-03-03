import { AnimatedSection } from "@/components/AnimatedSection";

export const SolutionSection = () => {
  const features = [
    { icon: "📞", title: "Answers Every Call", description: "Picks up instantly. No missed calls." },
    { icon: "📅", title: "Books Appointments", description: "Schedules visits automatically." },
    { icon: "💬", title: "Replies to Enquiries", description: "Explains services, pricing, timings." },
    { icon: "🔔", title: "Sends Reminders", description: "Reduces no-shows automatically." }
  ];

  return (
    <section className="section-padding bg-background py-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-4">
              Your 24/7{" "}
              <span className="italic text-accent">AI Receptionist</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
              Never sleeps. Never forgets. Never keeps customers waiting.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <div className="border border-border rounded-sm p-6 bg-background hover:border-accent transition-all glow-soft h-full text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="text-lg font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
