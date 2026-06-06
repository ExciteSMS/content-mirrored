import { useState } from "react";
import {
  Mountain, Truck, Fuel, Compass, ChevronDown, Mail, Phone, MapPin, Clock,
  ArrowRight, Send, Facebook, Twitter, Linkedin, Instagram, ShieldCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-mining.jpg";
import ceoImg from "@/assets/images/boardroom_executive_1780761465379.png";
import g1 from "@/assets/images/mining_workers_1780761449675.png";
import g2 from "@/assets/images/gold_melting_crucible_1780761402114.png";
import g3 from "@/assets/images/mining_excavator_quarry_1780761436843.png";
import g4 from "@/assets/images/portfolio/portfolio-thumb-08.jpeg";
import g5 from "@/assets/images/gold_assay_bars_1780761421772.png";
import g6 from "@/assets/images/mining_crusher_operator_1780761484943.png";
import brand1 from "@/assets/images/brand/brand-thumb-21.png";
import brand2 from "@/assets/images/brand/brand-thumb-22.png";
import brand3 from "@/assets/images/brand/brand-thumb-23.png";
import brand4 from "@/assets/images/brand/brand-thumb-26.png";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: Mountain, title: "Mining & Supply Chain Support", desc: "On-site and off-site support for mining operations—planning, sourcing, vendor coordination, and supply continuity to keep production moving." },
  { icon: Fuel, title: "Fuel Distribution", desc: "Reliable fuel supply solutions for operations and fleets—timely delivery, consumption planning, and consistent availability for critical runs." },
  { icon: Truck, title: "Transport & Logistics", desc: "Movement of equipment, consumables, and commodities—route planning, secure handling, and dependable deliveries to remote and active sites." },
  { icon: Compass, title: "Commodity Consultancy & Ethical Gold Sourcing", desc: "Market guidance, compliance support, and responsible sourcing—helping clients access gold ethically with transparent processes and verified supply chains." },
];

const stats = [
  { value: "2,022", label: "Year Established" },
  { value: "20+", label: "Years of Industry Backing" },
  { value: "3", label: "Core Operations Areas" },
  { value: "5", label: "Specialized Services" },
];

const faqs = [
  { q: "01. What services does Jigwe Mining provide?", a: "We offer mining investment support, transport and logistics, commodity consultancy, gold sourcing, and mining consultancy — covering the full value chain from extraction to trade." },
  { q: "02. Do you support international clients and partners?", a: "Yes. Through our logistics and commodity trading partnerships, we support both local and international clients, ensuring compliant and efficient delivery to global markets." },
  { q: "03. How does Jigwe Mining ensure ethical operations?", a: "We prioritize transparency, regulatory compliance, and responsible sourcing practices while maintaining high operational standards across all mining activities." },
];

const gallery = [
  { src: g1, label: "Operations", title: "Mining Site Operations" },
  { src: g2, label: "Processing", title: "Gold Smelting & Refining" },
  { src: g3, label: "Exploration", title: "Site Supervision & Quarry Overlook" },
  { src: g4, label: "Logistics", title: "Transport & Supply Chain" },
  { src: g5, label: "Trading", title: "Gold Assaying & Commodity Trade" },
  { src: g6, label: "Compliance", title: "Milling & Safety Standards" },
];
const partners = [
  { logo: brand1, name: "Kairos Investments Limited", role: "Parent Company & Strategic Investor" },
  { logo: brand2, name: "Kairos Commodity Trading", role: "Co-Owner & Trade Partner" },
  { logo: brand3, name: "Fortjameson Goldfields", role: "Strategic Mining Client" },
  { logo: brand4, name: "Industrie", role: "Key Logistics & Processing Client" },
];

import jigweLogo from "@/assets/images/jigwe_logo_official_1780761709747.png";

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className="inline-flex items-center gap-2 transition-transform duration-200 hover:scale-102">
      <div className={`rounded-lg overflow-hidden ${light ? "bg-white p-1.5 shadow-sm border border-white/20" : "bg-white p-1"}`}>
        <img src={jigweLogo} alt="Jigwe Mining" className="h-9 md:h-10 w-auto object-contain" />
      </div>
    </a>
  );
}

