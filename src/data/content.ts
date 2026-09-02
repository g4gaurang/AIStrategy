import type {
  ArchitectureLayer,
  Challenge,
  DetailItem,
  EnterpriseLayer,
  GovernanceStage,
  OutcomeCategory,
  Phase,
  PortfolioItem,
  RoadmapHorizon,
} from '../types'

export const navItems = [
  ['overview', 'Overview'],
  ['challenges', 'Agency Challenge'],
  ['lens', 'Enterprise Lens'],
  ['approach', 'Approach'],
  ['governance', 'Governance'],
  ['roadmap', 'Roadmap'],
  ['outcomes', 'Outcomes'],
] as const

export const capabilityCategories = [
  'Enterprise Enablement',
  'Workforce Productivity',
  'Service Experience',
  'Program Operations',
  'Data and Insight',
  'Governance and Assurance',
] as const

export const challenges: Challenge[] = [
  {
    title: 'Fragmented experimentation',
    challenge:
      'Programs, technology teams, and vendors may pursue AI separately. Without a shared frame of reference, activity accumulates faster than institutional clarity.',
    response:
      'MTX establishes a common enterprise view of priorities, ownership, and operating context so experimentation can be evaluated against shared criteria.',
  },
  {
    title: 'Incomplete portfolio visibility',
    challenge:
      'Application inventories often stop at system names. Ownership, lifecycle status, dependencies, and operating criticality may remain unevenly documented.',
    response:
      'The engagement builds an enterprise landscape that connects applications, capabilities, workflows, and modernization context for AI planning.',
  },
  {
    title: 'Duplicated investment',
    challenge:
      'Similar needs can surface in multiple organizational units. Without an enterprise perspective, agencies may fund parallel work with limited reuse.',
    response:
      'MTX surfaces where common foundations, shared capabilities, or coordinated sequencing can reduce duplication across boundaries.',
  },
  {
    title: 'Unclear readiness and dependencies',
    challenge:
      'Interest in AI can outpace visibility into data quality, integration conditions, workforce capacity, policy constraints, and delivery dependencies.',
    response:
      'Readiness is assessed across organization, data, technology, governance, and workforce so sequencing reflects what must be resolved first.',
  },
  {
    title: 'Governance disconnected from delivery',
    challenge:
      'Responsible-AI expectations may remain at the policy level while projects proceed with incomplete decision rights, oversight, or evaluation practices.',
    response:
      'MTX translates governance into operating responsibilities, approval paths, oversight expectations, and implementation controls tied to delivery.',
  },
  {
    title: 'Strategy without an activation path',
    challenge:
      'Agencies may receive direction documents that describe ambition without sequencing, ownership, measures, or a practical route to implementation.',
    response:
      'The engagement produces a decision-ready roadmap and can continue through design, prototyping, delivery, adoption, and improvement.',
  },
]

export const enterpriseLayers: EnterpriseLayer[] = [
  {
    title: 'Mission and Policy',
    assesses:
      'Statutory mandates, strategic priorities, equity and access expectations, and the policy boundaries that shape what AI may support.',
    why: 'AI investment only creates value when it advances mission outcomes within the agency’s legal and policy environment.',
    decision: 'Which mission priorities should frame portfolio selection and which constraints must bound every implementation choice.',
  },
  {
    title: 'Application Portfolio',
    assesses:
      'Ownership, lifecycle, technology dependencies, integration posture, modernization plans, and operating criticality across the enterprise portfolio.',
    why: 'AI investments must account for the systems and services on which agency operations depend.',
    decision: 'Where common foundations, application-specific approaches, or modernization dependencies should shape sequencing.',
  },
  {
    title: 'Business Capabilities',
    assesses:
      'The services the agency delivers, how capabilities relate across programs, and where operating models rely on shared or specialized functions.',
    why: 'Capability structure reveals where enterprise reuse is realistic and where local variation must be preserved.',
    decision: 'Which investments should strengthen shared capabilities versus remaining close to a single operating area.',
  },
  {
    title: 'Operating Workflows',
    assesses:
      'How work moves across roles, handoffs, exceptions, decision points, and service channels that define day-to-day operations.',
    why: 'Strategy becomes actionable only when connected to the work people perform and the outcomes those workflows produce.',
    decision: 'Where operating friction, capacity pressure, or service quality issues warrant deeper design and readiness work.',
  },
  {
    title: 'Data and Integrations',
    assesses:
      'Authorized sources, sensitivity, quality conditions, exchange patterns, retention requirements, and integration constraints.',
    why: 'Feasibility depends on whether information can be used lawfully, reliably, and in ways that operations can sustain.',
    decision: 'Which data and integration conditions must be resolved before approved investments can proceed.',
  },
  {
    title: 'Governance and Delivery Constraints',
    assesses:
      'Decision rights, security and privacy expectations, procurement pathways, workforce readiness, funding, and institutional capacity.',
    why: 'Governance and delivery conditions determine whether prioritized investments can move into controlled implementation.',
    decision: 'What operating model, controls, and sequencing are required to activate approved priorities responsibly.',
  },
]

