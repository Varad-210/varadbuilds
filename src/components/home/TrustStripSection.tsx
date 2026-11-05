import { AnimatedSection } from "@/components/AnimatedSection";
import { Briefcase, Code, MousePointerClick, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

const ICONS = [Briefcase, Code, MousePointerClick, MessageSquare];

export const TrustStripSection = () => {
  const { t } = useTranslation();
  const benefits = t("home.trust.benefits", { returnObjects: true }) as string[];

  return (
    <section className="py-12 border-b border-border/50 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-bold text-foreground font-heading">
              {t("home.trust.title")}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {benefits.map((title, idx) => {
              const Icon = ICONS[idx];
              return (
              <div key={idx} className="flex flex-col items-center justify-center text-center space-y-3 p-4 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm md:text-base">
                  {title}
                </p>
              </div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
