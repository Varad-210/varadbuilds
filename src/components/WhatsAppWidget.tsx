import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show widget after scrolling down a bit, or always on non-home pages
    const handleScroll = () => {
      if (location.pathname === "/") {
        setIsVisible(window.scrollY > 300);
      }
    };

    if (location.pathname !== "/") {
      setIsVisible(true);
    } else {
      setIsVisible(window.scrollY > 300);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-white p-3 rounded-lg shadow-lg border border-border/50 max-w-[200px]">
              <p className="text-sm text-foreground font-medium">Need help choosing the right solution? Talk to us →</p>
            </div>
          </motion.div>
          
          <a
            href="https://wa.me/919049671938?text=Hi%20Varad,%20I'm%20interested%20in%20discussing%20a%20digital%20growth%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:scale-110 hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 fill-current" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
