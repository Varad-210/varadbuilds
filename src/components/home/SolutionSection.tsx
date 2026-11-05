import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Check, Globe, Code2, Target } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [Globe, Code2, Target];

interface SolutionItem {
  tag: string;
  headline: string;
  copy: string;
  benefits: string[];
  cta: string;
}

export const SolutionSection = () => {
  const { t } = useTranslation();
  const solutions = t("home.solution.items", { returnObjects: true }) as SolutionItem[];

  return (
    <section className="section-padding bg-white py-24 relative overflow-hidden" id="services">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            {/* H2 for Services section */}
            <h2 className="heading-lg text-foreground mb-6">
              {t("home.solution.titleLead")}{" "}
              <span className="italic text-primary">{t("home.solution.titleEmph")}</span>
            </h2>
            <div className="body-lg text-muted-foreground max-w-3xl mx-auto font-medium space-y-3">
              <p>
                {t("home.solution.introStart")}{" "}
                <a
                  href="https://web.dev/vitals/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
                >
                  {t("home.solution.introLink")}
                </a>
                {" "}{t("home.solution.introEnd")}
              </p>
              <p>
                {t("home.solution.intro2")}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = ICONS[index];
            return (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <div className="glass-card p-10 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col group rounded-2xl bg-white">
                <div className="mb-8 bg-primary/5 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <p className="text-sm font-bold text-primary uppercase tracking-wider mb-4">
                  {solution.tag}
                </p>
                <h3 className="text-2xl font-heading font-bold text-foreground mb-4 leading-tight">
                  {solution.headline}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {solution.copy}
                </p>
                
                <div className="flex-grow">
                  <ul className="space-y-3 mb-10">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/book-demo"
                  className="w-full py-4 rounded-xl font-bold text-center bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:-translate-y-1"
                >
                  {solution.cta}
                </Link>
              </div>
            </AnimatedSection>
            );
          })}
        </div>

        {/* Internal link to full services page */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline underline-offset-4 transition-all"
            >
              {t("home.solution.exploreLink")}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
