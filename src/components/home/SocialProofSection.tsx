import { AnimatedSection } from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, ZoomIn, X } from "lucide-react";
import { useState } from "react";

// ✅ Images saved locally in /public/ folder
// Place your downloaded screenshots as:
//   public/proof1.png
//   public/proof2.png
const proofImages = [
  {
    src: "/proof1.png",
    alt: "Client feedback screenshot 1"
  },
  {
    src: "/proof2.png",
    alt: "Client feedback screenshot 2"
  }
];

export const SocialProofSection = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<number, boolean>>({});

  const handleError = (idx: number) => {
    setErrors(prev => ({ ...prev, [idx]: true }));
  };

  return (
    <section className="section-padding py-24 bg-white relative overflow-hidden">

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox}
            alt="Social proof enlarged"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">

        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="heading-lg text-foreground mb-4">
              Don't just take our word for it.
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
              Real feedback from real clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {proofImages.map((img, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.15}>
                {errors[idx] ? (
                  /* Fallback if image not found */
                  <div className="w-full h-64 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center gap-3 p-8">
                  
                    <img src="https://res.cloudinary.com/dclr2ihxn/image/upload/v1787112532/ChatGPT_Image_Aug_19_2026_09_37_06_AM_pcq7qi.png" alt="" />
                  
                  </div>
                ) : (
                  <div
                    className="relative group rounded-2xl overflow-hidden border border-border shadow-lg cursor-zoom-in hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-muted/10"
                    onClick={() => setLightbox(img.src)}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto block"
                      onError={() => handleError(idx)}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="bg-white/95 rounded-full p-3 shadow-xl">
                        <ZoomIn className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection delay={0.4}>
          <div className="text-center glass-card p-10 max-w-3xl mx-auto bg-blue-50/50 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Want to be our next success story?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 font-medium">
              Let's build something your clients love talking about.
            </p>
            <Link
              to="/book-demo"
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-[0_8px_20px_rgb(59,130,246,0.3)] hover:-translate-y-1"
            >
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};
