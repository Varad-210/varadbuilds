import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const BookDemo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", business: "", industry: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp redirect
    const message = encodeURIComponent(
      `Hi, I'm ${form.name} from ${form.business} (${form.industry}). I'd like to book a demo of VaradBuilds AI Receptionist. My number is ${form.phone}.`
    );
    window.open(`https://wa.me/919999999999?text=${message}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="section-padding pt-40 pb-24 min-h-screen flex items-center">
        <div className="max-w-xl mx-auto w-full">
          <AnimatedSection>
            <p className="text-sm tracking-[0.3em] uppercase text-silver-muted mb-4 font-body text-center">
              Get Started
            </p>
            <h1 className="heading-lg text-foreground text-center mb-4">
              Book a <span className="italic">Live Demo</span>
            </h1>
            <p className="body-md text-muted-foreground text-center mb-12">
              15 minutes. No commitment. Hear your AI receptionist in action.
            </p>
          </AnimatedSection>

          {submitted ? (
            <AnimatedSection className="text-center">
              <div className="border border-border rounded-sm p-12 glow-soft">
                <h2 className="heading-md text-foreground mb-4">Thank You</h2>
                <p className="body-md text-muted-foreground">
                  We'll connect with you on WhatsApp shortly. Looking forward to showing you the future of customer calls.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Rajesh Kumar"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">Business Name</label>
                  <input
                    type="text"
                    required
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Grand Palace Hotel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">Industry</label>
                  <select
                    required
                    value={form.industry}
                    onChange={(e) => setForm({ ...form, industry: e.target.value })}
                    className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="" className="bg-background">Select your industry</option>
                    <option value="Hotel" className="bg-background">Hotel</option>
                    <option value="Restaurant" className="bg-background">Restaurant</option>
                    <option value="Clinic" className="bg-background">Clinic</option>
                    <option value="Real Estate" className="bg-background">Real Estate</option>
                    <option value="Salon" className="bg-background">Salon</option>
                    <option value="Other" className="bg-background">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-base font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300 mt-4"
                >
                  Book My Demo
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  You'll be redirected to WhatsApp to confirm your booking.
                </p>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BookDemo;
