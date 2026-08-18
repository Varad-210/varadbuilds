import { AnimatedSection } from "@/components/AnimatedSection";
import { Magnet, Inbox, Zap, TrendingUp } from "lucide-react";

export const OutcomeSection = () => {
  const outcomes = [
    {
      icon: <Magnet className="w-8 h-8 text-primary" />,
      title: "Attract",
      desc: "Give potential customers a professional place to discover and trust your business."
    },
    {
      icon: <Inbox className="w-8 h-8 text-primary" />,
      title: "Capture",
      desc: "Turn website visitors and ad traffic into inquiries and leads."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Automate",
      desc: "Reduce repetitive tasks and organize your business workflows."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Grow",
      desc: "Build systems that can improve as your business grows."
    }
  ];

  return (
    <section className="section-padding py-24 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              What changes when your digital systems<br className="hidden md:block" />
              <span className="italic text-primary"> work together?</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 shadow-sm border border-primary/20">
                  {outcome.icon}
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {outcome.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
