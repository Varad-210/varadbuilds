import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Check, Globe, Code2, Target } from "lucide-react";

export const SolutionSection = () => {
  const solutions = [
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      tag: "Web Development",
      headline: "Turn Your Website Into Your Best Sales Asset.",
      copy: "Build trust before the first conversation with a fast, mobile-first website designed to explain your offer clearly and turn visitors into inquiries.",
      benefits: [
        "Stronger online credibility",
        "Clearer customer journey",
        "Lead capture",
        "Mobile-first experience",
        "SEO-ready structure",
        "WhatsApp/contact integration",
        "Analytics setup"
      ],
      ctaText: "Plan My Website",
      ctaLink: "/book-demo"
    },
    {
      icon: <Code2 className="w-10 h-10 text-primary" />,
      tag: "Custom Software Development",
      headline: "Replace Manual Work With Software Built for Your Business.",
      copy: "If your team is stuck with spreadsheets, repetitive data entry, disconnected tools, or manual processes, we build custom web applications around the way your business actually works.",
      benefits: [
        "Custom CRM and lead systems",
        "Internal dashboards",
        "Client portals",
        "Workflow automation",
        "API integrations",
        "Automated reporting",
        "Scalable database architecture"
      ],
      ctaText: "Discuss My Software Idea",
      ctaLink: "/book-demo"
    },
    {
      icon: <Target className="w-10 h-10 text-primary" />,
      tag: "Meta Ads",
      headline: "Turn Meta Ads Into a Lead Generation System.",
      copy: "Reach the right audience with Facebook and Instagram campaigns built around your offer, creative, landing page, tracking, and conversion journey.",
      benefits: [
        "Audience research",
        "Campaign strategy",
        "Ad copy and creative",
        "Conversion tracking",
        "Retargeting",
        "A/B testing",
        "Performance optimization",
        "Reporting"
      ],
      ctaText: "Plan My Ad Campaign",
      ctaLink: "/book-demo"
    }
  ];

  return (
    <section className="section-padding bg-white py-24 relative overflow-hidden" id="services">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <h2 className="heading-lg text-foreground mb-6">
              One partner for the digital systems<br />
              <span className="italic text-primary">behind your growth.</span>
            </h2>
            <div className="body-lg text-muted-foreground max-w-2xl mx-auto font-medium space-y-2">
              <p>We don't just build software or run ads.</p>
              <p>We understand the business problem first, then build the right digital solution around it.</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <div className="glass-card p-10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col group rounded-2xl bg-white">
                <div className="mb-8 bg-primary/5 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-primary/10 transition-colors">
                  {solution.icon}
                </div>
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  {solution.tag}
                </p>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 leading-tight">
                  {solution.headline}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {solution.copy}
                </p>
                
                <div className="flex-grow">
                  <ul className="space-y-3 mb-10">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={solution.ctaLink}
                  className="w-full py-4 rounded-xl font-bold text-center bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md"
                >
                  {solution.ctaText}
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
