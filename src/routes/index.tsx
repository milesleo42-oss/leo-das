import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import heroImg from "@/assets/hero.jpg";
import weddingImg from "@/assets/service-wedding.jpg";
import babyImg from "@/assets/service-baby.jpg";
import engagementImg from "@/assets/service-engagement.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Candids By Kumarans Photografii — Wedding Photographer in Puducherry" },
      {
        name: "description",
        content:
          "Cinematic candid wedding photography in Puducherry. Weddings, engagements, receptions and baby shoots — 5.0 ★ rated by 49+ families.",
      },
      { property: "og:title", content: "Candids By Kumarans Photografii" },
      {
        property: "og:description",
        content: "Cinematic candid wedding photography rooted in South Indian warmth — Puducherry.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Candids By Kumarans Photografii",
          image: heroImg,
          telephone: "+91 96007 69401",
          address: {
            "@type": "PostalAddress",
            streetAddress: "No.27, Pillaiyar Koil Street, G.N Palayam",
            addressLocality: "Arumparthapuram, Puducherry",
            postalCode: "605110",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "49" },
          openingHours: "Mo-Su 09:00-20:00",
          priceRange: "₹₹",
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    img: weddingImg,
    eyebrow: "Wedding Photography",
    title: "The Big Day",
    body: "Cinematic coverage of rituals, joy, and unscripted candid exchanges.",
  },
  {
    img: babyImg,
    eyebrow: "Baby & Portrait",
    title: "New Beginnings",
    body: "Tender moments of early childhood, motherhood and family bonding.",
  },
  {
    img: engagementImg,
    eyebrow: "Engagements & Reception",
    title: "Pre-Wedding",
    body: "Creative outdoor sessions that showcase the bond that began it all.",
  },
];

const portfolioFrames = [
  { img: portfolio1, event: "Bridal Portrait", date: "Madurai · Feb 2025" },
  { img: portfolio2, event: "Temple Ceremony", date: "Thiruvannamalai · Jan 2025" },
  { img: weddingImg, event: "Mehendi Detail", date: "Chennai · Dec 2024" },
  { img: portfolio4, event: "Parents' Blessing", date: "Tanjore · Nov 2024" },
  { img: engagementImg, event: "Engagement", date: "Pondicherry · Oct 2024" },
  { img: portfolio3, event: "Reception Stage", date: "Chennai · Sep 2024" },
  { img: heroImg, event: "Couple Candid", date: "Auroville · Aug 2024" },
  { img: babyImg, event: "Baby Shoot", date: "Puducherry · Jul 2024" },
  { img: portfolio2, event: "Sacred Fire", date: "Kumbakonam · Jun 2024" },
  { img: portfolio1, event: "Bridal Jewellery", date: "Madurai · May 2024" },
  { img: portfolio4, event: "Family Portrait", date: "Coimbatore · Apr 2024" },
  { img: engagementImg, event: "Pre-Wedding Walk", date: "ECR · Mar 2024" },
  { img: portfolio3, event: "Sangeet Night", date: "Chennai · Feb 2024" },
  { img: weddingImg, event: "Garland Exchange", date: "Trichy · Jan 2024" },
  { img: heroImg, event: "Marigold Moment", date: "Puducherry · Dec 2023" },
];

