export type DetailItem = {
  title: string
  description: string
}

export type Challenge = {
  title: string
  challenge: string
  response: string
}

export type EnterpriseLayer = {
  title: string
  assesses: string
  why: string
  decision: string
}

export type Phase = {
  eyebrow: string
  title: string
  description: string
  outputs: string[]
}

export type QualitativeLevel = 'Developing' | 'Moderate' | 'Strong' | 'Requires attention'

export type PortfolioProfile = {
  missionAlignment: QualitativeLevel
  enterpriseReuse: QualitativeLevel
  organizationalReadiness: QualitativeLevel
  dataReadiness: QualitativeLevel
  deliveryFeasibility: QualitativeLevel
  governanceSensitivity: QualitativeLevel
  measurableValue: QualitativeLevel
}

export type PortfolioItem = {
  id: string
  name: string
  category: string
  profile: PortfolioProfile
}

export type GovernanceStage = {
  title: string
  description: string
  focus: string[]
}

export type ArchitectureLayer = {
  title: string
  description: string
  items: string[]
  tone: string
}

export type RoadmapHorizon = {
  title: string
  objectives: string[]
  emphasis: string
}

export type OutcomeCategory = {
  title: string
  summary: string
  questions: string[]
}
