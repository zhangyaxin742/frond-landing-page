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
import trlMarkerIcon from './assets/vector-403.svg'

const marqueePrimary = [
  'USPTO Y02 PATENTS',
  'SBIR/STTR AWARDS',
  '1,700+ ARPA-E PROJECTS',
  '$13.5B+ CAPITAL GAP',
  '850 ACTIVE INVESTORS',
  '24/7 FOAK CLIMATE TECH MONITORING',
  '166 BREAKOUT COMPANIES',
]

const marqueeSecondary = ['40,000+ PATENTS INDEXED', 'SBIR/STTR AWARDS API', 'DOE LOAN PROGRAMS']

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
    progress: 0.25,
  },
  {
    number: '02',
    title: 'Resolve',
    copy: 'NLP links the same technology across disparate sources, connecting patent filings, grant awards, and lab partnerships into a single verified profile.',
    progress: 0.5,
  },
  {
    number: '03',
    title: 'Score',
    copy: "Each technology is assigned a TRL score and commercialization signal. You see the deal's technical maturity before anyone else has begun to model it.",
    progress: 0.73,
  },
  {
    number: '04',
    title: 'Match',
    copy: 'AI matches your portfolio gaps to the technologies most likely to fill them — proprietary sourcing, not recycled conference deal flow.',
    progress: 1,
    active: true,
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
            style={{
              background:
                'radial-gradient(120.85% 178.96% at 50% 0%, rgba(60, 185, 124, 0.15) 24.038%, rgba(30, 93, 62, 0.325) 44.952%, rgba(15, 46, 31, 0.4125) 55.409%, rgba(8, 23, 16, 0.45625) 60.637%, rgba(0, 0, 0, 0.5) 65.866%)',
            }}
          />
          <div className="headline-517 relative">
            <div className="div-relative-518">
              <div className="node-519">
                <p className="text-520">
                  <span className="text-white">The intelligence layer</span>
                  <br />
                  <span className="text-white">between </span>
                  <span className="text-rgb-61-184-124 italic">breakthrough science</span>
                  <br />
                  <span className="text-white">and the capital it deserves.</span>
                </p>
              </div>
              <div className="node-521">
                <p className="text-522">
                  <span className="text-rgb-148-163-184">
                    Frond monitors ARPA-E grants, SBIR awards, and 1,400+ other federal databases so you — and only you — invest first.
                  </span>
                </p>
              </div>
              <div className="div-flex-523">
                <button
                  className="variant-1-hover-false"
                  style={{ backgroundColor: 'rgba(60, 185, 124, 1)', height: '48px', minWidth: '200px', padding: '11.5px 32px 12.5px', borderRadius: '4px', width: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexDirection: 'row', flexShrink: 0 }}
                >
                  <span className="syne-bold text-rgb-15-22-18">Access the database →</span>
                </button>
                <button
                  className="variant-1-hover-false"
                  style={{ border: '1px solid rgba(255, 255, 255, 1)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', height: '48px', width: '214px', padding: '11px 25px', borderRadius: '2px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexDirection: 'row', flexShrink: 0 }}
                >
                  <img src={playIcon} className="vector-529 flex-shrink-0" style={{ width: '24px', height: '28px' }} alt="" aria-hidden="true" />
                  <span className="text-530" style={{ whiteSpace: 'nowrap' }}>See how it works</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden border-y"
          style={{ backgroundColor: 'rgba(15, 22, 18, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
        >
          <div className="relative py-[17px]">
            <div className="flex animate-marquee items-center gap-12 whitespace-nowrap px-6">
              {[...marqueePrimary, ...marqueeSecondary].map((item, index) => (
                <div key={`${item}-${index}`} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                  <span className="font-mono text-[14px] uppercase leading-5 text-slate-500 tracking-normal">{item}</span>
                </div>
              ))}
            </div>
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

            <div className="mt-14 rounded-[12px] border border-[#1f3a2f] bg-transparent px-6 py-8 text-left">
              <div className="relative mx-auto h-[300px] w-full max-w-[1280px]">
                <div className="absolute left-1/2 top-[110px] -translate-x-1/2 -translate-y-1/2 font-mono text-[12px] font-medium uppercase tracking-[0.6px] text-amber-signal">
                  Valley of death
                </div>
                <div className="absolute left-[13.59%] top-[84px] flex flex-col items-center">
                  <div className="h-[26px] rounded-[4px] border border-[rgba(61,184,124,0.3)] bg-[#0c2218] px-[13px] py-[5px] text-[12px] font-mono leading-[16px] text-spring-green">
                    Lab Scale
                  </div>
                  <div className="h-[29px] w-px bg-[rgba(61,184,124,0.3)]" />
                </div>
                <div className="absolute left-[60.31%] top-[72px] flex flex-col items-center">
                  <div className="flex h-[26px] items-center gap-2 rounded-[4px] border border-amber-signal bg-[#2a2412] px-[13px] py-[5px] text-[12px] font-mono leading-[16px] text-amber-signal shadow-[0px_0px_15px_rgba(200,168,75,0.3)]">
                    <img src={trlMarkerIcon} alt="" aria-hidden="true" className="h-[16px] w-[14px]" />
                    Fervo Energy (Pilot)
                  </div>
                  <div className="h-[41px] w-px bg-amber-signal" />
                </div>
                <div className="absolute left-[80.94%] top-[57px] flex flex-col items-center">
                  <div className="h-[26px] rounded-[4px] border border-[#475569] bg-[#1e293b] px-[13px] py-[5px] text-[12px] font-mono leading-[16px] text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]">
                    Climeworks Mammoth
                  </div>
                  <div className="h-[56px] w-px bg-[#475569]" />
                </div>
                <div className="absolute left-0 right-0 top-[123px] flex items-center justify-between px-2 font-mono text-[12px] uppercase tracking-[0.6px]">
                  <span className="text-spring-green">Early Research</span>
                  <span className="text-white">Commercial Scale</span>
                </div>
                <div className="absolute left-0 top-[139px] w-full overflow-x-auto pb-4">
                  <div className="grid min-w-[1000px] grid-cols-9 gap-0">
                    <div
                      className="relative flex h-[143px] flex-col justify-between rounded-[2px] border px-[16px] py-[16px]"
                      style={{ backgroundColor: 'rgba(61,184,124,0.15)', borderColor: 'rgba(4,120,87,0.1)' }}
                    >
                      <span className="text-[12px] font-mono uppercase tracking-[0.6px] text-spring-green">TRL 1</span>
                      <span className="font-serif text-[18px] font-bold leading-[22.5px] text-white">
                        Basic
                        <br />
                        Principles
                      </span>
                      <span className="font-display text-[12px] font-semibold leading-[16px] text-slate-400">
                        Scientific
                        <br />
                        research begins
                      </span>
                    </div>
                    <div
                      className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[17px]"
                      style={{ backgroundColor: 'rgba(61,184,124,0.15)', borderColor: 'rgba(4,120,87,0.1)' }}
                    >
                      <span className="text-[12px] font-mono uppercase tracking-[0.6px] text-spring-green">TRL 2</span>
                      <span className="font-serif text-[18px] font-bold leading-[22.5px] text-white">Concept</span>
                      <span className="font-display text-[12px] font-semibold leading-[16px] text-slate-400">
                        Technology
                        <br />
                        concept
                        <br />
                        formulation
                      </span>
                    </div>
                    <div
                      className="relative flex h-[143px] flex-col justify-between rounded-[2px] border px-[16px] py-[16px]"
                      style={{ backgroundColor: 'rgba(61,184,124,0.15)', borderColor: 'rgba(4,120,87,0.1)' }}
                    >
                      <span className="text-[12px] font-mono uppercase tracking-[0.6px] text-spring-green">TRL 3</span>
                      <span className="font-serif text-[18px] font-bold leading-[22.5px] text-white">
                        Proof of
                        <br />
                        Concept
                      </span>
                      <span className="font-display text-[12px] font-semibold leading-[16px] text-slate-400">
                        Experimental
                        <br />
                        proof
                      </span>
                    </div>
                    <div
                      className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[17px]"
                      style={{
                        backgroundColor: 'rgba(200,168,75,0.25)',
                        borderColor: 'rgba(200,168,75,0.3)',
                        boxShadow: '0px 0px 20px -5px rgba(200,168,75,0.2)',
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] font-mono uppercase tracking-[0.6px] text-amber-signal">TRL 4</span>
                        <img src={trlMarkerIcon} alt="" aria-hidden="true" className="h-[16px] w-[14px]" />
                      </div>
                      <span className="font-serif text-[18px] font-bold leading-[22.5px] text-white">Validation</span>
                      <span className="font-display text-[12px] font-semibold leading-[16px] text-slate-400">Lab validation</span>
                      <span className="absolute bottom-0 left-0 h-[4px] w-full bg-amber-signal" />
                    </div>
                    <div
                      className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[17px]"
                      style={{
                        backgroundColor: 'rgba(200,168,75,0.25)',
                        borderColor: 'rgba(200,168,75,0.3)',
                        boxShadow: '0px 0px 20px -5px rgba(200,168,75,0.2)',
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] font-mono uppercase tracking-[0.6px] text-amber-signal">TRL 5</span>
                        <img src={trlMarkerIcon} alt="" aria-hidden="true" className="h-[16px] w-[14px]" />
                      </div>
                      <span className="font-serif text-[18px] font-bold leading-[22.5px] text-white">Validation</span>
                      <span className="font-display text-[12px] font-semibold leading-[16px] text-slate-400">
                        Relevant
                        <br />
                        environment
                      </span>
                      <span className="absolute bottom-0 left-0 h-[4px] w-full bg-amber-signal" />
                    </div>
                    <div
                      className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[17px]"
                      style={{
                        backgroundColor: 'rgba(200,168,75,0.25)',
                        borderColor: 'rgba(200,168,75,0.3)',
                        boxShadow: '0px 0px 20px -5px rgba(200,168,75,0.2)',
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] font-mono uppercase tracking-[0.6px] text-amber-signal">TRL 6</span>
                        <img src={trlMarkerIcon} alt="" aria-hidden="true" className="h-[16px] w-[14px]" />
                      </div>
                      <span className="font-serif text-[18px] font-bold leading-[22.5px] text-white">Demonstration</span>
                      <span className="font-display text-[12px] font-semibold leading-[16px] text-slate-400">Prototype demo</span>
                      <span className="absolute bottom-0 left-0 h-[4px] w-full bg-amber-signal" />
                    </div>
                    <div
                      className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[17px]"
                      style={{
                        backgroundColor: 'rgba(200,168,75,0.25)',
                        borderColor: 'rgba(200,168,75,0.3)',
                        boxShadow: '0px 0px 20px -5px rgba(200,168,75,0.2)',
                      }}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-[12px] font-mono uppercase tracking-[0.6px] text-amber-signal">TRL 7</span>
                        <img src={trlMarkerIcon} alt="" aria-hidden="true" className="h-[16px] w-[14px]" />
                      </div>
                      <span className="font-serif text-[18px] font-bold leading-[22.5px] text-white">Demonstration</span>
                      <span className="font-display text-[12px] font-semibold leading-[16px] text-slate-400">System prototype</span>
                      <span className="absolute bottom-0 left-0 h-[4px] w-full bg-amber-signal" />
                    </div>
                    <div
                      className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[17px]"
                      style={{ backgroundColor: 'rgba(100,116,139,0.2)', borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <span className="text-[12px] font-mono uppercase tracking-[0.6px] text-slate-400">TRL 8</span>
                      <span className="font-serif text-[18px] font-bold leading-[22.5px] text-white">Qualified</span>
                      <span className="font-display text-[12px] font-semibold leading-[16px] text-slate-400">System complete</span>
                    </div>
                    <div
                      className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[17px]"
                      style={{ backgroundColor: 'rgba(100,116,139,0.2)', borderColor: 'rgba(255,255,255,0.1)' }}
                    >
                      <span className="text-[12px] font-mono uppercase tracking-[0.6px] text-slate-400">TRL 9</span>
                      <span className="font-serif text-[18px] font-bold leading-[22.5px] text-white">Proven</span>
                      <span className="font-display text-[12px] font-semibold leading-[16px] text-slate-400">
                        Actual system
                        <br />
                        proven
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-24" id="methodology">
          <div className="mx-auto grid max-w-[1400px] gap-[96px] px-6 lg:grid-cols-[1.05fr_1fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[1.2px] text-spring-green">
                <span className="h-px w-8 bg-spring-green" />
                The Missing Middle
              </div>
              <h2 className="font-serif text-[52px] leading-[57.2px] text-white">
                51% of climate VCs say FOAK is the hardest stage to finance.
              </h2>
              <p className="font-serif text-[56px] leading-[57.2px] text-spring-green">
                They’re still finding deals on LinkedIn spreadsheets.
              </p>
              <p className="max-w-[578px] text-[18px] leading-[24px] text-white">
                The next decade of clean energy infrastructure is already in a government database somewhere, filed and forgotten. Frond surfaces it — before it shows up in anyone else’s deal flow.
              </p>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-stretch">
              <div className="flex h-full flex-1 flex-col rounded-[2px] border border-white/30 bg-[rgba(61,184,124,0.25)] p-[33px]">
                <p className="font-mono text-[12px] uppercase tracking-[1.2px] text-spring-green">Capital Gap</p>
                <p className="mt-4 font-serif text-[72px] font-light leading-[60px] text-white">$200B</p>
                <p className="mt-4 text-[16px] leading-[24px] text-[#9db9b9]">
                  Estimated annual funding shortfall for FOAK climate projects by 2030. (IEA)
                </p>
              </div>
              <div className="flex flex-1 flex-col gap-6">
                <div className="rounded-[2px] border border-white/30 bg-[rgba(236,253,245,0.15)] p-[25px]">
                  <p className="font-mono text-[12px] uppercase tracking-[1.2px] text-spring-green">Funding Rate</p>
                  <p className="mt-3 font-serif text-[48px] leading-[56px] text-white">&lt;3%</p>
                  <p className="mt-3 text-[16px] leading-[20px] text-slate-400">
                    Of viable hard-tech climate startups successfully raise Series B.
                  </p>
                </div>
                <div className="rounded-[2px] border border-white/30 bg-[rgba(236,253,245,0.15)] p-[25px]">
                  <p className="font-mono text-[12px] uppercase tracking-[1.2px] text-spring-green">Market Opportunity</p>
                  <p className="mt-3 font-serif text-[48px] leading-[56px] text-white">$1.5T</p>
                  <p className="mt-3 text-[16px] leading-[20px] text-slate-400">
                    Projected market cap for new climate industrials by 2040.
                  </p>
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

        <section className="border-t border-white/5 bg-[#060a08] pb-[80px] pt-[81px]">
          <div className="mx-auto max-w-[1280px] px-6 text-center">
            <h2 className="font-serif text-[60px] leading-[40px] text-white">
              Your sourcing logic. <span className="font-serif italic text-spring-green">Automatically.</span>
            </h2>
            <p className="mt-4 text-[18px] leading-[16px] text-[#cbd5e1]">
              Frond parses thousands of technical documents against your specific investment thesis, alerting you only when the science matches your strategy.
            </p>
            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pipelineSteps.map((step) => (
                <div
                  key={step.title}
                  className={`flex min-h-[255px] flex-col rounded-[2px] border p-[25px] text-left shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${
                    step.active
                      ? 'border-[rgba(61,184,124,0.4)] bg-[rgba(61,184,124,0.2)]'
                      : 'border-[rgba(61,184,124,0.1)] bg-[#0f1612]'
                  }`}
                >
                  <div className="flex-1">
                    <p
                      className={`font-mono text-[24px] uppercase leading-[16px] tracking-[1.2px] ${
                        step.active ? 'text-[rgba(61,184,124,0.9)]' : 'text-slate-400'
                      }`}
                    >
                      {step.number}
                    </p>
                    <h3 className="mt-3 font-display text-[24px] font-semibold leading-[28px] text-white">{step.title}</h3>
                    <p className={`mt-3 text-[14px] leading-[20px] ${step.active ? 'text-[#cbd5e1]' : 'text-slate-400'}`}>
                      {step.copy}
                    </p>
                  </div>
                  <div
                    className={`mt-4 h-[4px] w-full rounded-full ${
                      step.active ? 'bg-[#1f6152]' : 'bg-[#f1f5f9]'
                    }`}
                  >
                    <div
                      className={`h-full rounded-full ${step.active ? 'bg-spring-green' : 'bg-[rgba(61,184,124,0.8)]'}`}
                      style={{ width: `${Math.round(step.progress * 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-[120px]" id="pricing">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #060a08 0%, #0c2218 100%)' }} />
          <div className="relative mx-auto max-w-[1280px] px-6 text-center">
            <h2 className="font-serif text-[42px] leading-[40px] text-white">Access the Terminal</h2>
            <p className="mt-4 text-[15px] leading-[24px] text-[#94a3b8]">
              Start with intelligence. Scale to enterprise-grade diligence.
            </p>
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative flex h-full flex-col rounded-[8px] border px-[33px] py-[32px] text-left ${
                    tier.highlight
                      ? 'border-[rgba(61,184,124,0.4)] bg-[#142921] shadow-[0px_0px_20px_rgba(61,184,124,0.25)]'
                      : 'border-white/5 bg-[#0c2218]'
                  }`}
                >
                  {tier.highlight && (
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-spring-green px-5 py-1 text-[12px] font-bold uppercase tracking-[0.6px] text-[#060a08]">
                      Most Popular
                    </span>
                  )}
                  <div>
                    <h3 className="font-display text-[20px] font-bold text-white">{tier.name}</h3>
                    <p className="mt-4 text-[13px] leading-[20px] text-[#94a3b8]">{tier.blurb}</p>
                    <div className="mt-5 flex items-baseline gap-3">
                      <span className="font-mono text-[32px] leading-[36px] text-white">{tier.price}</span>
                      <span className="text-[13px] text-[#64748b]">{tier.suffix}</span>
                    </div>
                  </div>
                  <ul className="mt-8 space-y-4 text-[14px] text-[#cbd5e1]">
                    {tier.features.map((feature) => (
                      <li key={feature.label} className="flex items-center gap-3">
                        <img src={feature.icon} alt="" aria-hidden="true" className="h-4 w-4" />
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <button
                      className={`mt-8 w-full rounded-[6px] px-5 py-[13px] text-[15px] font-semibold ${
                        tier.highlight
                          ? 'bg-spring-green text-[#060a08]'
                          : 'border border-white/20 text-white'
                      }`}
                    >
                      {tier.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#091410] px-6 py-16">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, #0c2218 70%)' }}
          />
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(61,184,124,0) 0%, rgba(61,184,124,0.3) 50%, rgba(61,184,124,0) 100%)',
            }}
          />
          <div className="relative mx-auto flex max-w-[768px] flex-col items-center gap-12 text-center">
            <h2 className="font-serif text-[60px] leading-[60px] text-white">
              Join 850+ investors already moving
              <br />
              capital through the Valley of Death.
            </h2>
            <form className="flex w-full flex-col gap-4 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <input
                className="flex-1 rounded-[4px] border border-[#2a4d40] bg-[#0c2218] px-4 py-[14px] font-mono text-[14px] text-white placeholder-[#6b7280]"
                placeholder="findfoak@gmail.com"
              />
              <button className="rounded-[4px] border border-[rgba(61,184,124,0.1)] bg-[#1f3a2f] px-8 py-[14px] font-display text-[14px] font-medium text-spring-green">
                Request Access
              </button>
            </form>
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
