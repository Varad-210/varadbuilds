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
    <section className="section-padding p-0 m-0 bg-white relative overflow-hidden">

       
      
    </section>
  );
};
