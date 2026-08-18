import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      subtitle: "We understand the business first.",
      desc: "We discuss your goals, current process, customers, existing tools, and biggest bottlenecks."
    },
    {
      num: "02",
      title: "Strategy",
      subtitle: "We recommend what actually makes sense.",
      desc: "You don't need to buy every service. We identify the highest-impact solution for your current stage."
    },
    {
      num: "03",
      title: "Build",
      subtitle: "We design and develop the solution.",
      desc: "From website and software development to campaign setup, we turn the strategy into a working system."
    },
    {
      num: "04",
      title: "Launch",
      subtitle: "We test before putting it in front of customers.",
      desc: "We check responsiveness, forms, tracking, performance, integrations, and key user journeys."
    },
    {
      num: "05",
      title: "Improve",
      subtitle: "We use feedback and data to keep improving.",
      desc: "For ongoing services, performance and customer behavior guide future improvements."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-blue-50/50 to-white py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <h2 className="heading-lg text-foreground text-center mb-16">
            From business problem to <br className="hidden md:block"/>
            <span className="italic text-primary">working solution.</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-6 mb-16">
          {steps.map((step, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center border-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-heading font-black text-primary/20 min-w-[80px]">
                  {step.num}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {step.title} &mdash; <span className="text-primary font-semibold">{step.subtitle}</span>
                  </h3>
                  <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