export const phases: Phase[] = [
  {
    eyebrow: 'Phase 1',
    title: 'Discover',
    description:
      'Establish a shared view of the agency’s mission priorities, application portfolio, business capabilities, operating environment, strategic plans, and current AI activity.',
    outputs: [
      'Enterprise landscape',
      'Stakeholder and ownership model',
      'Baseline and dependency summary',
      'Initial readiness perspective',
    ],
  },
  {
    eyebrow: 'Phase 2',
    title: 'Assess',
    description:
      'Evaluate where AI may create value and determine the organizational, data, technology, policy, security, procurement, and workforce conditions that affect feasibility.',
    outputs: [
      'Opportunity portfolio',
      'Readiness assessment',
      'Enterprise reuse perspective',
      'Risk and dependency findings',
    ],
  },
  {
    eyebrow: 'Phase 3',
    title: 'Prioritize',
    description:
      'Apply agency-approved criteria to compare potential investments and identify which initiatives warrant further design, preparation, piloting, deferral, or retirement.',
    outputs: [
      'Prioritized investment portfolio',
      'Business-case framework',
      'Sequencing considerations',
      'Executive decision record',
    ],
  },
  {
    eyebrow: 'Phase 4',
    title: 'Design',
    description:
      'Define the target operating model, governance, architecture principles, implementation controls, measures, and organizational responsibilities required for approved investments.',
    outputs: [
      'Governance and operating model',
      'Architecture direction',
      'Evaluation framework',
      'Delivery and adoption requirements',
    ],
  },
  {
    eyebrow: 'Phase 5',
    title: 'Activate',
    description:
      'Translate approved priorities into implementation waves and support prototyping, delivery, workforce adoption, measurement, and continuous improvement.',
    outputs: [
      'Sequenced roadmap',
      'Initiative charters',
      'Implementation plan',
      'Performance and service-review framework',
    ],
  },
]

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'a',
    name: 'Initiative A',
    category: 'Enterprise Enablement',
    profile: {
      missionAlignment: 'Strong',
      enterpriseReuse: 'Strong',
      organizationalReadiness: 'Moderate',
      dataReadiness: 'Developing',
      deliveryFeasibility: 'Moderate',
      governanceSensitivity: 'Requires attention',
      measurableValue: 'Strong',
    },
  },
  {
    id: 'b',
    name: 'Initiative B',
    category: 'Workforce Productivity',
    profile: {
      missionAlignment: 'Moderate',
      enterpriseReuse: 'Moderate',
      organizationalReadiness: 'Strong',
      dataReadiness: 'Moderate',
      deliveryFeasibility: 'Strong',
      governanceSensitivity: 'Moderate',
      measurableValue: 'Moderate',
    },
  },
  {
    id: 'c',
    name: 'Initiative C',
    category: 'Service Experience',
    profile: {
      missionAlignment: 'Strong',
      enterpriseReuse: 'Developing',
      organizationalReadiness: 'Moderate',
      dataReadiness: 'Moderate',
      deliveryFeasibility: 'Developing',
      governanceSensitivity: 'Requires attention',
      measurableValue: 'Strong',
    },
  },
  {
    id: 'd',
    name: 'Initiative D',
    category: 'Program Operations',
    profile: {
      missionAlignment: 'Strong',
      enterpriseReuse: 'Moderate',
      organizationalReadiness: 'Developing',
      dataReadiness: 'Requires attention',
      deliveryFeasibility: 'Moderate',
      governanceSensitivity: 'Strong',
      measurableValue: 'Moderate',
    },
  },
  {
    id: 'e',
    name: 'Initiative E',
    category: 'Data and Insight',
    profile: {
      missionAlignment: 'Moderate',
      enterpriseReuse: 'Strong',
      organizationalReadiness: 'Moderate',
      dataReadiness: 'Strong',
      deliveryFeasibility: 'Moderate',
      governanceSensitivity: 'Moderate',
      measurableValue: 'Strong',
    },
  },
]

export const profileLabels = {
  missionAlignment: 'Mission alignment',
  enterpriseReuse: 'Enterprise reuse',
  organizationalReadiness: 'Organizational readiness',
  dataReadiness: 'Data readiness',
  deliveryFeasibility: 'Delivery feasibility',
  governanceSensitivity: 'Governance sensitivity',
  measurableValue: 'Measurable value',
} as const

