import { Phone, CalendarCheck, HeartHandshake, Stethoscope, Sparkles } from "lucide-react";
import { useLanguage, scrollToSection, PHONE } from "@/lib/i18n";

const heroImage =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&auto=format&fit=crop&q=85";

const trustIcons = [HeartHandshake, Stethoscope, Sparkles];

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative overflow-hidden pt-[94px] pb-6 sm:pt-[108px] sm:pb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 end-[-6rem] h-72 w-72 rounded-full bg-soft blur-3xl sm:h-96 sm:w-96"
      />
      <div className="relative mx-auto grid min-h-0 w-full max-w-7xl items-center gap-3 px-4 sm:gap-8 sm:px-6 lg:min-h-[560px] lg:grid-cols-[1.08fr_1fr] lg:gap-12 lg:px-8">
        <div className="min-w-0 lg:col-start-2">
          <div className="mb-3">
            <p className="text-lg font-extrabold text-foreground sm:text-xl">{t.brand.name}</p>
            <p className="mt-1 text-sm font-semibold text-muted-foreground">{t.brand.doctor}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-xs font-semibold text-foreground sm:text-sm">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-4 max-w-xl text-[38px] font-extrabold leading-[1.25] text-foreground sm:mt-6 sm:text-6xl sm:leading-[1.2] lg:text-[62px]">
            {t.hero.titleA}
            <span className="block text-primary">{t.hero.titleB}</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-9">
            {t.hero.desc}
          </p>

          <div className="mt-6 flex gap-2 sm:mt-8 sm:flex-wrap sm:gap-3">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_14px_30px_-16px_rgba(201,143,150,1)] transition-transform hover:-translate-y-0.5 sm:flex-none sm:gap-2 sm:px-7 sm:text-base"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              {t.hero.book}
            </button>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-primary/60 bg-card px-3 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-soft sm:flex-none sm:gap-2 sm:px-7 sm:text-base"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              {t.hero.call}
            </a>
          </div>

          <ul className="mt-6 grid grid-cols-3 gap-2 sm:mt-9 sm:gap-3">
            {t.hero.trust.map((item, i) => {
              const Icon = trustIcons[i] ?? Sparkles;
              return (
                <li
                  key={item}
                  className="flex min-h-12 min-w-0 items-center gap-1.5 rounded-2xl border border-border bg-card px-2 py-2.5 text-[11px] font-semibold text-foreground shadow-[0_12px_30px_-24px_rgba(39,50,58,0.7)] sm:gap-2 sm:px-3.5 sm:py-3.5 sm:text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-medical" aria-hidden="true" />
                  <span className="min-w-0">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative min-w-0 lg:col-start-1 lg:row-start-1">
          <div className="h-[300px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_60px_-40px_rgba(39,50,58,0.45)] sm:h-[440px] sm:rounded-[2.5rem] lg:h-[560px]">
            <img
              src={heroImage}
              alt={t.hero.imageAlt}
              width={1600}
              height={1067}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
