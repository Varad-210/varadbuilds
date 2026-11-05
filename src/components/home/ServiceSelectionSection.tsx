import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

interface SelectionOption {
  quote: string;
  solution: string;
}

export const ServiceSelectionSection = () => {
  const { t } = useTranslation();
  const options = t("home.serviceSelection.items", { returnObjects: true }) as SelectionOption[];

  return (
    <section className="section-padding py-24 bg-muted/30 relative">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              {t("home.serviceSelection.titleLead")} <br className="md:hidden" />
              <span className="italic text-primary">{t("home.serviceSelection.titleEmph")}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {options.map((option, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card p-8 rounded-xl bg-white border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center">
                <p className="text-lg text-muted-foreground font-medium mb-4">
                  "{option.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <p className="text-lg font-bold text-foreground">
                    {option.solution}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_20px_rgb(59,130,246,0.3)] hover:-translate-y-1"
            >
              {t("home.serviceSelection.cta")}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
