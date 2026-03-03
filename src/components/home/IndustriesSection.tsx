import { AnimatedSection } from "@/components/AnimatedSection";

const industries = [
  { icon: "💇", title: "Salons & Spas", description: "Never miss bookings" },
  { icon: "🏥", title: "Clinics", description: "Auto appointments" },
  { icon: "🍽️", title: "Restaurants", description: "Instant table bookings" },
  { icon: "📚", title: "Coaching", description: "Convert enquiries" },
  { icon: "🏢", title: "Real Estate", description: "24/7 lead capture" },
  { icon: "💪", title: "Gyms", description: "Auto memberships" }
];

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-muted/20 py-16">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-foreground mb-2">
              Built for{" "}
              <span className="italic text-accent">Real Businesses</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="border border-border rounded-sm p-4 bg-background hover:border-accent transition-all glow-soft h-full text-center">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {industry.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
