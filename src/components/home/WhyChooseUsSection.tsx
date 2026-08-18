import { AnimatedSection } from "@/components/AnimatedSection";
import { Lightbulb, Settings2, LineChart, MessageCircle, GitMerge } from "lucide-react";

export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "1. We start with the problem",
      desc: "We don't recommend technology just because it is technically impressive."
    },
    {
      icon: <Settings2 className="w-6 h-6 text-primary" />,
      title: "2. Custom when custom matters",
      desc: "Your business process is not identical to everyone else's. Software should reflect that."
    },
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: "3. Conversion comes before decoration",
      desc: "A beautiful website is useful. A beautiful website that communicates value and generates inquiries is better."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "4. Clear communication",
      desc: "Avoid unnecessary technical jargon. Explain what is being built, why it matters, and what happens next."
    },
    {
      icon: <GitMerge className="w-6 h-6 text-primary" />,
      title: "5. One connected digital partner",
      desc: "Website, software, tracking, and Meta Ads can be planned as one customer journey instead of disconnected projects."
    }
  ];

  return (
    <section className="section-padding py-24 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              Why businesses choose a <br className="md:hidden" />
              <span className="italic text-primary">business-first developer.</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card p-8 rounded-xl bg-white border border-primary/10 hover:shadow-lg transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {reason.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
