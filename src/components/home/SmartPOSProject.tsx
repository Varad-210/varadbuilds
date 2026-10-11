const technologies = ["React", "Node.js", "MongoDB", "WhatsApp API"];

const projectDetails = [
  {
    title: "CHALLENGE",
    description:
      "Simplify daily billing, inventory updates, and supplier coordination for small retail stores.",
  },
  {
    title: "WHAT WE BUILT",
    description:
      "A full-stack POS platform with product management, live stock tracking, purchase orders, sales reports, and WhatsApp supplier workflows.",
  },
  {
    title: "PROJECT OBJECTIVE",
    description:
      "Reduce manual work and help shop owners manage operations through one clear, reliable dashboard.",
  },
];

const screenshots = [
  {
    src: "https://res.cloudinary.com/dclr2ihxn/image/upload/v1791698523/SmartPOS_Retail_Dashboard_Showcase_obkn6l.png",
    alt: "SmartPOS Retail Dashboard Showcase",
    className: "",
    style: { objectPosition: "center -20px" },
  },
];

export default function SmartPOSProject() {
  return (
    <section className="w-full bg-background py-10 sm:py-14">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {/* Project screenshots */}
          <div className="relative overflow-hidden bg-slate-950">
            <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-blue-600 px-4 py-2 text-xs font-bold tracking-wide text-white shadow-lg sm:left-6 sm:top-6 sm:text-sm">
              <span aria-hidden="true">{"</>"}</span>
              SOFTWARE DEVELOPMENT
            </div>

            <div className="grid grid-cols-1 gap-1 bg-slate-900 p-1">
              {screenshots.map((image) => (
                <div
                  key={image.src}
                  className={`group relative overflow-hidden bg-slate-800 ${image.className}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    style={image.style}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] sm:h-64 lg:h-[360px]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                      if (placeholder) {
                        placeholder.style.display = "flex";
                      }
                    }}
                  />
                  <div className="hidden h-56 sm:h-64 lg:h-[360px] w-full flex-col items-center justify-center bg-slate-900/80 border border-slate-700/50 p-6 text-center text-slate-300">
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                      Preview
                    </span>
                    <span className="text-sm font-medium mt-1">{image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project information */}
          <div className="p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-start">
              <div className="min-w-0">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary sm:text-base">
                  Industry: Retail / SaaS
                </p>

                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[42px]">
                  SmartPOS Retail Management System
                </h2>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-[440px] lg:justify-end">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:mt-12 lg:gap-10">
              {projectDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="border-l-2 border-primary pl-4 sm:pl-5"
                >
                  <h3 className="mb-3 text-sm font-bold tracking-[0.12em] text-foreground sm:text-base">
                    {detail.title}
                  </h3>

                  <p className="text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                    {detail.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
