import logoMark from './assets/vector-580.svg'
import playIcon from './assets/vector-529.svg'
import linkedInIcon from './assets/vector-20.svg'
import xIcon from './assets/vector-17.svg'
import scoutCheck1 from './assets/vector-109.svg'
import scoutCheck2 from './assets/vector-114.svg'
import scoutCheck3 from './assets/vector-119.svg'
import analystCheck1 from './assets/vector-177.svg'
import analystCheck2 from './assets/vector-183.svg'
import analystCheck3 from './assets/vector-189.svg'
import analystCheck4 from './assets/vector-195.svg'
import enterpriseCheck1 from './assets/vector-141.svg'
import enterpriseCheck2 from './assets/vector-146.svg'
import enterpriseCheck3 from './assets/vector-151.svg'
import enterpriseCheck4 from './assets/vector-156.svg'
import matchIconPrimary from './assets/vector-293.svg'
import matchIconSecondary from './assets/vector-346.svg'

const marqueePrimary = [
  'USPTO Y02 PATENTS',
  'SBIR/STTR AWARDS',
  '1,700+ ARPA-E PROJECTS',
  '$13.5B+ CAPITAL GAP',
  '850 ACTIVE INVESTORS',
  '24/7 FOAK CLIMATE TECH MONITORING',
  '166 BREAKOUT COMPANIES',
]

const marqueeSecondary = [
  'USPTO Y02 PATENTS',
  'SBIR/STTR AWARDS',
  '1,700+ ARPA-E PROJECTS',
  '$13.5B+ CAPITAL GAP',
  '850 ACTIVE INVESTORS',
  '24/7 FOAK CLIMATE TECH MONITORING',
  '166 BREAKOUT COMPANIES',
]

const feedCards = [
  {
    tag: 'SBIR Phase II → III Signal',
    status: '● New',
    title: 'Advanced Solid-State Electrolyte for Long-Duration Grid Storage',
    meta: 'Pacific Northwest National Laboratory · PI: Dr. Sarah Chen',
    tags: ['TRL 5', '$1.8M', 'LDES'],
    matches: '3 Investor Matches',
    matchIcon: matchIconPrimary,
    accent: 'bg-cyan-signal',
  },
  {
    tag: 'ARPA-E Award · Open 2024',
    status: 'Awarded',
    title: 'Supercritical CO₂ Heat Exchange for Enhanced Geothermal Systems',
    meta: 'Sandia National Laboratories · Award #DE-AR0001842',
    tags: ['TRL 4', '$3.2M', 'EGS'],
    matches: '2 Investor Matches',
    matchIcon: matchIconPrimary,
    accent: 'bg-spring-green',
  },
  {
    tag: 'USPTO Y02 Patent',
    status: 'Published',
    title: 'Electrolyzer Membrane Architecture for Alkaline Water Electrolysis',
    meta: 'MIT Energy Initiative spin-out · Patent #US2024/0187392',
    tags: ['TRL 6', 'Green H₂'],
    matches: '5 Investor Matches',
    matchIcon: matchIconSecondary,
    accent: 'bg-amber-signal',
  },
  {
    tag: 'Semantic Scholar',
    status: 'High Influence',
    title: 'Novel Sorbent Material for Point-Source CO₂ Capture',
    meta: 'Carnegie Mellon · Prof. James Park et al.',
    tags: ['TRL 3', 'Carbon Capture', 'Pre-company'],
    matches: '1 Investor Match',
    matchIcon: matchIconSecondary,
    accent: 'bg-spring-green',
  },
]

const pipelineSteps = [
  {
    number: '01',
    title: 'Ingest',
    copy: 'Frond pulls from SBIR, ARPA-E, USPTO Y02 patents, NSF grants, and DOE lab databases daily. No manual curation, no human latency.',
  },
  {
    number: '02',
    title: 'Resolve',
    copy: 'NLP links the same technology across disparate sources, connecting patent filings, grant awards, and lab partnerships into a single verified profile.',
  },
  {
    number: '03',
    title: 'Score',
    copy: "Each technology is assigned a TRL score and commercialization signal. You see the deal's technical maturity before anyone else has begun to model it.",
  },
  {
    number: '04',
    title: 'Match',
    copy: 'AI matches your portfolio gaps to the technologies most likely to fill them — proprietary sourcing, not recycled conference deal flow.',
  },
]

