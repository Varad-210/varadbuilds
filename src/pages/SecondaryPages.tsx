import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

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

export const ServicesPage = () => <PlaceholderPage title="Our Services" subtitle="AI-powered voice agents tailored to your business needs." />;
export const IndustriesPage = () => <PlaceholderPage title="Industries" subtitle="Purpose-built solutions for hotels, restaurants, clinics, and more." />;
export const CaseStudiesPage = () => <PlaceholderPage title="Case Studies" subtitle="See how businesses like yours transformed their customer experience." />;
export const PricingPage = () => <PlaceholderPage title="Pricing" subtitle="Simple, transparent pricing that makes sense for your business." />;
export const AboutPage = () => <PlaceholderPage title="About Us" subtitle="The team behind India's most elegant AI voice solution." />;
export const ContactPage = () => <PlaceholderPage title="Contact" subtitle="Let's start a conversation about your business." />;