const testimonials = [
  {
    quote:
      "Every picture looks so natural and beautifully captured. The photography feels very real and lively, as if the moments are happening right in front of us.",
    name: "Ragul Krish",
    role: "Wedding · Puducherry",
  },
  {
    quote:
      "The results were really amazing and beyond my expectations. The album quality is too good, and every moment was captured beautifully.",
    name: "Praveen Karthi",
    role: "Reception · Chennai",
  },
  {
    quote:
      "We just finished looking through our album, and we are absolutely speechless. You captured the exact feeling of the day — the lighting, the composition, the small candid moments.",
    name: "Vignesh Vicky",
    role: "Wedding · Madurai",
  },
  {
    quote:
      "Kumaran and his team made us feel so comfortable through the whole day. The candid frames feel like they were taken by a close friend.",
    name: "Anitha Ramesh",
    role: "Engagement · Pondicherry",
  },
  {
    quote:
      "Beautiful storytelling. Every page of our album feels like a memory we get to relive again and again. Worth every rupee.",
    name: "Karthik Subramanian",
    role: "Wedding · Thanjavur",
  },
  {
    quote:
      "The candid shots of our parents and grandparents are priceless. Thank you for capturing emotions we didn't even notice on the day.",
    name: "Divya Mohan",
    role: "Wedding · Coimbatore",
  },
  {
    quote:
      "Professional, punctual, and incredibly talented. Our pre-wedding shoot turned out exactly the way we dreamed.",
    name: "Sandeep Iyer",
    role: "Pre-wedding · ECR",
  },
];