const pricingTiers = [
  {
    name: 'Scout',
    blurb: 'For angels & researchers tracking early signals. Essential monitoring for independent researchers.',
    price: '$0',
    suffix: '/ month',
    features: [
      { label: 'Access to TRL 8-9 Signals', icon: scoutCheck1 },
      { label: 'Weekly Digest', icon: scoutCheck2 },
      { label: 'Basic Search', icon: scoutCheck3 },
    ],
    cta: 'Start Free',
  },
  {
    name: 'Analyst',
    blurb: 'For VC associates needing deep diligence data. Full matching capabilities for VC associates.',
    price: '$299',
    suffix: '/ month',
    features: [
      { label: 'All TRL 1-9 Signals', icon: analystCheck1 },
      { label: '5 Custom Thesis Matches', icon: analystCheck2 },
      { label: 'AI Diligence Reports', icon: analystCheck3 },
      { label: 'Export to CSV', icon: analystCheck4 },
    ],
    cta: 'Get Analyst Access',
    highlight: true,
  },
  {
    name: 'Enterprise',
    blurb: 'For funds & banks deploying >$50M annually. API access and custom integration for firms.',
    price: 'Custom',
    suffix: '',
    features: [
      { label: 'Full API Access', icon: enterpriseCheck1 },
      { label: 'Unlimited AI Thesis Matching', icon: enterpriseCheck2 },
      { label: 'Custom Data Sources', icon: enterpriseCheck3 },
      { label: 'Dedicated Success Manager', icon: enterpriseCheck4 },
    ],
    cta: 'Talk to Us',
  },
]

