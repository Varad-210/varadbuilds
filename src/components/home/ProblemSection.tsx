import { AnimatedSection } from "@/components/AnimatedSection";
import { PhoneOff, TrendingDown, Clock } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    stat: "62%",
    label: "of calls go unanswered",
    description: "When your staff is busy serving customers, the phone keeps ringing. Each missed call is a lost booking.",
  },
  {
    icon: TrendingDown,
    stat: "₹15L+",
    label: "lost revenue per year",
    description: "A single missed call can cost ₹5,000–₹50,000. Multiply that across hundreds of calls each month.",
  },
  {
    icon: Clock,
    stat: "24/7",
    label: "customers expect availability",
    description: "Your competitors who answer calls after hours are winning the customers you're losing.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body text-center">
            The Problem
          </p>
          <h2 className="heading-lg text-foreground text-center mb-6">
            Every Missed Call Is a{" "}
            <span className="italic">Lost Customer</span>
          </h2>
          <div className="gradient-line max-w-32 mx-auto mb-16" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((problem, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="text-center md:text-left group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-sm border border-border mb-6 group-hover:border-accent transition-colors duration-500">
                  <problem.icon className="w-5 h-5 text-silver-muted" />
                </div>
                <p className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-2">
                  {problem.stat}
                </p>
                <p className="text-sm tracking-wide uppercase text-accent mb-4 font-body">
                  {problem.label}
                </p>
                <p className="body-md text-muted-foreground">
                  {problem.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
