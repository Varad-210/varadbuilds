import { AnimatedSection } from "@/components/AnimatedSection";
import { Building2, UtensilsCrossed, Stethoscope, Home, Scissors } from "lucide-react";

const industries = [
  { icon: Building2, name: "Hotels", description: "Room bookings, check-in inquiries, concierge services" },
  { icon: UtensilsCrossed, name: "Restaurants", description: "Table reservations, menu questions, event bookings" },
  { icon: Stethoscope, name: "Clinics", description: "Appointment scheduling, prescription refills, lab results" },
  { icon: Home, name: "Real Estate", description: "Property inquiries, site visit bookings, follow-ups" },
  { icon: Scissors, name: "Salons", description: "Appointment bookings, service details, availability checks" },
];

export const IndustriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body text-center">
            Industries We Serve
          </p>
          <h2 className="heading-lg text-foreground text-center mb-6">
            Built for <span className="italic">Your</span> Business
          </h2>
          <div className="gradient-line max-w-32 mx-auto mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="border border-border rounded-sm p-8 text-center group hover:border-accent hover:glow-soft transition-all duration-500">
                <industry.icon className="w-8 h-8 text-silver-muted mx-auto mb-4 group-hover:text-foreground transition-colors duration-500" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
