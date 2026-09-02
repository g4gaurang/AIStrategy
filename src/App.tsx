import { lazy, Suspense, useEffect, useId, useState } from 'react'
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  ChevronRight,
  CircuitBoard,
  Compass,
  Eye,
  Layers3,
  Menu,
  Network,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from 'lucide-react'
import {
  architectureLayers,
  capabilityCategories,
  challenges,
  deliverables,
  differentiators,
  enterpriseLayers,
  governanceStages,
  governanceThemes,
  navItems,
  outcomeCategories,
  phases,
  portfolioItems,
  profileLabels,
  roadmapHorizons,
  technologyCriteria,
} from './data/content'
import type { PortfolioProfile, QualitativeLevel } from './types'

const PortfolioChart = lazy(() => import('./components/PortfolioChart'))

const contactLink = '#contact'

const levelMap: Record<QualitativeLevel, number> = {
  Developing: 1,
  Moderate: 2,
  Strong: 3,
  'Requires attention': 1.5,
}

const levelTone: Record<QualitativeLevel, string> = {
  Developing: 'developing',
  Moderate: 'moderate',
  Strong: 'strong',
  'Requires attention': 'attention',
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  inverse = false,
}: {
  eyebrow: string
  title: string
  copy?: string
  inverse?: boolean
}) {
  return (
    <div className={`section-heading ${inverse ? 'inverse' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="nav-shell">
        <a className="brand" href="#overview" aria-label="MTX Enterprise AI Strategy and Activation home">
          <span className="brand-mark">MTX</span>
          <span className="brand-name">Enterprise AI Strategy &amp; Activation</span>
        </a>
        <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="button button-small mobile-cta" href={contactLink} onClick={() => setOpen(false)}>
            Request an AI Strategy Workshop
          </a>
        </nav>
        <a className="button button-small desktop-cta" href={contactLink}>
          Request an AI Strategy Workshop
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
    </header>
  )
}

function HeroModel() {
  const levels = [
    'Mission priorities',
    'Operating landscape',
    'AI opportunity portfolio',
    'Governance and architecture',
    'Implementation roadmap',
  ]

  return (
    <div
      className="hero-model"
      role="img"
      aria-label="Abstract enterprise model connecting mission priorities, operating landscape, AI opportunity portfolio, governance and architecture, and implementation roadmap"
    >
      <div className="diagram-grid" aria-hidden="true" />
      <div className="model-stack">
        {levels.map((level, index) => (
          <div className={`model-level level-${index + 1}`} key={level}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{level}</strong>
          </div>
        ))}
      </div>
      <div className="model-connectors" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <p className="model-caption">Connected enterprise decision layers</p>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="overview">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <Sparkles size={15} aria-hidden="true" /> MTX Enterprise AI Strategy &amp; Activation
          </p>
          <h1>Move from scattered AI ideas to an enterprise implementation strategy.</h1>
          <p>
            MTX helps government agencies understand their application and operating landscape, assess AI
            readiness, establish governance, prioritize investments, and create a practical roadmap from
            strategy through implementation.
          </p>
          <div className="button-row">
            <a className="button" href="#approach">
              Explore the MTX approach <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href={contactLink}>
              Request an AI Strategy Workshop
            </a>
          </div>
          <div className="hero-proof">
            <span>
              <Check aria-hidden="true" /> Enterprise context established
            </span>
            <span>
              <Check aria-hidden="true" /> Investments prioritized
            </span>
            <span>
              <Check aria-hidden="true" /> Activation path defined
            </span>
          </div>
        </div>
        <HeroModel />
      </div>
      <div className="hero-signal-band" aria-hidden="true">
        <div className="signal-orbit" />
        <div className="signal-orbit secondary" />
        <div className="signal-nodes">
          {capabilityCategories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Challenges() {
  const icons = [Network, Eye, Building2, Compass, ShieldCheck, Route]

  return (
    <section className="section light" id="challenges">
      <div className="container">
        <SectionHeading
          eyebrow="Agency challenge"
          title="AI activity is accelerating. Enterprise clarity often is not."
          copy="Agencies may face fragmented experimentation, incomplete visibility across the application portfolio, duplicated investment, unclear readiness, governance that sits apart from delivery, and strategies that stop short of implementation."
        />
        <div className="challenge-grid">
          {challenges.map((item, index) => {
            const Icon = icons[index]
            return (
              <article className="challenge-card" key={item.title}>
                <div className="card-icon">
                  <Icon aria-hidden="true" />
                </div>
                <p className="card-number">0{index + 1}</p>
                <h3>{item.title}</h3>
                <div>
                  <span>Agency challenge</span>
                  <p>{item.challenge}</p>
                </div>
                <div className="response">
                  <span>MTX response</span>
                  <p>{item.response}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function EnterpriseLens() {
  const [selected, setSelected] = useState(0)
  const layer = enterpriseLayers[selected]
  const tabId = useId()

  return (
    <section className="section lens-section" id="lens">
      <div className="container">
        <SectionHeading
          inverse
          eyebrow="Enterprise lens"
          title="View AI strategy through an enterprise lens."
          copy="MTX examines the connected layers that shape whether AI investments can create durable value. Select a layer to review what is assessed, why it matters, and which strategic decisions it informs."
        />
        <div className="lens-shell">
          <div className="lens-tabs" role="tablist" aria-label="Enterprise strategy layers">
            {enterpriseLayers.map((item, index) => (
              <button
                type="button"
                role="tab"
                id={`${tabId}-tab-${index}`}
                aria-controls={`${tabId}-panel`}
                aria-selected={selected === index}
                className={selected === index ? 'selected' : ''}
                onClick={() => setSelected(index)}
                key={item.title}
              >
                <span>0{index + 1}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>
          <div
            className="lens-panel"
            role="tabpanel"
            id={`${tabId}-panel`}
            aria-labelledby={`${tabId}-tab-${selected}`}
          >
            <p className="eyebrow">Selected layer</p>
            <h3>{layer.title}</h3>
            <dl className="lens-facts">
              <div>
                <dt>What MTX assesses</dt>
                <dd>{layer.assesses}</dd>
              </div>
              <div>
                <dt>Why it matters</dt>
                <dd>{layer.why}</dd>
              </div>
              <div>
                <dt>Decision informed</dt>
                <dd>{layer.decision}</dd>
              </div>
            </dl>
          </div>
        </div>
        <p className="confidential-note">
          Detailed findings and opportunity mappings are developed confidentially with each agency and are not
          represented in this public prototype.
        </p>
      </div>
    </section>
  )
}

function Approach() {
  const [selected, setSelected] = useState(0)
  const phase = phases[selected]
  const tabId = useId()

  return (
    <section className="section method-section" id="approach">
      <div className="container">
        <SectionHeading
          eyebrow="Engagement approach"
          title="From enterprise discovery to governed activation."
          copy="MTX helps agencies turn fragmented AI activity into an enterprise strategy, investment roadmap, and governed path to implementation. Five connected phases move from shared context to implementation sequencing."
        />
        <div className="stepper" role="tablist" aria-label="MTX engagement phases">
          {phases.map((item, index) => (
            <button
              type="button"
              role="tab"
              id={`${tabId}-tab-${index}`}
              aria-controls={`${tabId}-panel`}
              aria-selected={selected === index}
              className={selected === index ? 'selected' : ''}
              onClick={() => setSelected(index)}
              key={item.title}
            >
              <span>{index + 1}</span>
              <small>{item.eyebrow}</small>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
        <div
          className="phase-detail"
          role="tabpanel"
          id={`${tabId}-panel`}
          aria-labelledby={`${tabId}-tab-${selected}`}
        >
          <div>
            <p className="eyebrow">{phase.eyebrow}</p>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
          </div>
          <div>
            <p className="mini-label">Public outputs</p>
            <ul>
              {phase.outputs.map((output) => (
                <li key={output}>
                  <Check aria-hidden="true" />
                  {output}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="positioning-line">
          The result is a decision-ready portfolio that connects mission priorities, operating needs, enterprise
          architecture, responsible-AI controls, and implementation sequencing.
        </p>
      </div>
    </section>
  )
}

function PortfolioExplorer() {
  const [selectedId, setSelectedId] = useState(portfolioItems[0].id)
  const selected = portfolioItems.find((item) => item.id === selectedId) ?? portfolioItems[0]
  const chartLabels: Record<keyof PortfolioProfile, string> = {
    missionAlignment: 'Mission',
    enterpriseReuse: 'Reuse',
    organizationalReadiness: 'Org ready',
    dataReadiness: 'Data ready',
    deliveryFeasibility: 'Delivery',
    governanceSensitivity: 'Governance',
    measurableValue: 'Value',
  }
  const chartData = (Object.keys(profileLabels) as (keyof PortfolioProfile)[]).map((key) => ({
    dimension: chartLabels[key],
    value: levelMap[selected.profile[key]],
  }))

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <SectionHeading
          inverse
          eyebrow="Strategic portfolio explorer"
          title="Examine the kinds of considerations that shape portfolio decisions."
          copy="This conceptual public demonstration uses anonymous initiatives to show how qualitative factors can inform discussion. It is not MTX’s complete evaluation method."
        />
        <div className="demo-banner" role="note">
          <Target size={18} aria-hidden="true" />
          <div>
            <strong>Conceptual public demonstration</strong>
            <p>
              This interaction demonstrates the types of considerations that can inform portfolio decisions. MTX
              calibrates the actual evaluation model, evidence requirements, and decision thresholds with each
              agency.
            </p>
          </div>
        </div>
        <div className="portfolio-shell">
          <div className="initiative-list" role="listbox" aria-label="Anonymous portfolio initiatives">
            {portfolioItems.map((item) => (
              <button
                type="button"
                role="option"
                aria-selected={selected.id === item.id}
                className={selected.id === item.id ? 'selected' : ''}
                key={item.id}
                onClick={() => setSelectedId(item.id)}
              >
                <span>{item.name}</span>
                <small>{item.category}</small>
              </button>
            ))}
          </div>
          <div className="portfolio-profile" aria-live="polite">
            <div className="profile-heading">
              <div>
                <p className="mini-label">Qualitative profile</p>
                <h3>{selected.name}</h3>
              </div>
              <span className="category-pill">{selected.category}</span>
            </div>
            <dl className="profile-grid">
              {(Object.keys(profileLabels) as (keyof PortfolioProfile)[]).map((key) => {
                const value = selected.profile[key]
                return (
                  <div key={key}>
                    <dt>{profileLabels[key]}</dt>
                    <dd className={`level-chip ${levelTone[value]}`}>{value}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
          <aside className="portfolio-chart-card">
            <p className="mini-label">Abstract readiness view</p>
            <div
              className="chart-wrap"
              role="img"
              aria-label={`Qualitative profile for ${selected.name} across mission alignment, enterprise reuse, organizational readiness, data readiness, delivery feasibility, governance sensitivity, and measurable value`}
            >
              <Suspense fallback={<div className="chart-loading">Loading visualization…</div>}>
                <PortfolioChart data={chartData} />
              </Suspense>
            </div>
            <p className="fine-print">
              Values are qualitative only. No numeric scores, weights, totals, or ranking formulas are shown.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Governance() {
  const [selected, setSelected] = useState(0)
  const stage = governanceStages[selected]
  const tabId = useId()

  return (
    <section className="section governance-section" id="governance">
      <div className="container">
        <SectionHeading
          inverse
          eyebrow="Responsible AI and governance"
          title="Make governance part of implementation."
          copy="Responsible-AI policies have to be translated into operating practice. MTX helps agencies connect expectations to decision rights, oversight, evaluation, monitoring, and review across the delivery lifecycle."
        />
        <div className="principle">
          <Scale aria-hidden="true" />
          <div>
            <p>Public-sector principle</p>
            <strong>
              Agencies retain authority for consequential decisions. AI-enabled capabilities operate within defined
              roles, approved information boundaries, documented controls, and human-review requirements.
            </strong>
          </div>
        </div>
        <div className="theme-matrix">
          {governanceThemes.map((theme, index) => (
            <div key={theme}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{theme}</p>
            </div>
          ))}
        </div>
        <div className="governance-lifecycle">
          <p className="mini-label">Governance lifecycle</p>
          <div className="lifecycle-tabs" role="tablist" aria-label="Governance lifecycle">
            {governanceStages.map((item, index) => (
              <button
                type="button"
                role="tab"
                id={`${tabId}-tab-${index}`}
                aria-controls={`${tabId}-panel`}
                aria-selected={selected === index}
                className={selected === index ? 'selected' : ''}
                onClick={() => setSelected(index)}
                key={item.title}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div
            className="lifecycle-panel"
            role="tabpanel"
            id={`${tabId}-panel`}
            aria-labelledby={`${tabId}-tab-${selected}`}
          >
            <h3>{stage.title}</h3>
            <p>{stage.description}</p>
            <ul>
              {stage.focus.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function TechnologyStrategy() {
  const [selected, setSelected] = useState(2)

  return (
    <section className="section architecture-section" id="technology">
      <div className="container">
        <SectionHeading
          eyebrow="Platform-neutral technology strategy"
          title="Choose technology after defining the mission and operating need."
          copy="MTX can help agencies evaluate existing enterprise platforms, cloud AI ecosystems, commercial model providers, open-source technologies, agency-hosted options, and hybrid approaches. Assessment considers mission fit, security and privacy, data sensitivity, performance, explainability, interoperability, cost, scalability, procurement, portability, and operational support."
        />
        <div className="criteria-row">
          {technologyCriteria.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="architecture-shell">
          <div className="architecture-stack">
            {architectureLayers.map((layer, index) => (
              <button
                type="button"
                key={layer.title}
                className={`architecture-layer ${layer.tone} ${selected === index ? 'selected' : ''}`}
                onClick={() => setSelected(index)}
                aria-pressed={selected === index}
              >
                <span>
                  <Layers3 aria-hidden="true" />
                  <strong>{layer.title}</strong>
                </span>
                <span className="architecture-items">
                  {layer.items.map((item) => (
                    <i key={item}>{item}</i>
                  ))}
                </span>
                <ChevronRight aria-hidden="true" />
              </button>
            ))}
          </div>
          <aside className="architecture-detail">
            <p className="eyebrow">Selected layer</p>
            <h3>{architectureLayers[selected].title}</h3>
            <p>{architectureLayers[selected].description}</p>
            <ul>
              {architectureLayers[selected].items.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="fine-print">
              MTX can support implementation across AWS, Microsoft Azure, Google Cloud, agency-approved frontier
              models, open-source models, and mixed technology environments. Specific product mappings and
              reference configurations are developed within each engagement.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Roadmap() {
  const [selected, setSelected] = useState(0)
  const horizon = roadmapHorizons[selected]
  const tabId = useId()

  return (
    <section className="section roadmap-section" id="roadmap">
      <div className="container">
        <SectionHeading
          eyebrow="Investment sequencing"
          title="Sequence investment around readiness, value, and institutional capacity."
          copy="Roadmaps are tailored to agency priorities, readiness, funding, procurement, architecture, and risk tolerance."
        />
        <div className="roadmap-tabs" role="tablist" aria-label="Implementation roadmap horizons">
          {roadmapHorizons.map((item, index) => (
            <button
              type="button"
              role="tab"
              id={`${tabId}-tab-${index}`}
              aria-controls={`${tabId}-panel`}
              aria-selected={selected === index}
              className={selected === index ? 'selected' : ''}
              onClick={() => setSelected(index)}
              key={item.title}
            >
              <span>Horizon {index + 1}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
        <div
          className="roadmap-detail"
          role="tabpanel"
          id={`${tabId}-panel`}
          aria-labelledby={`${tabId}-tab-${selected}`}
        >
          <div>
            <p className="mini-label">Horizon {selected + 1}</p>
            <h3>{horizon.title}</h3>
            <ul>
              {horizon.objectives.map((item) => (
                <li key={item}>
                  <Check aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="roadmap-emphasis">
            <CircuitBoard aria-hidden="true" />
            <p className="mini-label">Emphasis</p>
            <p>{horizon.emphasis}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Deliverables() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section className="section light" id="deliverables">
      <div className="container">
        <SectionHeading
          eyebrow="Engagement deliverables"
          title="Decision tools agencies can continue to use."
          copy="Each deliverable is designed for executive decision-making and continued internal use. Detailed contents remain within the engagement environment."
        />
        <div className="deliverables-grid">
          {deliverables.map((item, index) => (
            <article className={expanded === index ? 'deliverable expanded' : 'deliverable'} key={item.title}>
              <button
                type="button"
                aria-expanded={expanded === index}
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item.title}</strong>
                <ChevronDown aria-hidden="true" />
              </button>
              {expanded === index && <p>{item.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Outcomes() {
  const [selected, setSelected] = useState(0)
  const category = outcomeCategories[selected]
  const tabId = useId()

  return (
    <section className="section outcomes-section" id="outcomes">
      <div className="container">
        <SectionHeading
          eyebrow="Outcomes and measures"
          title="Define value before implementation begins."
          copy="Measures, baselines, targets, and attribution methods are defined with the agency for each approved initiative. This site does not present illustrative values as achieved MTX results."
        />
        <div className="outcomes-shell">
          <div className="outcome-tabs" role="tablist" aria-label="Outcome framework categories">
            {outcomeCategories.map((item, index) => (
              <button
                type="button"
                role="tab"
                id={`${tabId}-tab-${index}`}
                aria-controls={`${tabId}-panel`}
                aria-selected={selected === index}
                className={selected === index ? 'selected' : ''}
                onClick={() => setSelected(index)}
                key={item.title}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div
            className="outcome-panel"
            role="tabpanel"
            id={`${tabId}-panel`}
            aria-labelledby={`${tabId}-tab-${selected}`}
          >
            <h3>{category.title}</h3>
            <p>{category.summary}</p>
            <ul>
              {category.questions.map((question) => (
                <li key={question}>
                  <Check aria-hidden="true" />
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyMTX() {
  return (
    <section className="section why-section" id="why-mtx">
      <div className="container why-grid">
        <div>
          <SectionHeading
            inverse
            eyebrow="Why MTX"
            title="Connect public-sector operations, enterprise architecture, and implementation."
          />
          <p>
            MTX helps government agencies understand how AI decisions fit their operating landscape, application
            portfolio, governance expectations, and implementation capacity. The engagement is designed to produce
            decisions that executives can defend and delivery teams can execute.
          </p>
        </div>
        <div className="pillar-grid">
          {differentiators.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Closing() {
  return (
    <>
      <section className="closing-section" id="contact">
        <div className="container closing-grid">
          <div>
            <p className="eyebrow">Begin with the operating landscape</p>
            <h2>Create an AI strategy grounded in how your agency operates.</h2>
            <p>
              Begin with an enterprise, department, program portfolio, or selected operating area. MTX will help
              establish the landscape, assess readiness, prioritize investment, define governance, and create a
              practical path to implementation.
            </p>
          </div>
          <div className="closing-actions">
            <a className="button" href={contactLink}>
              Request an AI Strategy Workshop <ArrowRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#approach">
              Review the MTX Approach <ChevronRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <footer>
        <div className="container footer-grid">
          <div>
            <span className="brand-mark">MTX</span>
            <h3>MTX Enterprise AI Strategy &amp; Activation</h3>
            <p>A strategy-to-implementation service for government agencies.</p>
          </div>
          <nav aria-label="Footer navigation">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
          <div>
            <a href={contactLink}>Contact MTX</a>
            <p>© {new Date().getFullYear()} MTX Group</p>
          </div>
        </div>
        <div className="container disclaimer">
          This prototype presents the MTX service at a general level for discussion purposes. Agency-specific
          findings, opportunity mappings, evaluation methods, architectures, implementation recommendations, and
          roadmaps are developed within the applicable engagement and information-sharing environment.
        </div>
      </footer>
    </>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Challenges />
        <EnterpriseLens />
        <Approach />
        <PortfolioExplorer />
        <Governance />
        <TechnologyStrategy />
        <Roadmap />
        <Deliverables />
        <Outcomes />
        <WhyMTX />
        <Closing />
      </main>
    </>
  )
}
