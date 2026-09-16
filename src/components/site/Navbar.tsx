import { Link } from "@tanstack/react-router";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import logoImage from "@/assets/wonderful-smile-logo.png.png";

const links = [
  ["/", "home"],
  ["/about", "about"],
  ["/services", "services"],
  ["/booking", "book"],
  ["/faq", "faq"],
] as const;

export function Navbar({ homePage = false }: { homePage?: boolean }) {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${homePage ? "border-[#F4B8C2]/35 bg-transparent" : "border-border/70 bg-background/90"}`}>
      <div className="mx-auto flex min-h-[78px] w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logoImage} alt={t.brand.name} className="h-[56px] w-[200px] max-w-[calc(100vw-150px)] object-contain sm:h-[62px] sm:w-[300px]" />
        </Link>

        <nav aria-label={t.nav.home} className="mx-auto hidden items-center gap-1 lg:flex">
          {links.map(([to, key]) => (
            <Link key={to} to={to} className={`rounded-full px-3 py-2.5 text-sm font-semibold transition-colors ${homePage ? "text-white hover:bg-white/10 hover:text-white" : "text-muted-foreground hover:bg-soft hover:text-foreground"}`}>
              {t.nav[key]}
            </Link>
          ))}
          <Link to="/booking" hash="contact" className={`rounded-full px-3 py-2.5 text-sm font-semibold transition-colors ${homePage ? "text-white hover:bg-white/10 hover:text-white" : "text-muted-foreground hover:bg-soft hover:text-foreground"}`}>
            {t.nav.contact}
          </Link>
        </nav>

        <div className="ms-auto flex items-center gap-2">
          <button type="button" onClick={() => setLang(lang === "ar" ? "en" : "ar")} className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-semibold ${homePage ? "border-[#F4B8C2]/60 bg-[#F4B8C2] text-[#6F3440] hover:bg-[#f8c5cd]" : "border-border text-foreground hover:bg-soft"}`} aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}>
            <Globe className={`h-4 w-4 ${homePage ? "text-[#6F3440]" : "text-primary"}`} aria-hidden="true" />
            <span className="font-latin">{lang === "ar" ? "EN" : "AR"}</span>
          </button>
          <Link to="/booking" className={`hidden rounded-full px-5 py-3 text-sm font-bold shadow-[0_12px_24px_-16px_#c27a86] transition-transform hover:-translate-y-0.5 sm:inline-flex ${homePage ? "bg-[#F3B0BC] text-[#6F3440] hover:bg-[#f8c5cd]" : "bg-primary text-primary-foreground"}`}>
            {t.nav.book}
          </Link>
          <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex rounded-full border border-[rgba(113,59,73,0.20)] bg-[rgba(255,255,255,0.75)] p-2 text-[#713B49] shadow-[0_3px_10px_rgba(83,35,50,0.10)] transition-colors hover:bg-[#F4DDE3] active:bg-[#F4DDE3] lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? t.nav.close : t.nav.menu}>
            {open ? <X className="h-5 w-5 stroke-[2.4]" /> : <Menu className="h-5 w-5 stroke-[2.4]" />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className={`border-t lg:hidden ${homePage ? "border-[#F4B8C2]/35 bg-[#7D3F4C]" : "border-border bg-background"}`}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
          {links.map(([to, key]) => (
            <Link key={to} to={to} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-3 text-start text-sm font-semibold ${homePage ? "text-white hover:bg-white/10" : "text-foreground hover:bg-soft"}`}>
              {t.nav[key]}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setOpen(false)} className={`mt-1 rounded-full px-4 py-3 text-center text-sm font-bold ${homePage ? "bg-[#F3B0BC] text-[#6F3440]" : "bg-primary text-primary-foreground"}`}>
            {t.nav.book}
          </Link>
        </nav>
      </div>
    </header>
  );
}
