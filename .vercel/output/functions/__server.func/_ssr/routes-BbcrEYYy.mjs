import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as MAPS_URL, c as scrollToSection, i as MAPS_EMBED_URL, l as serviceKeys, n as INSTAGRAM_HANDLE, o as PHONE, s as WHATSAPP_URL, t as FACEBOOK_NAME, u as useLanguage } from "./i18n-CcV65LEZ.mjs";
import { S as ArrowLeft, _ as ChevronDown, a as Send, b as BadgeCheck, c as MessageSquare, d as MapPin, f as Instagram, g as CircleCheck, h as Facebook, i as ShieldCheck, l as MessageCircle, m as Globe, n as Stethoscope, o as Phone, p as HeartHandshake, r as Sparkles, s as Navigation, t as X, u as Menu, v as CalendarCheck, x as ArrowRight, y as Building2 } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BbcrEYYy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				setShown(true);
				io.disconnect();
			}
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: `transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"} ${className}`,
		children
	});
}
var about_care_default = "/assets/about-care-DlADg8D4.jpg";
var icons = [
	HeartHandshake,
	ShieldCheck,
	Sparkles
];
function About() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-20 py-8 md:py-[60px] lg:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-7xl items-center gap-4 px-4 sm:gap-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "order-2 min-w-0 lg:order-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold text-primary sm:text-base",
						children: t.brand.doctor
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]",
						children: t.about.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[15px] leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-9",
						children: t.about.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid gap-2 sm:mt-8 sm:gap-3 sm:grid-cols-3",
						children: t.about.cards.map((card, i) => {
							const Icon = icons[i] ?? Sparkles;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "min-w-0 rounded-2xl border border-border bg-card p-3.5 transition-shadow hover:shadow-[0_18px_40px_-30px_rgba(39,50,58,0.5)] sm:p-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-5 w-5 text-primary",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm font-semibold text-foreground sm:mt-3",
									children: card
								})]
							}, card);
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				className: "order-1 min-w-0 lg:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-[2rem] border border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_care_default,
						alt: t.about.imageAlt,
						width: 1104,
						height: 1104,
						loading: "lazy",
						className: "aspect-[3/2] w-full object-cover sm:aspect-[4/3] lg:aspect-square"
					})
				})
			})]
		})
	});
}
function AnnouncementBar() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-[70px] flex-col items-center gap-2 rounded-[22px] bg-soft px-5 py-5 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, {
				className: "h-6 w-6 shrink-0 text-primary",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base font-bold text-foreground sm:text-lg",
					children: t.announcement.main
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground sm:text-base",
					children: t.announcement.sub
				})]
			})]
		})
	});
}
function AppointmentCTA() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-6 md:py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-[176px] flex-col justify-center rounded-[2rem] bg-[linear-gradient(110deg,oklch(0.69_0.055_12),oklch(0.76_0.066_12))] px-5 py-7 text-center sm:min-h-[220px] sm:px-12 sm:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto max-w-3xl text-2xl font-extrabold leading-relaxed text-primary-foreground sm:text-4xl",
						children: t.cta.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-2 max-w-2xl text-sm leading-6 text-primary-foreground/90 sm:mt-4 sm:text-lg",
						children: t.cta.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap justify-center gap-2 sm:mt-7 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE}`,
								className: "inline-flex min-h-12 items-center gap-2 rounded-full bg-card px-7 py-3.5 text-base font-bold text-foreground transition-transform hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "h-4 w-4 text-primary",
									"aria-hidden": "true"
								}), t.cta.call]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-primary-foreground/60 px-7 py-3.5 text-base font-bold text-primary-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), t.cta.instagram]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => scrollToSection("contact"),
								className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-primary-foreground/60 px-7 py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}), t.cta.contact]
							})
						]
					})
				]
			}) })
		})
	});
}
function Contact({ selectedService }) {
	const { t, lang } = useLanguage();
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [service, setService] = (0, import_react.useState)(selectedService);
	const [message, setMessage] = (0, import_react.useState)("");
	const [consent, setConsent] = (0, import_react.useState)(false);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (selectedService) {
			setService(selectedService);
			setSubmitted(false);
		}
	}, [selectedService]);
	const contactCards = (0, import_react.useMemo)(() => [
		{
			icon: Phone,
			label: t.contact.phone,
			value: PHONE,
			href: `tel:${PHONE}`
		},
		{
			icon: Instagram,
			label: t.contact.instagram,
			value: INSTAGRAM_HANDLE,
			href: void 0
		},
		{
			icon: Facebook,
			label: t.contact.facebook,
			value: FACEBOOK_NAME
		},
		{
			icon: MapPin,
			label: t.contact.location,
			value: t.contact.locationValue
		}
	], [t]);
	const validate = () => {
		const next = {};
		if (name.trim().length < 2) next.name = t.form.errors.name;
		if (phone.replace(/[^\d+]/g, "").replace(/\D/g, "").length < 7) next.phone = t.form.errors.phone;
		if (!service) next.service = t.form.errors.service;
		if (!consent) next.consent = t.form.errors.consent;
		setErrors(next);
		return Object.keys(next).length === 0;
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!validate()) return;
		const serviceName = service === "other" ? t.services.other : service ? t.services.items[service].title : "";
		const messageText = [
			"مرحبًا، أريد حجز موعد.",
			"",
			`الاسم: ${name.trim()}`,
			`رقم الهاتف: ${phone.trim()}`,
			`الخدمة: ${serviceName}`,
			`الاستفسار: ${message.trim()}`
		].join("\n");
		window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(messageText)}`, "_blank", "noopener,noreferrer");
		setSubmitted(true);
		setErrors({});
	};
	const resetForm = () => {
		setName("");
		setPhone("");
		setService(selectedService || "");
		setMessage("");
		setConsent(false);
		setErrors({});
		setSubmitted(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-20 bg-soft/40 py-8 md:py-[60px] lg:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]",
					children: t.contact.heading
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-5 sm:mt-10 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-1",
						children: contactCards.map(({ icon: Icon, label, value, href }) => {
							const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-0 items-start gap-3 rounded-3xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-34px_rgba(39,50,58,0.5)] sm:gap-4 sm:p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-soft sm:h-12 sm:w-12",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										className: "h-5 w-5 text-primary sm:h-6 sm:w-6",
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-xs font-semibold text-muted-foreground sm:text-sm",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block break-words text-sm font-bold leading-6 text-foreground sm:text-base sm:leading-7",
										children: value
									})]
								})]
							});
							if (!href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: content }, label);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: href.startsWith("http") ? "_blank" : void 0,
								rel: href.startsWith("http") ? "noopener noreferrer" : void 0,
								className: "block rounded-3xl",
								children: content
							}, label);
						})
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					className: "min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[2rem] border border-border bg-card p-4 sm:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-extrabold text-foreground sm:text-2xl",
							children: t.form.heading
						}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 rounded-3xl border border-primary/20 bg-soft p-6 text-center",
							role: "status",
							"aria-live": "polite",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
									className: "mx-auto h-10 w-10 text-primary",
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-4 max-w-md text-sm font-semibold leading-7 text-foreground sm:text-base",
									children: t.form.success
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap justify-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${PHONE}`,
										className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "h-4 w-4",
											"aria-hidden": "true"
										}), t.form.call]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: resetForm,
										className: "rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background",
										children: t.form.again
									})]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-5 space-y-4 sm:mt-7 sm:space-y-6",
							onSubmit: handleSubmit,
							noValidate: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-4 sm:gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t.form.name,
										error: errors.name,
										htmlFor: "full-name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "full-name",
											name: "name",
											type: "text",
											autoComplete: "name",
											value: name,
											onChange: (e) => setName(e.target.value),
											"aria-invalid": Boolean(errors.name),
											"aria-describedby": errors.name ? "name-error" : void 0,
											className: "min-h-12 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 sm:min-h-0"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: t.form.phone,
										error: errors.phone,
										htmlFor: "phone-number",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "phone-number",
											name: "phone",
											type: "tel",
											inputMode: "tel",
											autoComplete: "tel",
											dir: "ltr",
											value: phone,
											onChange: (e) => setPhone(e.target.value),
											"aria-invalid": Boolean(errors.phone),
											"aria-describedby": errors.phone ? "phone-error" : void 0,
											className: "min-h-12 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 sm:min-h-0"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t.form.service,
									error: errors.service,
									htmlFor: "service-type",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										id: "service-type",
										name: "service",
										value: service,
										onChange: (e) => setService(e.target.value),
										"aria-invalid": Boolean(errors.service),
										"aria-describedby": errors.service ? "service-error" : void 0,
										className: "min-h-12 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm text-foreground sm:min-h-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: t.form.servicePlaceholder
											}),
											serviceKeys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: key,
												children: t.services.items[key].title
											}, key)),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "other",
												children: t.services.other
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: t.form.message,
									htmlFor: "message",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										id: "message",
										name: "message",
										rows: 5,
										value: message,
										onChange: (e) => setMessage(e.target.value),
										className: "w-full resize-y rounded-2xl border border-input bg-background px-4 py-3 text-sm leading-6 text-foreground placeholder:text-muted-foreground/70"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background p-4 text-sm leading-6 text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: consent,
										onChange: (e) => setConsent(e.target.checked),
										className: "mt-1 h-4 w-4 shrink-0 accent-[var(--color-primary)]",
										"aria-invalid": Boolean(errors.consent),
										"aria-describedby": errors.consent ? "consent-error" : void 0
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.form.consent })]
								}), errors.consent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									id: "consent-error",
									className: "mt-2 text-xs font-medium text-destructive",
									children: errors.consent
								}) : null] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-18px_rgba(201,143,150,1)] transition-transform hover:-translate-y-0.5 sm:w-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
										className: `h-4 w-4 ${lang === "ar" ? "-scale-x-100" : ""}`,
										"aria-hidden": "true"
									}), t.form.submit]
								})
							]
						})]
					})
				})]
			})]
		})
	});
}
function Field({ label, error, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor,
			className: "mb-2 block text-sm font-semibold text-foreground",
			children: label
		}),
		children,
		error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: htmlFor === "full-name" ? "name-error" : htmlFor === "phone-number" ? "phone-error" : "service-error",
			className: "mt-2 text-xs font-medium text-destructive",
			children: error
		}) : null
	] });
}
function FAQ() {
	const { t } = useLanguage();
	const [openIndex, setOpenIndex] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "scroll-mt-20 py-8 md:py-[60px] lg:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-[900px] px-4 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-center text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]",
				children: t.faq.heading
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-2 sm:mt-10 sm:space-y-3",
				children: t.faq.items.map((item, i) => {
					const open = openIndex === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl border border-border bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpenIndex(open ? null : i),
							"aria-expanded": open,
							"aria-controls": `faq-panel-${i}`,
							id: `faq-button-${i}`,
							className: "flex min-h-[56px] w-full items-center justify-between gap-3 px-4 py-4 text-start text-base font-semibold text-foreground transition-colors hover:bg-soft/60 sm:min-h-[64px] sm:px-5 sm:py-5 sm:text-lg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0",
								children: item.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
								className: `h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`,
								"aria-hidden": "true"
							})]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							id: `faq-panel-${i}`,
							role: "region",
							"aria-labelledby": `faq-button-${i}`,
							hidden: !open,
							className: "px-4 pb-4 text-[15px] leading-7 text-muted-foreground sm:px-5 sm:pb-6 sm:text-base sm:leading-8",
							children: item.a
						})]
					}, item.q);
				})
			})]
		})
	});
}
function ToothMark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.6",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className,
		"aria-hidden": "true",
		focusable: "false",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5.2c1.6-1.4 3.5-1.9 5-1.1 1.8 1 2.4 3.3 1.9 5.8-.4 2-.8 3-1.2 5.2-.3 1.7-.6 4.2-1.9 4.6-1.3.4-1.7-1.7-2.1-3.6-.3-1.4-.7-2.3-1.7-2.3s-1.4.9-1.7 2.3c-.4 1.9-.8 4-2.1 3.6-1.3-.4-1.6-2.9-1.9-4.6-.4-2.2-.8-3.2-1.2-5.2-.5-2.5.1-4.8 1.9-5.8 1.5-.8 3.4-.3 5 1.1Z" })
	});
}
function Footer() {
	const { t } = useLanguage();
	const links = [
		["home", t.nav.home],
		["services", t.nav.services],
		["about", t.nav.about],
		["contact", t.nav.contact]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-foreground pb-24 pt-10 text-background md:pb-10 sm:pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-7xl gap-7 px-4 sm:gap-10 sm:px-6 lg:px-8 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => scrollToSection("home"),
						className: "flex items-center gap-3 rounded-xl text-start",
						"aria-label": t.brand.name,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToothMark, { className: "h-9 w-9 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex flex-col leading-none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-latin text-base font-extrabold tracking-[0.2em]",
									children: t.brand.primary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 text-[11px] font-semibold text-primary",
									children: t.brand.secondary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 text-[10px] font-medium text-background/65",
									children: t.brand.doctor
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-sm text-sm leading-6 text-background/65",
						children: t.footer.disclaimer
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold",
					children: t.footer.links
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "mt-3 flex flex-col items-start gap-1",
					"aria-label": t.footer.links,
					children: links.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => scrollToSection(id),
						className: "rounded-md py-1 text-sm text-background/70 transition-colors hover:text-background",
						children: label
					}, id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold",
					children: t.footer.contact
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${PHONE}`,
						className: "flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "h-4 w-4 text-primary",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							dir: "ltr",
							children: PHONE
						})]
					})
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-10 w-full max-w-7xl border-t border-background/10 px-4 pt-6 text-center text-xs text-background/55 sm:px-6 lg:px-8",
			children: t.footer.rights
		})]
	});
}
var heroImage = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&auto=format&fit=crop&q=85";
var trustIcons = [
	HeartHandshake,
	Stethoscope,
	Sparkles
];
function Hero() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-[94px] pb-6 sm:pt-[108px] sm:pb-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute -top-24 end-[-6rem] h-72 w-72 rounded-full bg-soft blur-3xl sm:h-96 sm:w-96"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto grid min-h-0 w-full max-w-7xl items-center gap-3 px-4 sm:gap-8 sm:px-6 lg:min-h-[560px] lg:grid-cols-[1.08fr_1fr] lg:gap-12 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 lg:col-start-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-extrabold text-foreground sm:text-xl",
							children: t.brand.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-semibold text-muted-foreground",
							children: t.brand.doctor
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full bg-soft px-4 py-2 text-xs font-semibold text-foreground sm:text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
							className: "h-4 w-4 text-primary",
							"aria-hidden": "true"
						}), t.hero.eyebrow]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-xl text-[38px] font-extrabold leading-[1.25] text-foreground sm:mt-6 sm:text-6xl sm:leading-[1.2] lg:text-[62px]",
						children: [t.hero.titleA, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-primary",
							children: t.hero.titleB
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-[15px] leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-9",
						children: t.hero.desc
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-2 sm:mt-8 sm:flex-wrap sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => scrollToSection("contact"),
							className: "inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_14px_30px_-16px_rgba(201,143,150,1)] transition-transform hover:-translate-y-0.5 sm:flex-none sm:gap-2 sm:px-7 sm:text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), t.hero.book]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${PHONE}`,
							className: "inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full border border-primary/60 bg-card px-3 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-soft sm:flex-none sm:gap-2 sm:px-7 sm:text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "h-4 w-4 text-primary",
								"aria-hidden": "true"
							}), t.hero.call]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid grid-cols-3 gap-2 sm:mt-9 sm:gap-3",
						children: t.hero.trust.map((item, i) => {
							const Icon = trustIcons[i] ?? Sparkles;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex min-h-12 min-w-0 items-center gap-1.5 rounded-2xl border border-border bg-card px-2 py-2.5 text-[11px] font-semibold text-foreground shadow-[0_12px_30px_-24px_rgba(39,50,58,0.7)] sm:gap-2 sm:px-3.5 sm:py-3.5 sm:text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "h-4 w-4 shrink-0 text-medical",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0",
									children: item
								})]
							}, item);
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-w-0 lg:col-start-1 lg:row-start-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[300px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_60px_-40px_rgba(39,50,58,0.45)] sm:h-[440px] sm:rounded-[2.5rem] lg:h-[560px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: heroImage,
						alt: t.hero.imageAlt,
						width: 1600,
						height: 1067,
						loading: "eager",
						className: "h-full w-full object-cover"
					})
				})
			})]
		})]
	});
}
function Location() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 md:py-[60px] lg:py-20",
		"aria-labelledby": "location-heading",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": "true",
					className: "pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full bg-medical/20 blur-3xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, {
									className: "h-6 w-6 text-primary",
									"aria-hidden": "true"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "location-heading",
								className: "text-2xl font-extrabold text-foreground sm:text-4xl",
								children: t.location.heading
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 flex items-center gap-2 text-sm leading-7 text-muted-foreground sm:text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "h-4 w-4 shrink-0 text-medical",
									"aria-hidden": "true"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.location.text })]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: t.location.heading,
							src: MAPS_EMBED_URL,
							loading: "lazy",
							className: "mt-5 h-[300px] w-full rounded-[20px] border-0 sm:h-[380px]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: MAPS_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}), t.location.button]
						})
					]
				})]
			}) })
		})
	});
}
function MobileContactBar() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-3 bottom-3 z-50 md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3 overflow-hidden rounded-2xl border border-border bg-card/90 p-1 shadow-[0_12px_30px_-16px_rgba(39,50,58,0.38)] backdrop-blur",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `tel:${PHONE}`,
					className: "flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-xs font-semibold text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
						className: "h-4 w-4 text-primary",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: t.mobile.call
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => scrollToSection("contact"),
					className: "flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl bg-primary px-2 py-2.5 text-xs font-semibold text-primary-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: t.mobile.book
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WHATSAPP_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2.5 text-xs font-semibold text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "h-4 w-4 text-primary",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: t.mobile.instagram
					})]
				})
			]
		})
	});
}
var sections = [
	"home",
	"about",
	"services",
	"why",
	"faq",
	"contact"
];
function Navbar() {
	const { t, lang, setLang } = useLanguage();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const go = (id) => {
		setOpen(false);
		scrollToSection(id);
	};
	const labels = {
		home: t.nav.home,
		about: t.nav.about,
		services: t.nav.services,
		why: t.nav.why,
		faq: t.nav.faq,
		contact: t.nav.contact
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 shadow-[0_2px_20px_-12px_rgba(39,50,58,0.35)] backdrop-blur" : "bg-background/70 backdrop-blur-sm"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-[78px] w-full max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-[84px] lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => go("home"),
					className: "flex min-w-0 shrink-0 items-center gap-2 rounded-xl py-1 text-start",
					"aria-label": t.brand.name,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToothMark, { className: "h-9 w-9 shrink-0 text-primary sm:h-8 sm:w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex min-w-0 flex-col leading-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-latin text-[21px] font-extrabold tracking-[0.2em] text-foreground sm:text-xl",
								children: t.brand.primary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 text-[11px] font-semibold text-primary sm:text-xs",
								children: t.brand.secondary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 text-[10px] font-medium text-muted-foreground sm:text-[11px]",
								children: t.brand.doctor
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": t.nav.home,
					className: "mx-auto hidden items-center gap-2 lg:flex",
					children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(s),
						className: "rounded-full px-4 py-2.5 text-[15px] font-semibold text-muted-foreground transition-colors hover:bg-soft hover:text-foreground",
						children: labels[s]
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ms-auto flex items-center gap-2 lg:ms-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setLang(lang === "ar" ? "en" : "ar"),
							className: "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-soft",
							"aria-label": lang === "ar" ? "Switch to English" : "التبديل إلى العربية",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, {
								className: "h-4 w-4 text-primary",
								"aria-hidden": "true"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-latin",
								children: lang === "ar" ? "EN" : "العربية"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go("contact"),
							className: "hidden rounded-full bg-primary px-6 py-3 text-[15px] font-bold text-primary-foreground shadow-[0_10px_24px_-14px_rgba(201,143,150,0.9)] transition-transform hover:-translate-y-0.5 sm:inline-flex",
							children: t.nav.book
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							className: "inline-flex items-center justify-center rounded-full border border-border p-2 text-foreground lg:hidden",
							"aria-expanded": open,
							"aria-controls": "mobile-nav",
							"aria-label": open ? t.nav.close : t.nav.menu,
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-nav",
			hidden: !open,
			className: "border-t border-border bg-background lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8",
				children: [sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go(s),
					className: "rounded-xl px-3 py-3 text-start text-sm font-medium text-foreground transition-colors hover:bg-soft",
					children: labels[s]
				}, s)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go("contact"),
					className: "mt-1 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground",
					children: t.nav.book
				})]
			})
		})]
	});
}
var serviceImages = {
	denture: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&auto=format&fit=crop&q=85",
	rootcanal: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&auto=format&fit=crop&q=85",
	fillings: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&auto=format&fit=crop&q=85",
	extraction: "https://images.pexels.com/photos/3845738/pexels-photo-3845738.jpeg?auto=compress&cs=tinysrgb&w=900",
	children: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&auto=format&fit=crop&q=85"
};
function Services({ onSelectService }) {
	const { t, lang } = useLanguage();
	const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "scroll-mt-20 bg-soft/40 py-8 md:py-[60px] lg:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]",
					children: t.services.heading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-base leading-8 text-muted-foreground sm:text-lg",
					children: t.services.desc
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 sm:mt-10 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 sm:snap-none lg:grid-cols-3",
				children: serviceKeys.map((key, i) => {
					const item = t.services.items[key];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						className: "flex-[0_0_82%] w-auto max-w-none snap-start sm:flex-1 sm:snap-align-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "flex h-full w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_-28px_rgba(39,50,58,0.45)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: serviceImages[key],
								alt: item.title,
								width: 900,
								height: 600,
								loading: "lazy",
								className: "aspect-[4/3] w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex grow flex-col p-5 sm:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-lg font-bold text-foreground",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 grow text-[15px] leading-7 text-muted-foreground sm:mt-3 sm:text-base sm:leading-8",
										children: item.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											onSelectService(key);
											scrollToSection("contact");
										},
										className: "mt-4 inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-soft sm:mt-5",
										children: [t.services.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, {
											className: "h-4 w-4 text-primary",
											"aria-hidden": "true"
										})]
									})
								]
							})]
						})
					}, key);
				})
			})]
		})
	});
}
function WhyChooseUs() {
	const { t } = useLanguage();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "why",
		className: "scroll-mt-20 py-8 md:py-[60px] lg:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-extrabold text-foreground sm:text-4xl lg:text-[42px]",
				children: t.why.heading
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4",
				children: t.why.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full min-w-0 rounded-3xl border border-border bg-card p-4 sm:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-latin text-2xl font-extrabold text-soft-foreground text-primary/50",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 text-lg font-bold text-foreground sm:mt-4",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[15px] leading-7 text-muted-foreground sm:mt-3 sm:text-base sm:leading-8",
								children: item.desc
							})
						]
					})
				}, item.title))
			})]
		})
	});
}
function Index() {
	const [selectedService, setSelectedService] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "pb-28 md:pb-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnnouncementBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, { onSelectService: setSelectedService }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentCTA, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, { selectedService }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Location, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileContactBar, {})
	] });
}
//#endregion
export { Index as component };