function Index() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-reveal-root]");
    if (!root) return;

    // Auto-tag content blocks for reveal animation.
    const selector = [
      "section > div",
      "section figure",
      "section h2",
      "header > div > div",
      "footer > div > div",
      ".marquee-mask",
    ].join(",");

    const targets = Array.from(root.querySelectorAll<HTMLElement>(selector)).filter(
      (el) => !el.closest(".marquee-track") || el.classList.contains("marquee-mask"),
    );
    targets.forEach((el) => el.setAttribute("data-reveal", ""));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <div data-reveal-root className="bg-brand-cream text-brand-onyx selection:bg-brand-gold/20" style={{ fontFamily: "var(--font-sans)" }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 border-b border-brand-onyx/10 bg-brand-cream/85 backdrop-blur supports-[backdrop-filter]:bg-brand-cream/70">
        <a href="#top" className="text-xl font-bold tracking-tight uppercase leading-none" style={{ fontFamily: "var(--font-serif)" }}>
          Kumarans
          <br />
          <span className="text-brand-gold text-[10px] tracking-[0.3em] font-normal" style={{ fontFamily: "var(--font-sans)" }}>
            Photografii
          </span>
        </a>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-medium">
          <a href="#portfolio" className="hover:text-brand-gold transition-colors">The Portfolio</a>
          <a href="#services" className="hover:text-brand-gold transition-colors">Weddings</a>
          <a href="#reviews" className="hover:text-brand-gold transition-colors">Reviews</a>
          <a href="#enquiry" className="hover:text-brand-gold transition-colors">Enquiry</a>
          <a href="#contact" className="hover:text-brand-gold transition-colors">Contact</a>
        </div>
        <button
          type="button"
          onClick={() => {
            const msg = "Hi Kumaran Photografii !  I'd love to book a session. Can you share your availability and packages?";
            window.open(`https://wa.me/919600769401?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
          }}
          className="px-5 py-2 border border-brand-onyx text-[10px] uppercase tracking-widest hover:bg-brand-onyx hover:text-brand-cream transition-all"
        >
          Book a Session
        </button>
      </nav>

      {/* Hero */}
      <header id="top" className="relative px-6 md:px-12 pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 z-10">
            <h2 className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-4">
              Based in Puducherry · Available Worldwide
            </h2>
            <h1 className="text-6xl md:text-8xl leading-[0.9] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Every Moment <br /> <span className="italic">is a Story.</span>
            </h1>
            <p
              className="text-brand-gold text-xl md:text-2xl mb-8"
              style={{ fontFamily: "'Noto Serif Tamil', serif" }}
            >
              கேண்டிட் பி குமரன்ஸ் போட்டோகிராபி
            </p>
            <p className="text-brand-onyx/70 max-w-sm mb-10 leading-relaxed">
              Candid wedding photography that captures the raw, unscripted emotions of your most significant
              celebrations — rooted in South Indian warmth.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3" aria-hidden>
                <img src={avatar1} alt="" loading="lazy" width={512} height={512} className="size-10 rounded-full border-2 border-brand-cream object-cover shadow-sm" />
                <img src={avatar2} alt="" loading="lazy" width={512} height={512} className="size-10 rounded-full border-2 border-brand-cream object-cover shadow-sm" />
                <img src={avatar3} alt="" loading="lazy" width={512} height={512} className="size-10 rounded-full border-2 border-brand-cream object-cover shadow-sm" />
              </div>
              <div className="text-xs tracking-tight">
                <span className="font-bold">5.0 ★ Rating</span>
                <span className="text-brand-onyx/50 block">49+ Happy Couples on Google</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <img
              src={heroImg}
              alt="South Indian bride and groom laughing under marigold canopy"
              width={1200}
              height={1504}
              className="w-full aspect-[4/5] object-cover shadow-2xl shadow-brand-onyx/20"
            />
            <div className="absolute -bottom-8 -left-8 size-48 border border-brand-gold/30 hidden md:block -z-0" />
          </div>
        </div>
      </header>

      {/* Portfolio strip */}
      <section id="portfolio" className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-14 border-b border-brand-onyx/10 pb-8">
          <div className="md:col-span-7">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-4">The Archive · 2023—2025</p>
            <h2 className="text-5xl md:text-6xl leading-[0.95]" style={{ fontFamily: "var(--font-serif)" }}>
              Selected <span className="italic">Frames</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:text-right">
            <p className="text-brand-onyx/60 text-sm leading-relaxed max-w-sm md:ml-auto">
              A small edit from the last two seasons — temple ceremonies, candid family moments,
              and reception portraits across Puducherry and Tamil Nadu.
            </p>
          </div>
        </div>

        {/* Auto-sliding marquee of frames */}
        <div
          className="marquee-mask relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div className="marquee-track flex gap-6">
            {[...portfolioFrames, ...portfolioFrames].map((frame, i) => (
              <figure
                key={i}
                className="group relative w-[260px] md:w-[340px] shrink-0 overflow-hidden"
                aria-hidden={i >= portfolioFrames.length ? true : undefined}
              >
                <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 bg-gradient-to-b from-brand-onyx/70 via-brand-onyx/30 to-transparent p-4 text-brand-cream">
                  <div className="min-w-0">
                    <p className="truncate text-[11px] uppercase tracking-[0.3em]">{frame.event}</p>
                    <p className="truncate text-[10px] text-brand-cream/70 tracking-wider">{frame.date}</p>
                  </div>
                  <span className="shrink-0 text-[10px] text-brand-gold tracking-[0.3em]">
                    {String((i % portfolioFrames.length) + 1).padStart(2, "0")}
                    <span className="text-brand-cream/40"> / {portfolioFrames.length}</span>
                  </span>
                </div>
                <div className="overflow-hidden">
                  <img
                    src={frame.img}
                    alt={`${frame.event} — ${frame.date}`}
                    loading="lazy"
                    width={800}
                    height={1100}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-center text-[10px] uppercase tracking-[0.3em] text-brand-onyx/40">
            HOVER TO PAUSE ·&nbsp;FRAMES FROM RECENT WEDDINGS
          </p>
        </div>

        {/* CTA strip */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-brand-onyx/10 pt-10">
          <p className="text-brand-onyx/70 max-w-md text-sm leading-relaxed">
            A complete album typically holds 400—600 photographs. Reach out to view a full wedding
            story or to browse the printed albums in person at our Puducherry studio.
          </p>
          <a
            href="https://wa.me/919600769401"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-brand-onyx hover:text-brand-gold transition-colors"
          >
            <span className="border-b border-brand-onyx pb-1 group-hover:border-brand-gold">
              Request Full Portfolio
            </span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-brand-onyx text-brand-cream py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl" style={{ fontFamily: "var(--font-serif)" }}>
              Specializations
            </h2>
            <p className="text-brand-cream/50 text-xs uppercase tracking-widest max-w-xs">
              Crafting visual legacies for every milestone of your life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <article key={s.title} className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <img
                    src={s.img}
                    alt={s.eyebrow}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-2">{s.eyebrow}</p>
                <h3 className="text-2xl mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                  {s.title}
                </h3>
                <p className="text-sm text-brand-cream/50 font-light">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-16 px-6 md:px-12">
          <span className="text-brand-gold text-xs uppercase tracking-[0.3em]">Voices of Trust</span>
          <h2
            className="mt-4 text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            What our couples <span className="italic">say</span>
          </h2>
          <p className="mt-4 text-brand-onyx/60 text-sm">5.0 ★ on Google · 49 reviews</p>
        </div>

        <div
          className="marquee-mask relative"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="marquee-track flex gap-6 md:gap-8">
            {[...testimonials, ...testimonials].map((t, i) => {
              const initials = t.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("");
              return (
                <figure
                  key={`${t.name}-${i}`}
                  className="w-[320px] md:w-[400px] shrink-0 bg-brand-cream border border-brand-onyx/10 p-8 flex flex-col justify-between gap-6"
                >
                  <div>
                    <div className="text-brand-gold text-sm tracking-widest mb-4">★★★★★</div>
                    <blockquote
                      className="text-base md:text-lg italic leading-relaxed text-brand-onyx/85"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      “{t.quote}”
                    </blockquote>
                  </div>
                  <figcaption className="flex items-center gap-4 pt-4 border-t border-brand-onyx/10">
                    <span
                      aria-hidden
                      className="size-12 rounded-full bg-brand-onyx text-brand-cream flex items-center justify-center text-sm font-bold tracking-wider"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {initials}
                    </span>
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-widest font-bold">{t.name}</div>
                      <div className="text-[11px] text-brand-onyx/50 mt-1">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquiry" className="bg-brand-onyx/[0.03] border-y border-brand-onyx/10 py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-4">Enquiry</p>
            <h2 className="text-4xl md:text-5xl leading-[1.05]" style={{ fontFamily: "var(--font-serif)" }}>
              Tell us about <span className="italic">your day.</span>
            </h2>
            <p className="mt-6 text-sm text-brand-onyx/60 leading-relaxed max-w-sm">
              Browsing from your desktop? Share a few details and we'll reach out personally with
              availability, pricing, and a portfolio matched to your event.
            </p>
            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-brand-onyx/40">
              Replies usually within 24 hours
            </p>
          </div>

          <form
            className="md:col-span-7 bg-brand-cream border border-brand-onyx/10 p-8 md:p-10 space-y-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              const f = new FormData(e.currentTarget);
              const name = String(f.get("name") || "").trim().slice(0, 100);
              const phone = String(f.get("phone") || "").trim().slice(0, 20);
              const email = String(f.get("email") || "").trim().slice(0, 120);
              const eventType = String(f.get("eventType") || "").trim();
              const location = String(f.get("location") || "").trim().slice(0, 120);
              const date = String(f.get("date") || "").trim();
              const notes = String(f.get("notes") || "").trim().slice(0, 500);
              if (!name || !phone || !eventType || !location) return;
              const msg = [
                "New enquiry from website",
                `Name: ${name}`,
                `Phone: ${phone}`,
                email ? `Email: ${email}` : null,
                `Event: ${eventType}`,
                `Location: ${location}`,
                date ? `Date: ${date}` : null,
                notes ? `Notes: ${notes}` : null,
              ]
                .filter(Boolean)
                .join("\n");
              const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent,
              );
              const url = isMobile
                ? `https://wa.me/919600769401?text=${encodeURIComponent(msg)}`
                : `https://web.whatsapp.com/send?phone=919600769401&text=${encodeURIComponent(msg)}`;
              window.open(url, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-onyx/60">Event Type *</span>
                <select
                  name="eventType"
                  required
                  defaultValue=""
                  className="bg-transparent border-b border-brand-onyx/30 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                >
                  <option value="" disabled>Select an event</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Reception">Reception</option>
                  <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                  <option value="Baby Shoot">Baby Shoot</option>
                  <option value="Family Portrait">Family Portrait</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-onyx/60">Event Location *</span>
                <input
                  type="text"
                  name="location"
                  required
                  maxLength={120}
                  placeholder="City, venue or area"
                  className="bg-transparent border-b border-brand-onyx/30 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-onyx/30"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-onyx/60">Event Date</span>
                <input
                  type="date"
                  name="date"
                  className="bg-transparent border-b border-brand-onyx/30 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-onyx/60">Your Name *</span>
                <input
                  type="text"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Full name"
                  className="bg-transparent border-b border-brand-onyx/30 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-onyx/30"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-onyx/60">Phone / WhatsApp *</span>
                <input
                  type="tel"
                  name="phone"
                  required
                  maxLength={20}
                  placeholder="+91 ..."
                  className="bg-transparent border-b border-brand-onyx/30 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-onyx/30"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-onyx/60">Email</span>
                <input
                  type="email"
                  name="email"
                  maxLength={120}
                  placeholder="you@email.com"
                  className="bg-transparent border-b border-brand-onyx/30 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-onyx/30"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-onyx/60">Anything else?</span>
              <textarea
                name="notes"
                rows={3}
                maxLength={500}
                placeholder="Guest count, style preferences, references..."
                className="bg-transparent border-b border-brand-onyx/30 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-onyx/30 resize-none"
              />
            </label>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-onyx/40">
                * Required fields
              </p>
              <button
                type="submit"
                className="bg-brand-onyx text-brand-cream px-8 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-brand-gold transition-colors"
              >
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-brand-onyx/10 pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
            <div className="md:col-span-4 space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-4">Find Our Studio</h4>
                <address className="not-italic text-sm text-brand-onyx/60 leading-relaxed">
                  No.27, Pillaiyar Koil Street,
                  <br />
                  G.N Palayam, Arumparthapuram,
                  <br />
                  Puducherry, 605110
                </address>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Call</h4>
                <a href="tel:+919600769401" className="text-brand-gold font-bold text-lg hover:underline">
                  +91 96007 69401
                </a>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Hours</h4>
                <p className="text-sm text-brand-onyx/60">Daily · 9:00 am — 8:00 pm</p>
              </div>
            </div>

            <div className="md:col-span-8 flex flex-col items-start md:items-end justify-between gap-8">
              <h2
                className="text-5xl md:text-7xl text-left md:text-right leading-none"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Let's Capture <br />
                Your Forever.
              </h2>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <a
                  href="tel:+919600769401"
                  className="bg-brand-onyx text-brand-cream px-6 py-3 text-[10px] uppercase tracking-[0.3em] hover:bg-brand-gold transition-colors"
                >
                  Call to Book
                </a>
                <button
                  type="button"
                  onClick={() => {
                    const msg = "Hi Kumaran Photografii !  I'd love to book a session. Can you share your availability and packages?";
                    window.open(`https://wa.me/919600769401?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
                  }}
                  className="text-brand-gold text-sm border-b border-brand-gold pb-1 hover:text-brand-onyx transition-colors uppercase tracking-widest"
                >
                  WhatsApp Inquiry
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-brand-onyx/5 pt-10 gap-4">
            <p className="text-[10px] uppercase tracking-widest text-brand-onyx/40">
              © {new Date().getFullYear()} Candids By Kumarans Photografii. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-brand-onyx/60">
              <a href="#" className="hover:text-brand-gold">Instagram</a>
              <a href="#" className="hover:text-brand-gold">Facebook</a>
              <a
                href="https://wa.me/919600769401"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}