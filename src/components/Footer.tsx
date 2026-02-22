import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">VaradBuilds</h3>
            <p className="body-md text-muted-foreground max-w-md">
              Premium AI voice agents for businesses that never miss a customer call. 
              Built for India's growing businesses.
            </p>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold tracking-widest uppercase text-silver-muted mb-6">Navigate</h4>
            <div className="flex flex-col gap-3">
              {["Services", "Industries", "Case Studies", "Pricing", "About"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm font-semibold tracking-widest uppercase text-silver-muted mb-6">Connect</h4>
            <div className="flex flex-col gap-3">
              <Link to="/book-demo" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
                Book a Demo
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="gradient-line mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VaradBuilds. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with precision in India.
          </p>
        </div>
      </div>
    </footer>
  );
};
