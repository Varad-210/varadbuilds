import { useEffect, useRef, useState } from "react";
import { Languages, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, setLanguage } from "@/i18n";

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current =
    SUPPORTED_LANGUAGES.find((lang) => lang.code === i18n.language) ?? SUPPORTED_LANGUAGES[0];

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("nav.switchLanguage")}
        title={t("nav.switchLanguage")}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-body font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
      >
        <Languages size={18} />
        <span>{current.label}</span>
      </button>

      {open && (
        <ul
          role="menu"
          aria-label={t("nav.switchLanguage")}
          className="absolute right-0 top-full mt-2 min-w-[9rem] py-1.5 rounded-xl bg-white border border-primary/10 shadow-xl z-[60]"
        >
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isActive = lang.code === current.code;
            return (
              <li key={lang.code} role="none">
                <button
                  type="button"
                  role="menuitem"
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => {
                    setLanguage(lang.code);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? "text-primary font-bold bg-primary/5"
                      : "text-foreground hover:bg-muted/60"
                  }`}
                >
                  {lang.label}
                  {isActive && <Check size={15} />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
