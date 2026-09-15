import { Phone } from "lucide-react";
import { PHONE, scrollToSection, useLanguage } from "@/lib/i18n";
import { ToothMark } from "./ToothMark";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    ["home", t.nav.home],
    ["services", t.nav.services],
    ["about", t.nav.about],
    ["contact", t.nav.contact],
  ] as const;

  return (
    <footer className="border-t border-border bg-foreground pb-24 pt-10 text-background md:pb-10 sm:pt-16">
      <div className="mx-auto grid w-full max-w-7xl gap-7 px-4 sm:gap-10 sm:px-6 lg:px-8 md:grid-cols-3">
        <div className="min-w-0">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 rounded-xl text-start"
            aria-label={t.brand.name}
          >
            <ToothMark className="h-9 w-9 text-primary" />
            <span className="flex flex-col leading-none">
              <span className="font-latin text-base font-extrabold tracking-[0.2em]">
                {t.brand.primary}
              </span>
              <span className="mt-0.5 text-[11px] font-semibold text-primary">
                {t.brand.secondary}
              </span>
              <span className="mt-1 text-[10px] font-medium text-background/65">
                {t.brand.doctor}
              </span>
            </span>
          </button>
          <p className="mt-4 max-w-sm text-sm leading-6 text-background/65">
            {t.footer.disclaimer}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold">{t.footer.links}</h2>
          <nav className="mt-3 flex flex-col items-start gap-1" aria-label={t.footer.links}>
            {links.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="rounded-md py-1 text-sm text-background/70 transition-colors hover:text-background"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-bold">{t.footer.contact}</h2>
          <div className="mt-3 space-y-2">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              <span dir="ltr">{PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-7xl border-t border-background/10 px-4 pt-6 text-center text-xs text-background/55 sm:px-6 lg:px-8">
        {t.footer.rights}
      </div>
    </footer>
  );
}
