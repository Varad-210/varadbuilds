import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

export const PricingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pricingCards = [
    {
      category: "DIGITAL FOUNDATION",
      title: "Business Website",
      outcome: "Turn your online presence into a professional customer acquisition asset.",
      price: "Starting at ₹15,000",
      priceExtra: null,
      adNote: null,
      priceNote: "Final pricing depends on pages, functionality, integrations, and content requirements.",
      bestFor: "Businesses that need a professional website to build trust and generate inquiries.",
      features: [
        "Custom UI/UX design",
        "Mobile-first responsive development",
        "Conversion-focused page structure",
        "Lead capture forms",
        "WhatsApp integration",
        "On-page SEO",
        "Fast-loading architecture",
        "Analytics setup",
      ],
      cta: "Build My Website",
      ctaLink: "/book-demo",
      popular: false,
    },
    {
      category: "LEAD GENERATION",
      title: "Meta Ads Management",
      outcome: "Build a repeatable system for reaching potential customers on Facebook and Instagram.",
      price: "₹10,000 Setup",
      priceExtra: "+ ₹15,000/month",
      adNote: "Ad spend is separate.",
      priceNote: "Results depend on offer, market, creative, targeting, landing page, sales process, and budget. No specific lead or revenue result is guaranteed.",
      bestFor: "Businesses that already have an offer and want a structured system for generating qualified inquiries.",
      features: [
        "Audience research",
        "Competitor research",
        "Campaign strategy",
        "Ad copy & creative direction",
        "Meta Pixel & conversion tracking",
        "A/B testing",
        "Retargeting",
        "Weekly optimization",
        "Performance reporting",
      ],
      cta: "Plan My Ad Campaign",
      ctaLink: "/book-demo",
      popular: true,
    },
    {
      category: "BUSINESS AUTOMATION",
      title: "Custom Software Development",
      outcome: "Replace repetitive manual work with software designed around your workflow.",
      price: "Custom Quote",
      priceExtra: null,
      adNote: null,
      priceNote: "Pricing is based on scope, functionality, integrations, users, infrastructure, and maintenance requirements.",
      bestFor: "Businesses with complex workflows, manual processes, spreadsheets, or disconnected systems.",
      features: [
        "Custom web applications",
        "CRM & lead management",
        "Internal dashboards",
        "Client portals",
        "Workflow automation",
        "API integrations",
        "Database architecture",
        "Role-based access",
        "Deployment",
        "Technical support",
      ],
      cta: "Discuss My Software",
      ctaLink: "/book-demo",
      popular: false,
    },
  ];

  const processSteps = [
    { num: "01", title: "Strategy", desc: "Understand your business, audience, goals, and requirements." },
    { num: "02", title: "Planning", desc: "Define the structure, user journey, features, and conversion flow." },
    { num: "03", title: "Design", desc: "Create a clear and professional experience around your brand." },
    { num: "04", title: "Development", desc: "Build the actual website, application, integrations, or campaign system." },
    { num: "05", title: "Testing", desc: "Check responsiveness, forms, tracking, performance, and functionality." },
    { num: "06", title: "Launch", desc: "Deploy the final solution and make sure everything works properly." },
  ];

  const faqs = [
    { q: "Do you offer fixed pricing?", a: "For clearly defined website and advertising services, starting prices are available. Custom software is quoted based on requirements." },
    { q: "Can I hire you for only one service?", a: "Yes. You can start with website development, software development, or Meta Ads independently." },
    { q: "Is hosting included?", a: "For website projects, hosting and security arrangements depend on the selected plan and scope. We clearly specify what is included before the project begins." },
    { q: "Is advertising budget included in the Meta Ads price?", a: "No. The management fee and advertising spend are separate. Ad spend goes directly to Meta/Facebook." },
    { q: "Why is custom software more expensive?", a: "Custom software can involve architecture, authentication, databases, integrations, automation, testing, deployment, and ongoing maintenance — all of which are scoped and priced per project." },
    { q: "Can you redesign an existing website?", a: "Yes. Existing websites can be audited and redesigned when their UX, messaging, design, or conversion performance needs improvement." },
    { q: "Can you build something not listed here?", a: "Yes. If your requirement doesn't fit one of the listed services, book a strategy call and explain what you're trying to build." },
    { q: "What happens after I contact you?", a: "We'll review your requirements, identify the problem, and recommend the most suitable next step. No pressure, no jargon." },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section className="section-padding pt-32 pb-20 bg-gradient-to-b from-blue-50/60 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-5">TRANSPARENT PRICING</p>
            <h1 className="heading-xl text-foreground mb-6">
              Invest in the Digital System<br />
              <span className="italic text-primary">Your Business Needs.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4 font-medium max-w-2xl mx-auto leading-relaxed">
              Clear starting prices for defined services, with custom solutions quoted around your actual business requirements.
            </p>
            <p className="text-lg text-muted-foreground mb-10 font-medium">
              We don't believe in forcing every business into the same package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="#pricing-cards"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold bg-white border border-primary/20 text-foreground rounded-xl hover:bg-primary/5 transition-all duration-300 shadow-sm"
              >
                Compare Services
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. SOLUTION SELECTOR ─────────────────────────────────── */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">Not Sure What You Need?</h2>
              <p className="text-lg text-muted-foreground font-medium">Start with the problem you're trying to solve.</p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                problem: "I need a professional online presence",
                service: "Web Development",
                desc: "Build a website that makes your business look credible, explains your offer clearly, and turns visitors into inquiries.",
                cta: "Explore Web Development →",
                href: "/services",
              },
              {
                problem: "My business has too much manual work",
                service: "Custom Software",
                desc: "Replace spreadsheets, repetitive tasks, and disconnected workflows with software built around your business.",
                cta: "Explore Software Development →",
                href: "/services",
              },
              {
                problem: "I need more qualified leads",
                service: "Meta Ads",
                desc: "Reach potential customers through targeted Facebook and Instagram campaigns designed around your offer and conversion journey.",
                cta: "Explore Meta Ads →",
                href: "/services",
              },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="rounded-2xl bg-gradient-to-b from-blue-50/60 to-white border border-primary/10 p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <p className="text-sm text-muted-foreground font-medium mb-4 italic">"{item.problem}"</p>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4">{item.service}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow">{item.desc}</p>
                  <Link to={item.href} className="text-primary font-bold text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-1">
                    {item.cta}
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. PRICING CARDS ─────────────────────────────────────── */}
      <section id="pricing-cards" className="section-padding py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">Service Pricing</h2>
              <p className="text-lg text-muted-foreground font-medium">Straightforward starting points. No hidden surprises.</p>
            </div>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {pricingCards.map((pkg, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`rounded-2xl flex flex-col relative bg-white transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                  pkg.popular
                    ? "shadow-2xl ring-2 ring-primary border border-primary"
                    : "shadow-lg border border-primary/10 hover:border-primary/30"
                }`}>
                  {pkg.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2.5 text-xs font-black uppercase tracking-widest">
                      ★ Most Popular
                    </div>
                  )}

                  {/* Header */}
                  <div className={`p-8 ${pkg.popular ? "bg-primary/5" : ""}`}>
                    <p className="text-xs font-black text-primary tracking-[0.2em] uppercase mb-3">{pkg.category}</p>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-6">{pkg.outcome}</p>

                    <div className="mb-1">
                      <span className="text-4xl font-black text-foreground">{pkg.price}</span>
                    </div>
                    {pkg.priceExtra && (
                      <p className="text-lg font-bold text-primary mt-1">{pkg.priceExtra}</p>
                    )}
                    {pkg.adNote && (
                      <p className="text-xs text-muted-foreground mt-1">{pkg.adNote}</p>
                    )}

                    <div className="mt-5 pt-5 border-t border-border/50">
                      <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">Best For</p>
                      <p className="text-sm text-muted-foreground font-medium leading-relaxed">{pkg.bestFor}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="px-8 py-4 border-t border-border/30 flex-grow">
                    <p className="text-xs font-black text-foreground uppercase tracking-wider mb-4">Key Inclusions</p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground font-medium">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="p-8 pt-6">
                    <Link
                      to={pkg.ctaLink}
                      className={`w-full py-4 rounded-xl font-bold text-center block mb-4 transition-all duration-300 ${
                        pkg.popular
                          ? "bg-primary text-primary-foreground shadow-[0_8px_20px_rgb(59,130,246,0.3)] hover:bg-primary/90"
                          : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
                      }`}
                    >
                      {pkg.cta} →
                    </Link>
                    <p className="text-xs text-muted-foreground leading-relaxed text-center">{pkg.priceNote}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. VALUE COMPARISON TABLE ──────────────────────────── */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">What Are You Actually Investing In?</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary/10 shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left px-6 py-5 text-sm font-black uppercase tracking-widest">Solution</th>
                    <th className="text-left px-6 py-5 text-sm font-black uppercase tracking-widest hidden sm:table-cell">You Invest In</th>
                    <th className="text-left px-6 py-5 text-sm font-black uppercase tracking-widest">Business Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { solution: "Website", invest: "Digital presence + conversion system", benefit: "Build trust & capture inquiries" },
                    { solution: "Meta Ads", invest: "Customer acquisition system", benefit: "Reach potential buyers consistently" },
                    { solution: "Custom Software", invest: "Operational system", benefit: "Save time & reduce manual work" },
                  ].map((row, idx) => (
                    <tr key={idx} className={`border-t border-border/30 ${idx % 2 === 0 ? "bg-white" : "bg-muted/20"}`}>
                      <td className="px-6 py-5 font-bold text-foreground text-sm">{row.solution}</td>
                      <td className="px-6 py-5 text-muted-foreground font-medium text-sm hidden sm:table-cell">{row.invest}</td>
                      <td className="px-6 py-5 text-muted-foreground font-medium text-sm">{row.benefit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-10 text-center bg-primary/5 border border-primary/15 p-8 rounded-2xl">
              <p className="text-xl font-bold text-foreground max-w-3xl mx-auto leading-relaxed">
                "The goal isn't to spend more on technology. It's to build the right system for the problem you're trying to solve."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 5. WHAT'S INCLUDED IN THE INVESTMENT ──────────────── */}
      <section className="section-padding py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-foreground mb-4">You're Not Just Paying for Code.</h2>
              <p className="text-lg text-muted-foreground font-medium">A successful digital project involves much more than development.</p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.07}>
                <div className="bg-white rounded-2xl p-7 border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 flex gap-5 items-start">
                  <div className="text-4xl font-black text-primary/20 font-heading leading-none flex-shrink-0 mt-1">{step.num}</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY PRICES VARY ────────────────────────────────── */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">Why Isn't Everything a Fixed Price?</h2>
              <p className="text-lg text-muted-foreground font-medium mb-8 max-w-2xl mx-auto">Every business has different requirements.</p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
                A simple business website and a custom CRM may both be called "web development," but the strategy, time, functionality, integrations, and maintenance involved can be completely different. That's why we provide starting prices for clearly defined services and custom quotes for complex projects.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Scope", desc: "How many pages, features, screens, and workflows are required?" },
                { title: "Complexity", desc: "Does the project require custom logic, automation, APIs, dashboards, or integrations?" },
                { title: "Ongoing Support", desc: "Does the business need hosting, maintenance, optimization, or campaign management?" },
              ].map((item, idx) => (
                <div key={idx} className="bg-muted/20 rounded-2xl p-8 border border-primary/10 text-center hover:bg-primary/5 hover:border-primary/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 7. BEFORE YOU BOOK ────────────────────────────────── */}
      <section className="section-padding py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                Before We Recommend a Solution
              </h2>
              <p className="text-xl text-primary-foreground/80 font-medium">We'll look at:</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "What you're currently using",
                "What isn't working",
                "What you're trying to achieve",
                "Who your customers are",
                "Your current digital workflow",
                "Your budget and timeline",
                "The simplest solution that can solve the problem",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/10">
                  <Check className="w-5 h-5 text-white flex-shrink-0" />
                  <span className="text-white font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center px-12 py-4 text-lg font-bold bg-white text-primary rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                Book a Strategy Call →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 8. FAQ ────────────────────────────────────────────── */}
      <section className="section-padding py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">Pricing FAQs</h2>
            </div>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.04}>
                <div
                  className={`rounded-2xl border bg-white cursor-pointer transition-all duration-300 overflow-hidden ${openFaq === idx ? "border-primary shadow-md" : "border-border/50 hover:border-primary/30"}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="px-7 py-5 flex items-center justify-between gap-4">
                    <h3 className={`font-semibold text-base ${openFaq === idx ? "text-primary" : "text-foreground"}`}>{faq.q}</h3>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-180 text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <div className={`px-7 transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-muted-foreground font-medium leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ──────────────────────────────────────── */}
      <section className="section-padding py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-6">Have a Project in Mind?</h2>
            <p className="text-xl text-muted-foreground font-medium mb-4 leading-relaxed">
              You don't need to know exactly what service you need.
            </p>
            <p className="text-lg text-muted-foreground font-medium mb-10">
              Tell us what you're trying to achieve, and we'll help you identify the right digital solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1"
              >
                Book a Strategy Call →
              </Link>
              <a
                href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20have%20a%20project%20in%20mind."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold border-2 border-primary/20 text-foreground rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300"
              >
                <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us →
              </a>
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              No complicated jargon. No unnecessary packages. Just a conversation about your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border/50 px-4 py-3 shadow-lg">
        <Link to="/book-demo" className="w-full py-3.5 bg-primary text-primary-foreground font-bold text-center rounded-xl block">
          Book a Strategy Call
        </Link>
      </div>

      <Footer />
    </div>
  );
};
