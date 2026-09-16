import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone } from "lucide-react";
import { FACEBOOK_NAME, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE, useLanguage } from "@/lib/i18n";
import { ToothMark } from "./ToothMark";

export function Footer() {
  const { t } = useLanguage();
  const links = [["/", t.nav.home], ["/about", t.nav.about], ["/services", t.nav.services], ["/booking", t.nav.book], ["/faq", t.nav.faq]] as const;
  return (
    <footer className="site-footer border-t border-white/15 pb-8 pt-12 text-white md:pt-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <ToothMark className="h-10 w-10 text-primary" />
            <span className="flex flex-col leading-none"><span className="text-lg font-extrabold">{t.brand.primary}</span><span className="mt-1 text-xs font-semibold text-primary">{t.brand.secondary}</span><span className="mt-1 font-latin text-[10px] text-white/60">Wonderful Smile Dental Clinic</span></span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">{t.footer.disclaimer}</p>
        </div>
        <div>
          <h2 className="text-sm font-bold">{t.footer.links}</h2>
          <nav className="mt-4 flex flex-col items-start gap-2">{links.map(([to, label]) => <Link key={to} to={to} className="text-sm text-white/70 hover:text-white">{label}</Link>)}</nav>
        </div>
        <div>
          <h2 className="text-sm font-bold">{t.footer.contact}</h2>
          <a href={`tel:${PHONE}`} className="mt-4 flex items-center gap-2 text-sm text-white/70 hover:text-white"><Phone className="h-4 w-4 text-primary" /><span dir="ltr">{PHONE}</span></a>
          <div className="mt-4 flex gap-3 text-white/70">
            {INSTAGRAM_URL ? <a href={INSTAGRAM_URL} aria-label={INSTAGRAM_HANDLE} target="_blank" rel="noopener noreferrer"><Instagram className="h-5 w-5" /></a> : null}
            {FACEBOOK_NAME !== "-----" ? <span aria-label={FACEBOOK_NAME}><Facebook className="h-5 w-5" /></span> : null}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 px-4 pt-6 text-center text-xs text-white/55 sm:px-6 lg:px-8">{t.footer.rights}</div>
    </footer>
  );
}
