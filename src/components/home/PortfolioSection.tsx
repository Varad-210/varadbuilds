import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Code2 } from "lucide-react";

interface Screenshot {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CaseStudy {
  tag: string;
  industry: string;
  client: string;
  challenge: string;
  built: string;
  objective: string;
  tech: string[];
  screenshots: Screenshot[];
}

const caseStudies: CaseStudy[] = [
  {
    tag: "Web Development",
    industry: "Jewellery / E-commerce",
    client: "Ambilwade Premium Jewellery",
    screenshots: [
      {
        src: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1787113446/ChatGPT_Image_Aug_19_2026_09_53_11_AM_guwy0s.png",
        alt: "Ambilwade Premium Jewellery screenshot 1",
        className: "",
      },
      {
        src: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1787113719/ChatGPT_Image_Aug_19_2026_09_58_19_AM_o2krco.png",
        alt: "Ambilwade Premium Jewellery screenshot 2",
        className: "",
      },
    ],
    challenge: "Create a premium digital shopping experience that builds trust and makes it easy for customers to discover jewellery, manage purchases, and book store appointments.",
    built: "A modern jewellery e-commerce platform featuring product discovery, wishlist, cart, customer accounts, order tracking, appointments, saved addresses, and custom jewellery experiences.",
    objective: "Create a seamless online-to-store customer journey while presenting the jewellery brand with a premium digital identity.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    tag: "Software Development",
    industry: "Retail / SaaS",
    client: "SmartPOS Retail Management System",
    screenshots: [
      {
        src: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1791698523/SmartPOS_Retail_Dashboard_Showcase_obkn6l.png",
        alt: "SmartPOS Retail Dashboard Showcase",
        className: "",
        style: { objectPosition: "center -20px" },
      },
    ],
    challenge: "Simplify daily billing, inventory updates, and supplier coordination for small retail stores.",
    built: "A full-stack POS platform with product management, live stock tracking, purchase orders, sales reports, and WhatsApp supplier workflows.",
    objective: "Reduce manual work and help shop owners manage operations through one clear, reliable dashboard.",
    tech: ["React", "Node.js", "MongoDB", "WhatsApp API"],
  },
];

export const PortfolioSection = () => {
  return (
    <section className="section-padding py-24 bg-muted/20 relative" id="work">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            {/* H2 for Portfolio section */}
            <h2 className="heading-lg text-foreground mb-4">
              Our Portfolio — Web Projects Built{" "}
              <span className="italic text-primary">for Real Businesses.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Every project we ship solves a real problem for a real business. Here's a look at what we've built — and what we focused on to deliver results.{" "}
              <Link
                to="/about"
                className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
              >
                Learn more about our team →
              </Link>
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-16">
          {caseStudies.map((cs, index) => (
            <AnimatedSection key={index} delay={0.1}>
              <div className="glass-card rounded-2xl border border-primary/10 overflow-hidden shadow-xl bg-white">
                {/* Project screenshots */}
                <div className="relative overflow-hidden bg-slate-950">
                  <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-primary px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-lg">
                    {tagIcon(cs.tag)}
                    {cs.tag}
                  </div>

                  <div
                    className={`grid grid-cols-1 gap-1 bg-slate-900 p-1 ${
                      cs.screenshots.length > 1 ? "md:grid-cols-2" : ""
                    }`}
                  >
                    {cs.screenshots.map((image, imgIdx) => (
                      <div
                        key={imgIdx}
                        className={`group relative overflow-hidden bg-slate-800 ${image.className || ""}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          style={image.style}
                          className={`w-full object-cover ${
                            image.style?.objectPosition ? "" : "object-top"
                          } transition-transform duration-500 group-hover:scale-[1.02] ${
                            cs.screenshots.length === 1
                              ? "h-64 sm:h-80 lg:h-[400px]"
                              : image.className?.includes("col-span-2")
                              ? "h-56 sm:h-64 lg:h-[340px]"
                              : "h-56 sm:h-64 lg:h-[280px]"
                          }`}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                            if (placeholder) {
                              placeholder.style.display = "flex";
                            }
                          }}
                        />
                        <div className="hidden h-56 sm:h-64 lg:h-[280px] w-full flex-col items-center justify-center bg-slate-900/80 border border-slate-700/50 p-6 text-center text-slate-300">
                          <Code2 className="w-8 h-8 text-primary mb-2 opacity-80" />
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                            Preview
                          </span>
                          <span className="text-sm font-medium mt-1">{image.alt}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case study details */}
                <div className="p-8 md:p-10">
                  <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start mb-8">
                    <div>
                      <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">
                        Industry: {cs.industry}
                      </p>
                      <h3 className="text-3xl font-heading font-bold text-foreground">
                        {cs.client}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:max-w-[440px] lg:justify-end">
                      {cs.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-3.5 py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-bold rounded-full border border-primary/20"
                        >
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
            <div className="glass-card rounded-2xl border-2 border-dashed border-primary/20 p-12 text-center bg-white/50">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">More projects coming soon.</h3>
              <p className="text-muted-foreground font-medium mb-6">
                Each project we take on becomes a new case study in building better digital systems for Pune businesses.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline underline-offset-4 transition-colors"
              >
                About our team <ArrowRight className="w-4 h-4" />
              </Link>
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
