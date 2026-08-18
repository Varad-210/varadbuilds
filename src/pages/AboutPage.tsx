import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Target, Lightbulb, Zap, Rocket, ShieldCheck, RefreshCw, Layers, Phone, MonitorSmartphone } from "lucide-react";

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About VaradBuilds | Web Development, Software & Meta Ads";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about VaradBuilds, founded by Varad Sontakke to help businesses build better websites, automate operations with custom software, and generate leads through Meta Ads.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Learn about VaradBuilds, founded by Varad Sontakke to help businesses build better websites, automate operations with custom software, and generate leads through Meta Ads.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* 1. HERO */}
      <section className="section-padding pt-32 pb-16 bg-section-soft">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm font-bold tracking-widest text-primary uppercase mb-4">About VaradBuilds</p>
            <h1 className="heading-xl text-foreground mb-8">
              Technology Should Make Running Your Business Easier.
            </h1>
            <p className="text-xl text-primary font-bold mb-4">
              I'm Varad Sontakke, Founder & Lead Developer at VaradBuilds.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              I help businesses build better digital systems through conversion-focused websites, custom software, and Meta Ads.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              But the technology is only part of the work.<br/>
              The real goal is to help your business <strong className="text-foreground">attract customers, reduce manual work, and operate more efficiently.</strong>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1 w-full sm:w-auto"
              >
                Let's Talk About Your Business
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-white text-foreground border-2 border-primary/20 rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 w-full sm:w-auto"
              >
                Explore Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. FOUNDER STORY */}
      <section className="section-padding py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <h2 className="heading-lg text-foreground mb-6">Why I Started VaradBuilds</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I started VaradBuilds after noticing a common problem among small and growing businesses:
                </p>
                <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary my-6">
                  <p className="text-xl font-bold text-primary">
                    The business was good. The digital system wasn't.
                  </p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Some businesses had great products and services but outdated websites.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Some were managing important operations through spreadsheets and repetitive manual work.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Others depended heavily on referrals because they didn't have a consistent system for generating leads online.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  And when they looked for technical help, they often encountered complicated jargon, unclear processes, and solutions built around technology rather than their actual business needs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-semibold mt-6">
                  That shaped the way I wanted to build VaradBuilds.
                </p>
                <div className="inline-block bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl mt-4 shadow-md">
                  Understand the business first. Build the technology second.
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px] flex items-center justify-center bg-muted">
                {/* Placeholder for professional founder photo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 flex flex-col items-center justify-center p-8 text-center border-2 border-dashed border-gray-300">
                  <span className="text-gray-400 font-bold text-xl mb-2">Professional Founder Photo Here</span>
                  <span className="text-gray-400 text-sm">Natural • Approachable • Clean background</span>
                  <p className="text-xs text-gray-400 mt-4">(Replace this div with actual img tag when image is available)</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BELIEVE */}
      <section className="section-padding py-24 bg-section-soft">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-8">
              Technology Is a Tool. Business Growth Is the Goal.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground mb-12">
              <p>A website isn't valuable because it uses modern technology.</p>
              <p>Software isn't valuable because it has hundreds of features.</p>
              <p>An ad campaign isn't valuable because it gets impressions.</p>
              <p className="font-semibold text-foreground text-xl mt-6">They're valuable when they help the business move forward.</p>
            </div>
            
            <p className="text-lg font-medium text-muted-foreground mb-8">That's why every project starts with a simple question:</p>
            <h3 className="text-3xl font-bold text-primary mb-10">What are we trying to improve?</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
              {[
                "More customers?", "Better credibility?", "Less manual work?",
                "Faster operations?", "Better customer experience?", "More qualified inquiries?"
              ].map((q, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-border/50 font-semibold text-foreground flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  {q}
                </div>
              ))}
            </div>
            <p className="text-lg font-medium text-foreground mt-10">
              Once we understand the problem, we can decide what technology actually makes sense.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 4 & 5. MISSION & VISION */}
      <section className="section-padding py-24 bg-section-soft">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <div className="bg-white p-10 rounded-3xl border border-primary/10 h-full shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Our Mission</h2>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-6">Make Better Technology Accessible to Growing Businesses.</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our mission is to help businesses use technology without unnecessary complexity. We want to make it easier for growing businesses to:
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Build a stronger digital presence.",
                    "Automate repetitive operations.",
                    "Reach potential customers online.",
                    "Understand their digital systems.",
                    "Make better use of technology."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="font-semibold text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-muted-foreground font-medium">
                  The objective isn't to make businesses dependent on complicated technology. It's to give them systems that make their business easier to run.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-10 rounded-3xl border border-primary/10 h-full shadow-md hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">Our Vision</h2>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-6">A Future Where Technology Works For the Business — Not the Other Way Around.</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  We envision a world where growing businesses don't have to choose between <strong className="text-foreground">Good technology</strong> and <strong className="text-foreground">Simple technology.</strong>
                </p>
                <p className="text-lg text-muted-foreground mb-8">They should be able to have both.</p>
                <p className="text-lg text-foreground font-semibold mb-4">Our long-term vision is to build digital systems that are:</p>
                <div className="flex flex-wrap gap-3">
                  {["Useful", "Simple", "Scalable", "Business-focused", "Built to evolve"].map((tag, idx) => (
                    <span key={idx} className="bg-white border border-border px-4 py-2 rounded-full font-bold text-sm shadow-sm text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 6. OUR VALUES */}
      <section className="section-padding py-24 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="heading-lg mb-4">What Guides the Way We Work</h2>
              <p className="text-xl text-gray-400">Our core values</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: "01", title: "Business First", desc: "We start with the business problem, not the technology. Before recommending a solution, we understand what you're trying to achieve." },
                { num: "02", title: "Simplicity", desc: "Technology shouldn't make things harder to understand. We aim to build systems that are powerful behind the scenes and simple to use." },
                { num: "03", title: "Clarity", desc: "You should always know: What we're building. Why we're building it. What happens next. No unnecessary technical jargon." },
                { num: "04", title: "Practicality", desc: "We don't recommend technology simply because it is new or impressive. If a simpler solution can solve the problem, we'll choose the simpler solution." },
                { num: "05", title: "Continuous Improvement", desc: "A digital system doesn't have to be perfect on day one. Build → Launch → Learn → Improve. We believe good systems evolve with the business." },
              ].map((val, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                  <span className="text-primary font-bold text-xl mb-4 block">{val.num} — {val.title}</span>
                  <p className="text-gray-300 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. WHAT WE HELP BUSINESSES DO */}
      <section className="section-padding py-24 bg-section-soft">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-foreground mb-4">From Digital Presence to Digital Operations</h2>
              <p className="text-xl text-muted-foreground">What we help businesses do</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: MonitorSmartphone, title: "ATTRACT", desc: "Build a website and online presence that gives potential customers a reason to trust your business." },
                { icon: Target, title: "CAPTURE", desc: "Turn attention into inquiries through better customer journeys, forms, landing pages, and tracking." },
                { icon: Zap, title: "AUTOMATE", desc: "Reduce repetitive work with software, dashboards, integrations, and automated workflows." },
                { icon: Rocket, title: "GROW", desc: "Create a digital foundation that can support the business as it gets bigger." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-border/50 text-center hover:border-primary/30 transition-colors shadow-md">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 8. OUR SERVICES */}
      <section className="section-padding py-24 bg-section-soft">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-foreground mb-4">Three Ways We Help Businesses Move Forward</h2>
              <p className="text-xl text-muted-foreground">Our Services</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Web Development", 
                  goal: "Build trust and turn website visitors into inquiries.", 
                  desc: "Conversion-focused websites designed around your customers and business goals.",
                  link: "/services", linkText: "Explore Web Development"
                },
                { 
                  title: "Custom Software", 
                  goal: "Replace manual work with systems built around your workflow.", 
                  desc: "Custom applications, dashboards, CRM systems, portals, integrations, and automation.",
                  link: "/services", linkText: "Explore Software Development"
                },
                { 
                  title: "Meta Ads", 
                  goal: "Create a system for reaching potential customers online.", 
                  desc: "Facebook and Instagram advertising built around audience, offer, creative, landing page, and conversion.",
                  link: "/services", linkText: "Explore Meta Ads"
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl border border-border shadow-sm flex flex-col h-full hover:shadow-md transition-shadow hover:border-primary/30">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="font-bold text-primary mb-4">{service.goal}</p>
                  <p className="text-muted-foreground mb-8 flex-grow">{service.desc}</p>
                  <Link to={service.link} className="inline-flex items-center text-primary font-bold hover:underline">
                    {service.linkText} <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 9. HOW I WORK */}
      <section className="section-padding py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="heading-lg text-foreground mb-4">How I Work</h2>
              <p className="text-xl text-muted-foreground">Listen → Understand → Plan → Build → Launch → Improve</p>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
              {[
                { num: "01", title: "LISTEN", desc: "We start with a conversation. Tell me about your business, your goals, and what's currently not working." },
                { num: "02", title: "UNDERSTAND", desc: "We look beyond the surface problem and understand how your business actually operates." },
                { num: "03", title: "PLAN", desc: "We define the right solution, scope, priorities, and next steps." },
                { num: "04", title: "BUILD", desc: "We design and develop the agreed solution with usability, performance, and business goals in mind." },
                { num: "05", title: "LAUNCH", desc: "We test the important user journeys and make sure the system is ready to use." },
                { num: "06", title: "IMPROVE", desc: "Once the system is live, feedback and real-world usage help identify opportunities for improvement." }
              ].map((step, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                    {idx + 1}
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-muted/20 border border-border shadow-sm">
                    <span className="text-primary font-bold mb-1 block">{step.num} — {step.title}</span>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 10. WHAT WORKING WITH US SHOULD FEEL LIKE */}
      <section className="section-padding py-24 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="heading-lg mb-6">Clear From the First Conversation.</h2>
              <p className="text-lg text-primary-foreground/90 mb-6">
                You shouldn't need to understand software development to work with a developer.
              </p>
              <p className="text-lg text-primary-foreground/90 mb-4">You should be able to explain:</p>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm mb-6 border border-white/20">
                <p className="text-xl font-bold italic">“Here's what is happening in my business.”</p>
              </div>
              <p className="text-lg text-primary-foreground/90 mb-4">And get a clear answer to:</p>
              <div className="bg-white p-6 rounded-xl text-primary shadow-lg">
                <p className="text-xl font-bold italic">“Here's how we can improve it.”</p>
              </div>
              <p className="text-lg font-bold mt-8">That's the kind of relationship we want to build.</p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-primary-foreground/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md">
                <ul className="space-y-6">
                  {["Clear communication.", "Practical recommendations.", "Transparent scope.", "Business-focused solutions.", "Long-term thinking."].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5" />
                      </div>
                      <span className="text-xl font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 11 & 12. A DIFFERENT KIND & FOUNDER CLOSING */}
      <section className="section-padding py-24 bg-section-soft">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-8" />
            <h2 className="heading-lg text-foreground mb-8">We Don't Want to Just Build Your Project.</h2>
            <p className="text-2xl font-bold text-foreground mb-12">We want to understand why the project matters.</p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <p className="text-muted-foreground mb-2">Because a website isn't just a collection of pages.</p>
                <p className="font-bold text-foreground">It's part of your sales process.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <p className="text-muted-foreground mb-2">Software isn't just an application.</p>
                <p className="font-bold text-foreground">It's part of how your team operates.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                <p className="text-muted-foreground mb-2">Ads aren't just campaigns.</p>
                <p className="font-bold text-foreground">They're part of how customers discover your business.</p>
              </div>
            </div>
            
            <p className="text-2xl font-bold text-primary mb-16">
              The better these systems work together, the easier it becomes to grow.
            </p>
            
            <div className="border-t border-border pt-16">
              <p className="text-sm font-bold tracking-widest text-primary uppercase mb-6">Behind VaradBuilds</p>
              <h3 className="text-2xl font-bold text-foreground mb-2">Varad Sontakke</h3>
              <p className="text-muted-foreground mb-8">Founder & Lead Developer</p>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-xl text-muted-foreground italic mb-10">
                  "I believe technology should reduce your workload, improve your customer experience, and create opportunities for growth. That's the standard I want every VaradBuilds project to work toward."
                </p>
                
                <div className="bg-white inline-block px-8 py-6 rounded-2xl shadow-sm border border-border/50">
                  <p className="text-2xl font-bold text-primary mb-2">Technology should work for your business.</p>
                  <p className="text-lg text-muted-foreground font-medium">Not the other way around.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <section className="section-padding py-24 bg-section-soft">
        <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-3xl shadow-xl border border-primary/10">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-6">Let's Talk About What Your Business Needs.</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              You don't need to know exactly what technology you need before contacting us. Tell us:
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10 text-lg font-bold text-foreground">
              <span>What's not working?</span>
              <span className="hidden md:inline text-primary">•</span>
              <span>What are you trying to improve?</span>
              <span className="hidden md:inline text-primary">•</span>
              <span>Where do you want your business to go?</span>
            </div>
            
            <p className="text-xl text-primary font-bold mb-10">We'll help you figure out the right next step.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to="/book-demo"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1 w-full sm:w-auto"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://wa.me/919421528659" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 shadow-[0_8px_30px_rgb(34,197,94,0.3)] hover:-translate-y-1 w-full sm:w-auto"
              >
                WhatsApp Us
              </a>
            </div>
            
            <p className="text-sm font-medium text-muted-foreground max-w-md mx-auto bg-white/80 py-2 px-4 rounded-full shadow-sm border border-border">
              No complicated jargon. No unnecessary solutions. Just a conversation about your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};
