import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage, scrollToSection, serviceKeys, type ServiceKey } from "@/lib/i18n";
import { Reveal } from "./Reveal";

const serviceImages: Record<ServiceKey, string> = {
  denture:
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&auto=format&fit=crop&q=85",
  rootcanal:
    "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&auto=format&fit=crop&q=85",
  fillings:
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&auto=format&fit=crop&q=85",
  extraction:
    "https://images.pexels.com/photos/3845738/pexels-photo-3845738.jpeg?auto=compress&cs=tinysrgb&w=900",
  children:
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&auto=format&fit=crop&q=85",
};

export function Services({ onSelectService }: { onSelectService: (key: ServiceKey) => void }) {
  const { t, lang } = useLanguage();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="scroll-mt-20 bg-soft/40 py-8 md:py-[60px] lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]">
            {t.services.heading}
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
            {t.services.desc}
          </p>
        </Reveal>

        <div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 sm:snap-none lg:grid-cols-3">
          {serviceKeys.map((key, i) => {
            const item = t.services.items[key];
            return (
              <Reveal
                key={key}
                delay={i * 60}
                className="flex-[0_0_82%] w-auto max-w-none snap-start sm:flex-1 sm:snap-align-none"
              >
                <article className="flex h-full w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_-28px_rgba(39,50,58,0.45)]">
                  <img
                    src={serviceImages[key]}
                    alt={item.title}
                    width={900}
                    height={600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div className="flex grow flex-col p-5 sm:p-7">
                    <h3 className="mt-4 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 grow text-[15px] leading-7 text-muted-foreground sm:mt-3 sm:text-base sm:leading-8">
                      {item.desc}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        onSelectService(key);
                        scrollToSection("contact");
                      }}
                      className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-soft sm:mt-5"
                    >
                      {t.services.cta}
                      <Arrow className="h-4 w-4 text-primary" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
