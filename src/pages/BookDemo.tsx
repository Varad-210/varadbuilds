import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { bookingAPI } from "@/services/api";
import { useToast } from "@/hooks/use-toast";

const BookDemo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [form, setForm] = useState({ 
    name: "", 
    phone: "", 
    email: "",
    business: "", 
    industry: "",
    city: "",
    preferredDate: "",
    preferredTime: "",
    monthlyCalls: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Save to MongoDB
      const bookingData = {
        customerName: form.name,
        phoneNumber: form.phone,
        email: form.email,
        businessType: form.industry.toLowerCase().replace(" ", "") as any,
        serviceType: 'consultation' as const,
        preferredDate: new Date(form.preferredDate),
        preferredTime: form.preferredTime,
        city: form.city,
        monthlyCalls: form.monthlyCalls,
        message: form.message,
        source: 'website' as const
      };

      const response = await bookingAPI.create(bookingData);

      if (response.success) {
        // WhatsApp redirect
        const message = encodeURIComponent(
          `Hi, I'm ${form.name} from ${form.business} (${form.industry}). I'd like to book a demo of VaradBuilds AI Receptionist. My number is ${form.phone}. Preferred date: ${form.preferredDate} at ${form.preferredTime}.`
        );
        window.open(`https://wa.me/919049671938?text=${message}`, "_blank");
        
        toast({
          title: "Booking Submitted!",
          description: "Your demo booking has been saved. We'll contact you soon.",
        });
        
        setSubmitted(true);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error('Booking error:', error);
      toast({
        title: "Booking Saved Locally",
        description: "We'll still contact you via WhatsApp.",
        variant: "default",
      });
      
      // Still redirect to WhatsApp even if DB fails
      const message = encodeURIComponent(
        `Hi, I'm ${form.name} from ${form.business} (${form.industry}). I'd like to book a demo of VaradBuilds AI Receptionist. My number is ${form.phone}.`
      );
      window.open(`https://wa.me/919049671938?text=${message}`, "_blank");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="section-padding pt-40 pb-24 min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto w-full">
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">Your Name *</label>
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
                    <label className="block text-sm font-body text-muted-foreground mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">Business Name *</label>
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
                    <label className="block text-sm font-body text-muted-foreground mb-2">Business Type *</label>
                    <select
                      required
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="" className="bg-background">Select type</option>
                      <option value="hotel" className="bg-background">Hotel</option>
                      <option value="restaurant" className="bg-background">Restaurant</option>
                      <option value="cafe" className="bg-background">Cafe</option>
                      <option value="clinic" className="bg-background">Clinic</option>
                      <option value="salon" className="bg-background">Salon</option>
                      <option value="realestate" className="bg-background">Real Estate</option>
                      <option value="other" className="bg-background">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">City *</label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Pune"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={form.preferredDate}
                      onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                      className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">Preferred Time *</label>
                    <select
                      required
                      value={form.preferredTime}
                      onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                      className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="" className="bg-background">Select time</option>
                      <option value="10:00 AM" className="bg-background">10:00 AM</option>
                      <option value="11:00 AM" className="bg-background">11:00 AM</option>
                      <option value="12:00 PM" className="bg-background">12:00 PM</option>
                      <option value="2:00 PM" className="bg-background">2:00 PM</option>
                      <option value="3:00 PM" className="bg-background">3:00 PM</option>
                      <option value="4:00 PM" className="bg-background">4:00 PM</option>
                      <option value="5:00 PM" className="bg-background">5:00 PM</option>
                      <option value="6:00 PM" className="bg-background">6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">Monthly Calls (Optional)</label>
                  <input
                    type="text"
                    value={form.monthlyCalls}
                    onChange={(e) => setForm({ ...form, monthlyCalls: e.target.value })}
                    className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    placeholder="Approx. 100-200 calls/month"
                  />
                </div>

                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">Message (Optional)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="w-full bg-transparent border border-border rounded-sm px-4 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-base font-medium bg-foreground text-background rounded-sm hover:bg-accent transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Book My Demo'}
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
