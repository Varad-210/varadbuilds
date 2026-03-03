import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
}

const PlaceholderPage = ({ title, subtitle }: PlaceholderPageProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="section-padding pt-40 pb-24 min-h-[70vh] flex items-center justify-center">
      <AnimatedSection className="text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body">
          Coming Soon
        </p>
        <h1 className="heading-xl text-foreground mb-6">{title}</h1>
        <p className="body-lg text-muted-foreground max-w-xl mx-auto mb-10">{subtitle}</p>
        <Link
          to="/book-demo"
          className="inline-block px-10 py-4 text-base font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300"
        >
          Book a Demo Instead
        </Link>
      </AnimatedSection>
    </section>
    <Footer />
  </div>
);

export const ServicesPage = () => {
  const services = [
    {
      title: "Professional Website & Online Presence",
      badge: "🟢 Foundation",
      description: "Stop losing customers to competitors. Get found online with a professional mobile-friendly website that works 24/7.",
      features: [
        "Mobile-responsive website design",
        "Click-to-WhatsApp instant contact",
        "Auto-reply greeting system",
        "Business info display (hours, location, menu)",
        "Google Maps integration & optimization",
        "Contact form with WhatsApp lead capture",
        "Secure hosting & SSL certificate",
        "Fast loading & SEO optimized"
      ],
      problem: "People search your business → find nothing → go to competitor",
      solution: "Professional online presence that captures every visitor"
    },
    {
      title: "Automated Booking & Follow-up System",
      badge: "🟡 Growth Engine",
      description: "Stop losing 40-60% of leads due to forgotten follow-ups. Automate your entire customer journey from enquiry to booking.",
      features: [
        "Automated WhatsApp enquiry responses",
        "Multi-channel lead capture (FB/Insta/Website)",
        "Smart follow-up sequences (Day 1, 3, 7)",
        "Online appointment booking system",
        "Automatic visit reminders",
        "Post-visit review collection",
        "Customer database management",
        "Monthly performance analytics"
      ],
      problem: "Leads come in → you get busy → follow-ups forgotten → customers lost",
      solution: "Automatic system that nurtures every lead to conversion"
    },
    {
      title: "AI Voice Receptionist",
      badge: "🔴 24/7 Automation",
      description: "Never miss a call again. Your AI receptionist answers calls, books appointments, and qualifies leads — even when you're busy or closed.",
      features: [
        "AI answers incoming calls naturally",
        "Handles customer conversations in Hindi/English",
        "Books appointments automatically",
        "Answers FAQs (pricing, timing, availability)",
        "Missed-call auto callback system",
        "Lead qualification (filters serious customers)",
        "WhatsApp booking confirmations",
        "Call recordings & analytics"
      ],
      problem: "Missed calls = lost customers = lost revenue",
      solution: "AI staff that works 24/7 without breaks or holidays"
    },
    {
      title: "WhatsApp Business Automation",
      badge: "💬 Instant Response",
      description: "Respond to customer messages instantly, even at 3 AM. Automate greetings, FAQs, and booking confirmations via WhatsApp.",
      features: [
        "Instant auto-reply to messages",
        "Smart FAQ responses",
        "Booking confirmation messages",
        "Appointment reminders",
        "Follow-up message sequences",
        "Broadcast messages to customers",
        "Customer segmentation",
        "WhatsApp catalog integration"
      ],
      problem: "Late replies → customers message competitors → you lose business",
      solution: "Instant automated responses that keep customers engaged"
    },
    {
      title: "QR Code Ordering System",
      badge: "🍽 For Restaurants",
      description: "Customers scan, order, and pay from their table. Reduce wait times, eliminate order mistakes, and increase table turnover.",
      features: [
        "Digital menu with photos & descriptions",
        "Table-specific QR codes",
        "Direct order to kitchen display",
        "Real-time order tracking",
        "Multiple payment options",
        "Order modification system",
        "Customer feedback collection",
        "Sales analytics dashboard"
      ],
      problem: "Staff busy → customers wait → orders cancelled → revenue lost",
      solution: "Self-service ordering that increases speed and order value"
    },
    {
      title: "Lead Capture & CRM System",
      badge: "📊 Data Management",
      description: "Never lose a customer contact again. Capture, organize, and nurture every lead automatically with smart CRM.",
      features: [
        "Automatic lead capture from all sources",
        "Customer database with history",
        "Lead scoring & prioritization",
        "Automated follow-up workflows",
        "Customer segmentation",
        "Birthday & anniversary reminders",
        "Repeat customer tracking",
        "ROI & conversion analytics"
      ],
      problem: "Contacts scattered → no follow-up system → repeat business lost",
      solution: "Centralized system that maximizes customer lifetime value"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-16 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body">
              What We Do
            </p>
            <h1 className="heading-xl text-foreground mb-6">
              Smart Automation Solutions<br />
              <span className="italic text-accent">Built for Indian Businesses</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              We don't just build websites. We install complete customer systems that capture leads, 
              convert enquiries, and increase repeat business — automatically.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding py-16 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="border border-accent/30 rounded-sm p-10 text-center bg-accent/5 glow-soft">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Why Businesses Lose Customers
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-background rounded-sm border border-border">
                  <p className="text-3xl mb-2">📞</p>
                  <p className="text-foreground font-medium">Calls are missed</p>
                </div>
                <div className="p-4 bg-background rounded-sm border border-border">
                  <p className="text-3xl mb-2">⏰</p>
                  <p className="text-foreground font-medium">Replies are late</p>
                </div>
                <div className="p-4 bg-background rounded-sm border border-border">
                  <p className="text-3xl mb-2">❌</p>
                  <p className="text-foreground font-medium">Follow-ups never happen</p>
                </div>
              </div>
              <p className="text-lg text-accent font-medium mt-8">
                VaradBuilds fixes all of this — automatically.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="border border-border rounded-sm p-8 h-full hover:border-accent transition-all duration-300 glow-soft flex flex-col">
                  {/* Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-sm text-sm font-medium text-accent">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="body-sm text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Problem/Solution */}
                  <div className="mb-6 p-4 bg-muted/30 rounded-sm border border-border">
                    <p className="text-xs text-silver-muted uppercase tracking-wider mb-2">Problem</p>
                    <p className="text-sm text-muted-foreground mb-3">{service.problem}</p>
                    <p className="text-xs text-accent uppercase tracking-wider mb-2">Solution</p>
                    <p className="text-sm text-foreground font-medium">{service.solution}</p>
                  </div>

                  {/* Features */}
                  <div className="flex-grow">
                    <p className="text-xs text-silver-muted uppercase tracking-wider mb-3">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 6).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 6 && (
                        <li className="text-sm text-accent font-medium">
                          + {service.features.length - 6} more features
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding py-16 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-12 text-center">
              How We Work With You
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Understand", desc: "We learn about your business, customers, and goals" },
                { step: "2", title: "Design", desc: "We create a custom automation system for your needs" },
                { step: "3", title: "Setup", desc: "We install and configure everything (3-5 days)" },
                { step: "4", title: "Support", desc: "We provide ongoing support and optimization" }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 bg-background border border-border rounded-sm hover:border-accent transition-all glow-soft">
                  <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-heading text-xl font-semibold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="border-2 border-accent rounded-sm p-12 bg-accent/5 glow-accent">
              <h2 className="heading-lg text-foreground mb-4">
                Ready to Stop Losing Customers?
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                See how our automation system works on YOUR business — free demo, no commitment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-demo"
                  className="inline-block px-12 py-4 text-lg font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300"
                >
                  Book Free Demo
                </Link>
                <Link
                  to="/pricing"
                  className="inline-block px-12 py-4 text-lg font-medium border-2 border-accent text-accent rounded-sm hover:bg-accent hover:text-background transition-all duration-300"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="section-padding pt-32 pb-16 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body">
              About VaradBuilds
            </p>
            <h1 className="heading-xl text-foreground mb-6">
              Built for Local Businesses<br />
              <span className="italic text-accent">Not Tech Companies</span>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="border border-accent/30 rounded-sm p-10 bg-accent/5 glow-soft">
              <p className="text-xl text-foreground font-medium mb-6 text-center">
                Most small businesses don't fail because of poor service.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-center">They fail because:</p>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-background rounded-sm border border-border">
                  <span className="text-2xl">📞</span>
                  <p className="text-foreground">Calls are missed</p>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-sm border border-border">
                  <span className="text-2xl">⏰</span>
                  <p className="text-foreground">Messages are replied late</p>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-sm border border-border">
                  <span className="text-2xl">❓</span>
                  <p className="text-foreground">Customers don't get answers quickly</p>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-sm border border-border">
                  <span className="text-2xl">❌</span>
                  <p className="text-foreground">Follow-ups never happen</p>
                </div>
              </div>
              <div className="border-t border-accent/30 pt-6">
                <p className="text-lg text-foreground text-center mb-4">
                  In today's world, customers contact 3–4 businesses and go to whoever replies first.
                </p>
                <p className="text-xl text-accent font-semibold text-center">
                  VaradBuilds was created to make sure that business is yours.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Introduction */}
      <section className="section-padding py-16">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="border border-border rounded-sm p-10 md:p-12 glow-soft">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-2">
                Hi, I'm Varad Sontakke
              </h2>
              <p className="text-lg text-accent mb-6 font-medium">
                Founder — VaradBuilds
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p className="body-lg">
                  I'm a technology student from Maharashtra who works directly with local business owners — 
                  salons, cafes, clinics, coaching classes and restaurants.
                </p>
                <p className="body-lg">
                  While interacting with businesses around my area, I noticed a common problem:
                </p>
                <p className="text-xl text-foreground font-medium italic text-center py-4">
                  Owners were working hard… but still losing customers every day.
                </p>
                <p className="body-lg">
                  Not because their service was bad. Because they were busy.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="section-padding py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-8 text-center">
              During Peak Hours
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Calls go unanswered",
                "WhatsApp replies get delayed",
                "Bookings are forgotten",
                "Potential customers move to competitors"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-6 bg-background border border-border rounded-sm">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="border-2 border-accent/30 rounded-sm p-8 bg-accent/5 text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Hiring a receptionist is costly for most small businesses.
              </p>
              <p className="text-xl text-foreground font-semibold mb-4">
                So I started building a different solution —
              </p>
              <p className="text-2xl text-accent font-heading font-semibold">
                An AI assistant that works 24/7 without salary, leaves or mistakes.
              </p>
              <p className="text-lg text-muted-foreground mt-6">
                That is how VaradBuilds started.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What VaradBuilds Does */}
      <section className="section-padding py-16">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-8 text-center">
              What VaradBuilds Does
            </h2>
            <p className="body-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              We install smart systems inside your business that automatically:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                "Reply to customers instantly",
                "Answer common questions",
                "Book appointments",
                "Send reminders",
                "Collect reviews",
                "Handle enquiries even after closing time"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-6 bg-background border border-border rounded-sm hover:border-accent transition-all glow-soft">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>
            <div className="border border-accent/30 rounded-sm p-8 bg-accent/5 text-center">
              <p className="text-xl text-foreground font-semibold mb-4">
                Think of it as a digital staff member who never sleeps.
              </p>
              <p className="text-muted-foreground">
                You don't need technical knowledge. I personally handle setup, testing and support.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding py-16 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-12 text-center">
              Why Businesses Trust VaradBuilds
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-border rounded-sm p-8 bg-background glow-soft">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Personal Setup
                </h3>
                <p className="text-muted-foreground">
                  This is not downloadable software. Every system is configured specifically for your business.
                </p>
              </div>
              <div className="border border-border rounded-sm p-8 bg-background glow-soft">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Custom Training
                </h3>
                <p className="text-muted-foreground">
                  Your AI is trained on: your services, your pricing, your FAQs and your working hours.
                </p>
              </div>
              <div className="border border-border rounded-sm p-8 bg-background glow-soft">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Built for Indian Customers
                </h3>
                <p className="text-muted-foreground">
                  Indian customers prefer quick replies and WhatsApp communication. Our systems are designed for exactly that behaviour.
                </p>
              </div>
              <div className="border border-border rounded-sm p-8 bg-background glow-soft">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Multi-Language Support
                </h3>
                <p className="text-muted-foreground">
                  Your assistant can respond in: <span className="text-accent font-medium">Hindi • Marathi • English</span>
                </p>
              </div>
              <div className="border border-border rounded-sm p-8 bg-background glow-soft md:col-span-2">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  Direct Support
                </h3>
                <p className="text-muted-foreground">
                  You communicate directly with me on WhatsApp. No ticket systems. No waiting days.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Install */}
      <section className="section-padding py-16">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-12 text-center">
              What We Install
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "AI Voice Receptionist (handles incoming calls)",
                "Automatic Booking Assistant",
                "WhatsApp Enquiry System",
                "Lead Capture & Follow-ups",
                "Restaurant QR Ordering System",
                "POS & Order Dashboard"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-background border border-border rounded-sm hover:border-accent transition-all">
                  <Check className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How Setup Works */}
      <section className="section-padding py-16 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-12 text-center">
              How the Setup Works
            </h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Business Understanding", desc: "We discuss how customers currently contact you." },
                { step: "2", title: "Information Collection", desc: "Menu/services, FAQs, timings, booking process." },
                { step: "3", title: "System Configuration", desc: "I set up and train the assistant for your business." },
                { step: "4", title: "Testing", desc: "We do live test calls and messages together." },
                { step: "5", title: "Go Live", desc: "Your assistant starts handling real customers immediately." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start p-6 bg-background border border-border rounded-sm hover:border-accent transition-all glow-soft">
                  <div className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center font-heading text-xl font-semibold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-accent/10 border border-accent/30 rounded-sm text-center">
              <p className="text-lg text-foreground font-medium">
                Setup typically completes within 3–5 days.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedSection>
              <div className="border border-border rounded-sm p-8 h-full bg-background glow-soft">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  My Mission
                </h2>
                <p className="text-lg text-accent font-medium mb-4">
                  My goal is simple:
                </p>
                <p className="text-muted-foreground mb-4">
                  Help small businesses use technology without complexity.
                </p>
                <p className="text-muted-foreground mb-4">
                  You should focus on serving customers — not constantly answering phone calls.
                </p>
                <p className="text-foreground font-medium">
                  Technology should reduce your workload, not increase it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="border border-border rounded-sm p-8 h-full bg-background glow-soft">
                <h2 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  My Vision
                </h2>
                <p className="text-muted-foreground mb-6">
                  I want every small business owner to have access to tools that were previously only available to large companies.
                </p>
                <div className="space-y-3">
                  {[
                    "Affordable automation",
                    "More bookings",
                    "Less stress",
                    "Business running even when you are busy"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <p className="text-foreground font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="border-2 border-accent rounded-sm p-12 bg-accent/5 glow-accent">
              <h2 className="heading-lg text-foreground mb-4">
                Ready to See It Working?
              </h2>
              <p className="body-lg text-muted-foreground mb-6">
                Before you decide anything, I will show the system working using your own business details.
              </p>
              <p className="text-sm text-silver-muted mb-8">
                No payment required to view the demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/book-demo"
                  className="inline-block px-12 py-4 text-lg font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300"
                >
                  👉 Book a Free Demo
                </Link>
                <a
                  href="https://wa.me/919049671938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-4 text-lg font-medium border-2 border-accent text-accent rounded-sm hover:bg-accent hover:text-background transition-all duration-300"
                >
                  💬 Message on WhatsApp
                </a>
              </div>
              <div className="border-t border-accent/30 pt-8 mt-8">
                <p className="text-xl font-heading font-semibold text-foreground mb-2">
                  VaradBuilds
                </p>
                <p className="text-accent font-medium mb-4">
                  Smart Automation for Growing Businesses
                </p>
                <p className="text-lg text-muted-foreground italic">
                  "Your business should not lose customers just because you were busy."
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};



// Keep these for routing compatibility
export const IndustriesPage = () => <PlaceholderPage title="Industries" subtitle="Purpose-built solutions for hotels, restaurants, clinics, and more." />;
export const CaseStudiesPage = () => <PlaceholderPage title="Case Studies" subtitle="See how businesses like yours transformed their customer experience." />;

export const PricingPage = () => {
  const services = [
    {
      title: "Starter Presence Package",
      badge: "🟢 Best for New Businesses",
      subtitle: "Professional Online Presence",
      description: "People search your business online → they find nothing → they go to competitor. We create your professional online presence and make sure no message is ignored.",
      setupCost: "₹7,999",
      recurring: "₹999/month",
      recurringNote: "hosting, updates, backups, support",
      features: [
        "Professional mobile-friendly website",
        "Click-to-WhatsApp button",
        "Instant WhatsApp greeting auto-reply",
        "Business info (timings, services, location, menu)",
        "Google Maps listing setup / optimization",
        "Contact form → direct WhatsApp lead",
        "1 year secure hosting + SSL"
      ],
      ideal: ["New Businesses", "Salons", "Small Cafes", "Home Services"],
      result: "Customers can find you online and message anytime — even at night — and they instantly get a reply."
    },
    {
      title: "Growth Automation Package",
      badge: "🟡 MOST POPULAR ⭐",
      subtitle: "Automatic Booking & Follow-up System",
      description: "Most businesses lose 40-60% leads because they forget follow-ups. We install an automatic booking & follow-up system.",
      setupCost: "₹19,999",
      recurring: "₹2,999/month",
      popular: true,
      features: [
        "Everything in Starter PLUS:",
        "Automated WhatsApp replies to enquiries",
        "Lead capture form (Facebook/Instagram/Website)",
        "Automatic follow-up messages (Day 1, 3, 7)",
        "Appointment booking system",
        "Auto reminders before visit",
        "Review collection (Google rating increase)",
        "Customer database (no more lost contacts)",
        "Monthly performance report"
      ],
      ideal: ["Clinics", "Gyms", "Coaching Classes", "Salons", "Consultants"],
      result: "Your phone stops ringing constantly — yet bookings increase. Even 2–3 extra customers per day can generate ₹20k–₹40k extra monthly revenue."
    },
    {
      title: "Pro AI Receptionist Package",
      badge: "🔴 For Busy Businesses",
      subtitle: "24/7 AI Voice & Message Handler",
      description: "Missed calls = lost customers. Your AI receptionist answers calls and messages 24/7.",
      setupCost: "₹44,999",
      recurring: "₹6,999/month",
      features: [
        "Everything in Growth PLUS:",
        "AI voice agent answers incoming calls",
        "Automatically talks with customers",
        "Books appointments",
        "Handles FAQs (price, timing, availability)",
        "Missed-call auto callback",
        "Lead qualification (serious vs timepass leads)",
        "WhatsApp confirmation messages",
        "Priority support"
      ],
      ideal: ["Busy Clinics", "Restaurants", "Real Estate", "Coaching Institutes"],
      result: "Your business works even when you are busy, shop is closed, or staff is unavailable. One extra confirmed booking daily can recover the full cost."
    },
    {
      title: "Restaurant POS + QR Ordering",
      badge: "🍽 For Food Businesses",
      subtitle: "Direct Table Ordering System",
      description: "Staff busy → customers wait → order cancelled. Customers scan QR and order directly from table.",
      setupCost: "₹17,999",
      recurring: "₹1,999/month",
      features: [
        "Digital menu website",
        "Table QR codes",
        "Customers order from phone",
        "Order goes directly to kitchen",
        "Live order dashboard",
        "Reduced staff dependency",
        "Faster service",
        "Higher order value"
      ],
      ideal: ["Restaurants", "Cafes", "Cloud Kitchens", "Food Courts"],
      result: "Faster ordering + fewer mistakes + more repeat customers. Even 5 extra orders daily can increase ₹25k+ monthly revenue."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 pb-16 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body">
              Smart Business Automation
            </p>
            <h1 className="heading-xl text-foreground mb-6">
              Get More Customers<br />
              <span className="italic text-accent">Automatically</span>
            </h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Many businesses lose customers because replies are late, calls are missed, and follow-ups never happen.
            </p>
            <div className="inline-block border border-accent/30 rounded-sm p-6 bg-accent/5 glow-soft">
              <p className="text-lg text-foreground font-medium">
                VaradBuilds installs a system that replies instantly, books customers, and reminds them automatically — even when you're busy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Not a Website Section */}
      <section className="section-padding py-16 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="border-2 border-accent rounded-sm p-10 text-center glow-accent">
              <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
                Not a Website — A Customer System
              </h2>
              <p className="body-lg text-muted-foreground mb-6">
                We don't sell websites. We install a customer booking and follow-up system that helps you:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 bg-background rounded-sm border border-border">
                  <p className="text-lg font-medium text-accent">Capture Leads</p>
                </div>
                <div className="p-4 bg-background rounded-sm border border-border">
                  <p className="text-lg font-medium text-accent">Convert Enquiries</p>
                </div>
                <div className="p-4 bg-background rounded-sm border border-border">
                  <p className="text-lg font-medium text-accent">Increase Repeat Customers</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`border rounded-sm p-8 h-full flex flex-col transition-all duration-300 ${
                  service.popular 
                    ? 'border-accent bg-accent/5 glow-accent' 
                    : 'border-border hover:border-accent glow-soft'
                }`}>
                  {/* Badge */}
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-background border border-border rounded-sm text-sm font-medium">
                      {service.badge}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-accent uppercase tracking-wider mb-4 font-medium">
                      {service.subtitle}
                    </p>
                    <p className="body-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-border">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-silver-muted uppercase tracking-wider mb-1">
                          Setup Cost
                        </p>
                        <p className="text-3xl font-heading font-semibold text-foreground">
                          {service.setupCost}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">one-time</p>
                      </div>
                      <div>
                        <p className="text-xs text-silver-muted uppercase tracking-wider mb-1">
                          Monthly Plan
                        </p>
                        <p className="text-3xl font-heading font-semibold text-accent">
                          {service.recurring}
                        </p>
                        {service.recurringNote && (
                          <p className="text-xs text-muted-foreground mt-1">{service.recurringNote}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-grow">
                    <p className="text-xs text-silver-muted uppercase tracking-wider mb-3">
                      What You Get
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className={`text-sm ${feature.includes('PLUS:') ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business Result */}
                  <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-sm">
                    <p className="text-xs text-silver-muted uppercase tracking-wider mb-2">
                      Business Result
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">
                      {service.result}
                    </p>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <p className="text-xs text-silver-muted uppercase tracking-wider mb-2">
                      Ideal For
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.ideal.map((industry, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-muted text-foreground rounded-full border border-border"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/book-demo"
                    className={`w-full px-6 py-3 text-center rounded-sm transition-all duration-300 ${
                      service.popular
                        ? 'bg-accent text-background hover:bg-accent/90'
                        : 'bg-foreground text-background hover:bg-accent'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-12 text-center">
              Why Businesses Choose VaradBuilds
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: "✓", text: "No technical knowledge needed" },
                { icon: "✓", text: "Works on your existing phone" },
                { icon: "✓", text: "Setup within 3–5 days" },
                { icon: "✓", text: "Local support" },
                { icon: "✓", text: "One-time setup, long-term benefits" },
                { icon: "✓", text: "Free demo before you decide" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-background border border-border rounded-sm hover:border-accent transition-all glow-soft">
                  <span className="text-2xl text-accent">{item.icon}</span>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="border-2 border-accent rounded-sm p-12 bg-accent/5 glow-accent">
              <h2 className="heading-lg text-foreground mb-4">
                Get a Free Business Automation Demo
              </h2>
              <p className="body-lg text-muted-foreground mb-8">
                We will show the system working on YOUR business name before you decide.
              </p>
              <p className="text-sm text-silver-muted mb-8">
                No payment required to see demo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/book-demo"
                  className="inline-block px-12 py-4 text-lg font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300"
                >
                  📞 Book Free Demo
                </Link>
                <a
                  href="https://wa.me/919049671938"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-4 text-lg font-medium border-2 border-accent text-accent rounded-sm hover:bg-accent hover:text-background transition-all duration-300"
                >
                  💬 Message on WhatsApp
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};
