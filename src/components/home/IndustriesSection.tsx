import { AnimatedSection } from "@/components/AnimatedSection";

const industries = [
  { icon: "💇", title: "Salons & Spas", description: "Increase local bookings" },
  { icon: "🏥", title: "Clinics", description: "Build patient trust" },
  { icon: "🍽️", title: "Restaurants", description: "Smart POS & ordering" },
  { icon: "📚", title: "Coaching", description: "Generate student leads" },
  { icon: "🏢", title: "Real Estate", description: "High-ticket ad campaigns" },
  { icon: "💼", title: "Agencies", description: "Custom internal software" }
];

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-gradient-to-t from-white to-blue-50/30 py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              Built for{" "}
              <span className="italic text-primary">Real Businesses</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="glass-card p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full text-center group cursor-default">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
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
