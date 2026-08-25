import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Lightbulb, Settings2, LineChart, MessageCircle, GitMerge } from "lucide-react";

export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: "1. We start with the problem",
      desc: "We don't recommend technology just because it is technically impressive. Every recommendation starts with understanding what your business actually needs."
    },
    {
      icon: <Settings2 className="w-6 h-6 text-primary" />,
      title: "2. Custom when custom matters",
      desc: "Your business process is not identical to everyone else's. Software should reflect that — not force your team to work around a generic tool."
    },
    {
      icon: <LineChart className="w-6 h-6 text-primary" />,
      title: "3. Conversion comes before decoration",
      desc: "A beautiful website is useful. A beautiful website that communicates value and generates inquiries is better. We build for results."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "4. Clear communication",
      desc: "No unnecessary technical jargon. We explain what is being built, why it matters, and what happens next — so you're never left guessing."
    },
    {
      icon: <GitMerge className="w-6 h-6 text-primary" />,
      title: "5. One connected digital partner",
      desc: "Website, software, tracking, and Meta Ads can be planned as one customer journey instead of three disconnected projects managed by three different vendors."
    }
  ];

  return (
    <section className="section-padding py-24 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-10">
            {/* H2 with Pune keyword */}
            <h2 className="heading-lg text-foreground mb-4">
              Why Work With a{" "}
              <br className="md:hidden" />
              <span className="italic text-primary">Pune-Based Web Development Studio?</span>
            </h2>

            {/* Geo-targeted body copy */}
            <div className="max-w-3xl mx-auto text-muted-foreground font-medium leading-relaxed space-y-3 text-lg mt-6 mb-4">
              <p>
                Working with a local Pune agency means you get the same technical quality as any metro studio — at a cost structure that makes sense for Maharashtra businesses. Same time zone, same language, and a team that knows the difference between a customer in Baner and one in Hadapsar.
              </p>
              <p>
                Pune's growing ecosystem — from Hinjewadi IT companies to Koregaon Park hospitality, Kothrud clinics to Pune Camp retail — demands digital solutions that are practical and market-aware, not generic templates from a template marketplace. That's precisely what we build.
              </p>
              <p>
                We also offer post-launch support and website maintenance so your digital presence stays fast, secure, and up to date — without you needing to chase a vendor halfway across the country. Learn more{" "}
                <Link to="/about" className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors font-semibold">
                  about VaradBuilds
                </Link>
                {" "}and how we work.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-8">
          {reasons.map((reason, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.1}
              className={
                index < 3 
                  ? "md:col-span-1 lg:col-span-2" 
                  : index === 3 
                  ? "md:col-span-1 lg:col-span-3" 
                  : "md:col-span-2 lg:col-span-3 lg:col-start-4"
              }
            >
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
