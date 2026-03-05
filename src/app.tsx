import { useEffect } from 'react'

import logoMark from './assets/vector-580.svg'
import playIcon from './assets/vector-529.svg'
import linkedInIcon from './assets/vector-20.svg'
import xIcon from './assets/vector-17.svg'
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

const marqueeSecondary = ['40,000+ PATENTS INDEXED', 'SBIR/STTR AWARDS API', 'DOE LOAN PROGRAMS']

type FeedTag = {
  label: string
  variant?: 'amber'
  minWidth?: string
}

type FeedCard = {
  tag: string
  status: string
  title: string
  meta: string
  tags: FeedTag[]
  matches?: string
  matchIcon: string
  accent: string
}

const feedCards: FeedCard[] = [
  {
    tag: 'SBIR Phase II → III Signal',
    status: '● New',
    title: 'Advanced Solid-State Electrolyte for Long-Duration Grid Storage',
    meta: 'Pacific Northwest National Laboratory · PI: Dr. Sarah Chen',
    tags: [{ label: 'TRL 5' }, { label: '$1.8M' }, { label: 'LDES' }],
    matches: '3 Investor Matches',
    matchIcon: matchIconPrimary,
    accent: 'bg-cyan-signal',
  },
  {
    tag: 'ARPA-E Award · Open 2024',
    status: 'Awarded',
    title: 'Supercritical CO₂ Heat Exchange for Enhanced Geothermal Systems',
    meta: 'Sandia National Laboratories · Award #DE-AR0001842',
    tags: [{ label: 'TRL 4' }, { label: '$3.2M' }, { label: 'EGS' }],
    matchIcon: matchIconPrimary,
    accent: 'bg-spring-green',
  },
  {
    tag: 'USPTO Y02 Patent',
    status: 'Published',
    title: 'Electrolyzer Membrane Architecture for Alkaline Water Electrolysis',
    meta: 'MIT Energy Initiative spin-out · Patent #US2024/0187392',
    tags: [
      { label: 'TRL 6', variant: 'amber' },
      { label: 'Green H₂', minWidth: 'min-w-[62px]' },
    ],
    matchIcon: matchIconSecondary,
    accent: 'bg-amber-signal',
  },
  {
    tag: 'Semantic Scholar',
    status: 'High Influence',
    title: 'Novel Sorbent Material for Point-Source CO₂ Capture',
    meta: 'Carnegie Mellon · Prof. James Park et al.',
    tags: [
      { label: 'TRL 3' },
      { label: 'Carbon Capture', minWidth: 'min-w-[100px]' },
      { label: 'Pre-company', minWidth: 'min-w-[82px]' },
    ],
    matches: '1 Investor Matches',
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

const footerColumns = {
  Platform: ['Technologies', 'Matching Engine', 'API Docs', 'Pricing'],
  Company: ['About', 'Methodology', 'Careers', 'Contact'],
}

const footerLegal = ['Privacy', 'Terms', 'Security']

const LogoMark = ({ className = '' }: { className?: string }) => (
  <img className={className} src={logoMark} alt="Frond logo" />
)

export default function App() {
  useEffect(() => {
    const ANIMATION_CLASSES = [
      '.anim-fade-up',
      '.anim-fade-in',
      '.anim-slide-left',
      '.anim-slide-right',
      '.anim-stagger',
      '.anim-count',
    ]

    const animateCounter = (el: HTMLElement) => {
      const target = Number.parseInt(el.dataset.target ?? '0', 10)
      const suffix = el.dataset.suffix ?? ''
      const prefix = el.dataset.prefix ?? ''
      const duration = 1200
      const start = performance.now()

      const tick = (now: number) => {
        const elapsed = now - start
        const progress = Math.min(elapsed / duration, 1)
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        const current = Math.round(eased * target)
        el.textContent = `${prefix}${current.toLocaleString()}${suffix}`
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            if (entry.target.classList.contains('anim-count')) {
              animateCounter(entry.target as HTMLElement)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    document.querySelectorAll(ANIMATION_CLASSES.join(', ')).forEach((el) => {
      observer.observe(el)
    })

    const nav = document.querySelector('.nav')
    const hamburger = document.querySelector<HTMLButtonElement>('.nav-hamburger')
    const mobileDrawer = document.querySelector<HTMLDivElement>('.nav-drawer')
    const handleNavScroll = () => {
      if (!nav) return
      if (window.scrollY > 20) {
        nav.classList.add('nav--scrolled')
      } else {
        nav.classList.remove('nav--scrolled')
      }
    }

    const cleanupFns: Array<() => void> = []

    if (hamburger && mobileDrawer) {
      let isOpen = false

      const toggleDrawer = () => {
        isOpen = !isOpen
        mobileDrawer.classList.toggle('is-open', isOpen)
        mobileDrawer.setAttribute('aria-hidden', String(!isOpen))
        hamburger.setAttribute('aria-expanded', String(isOpen))
        document.body.style.overflow = isOpen ? 'hidden' : ''
      }

      const closeDrawer = () => {
        isOpen = false
        mobileDrawer.classList.remove('is-open')
        mobileDrawer.setAttribute('aria-hidden', 'true')
        hamburger.setAttribute('aria-expanded', 'false')
        document.body.style.overflow = ''
      }

      hamburger.addEventListener('click', toggleDrawer)
      const drawerActions = mobileDrawer.querySelectorAll('a, button')
      drawerActions.forEach((link) => {
        link.addEventListener('click', closeDrawer)
      })

      cleanupFns.push(() => {
        hamburger.removeEventListener('click', toggleDrawer)
        drawerActions.forEach((link) => {
          link.removeEventListener('click', closeDrawer)
        })
      })
    }

    handleNavScroll()
    window.addEventListener('scroll', handleNavScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleNavScroll)
      cleanupFns.forEach((cleanup) => cleanup())
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="min-h-screen bg-racing-green text-narvik">
      <header className="nav fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[rgba(15,22,18,0.6)] backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <LogoMark className="h-6 w-6" />
            <span className="font-display text-lg font-bold tracking-[-0.5px] text-white">Frond</span>
          </div>
          <nav className="nav-links-desktop hidden items-center gap-8 text-sm font-medium text-slate-400 md:flex">
            <a href="#methodology" className="nav-link transition hover:text-white">
              Methodology
            </a>
            <a href="#pricing" className="nav-link transition hover:text-white">
              Pricing
            </a>
            <a href="#" className="nav-link transition hover:text-white">
              Login
            </a>
            <button className="rounded-[4px] bg-spring-green px-5 py-2 font-display text-sm font-bold text-racing-green">
              Access the database →
            </button>
          </nav>
          <button className="nav-hamburger" aria-expanded="false" aria-label="Open navigation menu" type="button">
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>
      <div className="nav-drawer" aria-hidden="true">
        <a href="#methodology">Methodology</a>
        <a href="#pricing">Pricing</a>
        <a href="#">Login</a>
        <button className="mt-4 w-full rounded-[4px] bg-spring-green px-5 py-3 text-center font-display text-sm font-bold text-racing-green">
          Access the database →
        </button>
      </div>

      <main className="pt-16">
        <section className="hero hero-section-515 relative overflow-hidden bg-racing-green">
          <div
            className="node-516 pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(120.85% 178.96% at 50% 0%, rgba(60, 185, 124, 0.15) 24.038%, rgba(30, 93, 62, 0.325) 44.952%, rgba(15, 46, 31, 0.4125) 55.409%, rgba(8, 23, 16, 0.45625) 60.637%, rgba(0, 0, 0, 0.5) 65.866%)',
            }}
          />
          <div className="headline-517 hero-inner relative">
            <div className="div-relative-518">
              <div className="node-519">
                <p className="text-520 hero-headline anim-fade-up">
                  <span className="hero-line text-white">The intelligence layer</span>
                  <br />
                  <span className="hero-line text-white">between </span>
                  <span className="hero-line text-rgb-61-184-124 italic">breakthrough science</span>
                  <br />
                  <span className="hero-line text-white">and the capital it deserves.</span>
                </p>
              </div>
              <div className="node-521">
                <p className="text-522 hero-subhead anim-fade-up" style={{ transitionDelay: '900ms' }}>
                  <span className="text-rgb-148-163-184">
                    Frond monitors ARPA-E grants, SBIR awards, and 1,400+ other federal databases so you — and only you — invest first.
                  </span>
                </p>
              </div>
              <div className="div-flex-523 hero-cta-group anim-stagger">
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
          className="marquee-wrapper anim-fade-in relative overflow-hidden border-y"
          style={{ backgroundColor: 'rgba(15, 22, 18, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
        >
          <div className="relative py-[17px]">
            <div className="marquee-track flex animate-marquee items-center gap-12 whitespace-nowrap px-6">
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

        <section className="problem-section bg-black py-24" id="methodology">
          <div className="mx-auto grid max-w-[1200px] gap-[72px] px-6 lg:px-12 lg:grid-cols-[1.05fr_1fr]">
            <div className="space-y-6">
              <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[1.2px] text-spring-green">
                <span className="h-px w-8 bg-spring-green" />
                The Missing Middle
              </div>
              <h2 className="problem-headline font-serif text-[52px] leading-[57.2px] text-white anim-fade-up">
                51% of climate VCs say FOAK is the hardest stage to finance.
              </h2>
              <p className="problem-subhead font-serif text-[56px] leading-[57.2px] text-spring-green anim-fade-up">
                They’re still finding deals on LinkedIn spreadsheets.
              </p>
              <p className="problem-body max-w-[578px] text-[18px] leading-[24px] text-white anim-fade-up" style={{ transitionDelay: '200ms' }}>
                The next decade of clean energy infrastructure is already in a government database somewhere, filed and forgotten. Frond surfaces it — before it shows up in anyone else’s deal flow.
              </p>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-stretch anim-stagger">
              <div className="flex h-full flex-1 flex-col rounded-[2px] border border-white/30 bg-[rgba(61,184,124,0.25)] p-[33px]">
                <p className="font-mono text-[12px] uppercase tracking-[1.2px] text-spring-green">Capital Gap</p>
                <p className="mt-4 font-serif text-[72px] font-light leading-[60px] text-white anim-count" data-target="200" data-prefix="$" data-suffix="B">
                  $200B
                </p>
                <p className="mt-4 text-[16px] leading-[24px] text-[#9db9b9]">
                  Estimated annual funding shortfall for FOAK climate projects by 2030. (IEA)
                </p>
              </div>
              <div className="flex h-full flex-1 flex-col justify-between gap-6">
                <div className="rounded-[2px] border border-white/30 bg-[rgba(236,253,245,0.15)] p-[25px]">
                  <p className="font-mono text-[12px] uppercase tracking-[1.2px] text-spring-green">Funding Rate</p>
                  <p className="mt-3 font-serif text-[48px] leading-[56px] text-white anim-count" data-target="3" data-prefix="<" data-suffix="%">
                    &lt;3%
                  </p>
                  <p className="mt-3 text-[16px] leading-[20px] text-slate-400">
                    Of viable hard-tech climate startups successfully raise Series B.
                  </p>
                </div>
                <div className="rounded-[2px] border border-white/30 bg-[rgba(236,253,245,0.15)] p-[25px]">
                  <p className="font-mono text-[12px] uppercase tracking-[1.2px] text-spring-green">Market Gap</p>
                  <p className="mt-3 font-serif text-[48px] leading-[56px] text-white anim-count" data-target="3" data-prefix="$" data-suffix="T">
                    $3T
                  </p>
                  <p className="mt-3 text-[16px] leading-[20px] text-slate-400">
                    Projected market cap for new climate industrials by 2040.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-[#060a08] pb-[80px] pt-[81px]">
          <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-12">
            <h2 className="font-serif text-[60px] leading-[40px] text-white anim-fade-up">
              Your sourcing logic. <span className="font-serif italic text-spring-green">Automatically.</span>
            </h2>
            <p className="mt-8 text-[18px] leading-[16px] text-[#cbd5e1] anim-fade-up" style={{ transitionDelay: '200ms' }}>
              Frond parses thousands of technical documents against your specific investment thesis, alerting you only when the science matches your strategy.
            </p>
            <div className="pipeline-grid mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4 anim-stagger">
              {pipelineSteps.map((step) => (
                <div
                  key={step.title}
                  className={`pipeline-card flex min-h-[255px] flex-col rounded-[2px] border p-[25px] text-left shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${
                    step.active
                      ? 'pipeline-card--active border-[rgba(61,184,124,0.4)] bg-[rgba(61,184,124,0.2)]'
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

        <section className="bg-[#0c2218] py-[96px]">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 lg:px-12">
            <div className="flex items-center gap-3 border-b border-[#047857] pb-[17px] anim-fade-up">
              <h3 className="font-mono text-[32px] uppercase leading-[20px] tracking-[1.4px] text-[#7edcb0]">
                Live sourcing feed
              </h3>
              <span className="h-4 w-4 rounded-full bg-spring-green" />
              <span className="ml-auto font-mono text-[16px] uppercase leading-[16px] text-[#7a9e8c]">3 new in the last hour</span>
            </div>
            <div className="signal-feed-grid grid gap-6 lg:grid-cols-2 xl:grid-cols-3 anim-stagger anim-stagger-150">
              {feedCards.map((card) => (
                <div
                  key={card.title}
                  className={`signal-card relative h-[222.5px] rounded-[8px] border border-[#1e5c3e] bg-[#0c2218] px-[24px] pb-[24px] pt-[23.75px] ${
                    card.matches ? 'signal-card--ai-match' : ''
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase leading-[16.5px] text-[#7a9e8c]">
                    <span>{card.tag}</span>
                    <span className={card.status.includes('New') ? 'text-spring-green' : 'text-[#7a9e8c]'}>{card.status}</span>
                  </div>
                  <h4 className="mt-[12px] font-serif text-[20px] font-medium leading-[28px] text-[#f1f5f9]">
                    {card.title}
                  </h4>
                  <p className="mt-[8px] font-display text-[14px] leading-[20px] text-[#7a9e8c]">{card.meta}</p>
                  <div className="mt-[12px] flex flex-wrap gap-2">
                    {card.tags.map((tag: FeedTag) => (
                      <span
                        key={tag.label}
                        className={`rounded-[4px] px-[8px] py-[4px] text-[10px] font-mono uppercase leading-[15px] tracking-[0.25px] ${
                          tag.variant === 'amber'
                            ? 'bg-[rgba(246,239,166,0.3)] text-amber-signal'
                            : 'bg-[#14392a] text-[#b8f5d8]'
                        } ${tag.minWidth ?? ''}`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                  {card.matches && (
                    <div className="mt-[12px] flex items-center gap-2 border-t border-[#14392a] pt-[13px] text-[10px] font-mono uppercase leading-[15px] tracking-[0.25px] text-[#13ecec]">
                      <img src={card.matchIcon} alt="" aria-hidden="true" className="h-4 w-[14px]" />
                      {card.matches}
                    </div>
                  )}
                  <span className={`signal-card-accent absolute left-0 top-0 h-full w-[2px] ${card.accent}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#091410] py-[48px]">
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.5) 50.115%, #0c2218 66.641%)' }}
          />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,rgba(61,184,124,0)_0%,rgba(61,184,124,0.3)_50%,rgba(61,184,124,0)_100%)]" />
          <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-start gap-[48px] px-6 lg:px-12">
            <div className="flex w-full flex-col items-center">
              <h2 className="font-serif text-[54px] leading-[56px] text-white text-center whitespace-pre anim-fade-up">
                <span className="block">Join 850+ investors already moving</span>
                <span className="block"> capital through the Valley of Death.</span>
              </h2>
            </div>
            <div className="flex w-full items-start justify-center gap-4 anim-stagger" style={{ transitionDelay: '200ms' }}>
              <input
                className="h-[39px] w-[324px] rounded-[4px] border border-[#2a4d40] bg-[#0c2218] px-[13px] py-[10px] font-mono text-[14px] leading-[normal] text-[#6b7280] outline-none"
                defaultValue="findfoak@gmail.com"
              />
              <button className="flex h-[37px] w-[325px] items-center justify-center rounded-[4px] bg-[#1f3a2f] font-display text-[14px] font-medium leading-[20px] text-spring-green">
                Request Access
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1f3a2f] bg-[#060a08] pb-[28px] pt-[49px]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-[48px] px-6 lg:px-12">
          <div className="footer-columns flex flex-col gap-12 md:flex-row md:items-end md:justify-between anim-stagger">
            <div className="flex flex-1 flex-col gap-[13px]">
              <div className="flex items-center gap-[3px]">
                <LogoMark className="h-6 w-6" />
                <span className="font-display text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-white">Frond</span>
              </div>
              <p className="text-[14px] leading-[20px] text-slate-500">
                Intelligent sourcing for First-of-a-Kind (FOAK) climate tech.
              </p>
              <div className="flex items-center gap-4 pt-2 text-slate-400">
                <img src={linkedInIcon} alt="LinkedIn" className="h-5 w-5" />
                <img src={xIcon} alt="X" className="h-5 w-5" />
              </div>
            </div>
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title} className="flex flex-1 flex-col gap-4">
                <p className="font-mono text-[12px] uppercase tracking-[0.6px] text-slate-400">{title}</p>
                <ul className="space-y-2 text-[14px] leading-[20px] text-slate-300">
                  {links.map((link) => (
                    <li key={link}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex w-full max-w-[217px] flex-col gap-4 md:w-auto">
              <p
                className="text-[14px] font-semibold uppercase tracking-[0.7px] text-white"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Legal
              </p>
              <ul className="space-y-2">
                {footerLegal.map((link) => (
                  <li key={link} className="text-[14px] leading-[20px] text-slate-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#1f3a2f] pt-[33px] text-[12px] leading-[16px] text-[#475569] anim-fade-up">
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

/*
Preserved commented-out imports, data, and sections.

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
import enterpriseBadgeIcon from './assets/vector-129.svg'
import trlMarkerIcon from './assets/vector-403.svg'

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
    variant: 'scout',
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
    variant: 'analyst',
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
    cta: 'Talk To Us',
    variant: 'enterprise',
    badgeIcon: enterpriseBadgeIcon,
  },
]

// TRL Visualization - Temporarily hidden
<section className="border-b border-spring-green/20 bg-[#060a08] py-24">
  <div className="mx-auto max-w-[1280px] px-6 text-center">
    <h2 className="flex flex-wrap items-center justify-center gap-2 font-serif text-3xl italic text-slate-200 md:text-5xl anim-fade-up">
      <span>“Do not even</span>
      <span className="underline">dare</span>
      <span>to call it</span>
      <span className="font-display not-italic text-spring-green">‘FOAK’</span>
      <span>when talking to project finance.”</span>
    </h2>
    <p className="mt-6 font-mono text-xs uppercase tracking-[1.4px] text-spring-green/80 anim-fade-up">
      Industry Advisor · Quoted in CTVC 2025
    </p>
    <p className="mx-auto mt-4 max-w-[672px] text-sm text-slate-200 anim-fade-up">
      35% of emissions reductions needed by 2050 must come from technologies not yet commercially available. The window lies in the TRL (Technology Readiness Level) 6–8 range, and stagnates with zero infrastructure -- until now.
    </p>

    <div className="mt-14 rounded-[12px] bg-transparent px-6 py-8 text-left anim-fade-up">
      <div className="relative mx-auto h-[300px] w-full max-w-[1280px]">
        <div className="absolute left-1/2 top-[84px] -translate-x-1/2 font-mono text-[12px] font-medium uppercase leading-[16px] tracking-[0.6px] text-amber-signal">
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
        <div className="absolute left-0 right-0 top-[84px] flex items-center justify-between px-2 font-mono text-[12px] uppercase leading-[16px] tracking-[0.6px]">
          <span className="text-spring-green">Early Research</span>
          <span className="text-white">Commercial Scale</span>
        </div>
        <div className="absolute left-0 top-[139px] w-full overflow-x-auto pb-4">
          <div className="grid min-w-[1000px] grid-cols-9 gap-0 anim-stagger">
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
              className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[20px]"
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
              className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[20px]"
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
              className="relative flex h-[143px] flex-col justify-between rounded-[2px] border p-[20px]"
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

// Pricing Section - Temporarily hidden
<section className="bg-gradient-to-b from-[#060a08] to-[#0c2218] pb-[96px] pt-[64px]" id="pricing">
  <div className="mx-auto max-w-[1280px] px-6">
    <div className="text-center">
      <h2 className="font-serif text-[42px] leading-[40px] text-white anim-fade-up">Access the Terminal</h2>
      <p className="mx-auto mt-4 max-w-[576px] text-[14.8px] leading-[24px] text-slate-400 anim-fade-up">
        Start with intelligence. Scale to enterprise-grade diligence.
      </p>
    </div>
    <div className="mt-12 grid gap-8 lg:grid-cols-3 anim-stagger">
      {pricingTiers.map((tier) => {
        const isAnalyst = tier.variant === 'analyst'
        const isEnterprise = tier.variant === 'enterprise'
        return (
          <div
            key={tier.name}
            className={`relative flex min-h-[436px] flex-col rounded-[8px] border p-[33px] text-left pricing-card anim-fade-up ${
              isAnalyst
                ? 'pricing-card--featured border-[rgba(61,184,124,0.4)] bg-[#142921] shadow-[0px_0px_20px_0px_rgba(61,184,124,0.25)] lg:-mt-3'
                : isEnterprise
                  ? 'border-[rgba(19,236,236,0.2)] bg-[#060a08]'
                  : 'border-white/5 bg-[#0c2218]'
            } ${isAnalyst ? 'min-h-[456px]' : ''}`}
          >
            {tier.highlight && (
              <span className="pricing-badge absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-spring-green px-3 py-[4px] text-[12px] font-bold uppercase tracking-[0.63px] text-[#060a08]">
                Most Popular
              </span>
            )}
            <div className="flex items-center gap-2">
              <h3 className="font-display text-[20px] font-bold leading-[28px] text-white">{tier.name}</h3>
              {tier.badgeIcon && <img src={tier.badgeIcon} alt="" aria-hidden="true" className="h-4 w-[14px]" />}
            </div>
            <p className="mt-4 text-[13.5px] leading-[20px] text-slate-400">{tier.blurb}</p>
            <div className="mt-6 flex items-end gap-2 font-mono text-white">
              <span className="text-[30px] leading-[36px]">{tier.price}</span>
              {tier.suffix && <span className="text-[12.8px] leading-[20px] text-slate-500">{tier.suffix}</span>}
            </div>
            <ul className="mt-6 space-y-4 text-[13.5px] leading-[20px] text-[#cbd5e1]">
              {tier.features.map((feature) => (
                <li
                  key={feature.label}
                  className={`flex items-center gap-3 ${isAnalyst ? 'text-[#e2e8f0]' : 'text-[#cbd5e1]'}`}
                >
                  <img src={feature.icon} alt="" aria-hidden="true" className="h-[10px] w-[10px]" />
                  {feature.label}
                </li>
              ))}
            </ul>
            <button
              className={`mt-auto w-full rounded-[6px] px-5 py-[12px] text-center text-[15px] leading-[24px] ${
                isAnalyst
                  ? 'bg-spring-green font-bold text-[#060a08]'
                  : 'border border-white/20 text-white'
              }`}
            >
              {tier.cta}
            </button>
          </div>
        )
      })}
    </div>
  </div>
</section>
*/
