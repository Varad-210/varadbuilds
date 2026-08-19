import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Globe, Code2 } from "lucide-react";

const caseStudies = [
  {
    tag: "Web Development",
    tagIcon: <Globe className="w-3 h-3" />,
    industry: "Jewellery / E-commerce",
    client: "Ambilwade Premium Jewellery",
    screenshot2: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1787113719/ChatGPT_Image_Aug_19_2026_09_58_19_AM_o2krco.png",
    screenshot1: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1787113446/ChatGPT_Image_Aug_19_2026_09_53_11_AM_guwy0s.png",
    challenge: "Create a premium digital shopping experience that builds trust and makes it easy for customers to discover jewellery, manage purchases, and book store appointments.",
    built: "A modern jewellery e-commerce platform featuring product discovery, wishlist, cart, customer accounts, order tracking, appointments, saved addresses, and custom jewellery experiences.",
    objective: "Create a seamless online-to-store customer journey while presenting the jewellery brand with a premium digital identity.",
    tech: ["React", "Node.js", "Express", "MongoDB"]
  },
  // Add more case studies here
];

export const PortfolioSection = () => {
  return (
    <section className="section-padding py-24 bg-muted/20 relative" id="work">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              See what we've built.
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Real projects. Real businesses. Real results.
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {caseStudies.map((cs, index) => (
            <AnimatedSection key={index} delay={0.1}>
              <div className="glass-card rounded-3xl border border-primary/10 overflow-hidden shadow-xl bg-white">

                {/* Screenshots side by side */}
                <div className="grid md:grid-cols-2 gap-0 border-b border-border/50">
                  <div className="overflow-hidden bg-muted/20 border-r border-border/30">
                    <img
                      src={cs.screenshot1}
                      alt={`${cs.client} screenshot 1`}
                      className="w-full h-[280px] object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-[280px] flex items-center justify-center bg-muted/30 text-muted-foreground text-sm font-medium p-4 text-center">Save screenshot as<br/>public/proof1.png</div>`;
                      }}
                    />
                    {/* Service tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-lg">
                        {tagIcon(cs.tag)}
                        {cs.tag}
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden bg-muted/20 relative">
                    <img
                      src={cs.screenshot2}
                      alt={`${cs.client} screenshot 2`}
                      className="w-full h-[280px] object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-[280px] flex items-center justify-center bg-muted/30 text-muted-foreground text-sm font-medium p-4 text-center">Save screenshot as<br/>public/proof2.png</div>`;
                      }}
                    />
                  </div>
                </div>

                {/* Case study details */}
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                    <div>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                        Industry: {cs.industry}
                      </p>
                      <h3 className="text-3xl font-heading font-bold text-foreground">
                        {cs.client}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <p className="text-xs font-black text-foreground uppercase tracking-widest border-l-2 border-primary pl-3">
                        Challenge
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                        {cs.challenge}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-black text-foreground uppercase tracking-widest border-l-2 border-primary pl-3">
                        What We Built
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                        {cs.built}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-black text-foreground uppercase tracking-widest border-l-2 border-primary pl-3">
                        Project Objective
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                        {cs.objective}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* More projects coming soon card */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-3xl border-2 border-dashed border-primary/20 p-12 text-center bg-white/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">More projects coming soon.</h3>
              <p className="text-muted-foreground font-medium mb-6">
                Each project we take on becomes a new case study in building better digital systems.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

// Helper to render a small icon with the tag
function tagIcon(tag: string) {
  if (tag === "Web Development") return <Globe className="w-3 h-3" />;
  return <Code2 className="w-3 h-3" />;
}