export const governanceStages: GovernanceStage[] = [
  {
    title: 'Define',
    description: 'Establish decision rights, roles, information boundaries, and the expectations that will guide AI-enabled work.',
    focus: ['Decision rights', 'Accountability', 'Data authorization', 'Workforce guidance'],
  },
  {
    title: 'Assess',
    description: 'Examine risk, readiness, and control needs before an initiative advances into design or delivery.',
    focus: ['Risk classification', 'Evidence requirements', 'Security and privacy', 'Human oversight needs'],
  },
  {
    title: 'Approve',
    description: 'Confirm that an initiative may proceed under documented conditions, ownership, and review requirements.',
    focus: ['Approval authority', 'Documented controls', 'Procurement conditions', 'Implementation gates'],
  },
  {
    title: 'Monitor',
    description: 'Observe operating performance, control effectiveness, and service conditions once capabilities are in use.',
    focus: ['Operational monitoring', 'Traceability', 'Incident escalation', 'Adoption and cost visibility'],
  },
  {
    title: 'Review',
    description: 'Revisit evidence, risk, and value so the portfolio can expand, adjust, or stop based on results.',
    focus: ['Periodic review', 'Performance evidence', 'Control refinement', 'Portfolio adjustment'],
  },
]

export const governanceThemes = [
  'Decision rights',
  'Accountability',
  'Data authorization',
  'Human oversight',
  'Evaluation requirements',
  'Security and privacy controls',
  'Traceability',
  'Operational monitoring',
  'Incident and escalation procedures',
  'Procurement and vendor controls',
  'Workforce guidance',
  'Periodic review',
]

export const architectureLayers: ArchitectureLayer[] = [
  {
    title: 'Agency Experience',
    tone: 'cyan',
    description: 'The channels and workspaces where staff and constituents interact with agency services.',
    items: ['Staff workspaces', 'Service channels', 'Program portals', 'Field and mobile access'],
  },
  {
    title: 'Enterprise Applications and Data',
    tone: 'blue',
    description: 'Authoritative systems and information assets that remain central to mission operations.',
    items: ['Systems of record', 'Operational platforms', 'Enterprise data assets', 'Integration fabric'],
  },
  {
    title: 'Governed AI Enablement',
    tone: 'purple',
    description: 'Reusable enablement patterns selected after mission need, readiness, and controls are understood.',
    items: ['Shared enablement patterns', 'Access and authorization', 'Evaluation support', 'Operating controls'],
  },
  {
    title: 'Technology Ecosystem',
    tone: 'indigo',
    description: 'Platform and model options assessed against agency requirements rather than a single preferred stack.',
    items: ['Existing enterprise platforms', 'Cloud AI ecosystems', 'Commercial model providers', 'Open-source options', 'Agency-hosted options', 'Hybrid approaches'],
  },
  {
    title: 'Security, Governance, and Operations',
    tone: 'navy',
    description: 'The enduring layer that keeps AI-enabled capabilities accountable, observable, and operable.',
    items: ['Identity and access', 'Privacy and records', 'Monitoring', 'Incident response', 'Service ownership'],
  },
]

export const technologyCriteria = [
  'Mission fit',
  'Security and privacy',
  'Data sensitivity',
  'Performance',
  'Explainability',
  'Interoperability',
  'Cost',
  'Scalability',
  'Procurement',
  'Portability',
  'Operational support',
]

export const roadmapHorizons: RoadmapHorizon[] = [
  {
    title: 'Establish Direction',
    emphasis: 'Create sponsorship, visibility, and the evaluation frame needed for later decisions.',
    objectives: [
      'Confirm sponsorship and decision rights',
      'Establish enterprise visibility',
      'Define evaluation and governance expectations',
      'Set baseline measures',
    ],
  },
  {
    title: 'Validate Priorities',
    emphasis: 'Strengthen evidence and operating ownership before broader activation begins.',
    objectives: [
      'Resolve critical readiness questions',
      'Develop evidence for selected investments',
      'Confirm operating ownership',
      'Establish implementation gates',
    ],
  },
  {
    title: 'Activate and Learn',
    emphasis: 'Deliver approved work under controlled conditions and learn from operating results.',
    objectives: [
      'Implement approved initiatives through controlled delivery',
      'Measure operational performance',
      'Support workforce adoption',
      'Refine controls and standards',
    ],
  },
  {
    title: 'Scale and Improve',
    emphasis: 'Expand only where evidence, capacity, and governance support continued investment.',
    objectives: [
      'Expand approved capabilities where evidence supports reuse',
      'Strengthen enterprise operating practices',
      'Review performance, risk, and cost',
      'Adjust the investment portfolio',
    ],
  },
]