export default function App() {
  const [tab, setTab] = useState<"ceo" | "mission" | "vision">("ceo");
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="hidden md:block bg-brand-deep text-white/90 text-sm">
        <div className="mx-auto max-w-7xl px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin className="size-4" /> Lusaka, Zambia</span>
            <span className="flex items-center gap-2"><Mail className="size-4" /> info@jigwemining.com</span>
            <span className="flex items-center gap-2"><Phone className="size-4" /> +260 776 262785</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white"><Facebook className="size-4" /></a>
            <a href="#" className="hover:text-white"><Twitter className="size-4" /></a>
            <a href="#" className="hover:text-white"><Linkedin className="size-4" /></a>
            <a href="#" className="hover:text-white"><Instagram className="size-4" /></a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 h-18 py-3 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-foreground/80 hover:text-brand transition-colors">{n.label}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:opacity-95">
            Get in Touch <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Mining operations" width={1920} height={1088} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest border border-white/20">
              <ShieldCheck className="size-4 text-brand" /> We Are the Minerals of Africa
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-[1.05]">
              Ethical Mining.<br />
              Strategic Investment.<br />
              <span className="text-brand">Global Trade.</span>
            </h1>
            <p className="mt-6 text-lg text-white/85 max-w-xl">
              Trusted Mining & Commodity Experts — powering Africa's mineral economy from extraction to trade.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-6 py-3 font-semibold hover:bg-white/90">
                Get In Touch <ArrowRight className="size-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-6 py-3 font-semibold hover:bg-white/10">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Building sustainable mining solutions in Zambia <span className="text-brand">since 2022.</span> Driven by integrity and excellence
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>Jigwe Mining is a Zambia-based mining company specializing in mineral extraction, processing, and trade, backed by strong strategic expertise and financial support.</p>
            <p>As a subsidiary of Kairos Investments Ltd and co-owned by Kairos Commodity Trading, we leverage over two decades of investment and commodity trading experience to deliver ethical, efficient, and profitable mining solutions that contribute to Zambia's economic growth.</p>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-6 py-3 font-semibold shadow-soft">
              Discover More <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-7xl px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-y py-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-brand font-display">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-brand text-sm font-semibold uppercase tracking-widest">Services</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">What We Do</h2>
            <p className="mt-4 text-muted-foreground">
              We deliver practical mining and commodity solutions—from site support to logistics, fuel supply, consultancy, and responsible gold sourcing.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="group relative rounded-2xl bg-card border p-7 hover:shadow-soft hover:-translate-y-1 transition-all">
                <div className="absolute top-4 right-5 text-6xl font-extrabold text-brand/10 font-display">0{i + 1}</div>
                <div className="grid place-items-center size-14 rounded-xl bg-gradient-brand text-brand-foreground">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Tabs */}
      <section id="leadership" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-brand opacity-10 rounded-3xl -z-10" />
            <img src={ceoImg} alt="CEO of Jigwe Mining" width={768} height={960} loading="lazy" className="rounded-2xl shadow-soft w-full object-cover" />
          </div>
          <div>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest">Jigwe Mining Limited</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
              Building reliable mining solutions through <span className="text-brand">integrity, logistics, and supply excellence</span>
            </h2>

            <div className="mt-8 border-b flex gap-2">
              {([["ceo", "CEO Message"], ["mission", "Our Mission"], ["vision", "Our Vision"]] as const).map(([k, l]) => (
                <button key={k} onClick={() => setTab(k)}
                  className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${tab === k ? "border-brand text-brand" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
                  {l}
                </button>
              ))}
            </div>

            <div className="mt-6 text-muted-foreground leading-relaxed space-y-4 min-h-[180px]">
              {tab === "ceo" && (<>
                <p>At Jigwe Mining Limited, we believe mining is more than extraction — it is about building sustainable partnerships, delivering dependable supply chains, and creating value for communities and clients alike.</p>
                <p>Our team is driven by professionalism, transparency, and operational excellence. From fuel distribution and logistics to consultancy and ethical gold sourcing, we remain committed to supporting Africa's mining sector with practical, results-driven solutions.</p>
                <p>Thank you for trusting Jigwe Mining Limited as your strategic partner.</p>
              </>)}
              {tab === "mission" && <p>Our mission is to deliver reliable mining support services through efficient logistics, fuel supply, consultancy, and responsible commodity sourcing — enabling our clients to operate safely, sustainably, and profitably.</p>}
              {tab === "vision" && <p>To become a trusted regional leader in mining services and commodity solutions, recognised for integrity, operational excellence, and positive impact across Africa's mining value chain.</p>}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + Request Info */}
      <section className="py-24 bg-surface">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
          <div>
            <span className="text-brand text-sm font-semibold uppercase tracking-widest">FAQs</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Common questions about our mining services</h2>
            <p className="mt-4 text-muted-foreground">We provide clear guidance on mining investment, logistics, consultancy, and ethical sourcing to help our partners make confident decisions.</p>
            <div className="mt-8 space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} className="rounded-xl border bg-card overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)} className="w-full flex items-center justify-between text-left px-5 py-4">
                    <span className="font-semibold">{f.q}</span>
                    <ChevronDown className={`size-5 text-brand transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-brand text-brand-foreground p-8 shadow-soft self-start">
            <h3 className="text-2xl font-bold">Request Information</h3>
            <p className="mt-2 text-white/85 text-sm">Have a mining or partnership inquiry? Our team is ready to assist.</p>
            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-lg bg-white/10 border border-white/20 placeholder-white/70 px-4 py-3 text-sm outline-none focus:bg-white/15" placeholder="Full Name" />
              <input className="w-full rounded-lg bg-white/10 border border-white/20 placeholder-white/70 px-4 py-3 text-sm outline-none focus:bg-white/15" placeholder="Email Address" />
              <input className="w-full rounded-lg bg-white/10 border border-white/20 placeholder-white/70 px-4 py-3 text-sm outline-none focus:bg-white/15" placeholder="Subject" />
              <textarea rows={4} className="w-full rounded-lg bg-white/10 border border-white/20 placeholder-white/70 px-4 py-3 text-sm outline-none focus:bg-white/15" placeholder="Write Message" />
              <button className="inline-flex items-center gap-2 rounded-full bg-white text-brand-deep px-6 py-3 text-sm font-semibold hover:bg-white/90">
                Send Message <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Partners / Clients */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="text-brand text-sm font-semibold uppercase tracking-widest">Our Clients</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Trusted by Key Mining & Commodity Leaders</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We operate closely with primary parent entities, investors, and major industrial trade clients to support high-efficiency, compliant, and responsible mineral transactions globally.
          </p>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((p) => (
              <div key={p.name} className="group flex flex-col justify-between items-stretch rounded-2xl border bg-card p-6 shadow-soft hover:-translate-y-1 hover:border-brand/40 transition-all duration-300">
                <div className="flex items-center justify-center bg-surface/50 rounded-xl w-full h-28 p-4">
                  <img src={p.logo} alt={`${p.name} logo`} loading="lazy" className="max-h-16 max-w-full object-contain filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="font-bold text-base text-foreground/90 group-hover:text-brand transition-colors duration-300">{p.name}</h4>
                  <p className="mt-1.5 text-xs text-muted-foreground font-semibold uppercase tracking-wide">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">Gallery</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((g) => (
              <div key={g.title} className="group relative overflow-hidden rounded-2xl shadow-soft">
                <img src={g.src} alt={g.title} width={768} height={576} loading="lazy" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                  <span className="text-xs uppercase tracking-widest text-brand">{g.label}</span>
                  <h4 className="font-bold text-lg">{g.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">Contact</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">Ready to work with Jigwe Mining? Get in touch with our team</h2>
            <p className="mt-4 text-white/85">Whether you're looking for mining consultancy, gold sourcing, commodity trading support, or transport and logistics solutions, we're available to discuss your requirements and propose the best path forward.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {[
                { icon: MapPin, t: "Office", v: "Jigwe Mining Limited — Lusaka, Zambia" },
                { icon: Phone, t: "Phone Number", v: "+260 776 262785" },
                { icon: Mail, t: "Email Address", v: "info@jigwemining.com" },
                { icon: Clock, t: "Working Hours", v: "Mon – Fri: 08:00am – 05:00pm" },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-3 rounded-xl bg-white/10 backdrop-blur p-4 border border-white/15">
                  <div className="grid place-items-center size-10 rounded-lg bg-white/15"><c.icon className="size-5" /></div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/70">{c.t}</div>
                    <div className="font-semibold text-sm mt-0.5">{c.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white text-foreground p-8 shadow-soft">
            <h3 className="text-2xl font-bold">Request a Call Back</h3>
            <p className="mt-2 text-muted-foreground text-sm">Share your inquiry and our team will respond as soon as possible.</p>
            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input className="w-full rounded-lg border bg-surface px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand" placeholder="Full Name" />
              <input className="w-full rounded-lg border bg-surface px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand" placeholder="Email Address" />
              <input className="w-full rounded-lg border bg-surface px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand" placeholder="Subject" />
              <textarea rows={4} className="w-full rounded-lg border bg-surface px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand" placeholder="Write Message" />
              <button className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-6 py-3 text-sm font-semibold">
                Send Message <Send className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter + Footer */}
      <footer className="bg-brand-deep text-white/85">
        <div className="mx-auto max-w-7xl px-6 py-10 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo light />
          <p className="text-sm text-white/70 md:flex-1 md:text-center">Subscribe for updates on our services, projects, and industry insights.</p>
          <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 md:w-72 rounded-full bg-white/10 border border-white/20 px-5 py-3 text-sm placeholder-white/60 outline-none" placeholder="Your Email Address" />
            <button className="rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-white">Subscribe</button>
          </form>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <h4 className="text-white font-bold mb-4">About Jigwe Mining</h4>
            <p className="text-white/70 leading-relaxed">Jigwe Mining Limited is a mining and commodity-focused company providing end-to-end support across mining operations and supply chains.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "About", "Leadership", "FAQ", "Contact"].map((l) => (
                <li key={l}><a className="hover:text-brand" href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Office Address</h4>
            <ul className="space-y-2 text-white/70">
              <li>Lusaka, Zambia</li>
              <li>info@jigwemining.com</li>
              <li>Mon – Fri: 08:00 – 17:00</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((I, i) => (
                <a key={i} href="#" className="grid place-items-center size-10 rounded-full bg-white/10 hover:bg-gradient-brand transition-colors"><I className="size-4" /></a>
              ))}
            </div>
            <p className="mt-6 text-white/70">+260 776 262785</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Jigwe Mining Limited. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