const footerColumns = {
  Platform: ['Technologies', 'Matching Engine', 'API Docs', 'Pricing'],
  Company: ['About', 'Methodology', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security'],
}

const LogoMark = ({ className = '' }: { className?: string }) => (
  <img className={className} src={logoMark} alt="Frond logo" />
)

export default function App() {
  return (
    <div className="min-h-screen bg-racing-green text-narvik">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[rgba(15,22,18,0.6)] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <LogoMark className="h-6 w-6" />
            <span className="font-display text-lg font-bold tracking-[-0.5px] text-white">Frond</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
            <a href="#methodology" className="transition hover:text-white">Methodology</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#" className="transition hover:text-white">Login</a>
            <button className="rounded-[4px] bg-spring-green px-5 py-2 font-display text-sm font-bold text-racing-green">
              Access the database →
            </button>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <section className="hero-section-515 relative overflow-hidden bg-racing-green">
          <div
            className="node-516 pointer-events-none absolute inset-0"
            style={{ background: 'radial-gradient(164.64% 62.94% at 50% 0%, rgba(60, 185, 124, 0.15) 24.04%, rgba(0, 0, 0, 0.50) 65.87%)' }}
          />
          <div className="headline-517 relative mx-auto max-w-[1024px] px-6 text-center">
            <div className="div-relative-518">
              <div className="node-519">
                <h1
                  className="font-serif italic font-light text-white"
                  style={{ fontSize: 'clamp(48px, 8vw, 120px)', lineHeight: '0.8', letterSpacing: '-2.4px' }}
                >
                  <span className="text-white">The intelligence layer{'\n'}between </span>
                  <span style={{ color: 'rgba(61, 184, 124, 0.9)' }}>breakthrough science{'\n'}</span>
                  <span className="text-white">and the capital it deserves.</span>
                </h1>
              </div>
              <div className="node-521">
                <p
                  className="mx-auto mt-10 max-w-[748px] text-center font-sans"
                  style={{ color: '#94A3B8', fontSize: '24px', fontWeight: 400, lineHeight: '1', letterSpacing: '-0.576px' }}
                >
                  Frond monitors ARPA-E grants, SBIR awards, and 1,400+ other federal databases so you — and only you — invest first.
                </p>
              </div>
              <div className="div-flex-523 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  className="font-display font-bold text-racing-green"
                  style={{ height: '48px', minWidth: '200px', padding: '11.5px 32px 12.5px', borderRadius: '4px', background: '#3CB97C', fontSize: '16px', lineHeight: '24px', letterSpacing: '0.4px' }}
                >
                  Access the database →
                </button>
                <button
                  className="flex items-center gap-2 font-display font-medium text-white"
                  style={{ width: '214px', height: '48px', padding: '10px 24px', borderRadius: '2px', border: '1px solid #FFF', boxShadow: '0 4px 4px 0 rgba(0,0,0,0.25)', fontSize: '16px', lineHeight: '24px' }}
                >
                  <img src={playIcon} alt="" aria-hidden="true" className="h-5 w-5" />
                  See how it works
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-slate-700/50 bg-racing-green py-4">
          <div className="flex animate-marquee items-center gap-12 whitespace-nowrap px-6 text-xs font-mono uppercase tracking-[1.4px] text-slate-500">
            {[...marqueePrimary, ...marqueeSecondary].map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                {item}
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-racing-green to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-racing-green to-transparent" />
        </section>

        <section className="border-b border-spring-green/20 bg-[#060a08] py-24">
          <div className="mx-auto max-w-[1280px] px-6 text-center">
            <h2 className="flex flex-wrap items-center justify-center gap-2 font-serif text-3xl italic text-slate-200 md:text-5xl">
              <span>“Do not even</span>
              <span className="underline">dare</span>
              <span>to call it</span>
              <span className="font-display not-italic text-spring-green">‘FOAK’</span>
              <span>when talking to project finance.”</span>
            </h2>
            <p className="mt-6 font-mono text-xs uppercase tracking-[1.4px] text-spring-green/80">
              Industry Advisor · Quoted in CTVC 2025
            </p>
            <p className="mx-auto mt-4 max-w-[672px] text-sm text-slate-200">
              35% of emissions reductions needed by 2050 must come from technologies not yet commercially available. The window lies in the TRL (Technology Readiness Level) 6–8 range, and stagnates with zero infrastructure -- until now.
            </p>

            <div className="mt-14 rounded-[12px] border border-spring-green/20 bg-[#0c2218] px-8 py-10 text-left">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[1.2px] text-slate-400">
                <span className="text-spring-green">Early research</span>
                <span className="text-amber-signal">Valley of death</span>
                <span className="text-white">Commercialization</span>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-[#1f3a2f]">
                <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-spring-green via-amber-signal to-slate-500" />
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-[6px] border border-spring-green/30 bg-[#0f1f18] px-4 py-3 text-xs font-mono uppercase tracking-[1px] text-spring-green">
                  Lab Scale
                </div>
                <div className="rounded-[6px] border border-amber-signal/60 bg-[#2a2412] px-4 py-3 text-xs font-mono uppercase tracking-[1px] text-amber-signal shadow-[0_0_15px_rgba(200,168,75,0.3)]">
                  Fervo Energy (Pilot)
                </div>
                <div className="rounded-[6px] border border-slate-600 bg-[#111827] px-4 py-3 text-xs font-mono uppercase tracking-[1px] text-white">
                  Climeworks Mammoth
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-24" id="methodology">
          <div className="mx-auto grid max-w-[1400px] gap-16 px-6 lg:grid-cols-[1.05fr_1fr]">
            <div className="space-y-8">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[1.2px] text-spring-green">
                <span className="h-px w-8 bg-spring-green" />
                The Missing Middle
              </div>
              <h2 className="font-serif text-4xl text-white md:text-5xl">
                51% of climate VCs say FOAK is the hardest stage to finance.
              </h2>
              <p className="font-serif text-4xl text-spring-green md:text-5xl">
                They’re still finding deals on LinkedIn spreadsheets.
              </p>
              <p className="max-w-xl text-lg text-slate-200">
                The next decade of clean energy infrastructure is already in a government database somewhere, filed and forgotten. Frond surfaces it — before it shows up in anyone else’s deal flow.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[6px] border border-white/30 bg-spring-green/25 p-8">
                <p className="font-mono text-xs uppercase tracking-[1.2px] text-spring-green">Capital Gap</p>
                <p className="mt-4 font-serif text-5xl text-white">$200B</p>
                <p className="mt-4 text-sm text-[#9db9b9]">Estimated annual funding shortfall for FOAK climate projects by 2030. (IEA)</p>
              </div>
              <div className="space-y-6">
                <div className="rounded-[6px] border border-white/30 bg-white/10 p-6">
                  <p className="font-mono text-xs uppercase tracking-[1.2px] text-spring-green">Funding Rate</p>
                  <p className="mt-3 font-serif text-4xl text-white">&lt;3%</p>
                  <p className="mt-3 text-sm text-slate-300">Of viable hard-tech climate startups successfully raise Series B.</p>
                </div>
                <div className="rounded-[6px] border border-white/30 bg-white/10 p-6">
                  <p className="font-mono text-xs uppercase tracking-[1.2px] text-spring-green">Market Opportunity</p>
                  <p className="mt-3 font-serif text-4xl text-white">$1.5T</p>
                  <p className="mt-3 text-sm text-slate-300">Projected market cap for new climate industrials by 2040.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-deep-forest py-24">
          <div className="mx-auto max-w-[1280px] px-6">
            <div className="flex flex-wrap items-center gap-3 border-b border-spring-green/40 pb-6">
              <h3 className="font-mono text-xl uppercase tracking-[1.4px] text-spring-green-60">Live sourcing feed</h3>
              <span className="h-4 w-4 rounded-full bg-spring-green" />
              <span className="ml-auto font-mono text-sm uppercase tracking-[0.8px] text-spring-green-60">3 new in the last hour</span>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {feedCards.map((card) => (
                <div key={card.title} className="relative rounded-[8px] border border-pine-700 bg-[#0c2218] p-6">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[1px] text-spring-green-60">
                    <span>{card.tag}</span>
                    <span className="text-spring-green">{card.status}</span>
                  </div>
                  <h4 className="mt-4 font-serif text-lg text-white">{card.title}</h4>
                  <p className="mt-2 text-sm text-spring-green-60">{card.meta}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span key={tag} className="rounded-[4px] bg-gable-green px-2 py-1 text-[10px] font-mono uppercase tracking-[0.25px] text-ice-cold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 border-t border-gable-green pt-3 text-[10px] font-mono uppercase tracking-[0.25px] text-cyan-signal">
                    <img src={card.matchIcon} alt="" aria-hidden="true" className="h-3 w-3" />
                    {card.matches}
                  </div>
                  <span className={`absolute left-0 top-0 h-full w-[2px] ${card.accent}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-racing-green py-24">
          <div className="mx-auto max-w-[1232px] px-6 text-center">
            <h2 className="font-serif text-4xl text-white md:text-5xl">Your sourcing logic. Automatically.</h2>
            <p className="mt-4 text-sm text-slate-300">
              Frond parses thousands of technical documents against your specific investment thesis, alerting you only when the science matches your strategy.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pipelineSteps.map((step) => (
                <div key={step.title} className="rounded-[4px] border border-spring-green/30 bg-spring-green/20 p-6 text-left shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
                  <p className="font-mono text-xs uppercase tracking-[1.2px] text-spring-green">{step.number}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{step.copy}</p>
                  <div className="mt-6 h-1 w-full rounded-full bg-slate-200">
                    <div className="h-full w-2/3 rounded-full bg-spring-green/80" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-racing-green py-24" id="pricing">
          <div className="mx-auto max-w-[1280px] px-6 text-center">
            <h2 className="font-serif text-4xl text-white">Access the Terminal</h2>
            <p className="mt-4 text-sm text-slate-400">Start with intelligence. Scale to enterprise-grade diligence.</p>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-[10px] border p-8 text-left ${
                    tier.highlight
                      ? 'border-spring-green bg-[#0c2218] shadow-[0_0_35px_rgba(61,184,124,0.35)]'
                      : 'border-spring-green/20 bg-[#0f1612]'
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-spring-green px-4 py-1 text-xs font-bold text-racing-green">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold text-white">{tier.name}</h3>
                  <p className="mt-4 text-sm text-slate-400">{tier.blurb}</p>
                  <div className="mt-5 text-3xl font-semibold text-white">
                    {tier.price}{' '}
                    <span className="text-sm font-normal text-slate-400">{tier.suffix}</span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-200">
                    {tier.features.map((feature) => (
                      <li key={feature.label} className="flex items-center gap-3">
                        <img src={feature.icon} alt="" aria-hidden="true" className="h-3 w-3" />
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-8 w-full rounded-[6px] px-5 py-3 text-sm font-semibold ${
                      tier.highlight
                        ? 'bg-spring-green text-racing-green'
                        : 'border border-spring-green/40 text-spring-green'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-racing-green py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(61,184,124,0.35),rgba(15,22,18,0))]" />
          <div className="relative mx-auto max-w-[768px] px-6 text-center">
            <h2 className="font-serif text-3xl text-white md:text-4xl">
              Join 850+ investors already moving capital through the Valley of Death.
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <input
                className="flex-1 rounded-[6px] border border-slate-700 bg-[#0c2218] px-4 py-3 text-sm text-slate-200"
                placeholder="findfoak@gmail.com"
              />
              <button className="rounded-[6px] bg-spring-green px-6 py-3 text-sm font-semibold text-racing-green">
                Join Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-spring-green/20 bg-[#060a08] py-16">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <LogoMark className="h-6 w-6" />
                <span className="font-display text-lg font-bold text-white">Frond</span>
              </div>
              <p className="text-sm text-slate-500">Intelligent sourcing for First-of-a-Kind (FOAK) climate tech.</p>
              <div className="flex gap-4 text-slate-400">
                <img src={linkedInIcon} alt="LinkedIn" className="h-4 w-4" />
                <img src={xIcon} alt="X" className="h-4 w-4" />
              </div>
            </div>
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title} className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.6px] text-slate-400">{title}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-spring-green/20 pt-8 text-xs text-slate-500">
            <span>© 2026 Frond Inc. All rights reserved.</span>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
