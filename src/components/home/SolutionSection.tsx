import { AnimatedSection } from "@/components/AnimatedSection";
import { Phone, Calendar, MessageSquare, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Answers Every Call",
    description: "Your AI receptionist picks up instantly — no hold music, no voicemail, no missed opportunities.",
  },
  {
    icon: Calendar,
    title: "Books Appointments",
    description: "Directly schedules meetings into your calendar. Customers get instant confirmation.",
  },
  {
    icon: MessageSquare,
    title: "Handles Inquiries",
    description: "Answers FAQs about pricing, timings, location, and services — in natural conversation.",
  },
  {
    icon: BarChart3,
    title: "Reports Everything",
    description: "Get detailed call logs, recordings, and analytics. Know exactly what your customers want.",
  },
];

export const SolutionSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body text-center">
            The Solution
          </p>
          <h2 className="heading-lg text-foreground text-center mb-6">
            Your AI Receptionist,{" "}
            <span className="italic">Always On</span>
          </h2>
          <p className="body-lg text-muted-foreground text-center max-w-2xl mx-auto mb-4">
            A voice agent that sounds human, understands context, and never takes a day off.
          </p>
          <div className="gradient-line max-w-32 mx-auto mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-card p-10 md:p-12 group hover:bg-secondary/50 transition-colors duration-500">
                <feature.icon className="w-6 h-6 text-silver-muted mb-6 group-hover:text-foreground transition-colors duration-500" />
                <h3 className="heading-md text-foreground mb-4">{feature.title}</h3>
                <p className="body-md text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
