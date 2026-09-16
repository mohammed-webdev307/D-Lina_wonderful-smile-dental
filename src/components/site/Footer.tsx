import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Phone } from "lucide-react";
import {
  FACEBOOK_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PHONE,
  useLanguage,
} from "@/lib/i18n";

import logo from "@/assets/wonderful-smile-logo.png.png";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    ["/", t.nav.home],
    ["/about", t.nav.about],
    ["/services", t.nav.services],
    ["/booking", t.nav.book],
    ["/faq", t.nav.faq],
  ] as const;

  return (
    <footer className="site-footer border-t border-white/15 pb-8 pt-12 text-white md:pt-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.8fr] lg:px-8">

        {/* Logo */}
        <div>
          <Link to="/" className="inline-flex items-center">
            <img
              src={logo}
              alt="عيادة البسمة الرائعة لطب الأسنان"
              className="h-auto w-[180px] object-contain sm:w-[200px] lg:w-[220px]"
            />
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
            {t.footer.disclaimer}
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-sm font-bold">{t.footer.links}</h2>

          <nav className="mt-4 flex flex-col items-start gap-2">
            {links.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="text-sm text-white/70 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-bold">{t.footer.contact}</h2>

          <a
            href={`tel:${PHONE}`}
            className="mt-4 flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <Phone className="h-4 w-4 text-primary" />
            <span dir="ltr">{PHONE}</span>
          </a>

          <div className="mt-4 flex gap-3 text-white/70">
            {INSTAGRAM_URL ? (
              <a
                href={INSTAGRAM_URL}
                aria-label={INSTAGRAM_HANDLE}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
            ) : null}

            {FACEBOOK_NAME !== "-----" ? (
              <span aria-label={FACEBOOK_NAME}>
                <Facebook className="h-5 w-5" />
              </span>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 px-4 pt-6 text-center text-xs text-white/55 sm:px-6 lg:px-8">
        {t.footer.rights}
      </div>
    </footer>
  );
}