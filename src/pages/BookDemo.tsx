import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

export const BookDemo = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "",
    city: "",
    budget: "",
    problem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    try {
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const API_URL = `${baseUrl.replace(/\/$/, "")}/api/bookings`;

      /*
       * Convert frontend field names to the exact
       * Prisma Booking field names.
       */
      const bookingData = {
        customerName: formData.name.trim(),

        phoneNumber: formData.phone.trim(),

        email: formData.email.trim() || null,

        // Business Name is stored as businessType
        // because that is what your Prisma schema expects.
        businessType: formData.businessName.trim(),

        serviceType: formData.service.trim(),

        /*
         * Your current form does not ask for date/time/city.
         *
         * We provide sensible defaults so the existing
         * Prisma Booking model can be used.
         */
        preferredDate: new Date().toISOString(),

        preferredTime: "To be discussed",

        city: formData.city.trim() || "Not provided",

        message: [
          formData.budget
            ? `Budget: ${formData.budget}`
            : null,
          formData.problem
            ? `Problem: ${formData.problem}`
            : null,
        ]
          .filter(Boolean)
          .join("\n") || null,
      };

      console.log("📤 Sending booking:", bookingData);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error(
          `Server returned an invalid response (${response.status})`
        );
      }

      console.log("📥 Backend response:", result);

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            result.message ||
            "Unable to submit your booking."
        );
      }

      /*
       * Only show success AFTER the backend confirms
       * that PostgreSQL successfully created the booking.
       */
      setIsSubmitted(true);

      toast.success("Strategy call request submitted!");

    } catch (error) {
      console.error("❌ Booking submission failed:", error);

      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center py-32 relative overflow-hidden">

        {/* Background effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

          {!isSubmitted ? (

            <div className="grid md:grid-cols-5 gap-12 items-start">

              {/* LEFT CONTENT */}
              <div className="md:col-span-2 space-y-6 pt-4">

                <AnimatedSection>

                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                    Let's Find the Right Digital Solution for Your Business.
                  </h1>

                  <p className="text-lg text-muted-foreground mt-6 leading-relaxed font-medium">
                    Tell us what you're trying to improve. We'll understand
                    the problem, ask the right questions, and recommend the
                    next step.
                  </p>

                  <div className="mt-12 space-y-6">

                    <div className="flex items-start gap-4">

                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-primary" />
                      </div>

                      <div>

                        <p className="font-bold text-foreground">
                          Prefer WhatsApp?
                        </p>

                        <a
                          href="https://wa.me/919049671938?text=Hi%20Varad,%20I'm%20interested%20in%20discussing%20a%20digital%20growth%20project."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Chat with us instantly
                        </a>

                      </div>

                    </div>

                  </div>

                </AnimatedSection>

              </div>


              {/* FORM */}
              <div className="md:col-span-3">

                <AnimatedSection delay={0.1}>

                  <div className="glass-card p-8 md:p-10 rounded-2xl bg-white shadow-xl border border-primary/10 relative">

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >

                      {/* NAME + BUSINESS */}
                      <div className="grid sm:grid-cols-2 gap-6">

                        <div className="space-y-2">

                          <label className="text-sm font-bold text-foreground">
                            Name *
                          </label>

                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="John Doe"
                          />

                        </div>

                        <div className="space-y-2">

                          <label className="text-sm font-bold text-foreground">
                            Business Name *
                          </label>

                          <input
                            required
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="Acme Corp"
                          />

                        </div>

                      </div>


                      {/* EMAIL + PHONE */}
                      <div className="grid sm:grid-cols-2 gap-6">

                        <div className="space-y-2">

                          <label className="text-sm font-bold text-foreground">
                            Email *
                          </label>

                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="john@example.com"
                          />

                        </div>

                        <div className="space-y-2">

                          <label className="text-sm font-bold text-foreground">
                            WhatsApp / Phone *
                          </label>

                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="+91 98765 43210"
                          />

                        </div>

                      </div>


                      {/* SERVICE */}
                      <div className="space-y-2">

                        <label className="text-sm font-bold text-foreground">
                          What do you need help with? *
                        </label>

                        <select
                          required
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        >

                          <option value="">
                            Select an option
                          </option>

                          <option value="Website">
                            Website
                          </option>

                          <option value="Custom Software">
                            Custom Software
                          </option>

                          <option value="Meta Ads">
                            Meta Ads
                          </option>

                          <option value="Restaurant POS / QR Ordering">
                            Restaurant POS / QR Ordering
                          </option>

                          <option value="Not sure yet">
                            Not sure yet
                          </option>

                        </select>

                      </div>


                      {/* WEBSITE + BUDGET */}
                      <div className="grid sm:grid-cols-2 gap-6">

                        <div className="space-y-2">

                          <label className="text-sm font-bold text-foreground">
                            City *
                          </label>

                          <input
                            required
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            placeholder="e.g. Mumbai"
                          />

                        </div>


                        <div className="space-y-2">

                          <label className="text-sm font-bold text-foreground">
                            Approximate budget{" "}
                            <span className="text-muted-foreground font-normal">
                              (Optional)
                            </span>
                          </label>

                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          >

                            <option value="">
                              Select a range
                            </option>

                            <option value="Under ₹15,000">
                              Under ₹15,000
                            </option>

                            <option value="₹15,000–₹30,000">
                              ₹15,000–₹30,000
                            </option>

                            <option value="₹30,000–₹75,000">
                              ₹30,000–₹75,000
                            </option>

                            <option value="₹75,000+">
                              ₹75,000+
                            </option>

                            <option value="Not sure">
                              Not sure
                            </option>

                          </select>

                        </div>

                      </div>


                      {/* PROBLEM */}
                      <div className="space-y-2">

                        <label className="text-sm font-bold text-foreground">
                          Tell us briefly about the problem{" "}
                          <span className="text-muted-foreground font-normal">
                            (Optional)
                          </span>
                        </label>

                        <textarea
                          name="problem"
                          value={formData.problem}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                          placeholder="What is currently frustrating you or holding back your growth?"
                        />

                      </div>


                      {/* SUBMIT */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 rounded-xl font-bold text-center bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                      >

                        {isLoading
                          ? "Submitting..."
                          : "Book My Strategy Call"}

                      </button>

                    </form>

                  </div>

                </AnimatedSection>

              </div>

            </div>

          ) : (

            /* SUCCESS SCREEN */
            <AnimatedSection>

              <div className="max-w-2xl mx-auto glass-card p-12 rounded-3xl text-center bg-white border border-primary/20 shadow-2xl">

                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">

                  <CheckCircle2 className="w-12 h-12 text-green-600" />

                </div>

                <h2 className="text-4xl font-heading font-bold text-foreground mb-4">
                  You're on the list.
                </h2>

                <p className="text-xl text-muted-foreground mb-10 font-medium">
                  We've received your request.
                </p>


                <div className="text-left bg-muted/30 p-8 rounded-2xl mb-10 border border-border/50">

                  <p className="font-bold text-foreground mb-4 text-lg">
                    Next steps:
                  </p>

                  <ol className="space-y-4">

                    <li className="flex gap-4">

                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                        1
                      </span>

                      <span className="text-muted-foreground font-medium">
                        We'll review your requirements.
                      </span>

                    </li>

                    <li className="flex gap-4">

                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                        2
                      </span>

                      <span className="text-muted-foreground font-medium">
                        We'll contact you using your preferred channel.
                      </span>

                    </li>

                    <li className="flex gap-4">

                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                        3
                      </span>

                      <span className="text-muted-foreground font-medium">
                        We'll discuss your goals and recommend the most suitable next step.
                      </span>

                    </li>

                  </ol>

                </div>


                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                  <a
                    href="https://wa.me/919049671938?text=Hi%20Varad,%20I%20just%20submitted%20a%20request%20on%20your%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 font-bold bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-all shadow-md"
                  >

                    <MessageCircle className="mr-2 w-5 h-5" />

                    WhatsApp Us

                  </a>


                  <Link
                    to="/"
                    className="inline-flex items-center justify-center px-8 py-4 font-bold bg-white text-foreground border border-border rounded-xl hover:bg-muted/50 transition-all shadow-sm"
                  >

                    <ArrowLeft className="mr-2 w-5 h-5" />

                    Return to Homepage

                  </Link>

                </div>

              </div>

            </AnimatedSection>

          )}

        </div>

      </div>

      <Footer />

    </div>
  );
};

export default BookDemo;