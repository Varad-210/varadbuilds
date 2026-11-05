import { AnimatedSection } from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";

export const ProblemSection = () => {
  const { t } = useTranslation();
  const lines = t("home.problem.lines", { returnObjects: true }) as string[];
  const bullets = t("home.problem.bullets", { returnObjects: true }) as string[];

  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50/30 py-24 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-6">
              {t("home.problem.titleLead")}<br />
              <span className="italic text-primary">{t("home.problem.titleEmph")}</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card p-10 md:p-14 border-primary/10 shadow-lg text-left space-y-6">
            {lines.map((line, idx) => (
              <p key={idx} className="text-xl text-muted-foreground">{line}</p>
            ))}
            
            <div className="w-16 h-px bg-border my-8"></div>

            <p className="text-2xl font-bold text-foreground">
              {t("home.problem.pivot")}
            </p>

            <ul className="text-lg text-muted-foreground space-y-3 mt-8 font-medium">
              {bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-3xl font-heading font-bold text-primary underline decoration-primary/20 underline-offset-8">
              {t("home.problem.closing")}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
