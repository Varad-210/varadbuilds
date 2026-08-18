import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="heading-xl text-foreground mb-6">
              Digital Solutions Built Around<br />
              <span className="italic text-primary">How Your Business Works.</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto font-medium">
              Websites to build trust. Software to simplify operations. Meta Ads to generate demand.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Web Development */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="heading-lg text-foreground">Websites That Turn Attention Into Action.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your website is often the first serious interaction a potential customer has with your business.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We design and develop websites that make your offer easy to understand, build credibility, work smoothly across devices, and guide visitors toward an inquiry or booking.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Strategy & page planning", "UI/UX Design", "Responsive development",
                    "Conversion-focused structure", "Landing pages", "SEO-ready architecture",
                    "Lead capture forms", "WhatsApp integration", "Analytics setup",
                    "CMS where required", "Performance optimization", "Secure deployment"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-muted/40 p-3 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-medium text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1"
                >
                  Build My Website
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-muted/30 rounded-2xl p-8 border border-border/50 h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                <p className="text-muted-foreground font-bold tracking-widest relative z-10">[WEB DEV VISUAL]</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Custom Software */}
      <section className="section-padding py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 border border-border/50 h-[500px] flex items-center justify-center relative overflow-hidden order-2 lg:order-1 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <p className="text-muted-foreground font-bold tracking-widest relative z-10">[SOFTWARE VISUAL]</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="heading-lg text-foreground">Custom Software That Removes Bottlenecks.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  If your business depends on spreadsheets, repetitive data entry, manual follow-ups, or multiple disconnected tools, custom software can turn those processes into one organized system.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "CRM system", "Lead management", "Admin dashboards", "Customer portals",
                    "Booking systems", "Inventory management", "Reporting dashboards",
                    "Workflow automation", "API integrations", "Role-based access",
                    "Cloud deployment", "Maintenance & support"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-medium text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1"
                >
                  Tell Us What You Want to Automate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Meta Ads */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="heading-lg text-foreground">Generate More Qualified Inquiries With Meta Ads.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We build Facebook and Instagram campaigns around the full conversion journey — not just the ad.
                </p>
                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10 mb-6 font-bold text-lg text-center text-primary">
                  Audience → Creative → Offer → Landing Page → Lead → Follow-up
                </div>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Audience research", "Campaign strategy", "Creative concepts",
                    "Ad copy writing", "Lead capture forms", "Landing page support",
                    "Meta Pixel/tracking", "Retargeting", "A/B testing",
                    "Weekly optimization", "Performance reporting", "Competitor research"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-muted/40 p-3 rounded-xl border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-medium text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/book-demo"
                  className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1"
                >
                  Plan My Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-muted/30 rounded-2xl p-8 border border-border/50 h-[500px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent" />
                <p className="text-muted-foreground font-bold tracking-widest relative z-10">[META ADS VISUAL]</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Restaurant POS */}
      <section className="section-padding py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Restaurant POS & QR Ordering</h2>
            <p className="text-xl text-primary-foreground/90 mb-12 font-medium">
              Give customers a faster way to order while giving your team better control over orders, inventory, and reporting.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
              {[
                "QR table ordering", "Digital menus", "Item modifiers", 
                "Kitchen Display System integration", "Inventory management", 
                "Staff performance tracking", "Sales reporting", "Tax reporting"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="font-semibold">{feature}</span>
                </div>
              ))}
            </div>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-white text-primary rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              Discuss My Restaurant System
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};



export const PricingPage = () => {
  const packages = [
    {
      title: "Business Website",
      subtitle: "Build trust, explain your offer, and turn website visitors into inquiries.",
      setupCost: "Starting at ₹15,000",
      recurring: "₹1,500/month",
      recurringNote: "Optional care plan (hosting, security, minor updates)",
      features: [
        "Custom UI/UX",
        "Mobile-first responsive development",
        "Conversion-focused page structure",
        "Lead capture forms",
        "WhatsApp integration",
        "On-page SEO",
        "Fast-loading architecture",
        "CMS where required",
        "Secure hosting and SSL where included",
        "Analytics/tracking setup"
      ],
      ctaText: "Book a Website Consultation",
      ctaLink: "/book-demo"
    },
    {
      title: "Meta Ads Management",
      subtitle: "Build a repeatable system for reaching potential customers on Facebook and Instagram.",
      setupCost: "₹10,000 setup",
      recurring: "₹15,000/month management",
      recurringNote: "Ad spend paid separately",
      popular: true,
      features: [
        "Audience & Competitor research",
        "Campaign strategy",
        "Ad copy & Creative direction/design",
        "Landing page support where required",
        "Meta Pixel/conversion tracking",
        "A/B testing",
        "Retargeting",
        "Weekly optimization",
        "Reporting"
      ],
      disclaimer: "Advertising results depend on the offer, market, creative, targeting, landing page, sales process, and ad budget. No specific lead or revenue result is guaranteed.",
      ctaText: "Discuss My Ad Campaign",
      ctaLink: "/book-demo"
    },
    {
      title: "Custom Software Development",
      subtitle: "Replace spreadsheets and repetitive processes with software designed around your workflow.",
      setupCost: "Custom Quote",
      recurring: "",
      recurringNote: "",
      features: [
        "CRM and lead management",
        "Internal dashboards",
        "Client portals",
        "Workflow automation",
        "Automated invoices/reporting",
        "API integrations",
        "Database architecture",
        "Authentication and user roles",
        "Cloud deployment",
        "Maintenance/support"
      ],
      ctaText: "Discuss My Software Requirements",
      ctaLink: "/book-demo"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="heading-xl text-foreground mb-6">
              Choose the Digital Solution Your Business Needs.
            </h1>
            <p className="body-lg text-muted-foreground max-w-2xl mx-auto font-medium">
              Clear starting prices for defined services. Custom solutions are quoted after understanding your requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="section-padding py-16 flex-grow">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`glass-card rounded-2xl h-full flex flex-col relative transition-all duration-300 hover:-translate-y-2 bg-white ${
                  pkg.popular ? 'border-primary shadow-xl ring-2 ring-primary/20' : 'border-primary/10 shadow-lg'
                }`}>
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-md">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8 border-b border-border/50">
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-medium h-16">
                      {pkg.subtitle}
                    </p>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-foreground block mb-2">{pkg.setupCost}</span>
                    </div>
                    {pkg.recurring && (
                      <div className="flex flex-col text-sm text-muted-foreground">
                        <span className="font-bold text-foreground text-lg">{pkg.recurring}</span>
                        <span className="text-xs">{pkg.recurringNote}</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex-grow flex flex-col bg-muted/10 rounded-b-2xl">
                    <p className="text-sm font-bold text-foreground mb-4">Includes:</p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.disclaimer && (
                      <div className="bg-white p-4 rounded-xl border border-primary/10 mb-8">
                        <p className="text-xs font-bold text-red-500 uppercase mb-2">Important Disclaimer</p>
                        <p className="text-xs text-muted-foreground font-medium">{pkg.disclaimer}</p>
                      </div>
                    )}

                    <Link
                      to={pkg.ctaLink}
                      className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                        pkg.popular 
                          ? 'bg-primary text-primary-foreground shadow-[0_8px_20px_rgb(59,130,246,0.3)] hover:bg-primary/90' 
                          : 'bg-white border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary/40'
                      }`}
                    >
                      {pkg.ctaText}
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
