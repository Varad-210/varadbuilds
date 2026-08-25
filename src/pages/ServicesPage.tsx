import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ChevronDown, MessageCircle, Globe, Code2, Target, UtensilsCrossed, Lightbulb, Settings2, LineChart, MessageSquare, GitMerge } from "lucide-react";
import { useState } from "react";

export const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Do you only work on new websites?", a: "No. We can also redesign existing websites when the current design, UX, messaging, performance, or conversion flow needs improvement." },
    { q: "Can you build custom software for my business?", a: "Yes. We build custom web applications around specific business workflows, requirements, and operational problems." },
    { q: "Do I need custom software?", a: "Not necessarily. If an existing tool can solve your problem effectively, a custom system may not be necessary. We'll first understand your workflow and recommend the appropriate approach." },
    { q: "Do you manage Facebook and Instagram Ads?", a: "Yes. Meta Ads services can include strategy, audience research, creative direction, copywriting, tracking, testing, optimization, retargeting, and reporting." },
    { q: "Can you connect my website with my existing tools?", a: "Where technically feasible, yes. This can include CRM systems, APIs, forms, analytics, payment systems, WhatsApp workflows, and other business tools." },
    { q: "How do I know which service is right for me?", a: "Start with your business problem. If your challenge is credibility or online presence → Web Development. If your challenge is manual work → Custom Software. If your challenge is generating demand → Meta Ads. If you're unsure → Book a Strategy Call and we'll help you identify the right starting point." },
    { q: "Do you guarantee leads or sales?", a: "No. We build and optimize systems designed to improve the probability of generating results, but actual outcomes depend on your market, offer, audience, budget, sales process, and other factors." },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="section-padding pt-32 pb-20 bg-gradient-to-b from-blue-50/60 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <p className="text-sm font-bold tracking-[0.3em] uppercase text-primary mb-5">DIGITAL SOLUTIONS FOR GROWING BUSINESSES</p>
            <h1 className="heading-xl text-foreground mb-6">
              Digital Solutions Built<br />
              <span className="italic text-primary">Around Your Business.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-3 font-medium max-w-2xl mx-auto leading-relaxed">
              Your business doesn't need more complicated technology.
            </p>
            <p className="text-lg text-muted-foreground mb-3 font-medium max-w-3xl mx-auto leading-relaxed">
              It needs the right digital systems to attract customers, simplify operations, and create room for growth.
            </p>
            <p className="text-lg text-muted-foreground mb-10 font-medium max-w-3xl mx-auto leading-relaxed">
              VaradBuilds builds conversion-focused websites, custom business software, and Meta Ads systems designed around how your business actually works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Link to="/book-demo" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1">
                Book a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="#services" className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold bg-white border border-primary/20 text-foreground rounded-xl hover:bg-primary/5 transition-all duration-300 shadow-sm">
                Explore Services ↓
              </a>
            </div>
            <p className="text-sm text-muted-foreground font-medium">Not sure what you need? We'll help you identify the right solution.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── QUICK SERVICE SELECTOR ──────────────────────────────── */}
      <section className="section-padding py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="heading-lg text-foreground mb-4">What Are You Trying to Solve?</h2>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Globe className="w-7 h-7 text-primary" />,
                problem: "I need a better online presence.",
                desc: "Your current website doesn't build enough trust or generate enough inquiries.",
                service: "→ Web Development",
                href: "#web-development",
              },
              {
                icon: <Code2 className="w-7 h-7 text-primary" />,
                problem: "My team is wasting time on manual work.",
                desc: "Spreadsheets, repetitive data entry, and disconnected tools are slowing the business down.",
                service: "→ Custom Software",
                href: "#custom-software",
              },
              {
                icon: <Target className="w-7 h-7 text-primary" />,
                problem: "I need more qualified leads.",
                desc: "You want a predictable way to reach potential customers instead of relying only on referrals.",
                service: "→ Meta Ads",
                href: "#meta-ads",
              },
              {
                icon: <UtensilsCrossed className="w-7 h-7 text-primary" />,
                problem: "I run a restaurant.",
                desc: "I need a better system for ordering, inventory, and restaurant operations.",
                service: "→ Restaurant POS & QR Ordering",
                href: "#restaurant-pos",
              },
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.08}>
                <a href={item.href} className="group block rounded-2xl border border-primary/10 bg-muted/30 p-7 hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <p className="font-bold text-foreground mb-3 leading-snug">{item.problem}</p>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-5">{item.desc}</p>
                  <p className="text-primary font-bold text-sm group-hover:underline">{item.service}</p>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ────────────────────────────────────── */}
      <div id="services">

        {/* SERVICE 01 — WEB DEVELOPMENT */}
        <section id="web-development" className="section-padding py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection>
                <div>
                  <p className="text-xs font-black text-primary tracking-[0.25em] uppercase mb-4">SERVICE 01</p>
                  <h2 className="heading-lg text-foreground mb-6">
                    Turn Your Website Into a Business Asset.
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-medium">
                    Your website is often the first serious interaction a potential customer has with your business.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">
                    If it looks outdated, loads slowly, is difficult to navigate, or doesn't clearly explain your offer, potential customers may leave before they ever contact you.
                  </p>

                  <div className="bg-white rounded-2xl p-7 border border-primary/10 mb-8">
                    <p className="text-xs font-black text-foreground uppercase tracking-widest mb-5">OUR APPROACH</p>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      We design and develop websites that make your business easier to understand, easier to trust, and easier to contact.
                    </p>
                  </div>

                  {/* Business Outcomes */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { title: "Build Trust", desc: "Create a professional first impression that reflects the quality of your business." },
                      { title: "Generate Inquiries", desc: "Guide visitors toward a clear action such as contacting you or requesting a quote." },
                      { title: "Improve Customer Experience", desc: "Make it easy for customers to find information and take the next step." },
                      { title: "Strong Digital Foundation", desc: "Create a website that can support your business as it grows." },
                    ].map((o, i) => (
                      <div key={i} className="bg-white rounded-xl p-5 border border-primary/10 hover:border-primary/30 transition-colors">
                        <p className="font-bold text-foreground text-sm mb-2">{o.title}</p>
                        <p className="text-xs text-muted-foreground font-medium leading-relaxed">{o.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-demo" className="inline-flex items-center justify-center px-8 py-4 font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_20px_rgb(59,130,246,0.3)] hover:-translate-y-1">
                      Build My Website →
                    </Link>
                    <Link to="/book-demo" className="inline-flex items-center justify-center px-8 py-4 font-semibold border-2 border-primary/20 text-foreground rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300">
                      View Our Work →
                    </Link>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  {/* Features */}
                  <div className="bg-white rounded-2xl p-8 border border-primary/10 shadow-sm">
                    <p className="text-xs font-black text-foreground uppercase tracking-widest mb-6">WHAT WE BUILD</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Strategy & page planning", "UI/UX design", "Responsive development",
                        "Conversion-focused structure", "Landing pages", "SEO-ready architecture",
                        "Lead capture forms", "WhatsApp integration", "Analytics & tracking",
                        "CMS integration", "Performance optimization", "Secure deployment",
                      ].map((f, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal for */}
                  <div className="bg-primary/5 rounded-2xl p-7 border border-primary/15">
                    <p className="text-xs font-black text-foreground uppercase tracking-widest mb-4">IDEAL FOR</p>
                    <div className="flex flex-wrap gap-2">
                      {["Local businesses", "Professional services", "Clinics", "Restaurants", "Real estate", "Startups", "Service businesses", "Growing brands"].map((item, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white border border-primary/15 text-foreground text-xs font-semibold rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Screenshot placeholder */}
                  <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20 h-64 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                    <img src="https://res.cloudinary.com/dclr2ihxn/image/upload/v1787112532/ChatGPT_Image_Aug_19_2026_09_37_06_AM_pcq7qi.png" alt="" />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SERVICE 02 — CUSTOM SOFTWARE */}
        <section id="custom-software" className="section-padding py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              <AnimatedSection delay={0.2}>
                <div className="space-y-6 order-2 lg:order-1">
                  {/* Screenshot placeholder */}
                  <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20 h-64 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent" />
                    <p className="text-muted-foreground text-sm font-bold tracking-widest relative z-10">[ADD REAL SOFTWARE SCREENSHOT]</p>
                  </div>

                  {/* Features */}
                  <div className="bg-muted/20 rounded-2xl p-8 border border-primary/10">
                    <p className="text-xs font-black text-foreground uppercase tracking-widest mb-6">WHAT WE BUILD</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Custom CRM systems", "Lead management", "Admin dashboards", "Customer portals",
                        "Booking systems", "Inventory management", "Reporting dashboards", "Workflow automation",
                        "API integrations", "Role-based access", "Cloud deployment", "Maintenance & support",
                      ].map((f, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="bg-white rounded-2xl p-7 border border-primary/10 shadow-sm">
                    <p className="text-xs font-black text-foreground uppercase tracking-widest mb-5">EXAMPLE SOLUTIONS</p>
                    <div className="space-y-4">
                      {[
                        { title: "Lead Management", desc: "Capture, organize, assign, and track leads from one system." },
                        { title: "Business Dashboard", desc: "Bring important business information into one place." },
                        { title: "Customer Portal", desc: "Give customers a dedicated place to manage their bookings, documents, or services." },
                        { title: "Workflow Automation", desc: "Turn repetitive manual processes into automated workflows." },
                      ].map((ex, i) => (
                        <div key={i} className="flex gap-3 border-b border-border/30 pb-4 last:border-0 last:pb-0">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-bold text-sm text-foreground mb-1">{ex.title}</p>
                            <p className="text-xs text-muted-foreground font-medium leading-relaxed">{ex.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection className="order-1 lg:order-2">
                <div>
                  <p className="text-xs font-black text-primary tracking-[0.25em] uppercase mb-4">SERVICE 02</p>
                  <h2 className="heading-lg text-foreground mb-6">
                    Replace Manual Work With Software Built for Your Business.
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-medium">
                    Still managing important business processes through spreadsheets, WhatsApp messages, forms, or repetitive data entry?
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">
                    As your business grows, manual processes become slower, harder to manage, and easier to get wrong.
                  </p>

                  <div className="bg-muted/30 rounded-2xl p-7 border border-primary/10 mb-8">
                    <p className="text-xs font-black text-foreground uppercase tracking-widest mb-3">OUR APPROACH</p>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      We understand how your business currently works, identify the bottlenecks, and build software around the workflow. Not the other way around.
                    </p>
                  </div>

                  {/* Business Outcomes */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { title: "Save Time", desc: "Automate repetitive tasks your team performs again and again." },
                      { title: "Reduce Manual Errors", desc: "Centralize information instead of relying on scattered spreadsheets and messages." },
                      { title: "Improve Visibility", desc: "Give your team dashboards and reports that make important information easier to understand." },
                      { title: "Scale Operations", desc: "Build systems that can support more customers, employees, and workflows as the business grows." },
                    ].map((o, i) => (
                      <div key={i} className="bg-white rounded-xl p-5 border border-primary/10 hover:border-primary/30 transition-colors">
                        <p className="font-bold text-foreground text-sm mb-2">{o.title}</p>
                        <p className="text-xs text-muted-foreground font-medium leading-relaxed">{o.desc}</p>
                      </div>
                    ))}
                  </div>

                  <Link to="/book-demo" className="inline-flex items-center justify-center px-8 py-4 font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_20px_rgb(59,130,246,0.3)] hover:-translate-y-1">
                    Tell Us What You Want to Automate →
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SERVICE 03 — META ADS */}
        <section id="meta-ads" className="section-padding py-24 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection>
                <div>
                  <p className="text-xs font-black text-primary tracking-[0.25em] uppercase mb-4">SERVICE 03</p>
                  <h2 className="heading-lg text-foreground mb-6">
                    Turn Meta Ads Into a Lead Generation System.
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4 font-medium">
                    Running Facebook and Instagram ads is easy.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-medium">
                    Building a campaign that attracts the right people, communicates the right offer, captures their information, and supports follow-up is a different challenge.
                  </p>

                  <div className="bg-white rounded-2xl p-7 border border-primary/10 mb-8">
                    <p className="text-xs font-black text-foreground uppercase tracking-widest mb-3">OUR APPROACH</p>
                    <p className="text-muted-foreground font-medium leading-relaxed mb-5">We don't look at the ad in isolation. We build around the complete customer journey:</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-primary">
                      {["Audience", "Creative", "Offer", "Landing Page", "Lead", "Follow-up"].map((s, i, arr) => (
                        <span key={i} className="flex items-center gap-2">
                          <span className="bg-primary/10 px-3 py-1 rounded-full border border-primary/20">{s}</span>
                          {i < arr.length - 1 && <span className="text-muted-foreground">→</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {[
                      { title: "Reach the Right Audience", desc: "Put your offer in front of people who are more likely to care about it." },
                      { title: "Generate Qualified Inquiries", desc: "Build campaigns around a clear conversion goal rather than vanity metrics." },
                      { title: "Improve Campaign Performance", desc: "Test audiences, creatives, messaging, and campaigns to identify what performs better." },
                      { title: "Understand Your Numbers", desc: "Use tracking and reporting to understand where your leads are coming from." },
                    ].map((o, i) => (
                      <div key={i} className="bg-white rounded-xl p-5 border border-primary/10 hover:border-primary/30 transition-colors">
                        <p className="font-bold text-foreground text-sm mb-2">{o.title}</p>
                        <p className="text-xs text-muted-foreground font-medium leading-relaxed">{o.desc}</p>
                      </div>
                    ))}
                  </div>

                  <Link to="/book-demo" className="inline-flex items-center justify-center px-8 py-4 font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_20px_rgb(59,130,246,0.3)] hover:-translate-y-1">
                    Plan My Meta Ads Campaign →
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg bg-muted/20 h-64 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                    <p className="text-muted-foreground text-sm font-bold tracking-widest relative z-10">[ADD REAL ADS VISUAL]</p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 border border-primary/10 shadow-sm">
                    <p className="text-xs font-black text-foreground uppercase tracking-widest mb-6">WHAT WE MANAGE</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Audience research", "Competitor research", "Campaign strategy", "Creative concepts",
                        "Ad copywriting", "Lead capture forms", "Landing page support", "Meta Pixel & tracking",
                        "Retargeting", "A/B testing", "Campaign optimization", "Performance reporting",
                      ].map((f, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200/60">
                    <p className="text-xs font-black text-amber-700 uppercase tracking-widest mb-3">IMPORTANT</p>
                    <p className="text-sm text-amber-800 font-medium leading-relaxed mb-3">Advertising performance depends on factors including:</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {["Offer", "Market", "Audience", "Creative", "Landing page", "Sales process", "Follow-up", "Ad budget"].map((f, i) => (
                        <p key={i} className="text-xs text-amber-700 font-semibold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />{f}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs text-amber-700 font-bold mt-4">We do not guarantee a specific number of leads, sales, or revenue.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SERVICE 04 — RESTAURANT POS */}
        <section id="restaurant-pos" className="section-padding py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <AnimatedSection>
                <div>
                  <p className="text-xs font-black text-primary-foreground/60 tracking-[0.25em] uppercase mb-4">SERVICE 04</p>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6 leading-tight">
                    Give Your Restaurant a Smarter Ordering System.
                  </h2>
                  <p className="text-xl text-primary-foreground/80 leading-relaxed mb-4 font-medium">
                    When restaurants depend heavily on manual ordering, busy periods can create delays, incorrect orders, communication gaps, and unnecessary pressure on staff.
                  </p>

                  <div className="bg-white/10 rounded-2xl p-7 border border-white/10 backdrop-blur-sm mb-8">
                    <p className="text-xs font-black text-white/60 uppercase tracking-widest mb-3">CUSTOMER EXPERIENCE</p>
                    <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-white">
                      {["Scan", "Browse", "Customize", "Order", "Kitchen", "Serve"].map((s, i, arr) => (
                        <span key={i} className="flex items-center gap-2">
                          <span className="bg-white/10 px-3 py-1 rounded-full border border-white/10">{s}</span>
                          {i < arr.length - 1 && <span className="text-white/40">→</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 mb-10">
                    {[
                      { title: "Faster Ordering", desc: "Allow customers to place orders directly from their table." },
                      { title: "Better Accuracy", desc: "Reduce communication gaps between customers and staff." },
                      { title: "Operational Visibility", desc: "Keep ordering, inventory, and reporting information organized." },
                    ].map((o, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                        <p className="font-bold text-white text-sm mb-2">{o.title}</p>
                        <p className="text-xs text-primary-foreground/70 font-medium leading-relaxed">{o.desc}</p>
                      </div>
                    ))}
                  </div>

                  <Link to="/book-demo" className="inline-flex items-center justify-center px-8 py-4 font-bold bg-white text-primary rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:-translate-y-1">
                    Discuss My Restaurant System →
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                    <p className="text-xs font-black text-white/60 uppercase tracking-widest mb-6">FEATURES</p>
                    <div className="grid grid-cols-2 gap-3">
                      {["QR table ordering", "Digital menus", "Item modifiers", "Kitchen Display System", "Inventory management", "Staff performance tracking", "Sales reporting", "Tax reporting"].map((f, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm font-medium text-white/80">
                          <Check className="w-4 h-4 text-white flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/10">
                    <p className="text-xs font-black text-white/60 uppercase tracking-widest mb-4">IDEAL FOR</p>
                    <div className="flex flex-wrap gap-2">
                      {["Restaurants", "Cafés", "QSRs", "Food courts", "Cloud kitchens", "Multi-outlet food businesses"].map((item, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/10 border border-white/15 text-white text-xs font-semibold rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

      </div>

      {/* ── WHY VARADBUILDS ─────────────────────────────────────── */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">
                We Don't Start With Technology.<br />
                <span className="italic text-primary">We Start With the Problem.</span>
              </h2>
              <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                A business doesn't need technology for the sake of technology. It needs technology because something needs to work better, sell better, scale better, take less time, or become easier to manage.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Lightbulb className="w-6 h-6 text-primary" />, num: "01", title: "Business-First Thinking", desc: "We understand the business problem before recommending a solution." },
              { icon: <Settings2 className="w-6 h-6 text-primary" />, num: "02", title: "Custom When Needed", desc: "If an existing tool can solve the problem, we'll tell you. If your workflow requires something specific, we'll build around it." },
              { icon: <LineChart className="w-6 h-6 text-primary" />, num: "03", title: "Conversion-Focused", desc: "For websites and advertising, we focus on the journey from attention to action." },
              { icon: <MessageSquare className="w-6 h-6 text-primary" />, num: "04", title: "Clear Communication", desc: "No unnecessary technical jargon. You should understand what we're building, why we're building it, and what happens next." },
              { icon: <GitMerge className="w-6 h-6 text-primary" />, num: "05", title: "One Digital Partner", desc: "Website, software, tracking, and advertising can be planned as connected systems rather than isolated projects." },
            ].map((r, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.08}>
                <div className="glass-card bg-muted/20 p-8 rounded-2xl border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">{r.icon}</div>
                    <span className="text-3xl font-black text-primary/20 font-heading">{r.num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{r.title}</h3>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{r.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="section-padding py-20 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">From Business Problem to Working Solution.</h2>
            </div>
          </AnimatedSection>
          <div className="space-y-4 mb-14">
            {[
              { num: "01", title: "Discover", desc: "Tell us about your business, current setup, goals, and biggest challenges." },
              { num: "02", title: "Understand", desc: "We identify the actual problem instead of immediately jumping to a technology solution." },
              { num: "03", title: "Plan", desc: "We recommend the right approach, scope, features, and next steps." },
              { num: "04", title: "Build", desc: "We design and develop the agreed solution." },
              { num: "05", title: "Test", desc: "We check functionality, responsiveness, integrations, forms, tracking, and key user journeys." },
              { num: "06", title: "Launch", desc: "Your solution goes live with the required setup and handover." },
              { num: "07", title: "Improve", desc: "Where ongoing support is required, we use feedback and data to improve the system over time." },
            ].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.06}>
                <div className="bg-white rounded-2xl p-6 border border-primary/10 flex gap-6 items-center hover:border-primary/30 hover:shadow-sm transition-all duration-300">
                  <div className="text-5xl font-black text-primary/15 font-heading flex-shrink-0 w-16 text-center">{step.num}</div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground font-medium text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.5}>
            <div className="text-center">
              <Link to="/book-demo" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1">
                Start a Conversation →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICE SELECTOR BOTTOM ──────────────────────────────── */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-6">You Don't Need to Figure It Out Alone.</h2>
            <p className="text-xl text-muted-foreground font-medium mb-3">Tell us: <strong className="text-foreground">What is happening in your business right now?</strong></p>
            <p className="text-lg text-muted-foreground font-medium mb-12">We'll help you identify whether you need:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                { service: "A Website", desc: "for credibility and lead capture" },
                { service: "Custom Software", desc: "for automation and operational efficiency" },
                { service: "Meta Ads", desc: "for customer acquisition" },
                { service: "A Combined System", desc: "when multiple parts of the customer journey need improvement" },
              ].map((item, idx) => (
                <div key={idx} className="bg-muted/30 rounded-xl p-5 border border-primary/10 text-center hover:bg-primary/5 hover:border-primary/30 transition-colors">
                  <p className="font-bold text-foreground mb-2">{item.service}</p>
                  <p className="text-xs text-muted-foreground font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/book-demo" className="inline-flex items-center justify-center px-12 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1">
              Help Me Choose the Right Solution →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="section-padding py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="heading-lg text-foreground mb-4">Frequently Asked Questions</h2>
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

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="section-padding py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-6">Have a Business Problem You Want to Solve?</h2>
            <p className="text-xl text-muted-foreground font-medium mb-4 leading-relaxed">
              You don't need to know the exact technology you need.
            </p>
            <p className="text-lg text-muted-foreground font-medium mb-10">
              Tell us what you're trying to achieve. We'll help you figure out the right digital solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/book-demo" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1">
                Book a Strategy Call →
              </Link>
              <a
                href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20need%20help%20with%20a%20digital%20solution."
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
