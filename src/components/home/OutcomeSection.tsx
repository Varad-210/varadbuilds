import { AnimatedSection } from "@/components/AnimatedSection";
import { Magnet, Inbox, Zap, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [Magnet, Inbox, Zap, TrendingUp];

interface OutcomeItem {
  title: string;
  desc: string;
}

export const OutcomeSection = () => {
  const { t } = useTranslation();
  const outcomes = t("home.outcome.items", { returnObjects: true }) as OutcomeItem[];

  return (
    <section className="section-padding py-24 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              {t("home.outcome.titleLead")}<br className="hidden md:block" />
              <span className="italic text-primary"> {t("home.outcome.titleEmph")}</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => {
            const Icon = ICONS[index];
            return (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 shadow-sm border border-primary/20">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {outcome.desc}
                </p>
              </div>
            </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
