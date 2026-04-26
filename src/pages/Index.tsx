import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Mail, Check } from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero-crochet.jpg";
import yarnImg from "@/assets/yarn.jpg";

const SLOTS_TOTAL = 50;
const SLOTS_CLAIMED = 17;

const Ticker = () => {
  const items = ["DROP 01", "★", "PRE-ORDER OPEN", "★", "MADE IN NAIROBI", "★", "ROAM FREE", "★", "STITCH BY STITCH", "★"];
  const row = [...items, ...items, ...items];
  return (
    <div className="border-y border-border bg-background py-4 overflow-hidden ticker-fade">
      <div className="flex marquee whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-3xl md:text-4xl mx-6 text-foreground/90">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const pct = Math.round((SLOTS_CLAIMED / SLOTS_TOTAL) * 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("drop a real email fam");
      return;
    }
    setSubmitted(true);
    toast.success("you're on the list. drop 01 incoming.");
  };

  useEffect(() => {
    document.title = "Savannah Safari — Drop 01 Pre-Order";
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="font-display text-2xl tracking-wider">
            SAVANNAH<span className="text-gold">/</span>SAFARI
          </a>
          <a
            href="#preorder"
            className="hidden sm:inline-flex items-center gap-2 font-display text-lg bg-gold text-primary-foreground px-4 py-1.5 hover:bg-[hsl(var(--gold-glow))] transition-colors"
          >
            RESERVE <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 relative z-10">
            <div className="inline-flex items-center gap-2 border border-gold/40 text-gold font-mono text-xs uppercase tracking-widest px-3 py-1 mb-6 animate-pulse-gold rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Drop 01 — Pre-order open
            </div>
            <h1 className="font-display text-[15vw] md:text-[8.5rem] leading-[0.85] mb-6">
              STITCHED <br />
              <span className="text-gold">FROM</span> <br />
              SCRATCH.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              I'm 18. I'm learning crochet in public. Every deposit buys yarn,
              keeps the lights on, and stitches Drop 01 into existence.
              Raw, honest, roam-free.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#preorder"
                className="inline-flex items-center gap-2 font-display text-2xl bg-gold text-primary-foreground px-8 py-4 hover:translate-x-1 hover:-translate-y-1 hover:shadow-hard transition-all"
              >
                RESERVE A PIECE <ArrowRight />
              </a>
              <a href="#story" className="font-display text-xl underline decoration-gold underline-offset-8 decoration-2">
                READ THE STORY
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative">
            <div className="relative grain overflow-hidden border-2 border-gold/30 shadow-gold">
              <img
                src={heroImg}
                alt="Hands crocheting golden yarn against a black backdrop"
                width={1536}
                height={1536}
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gold text-primary-foreground px-4 py-2 font-display text-2xl rotate-[-4deg]">
              ONE STITCH AT A TIME
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* MANIFESTO / STORY */}
      <section id="story" className="py-20 md:py-32">
        <div className="container grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">// 01 — The Why</p>
            <h2 className="font-display text-6xl md:text-7xl leading-none">
              FROM <br /> NAIROBI <br /> WITH <span className="text-gold">HANDS.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg text-foreground/85 leading-relaxed">
            <p>
              No factory. No middleman. No safety net. Just a hook, some
              yarn, and a stubborn 18-year-old who decided the streets weren't
              the only option.
            </p>
            <p>
              Savannah Safari is documented, not designed in a vacuum. Every
              dropped stitch, every sold-out skein — you'll see it on the feed
              before it shows up at your door.
            </p>
            <p className="font-display text-3xl text-gold leading-tight">
              "Your deposit doesn't just buy a piece. It buys the next ball of yarn."
            </p>
          </div>
        </div>
      </section>

      {/* PRE-ORDER */}
      <section id="preorder" className="py-20 md:py-28 bg-card border-y border-border relative grain">
        <div className="container grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">// 02 — Reserve</p>
            <h2 className="font-display text-6xl md:text-8xl leading-none mb-6">
              DROP 01. <br />
              <span className="text-gold">50 PIECES.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bucket hats, balaclavas, halter tops. Hand-crocheted in the
              order they're claimed. KSh 1,500 deposit holds your slot.
            </p>

            {/* progress */}
            <div className="mb-6">
              <div className="flex justify-between font-mono text-sm mb-2">
                <span>SLOTS CLAIMED</span>
                <span className="text-gold">{SLOTS_CLAIMED} / {SLOTS_TOTAL}</span>
              </div>
              <div className="h-2 bg-secondary border border-border overflow-hidden">
                <div className="h-full bg-gold" style={{ width: `${pct}%` }} />
              </div>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-background border-2 border-border focus:border-gold outline-none pl-11 pr-4 py-4 font-mono text-sm transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="font-display text-xl bg-gold text-primary-foreground px-8 py-4 hover:bg-[hsl(var(--gold-glow))] transition-colors inline-flex items-center justify-center gap-2"
                >
                  CLAIM SLOT <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="border-2 border-gold bg-gold/10 p-6 flex items-start gap-4 animate-fade-up">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-2xl text-gold mb-1">YOU'RE IN.</p>
                  <p className="text-sm text-muted-foreground">
                    Check your inbox for the deposit link within 24h. Welcome to the safari.
                  </p>
                </div>
              </div>
            )}

            <p className="font-mono text-xs text-muted-foreground mt-4">
              * No spam. No resale. Just the drop.
            </p>
          </div>

          <div className="relative">
            <img
              src={yarnImg}
              alt="Gold yarn skeins and crochet hook on dark concrete"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full h-auto border-2 border-gold/30"
            />
            <div className="absolute -top-4 -right-4 bg-background border-2 border-gold text-gold px-4 py-2 font-display text-2xl rotate-3">
              KSh 1,500
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28">
        <div className="container">
          <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">// 03 — How it goes</p>
          <h2 className="font-display text-5xl md:text-7xl mb-12">THE PROCESS.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { n: "01", t: "RESERVE", d: "Drop your email, pay KSh 1,500. Slot held." },
              { n: "02", t: "WATCH IT MADE", d: "Follow the build on IG. Yarn buys, late nights, the whole thing." },
              { n: "03", t: "RECEIVE", d: "Pay the balance when yours is done. Ships from Nairobi." },
            ].map((s) => (
              <div key={s.n} className="bg-background p-8 hover:bg-card transition-colors group">
                <div className="font-display text-7xl text-gold mb-4 group-hover:translate-x-2 transition-transform">{s.n}</div>
                <h3 className="font-display text-3xl mb-2">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-display text-3xl tracking-wider mb-1">
              SAVANNAH<span className="text-gold">/</span>SAFARI
            </p>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              Made in Nairobi · Roam Free · {new Date().getFullYear()}
            </p>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-border hover:border-gold hover:text-gold px-5 py-3 font-mono text-sm uppercase tracking-widest transition-colors"
          >
            <Instagram className="w-4 h-4" /> Follow the build
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Index;