export const deliverables: DetailItem[] = [
  {
    title: 'Enterprise landscape and readiness assessment',
    description:
      'Provides executives with a shared picture of applications, capabilities, operating context, dependencies, and readiness conditions that affect AI investment.',
  },
  {
    title: 'Business-capability and operating-context model',
    description:
      'Connects mission services to the operating structures and workflows that must inform portfolio decisions.',
  },
  {
    title: 'Confidential AI opportunity portfolio',
    description:
      'Documents agency-specific opportunities, ownership, dependencies, readiness, risk, and evidence requirements within a controlled engagement environment.',
  },
  {
    title: 'Prioritization and business-case framework',
    description:
      'Gives agencies a reusable way to compare investments using criteria they approve and evidence they can defend.',
  },
  {
    title: 'Enterprise reuse and investment perspective',
    description:
      'Highlights where shared foundations or coordinated sequencing can reduce duplication across organizational boundaries.',
  },
  {
    title: 'Responsible-AI governance and operating model',
    description:
      'Defines decision rights, oversight expectations, control requirements, and review practices that travel with delivery.',
  },
  {
    title: 'Architecture principles and technology options',
    description:
      'Frames platform-neutral direction so technology choices follow mission need, constraints, and operating realities.',
  },
  {
    title: 'Sequenced implementation roadmap',
    description:
      'Organizes approved work into horizons that reflect readiness, value, capacity, and institutional risk tolerance.',
  },
  {
    title: 'Initiative charters and procurement inputs',
    description:
      'Prepares selected investments with ownership, scope boundaries, control expectations, and acquisition-ready framing.',
  },
  {
    title: 'Performance-measurement framework',
    description:
      'Defines how mission, workforce, constituent, operational, and governance outcomes will be reviewed over time.',
  },
  {
    title: 'Adoption and change strategy',
    description:
      'Addresses workforce readiness, communication, operating ownership, and the practices needed for sustained use.',
  },
  {
    title: 'Executive decision package',
    description:
      'Consolidates recommendations, trade-offs, sequencing, and open questions into a format suited for leadership decisions.',
  },
]

export const outcomeCategories: OutcomeCategory[] = [
  {
    title: 'Mission Outcomes',
    summary: 'Whether AI-enabled work advances the public purposes the agency is charged to deliver.',
    questions: [
      'Are priority mission services becoming more timely and accessible?',
      'Do investment decisions remain visibly tied to stated policy and program goals?',
      'Is evidence of mission effect reviewed before broader expansion?',
    ],
  },
  {
    title: 'Workforce Experience',
    summary: 'Whether staff capacity, clarity, and working conditions improve as capabilities are introduced.',
    questions: [
      'Is staff capacity shifting toward higher-value work?',
      'Do employees have clear roles, guidance, and support for AI-enabled tasks?',
      'Are adoption barriers identified and addressed through operating practice?',
    ],
  },
  {
    title: 'Constituent Experience',
    summary: 'Whether people who rely on agency services encounter clearer, more reliable interactions.',
    questions: [
      'Are services becoming easier to understand and complete?',
      'Do constituents experience fewer unnecessary delays or handoffs?',
      'Is equitable access considered when service channels change?',
    ],
  },
  {
    title: 'Operational Performance',
    summary: 'Whether delivery quality, throughput, and operating cost are reviewed with discipline.',
    questions: [
      'Are quality, risk, adoption, and operating cost being reviewed?',
      'Do operating owners have a practical view of service health?',
      'Are dependencies and bottlenecks visible early enough to act?',
    ],
  },
  {
    title: 'Governance and Trust',
    summary: 'Whether controls, oversight, and accountability remain effective as capabilities mature.',
    questions: [
      'Are implementation decisions supported by traceable evidence?',
      'Are governance controls functioning as intended?',
      'Do review forums have enough information to expand, adjust, or stop work?',
    ],
  },
]

export const differentiators = [
  {
    title: 'Public-sector operating context',
    description:
      'MTX evaluates AI within the policy, workforce, service-delivery, accountability, and procurement environment of government.',
  },
  {
    title: 'Enterprise portfolio perspective',
    description:
      'The engagement connects AI decisions to application strategy, shared capabilities, modernization dependencies, and organizational ownership.',
  },
  {
    title: 'Platform-neutral evaluation',
    description:
      'Technology choices are assessed against agency requirements rather than predetermined around one provider or model.',
  },
  {
    title: 'Strategy-to-implementation continuity',
    description:
      'MTX can carry approved decisions into design, implementation, adoption, evaluation, and ongoing service improvement.',
  },
]
