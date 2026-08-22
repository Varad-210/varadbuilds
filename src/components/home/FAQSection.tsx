import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer: "We build digital solutions for businesses that need a stronger online presence, better internal workflows, or a more consistent way to generate inquiries. We work with cafes, restaurants, salons, clinics, real estate agencies, retail businesses, and service providers across Pune and Maharashtra."
  },
  {
    question: "Do you build websites from scratch?",
    answer: "Yes. Website projects can be designed and developed around the business, customer journey, content, and conversion goal."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. Existing websites can be audited and redesigned when the current structure, messaging, UX, or performance is holding the business back."
  },
  {
    question: "Can you build custom software for my business?",
    answer: "Yes. Custom software is suitable when your business has specific workflows that are difficult to manage with spreadsheets or off-the-shelf tools."
  },
  {
    question: "Do you manage Facebook and Instagram ads?",
    answer: "Yes. Meta Ads services cover strategy, audience research, creative/copy direction, campaign setup, tracking, testing, optimization, and reporting."
  },
  {
    question: "Do you guarantee leads or sales?",
    answer: "No. Advertising and conversion outcomes depend on multiple factors including the offer, market, creative, targeting, landing page, sales process, and budget."
  },
  {
    question: "How much does a project cost?",
    answer: "Website projects currently start at ₹15,000. Meta Ads management is currently ₹10,000 setup + ₹15,000/month, excluding ad spend. Custom software is quoted based on requirements."
  },
  {
    question: "What happens after I contact you?",
    answer: "We'll understand your requirements, identify the problem, and recommend the most suitable next step."
  },
  {
    question: "Can I start with only one service?",
    answer: "Yes. You do not need to purchase all three services."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding py-24 bg-muted/20 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="text-center mb-10">
          {/* H2 for FAQ section */}
          <h2 className="heading-lg text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Common questions from businesses in Pune and Maharashtra considering a website, custom software, or Meta Ads project. Still have questions?{" "}
            <Link
              to="/book-demo"
              className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
            >
              Book a free strategy call
            </Link>
            .
          </p>
        </AnimatedSection>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div 
                className={`glass-card rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                  openIndex === index ? 'border-primary shadow-lg bg-white' : 'border-border/50 hover:border-primary/30'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="px-6 py-5 flex items-center justify-between">
                  <h3 className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-foreground'}`}>
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180 text-primary' : 'text-muted-foreground'
                    }`} 
                  />
                </div>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom internal links */}
        <AnimatedSection delay={0.5}>
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-primary font-semibold text-base hover:underline underline-offset-4 transition-colors"
            >
              View our pricing →
            </Link>
            <span className="hidden sm:block text-muted-foreground/40">|</span>
            <Link
              to="/book-demo"
              className="inline-flex items-center gap-2 text-primary font-semibold text-base hover:underline underline-offset-4 transition-colors"
            >
              Book a strategy call →
            </Link>
            <span className="hidden sm:block text-muted-foreground/40">|</span>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold text-base hover:underline underline-offset-4 transition-colors"
            >
              Explore services →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
