import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, IndianRupee } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="section-padding py-32 bg-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
            Your next digital upgrade starts with one conversation.
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Whether you're a business owner in Pune looking for a website that converts, software that removes manual work, or Meta Ads that bring qualified prospects — let's start by understanding what you're trying to achieve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center px-12 py-4 text-lg font-bold bg-white text-primary rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-[0_8px_30px_rgb(255,255,255,0.2)] hover:-translate-y-1"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            
            <a
              href="https://wa.me/919049671938?text=Hi%20Varad,%20I'm%20interested%20in%20discussing%20a%20digital%20growth%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white/90 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </a>

            <Link
              to="/pricing"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-medium text-white/90 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <IndianRupee className="mr-2 w-5 h-5" />
              View Pricing
            </Link>
          </div>
          <p className="text-primary-foreground/70 text-sm font-medium">
            No complicated jargon. No pressure. Just a conversation about your business.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
