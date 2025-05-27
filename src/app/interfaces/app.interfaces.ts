export interface IData {
  accounts: IAccounts;
  dashboard: DashboardData;
  menu: {
    accounts: IAccount;
    tasks: number;
  }
}

// IAccount
export interface IAccount {
  id: string;
  name: string;
  email: string;
  surname: string;
  fullName: string;
}

export interface IAccounts {
  accounts: IAccount[];
  maritimeLogisticsCorp: IMaritimeLogisticsCorp;
  performanceMetrics: IPerformanceMetrics;
  policies: {
    rows: IPolicySummaryRow[];
    totals: IPolicySummaryTotals;
  }
  accountStatus: {
    steps: accountStatusSteps[];
  }
  complianceAndDocumentation: {
    docs: string[];
  }
  accountDetails: {
    desicionSupport: DecisionSupport;
    riscAssessment: RiscAssessment;
    documentsAndCompliance: DocumentsAndCompliance;
  },
  communication: CommunicationItem[];
}

// IMaritimeLogisticsCorp
export interface IMaritimeLogisticsCorp {
  name?: string;
  type?: string;
  accountNumber?: string;
  address?: string;
  broker?: string;
  underwriter?: string;
}

// IPerformanceMetrics
export interface IPerformanceMetrics {
  winnability: {
    title: string;
    value: number;
  },
  lossRatio: {
    value: number;
    target: number;
  },
  premiumGrowth: {
    value: number;
    note: string;
    current: string;
    target: string;
  },
  exposureDistribution: IExposureDistribution[]
}

export interface IExposureDistribution {
  label: string;
  value: number;
}

// accountStatusSteps
export interface accountStatusSteps {
  label: string;
  completed: boolean;
}

// IPolicy
export interface IPolicySummaryRow {
  line: string;
  policyNumber: string;
  effectiveDate: string;
  expirationDate: string;
  status: 'Active' | 'Pending' | string;
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renewalPremium: number;
  rateChange: number | null;
  lossRatio: number | null;
}

export interface IPolicySummaryTotals {
  count: number;
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renewalPremium: number;
  rateChangeAvg: number;
  lossRatioAvg: number;
}

// Communication

export interface CommunicationItem {
  status: string;
  title: string;
  author: string;
  date: string;
  message: string;
  attachments: number;
  replied: boolean;
}

// Decision Support
export interface DecisionSupport {
  winnabilityInsights: WinnabilityInsights;
  exposureReview: SimpleSection;
  portfolioStrategyAlignment: SimpleSection;
  BrokerAnalytics: SimpleSection;
}

export interface WinnabilityInsights {
  overallScore: number;
  label: string;
  trend: number[];
  position: {
    self: number;
    marketAverage: number;
    topCompetitor: number;
  };
  increasingFactors: ImpactFactor[];
  decreasingFactors: ImpactFactor[];
  recommendations: Recommendation[];
}

export interface ImpactFactor {
  name: string;
  impact: number;
}

export interface Recommendation {
  title: string;
  description: string;
  action: string;
}

export interface SimpleSection {
  title: string;
}

// Risk Assessment
export interface RiscAssessment {
  risc1: SimpleSection;
  risc2: SimpleSection;
  risc3: SimpleSection;
  risc4: SimpleSection;
  risc5: SimpleSection;
  risc6: SimpleSection;
}

// Documents & Compliance
export interface DocumentsAndCompliance {
  document: SimpleSection;
  compliance: SimpleSection;
}

// DashboardData
export interface DashboardData {
  workQueue: WorkQueue;
  portfolioGoals: PortfolioGoals;
  marketIntelligence: MarketNews[];
  myAccounts: AccountSummary[];
}

// Work Queue
export interface WorkQueue {
  tabs: QueueTab[];
  items: WorkQueueItem[];
}

export interface QueueTab {
  label: string;
  count: number;
}

export interface WorkQueueItem {
  originator: {
    initials: string;
    name: string;
  };
  client: {
    name: string;
    line: string;
  };
  type: string;
  status: string;
  created: string;
}

// Portfolio Goals
export interface PortfolioGoals {
  lossRatio: {
    title: string;
    target: number;
    value: number;
    statusText: string;
    statusColor: string;
  };
  renewalRetention: {
    title: string;
    targetRange: string;
    value: number;
    statusText: string;
    statusColor: string;
  };
  newBusiness: {
    title: string;
    value: number;
    target: number;
    currency: string;
    percent: number;
  };
  annualGWP: {
    title: string;
    value: number;
    target: number;
    currency: string;
    percent: number;
  };
}

// Market Intelligence
export interface MarketNews {
  title: string;
  color: string;
}

export interface AccountSummary {
  name: string;
  type: string;
  line: string;
  broker: string;
  renewalDate: string;
  premium: number;
  premiumLabel: string;
  ratedPremium: string;
  lossRatio: number;
  lossRatioColor: string;
  appetite: string;
  appetiteColor: string;
  status: string;
  statusColor: string;
  triage: number;
  winnability: number;
  winnabilityLabel: string;
}
