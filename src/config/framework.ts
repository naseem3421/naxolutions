export interface DiagnosticStage {
  id: number;
  code: string;
  name: string;
  question: string;
  commonBreak: string;
  diagnosticMetric: string;
  consequence: string;
}

export const REVENUE_JOURNEY_STAGES: DiagnosticStage[] = [
  {
    id: 1,
    code: '01',
    name: 'ATTENTION',
    question: 'Are the right people noticing you?',
    commonBreak: 'Attracting generic traffic rather than high-intent decision makers.',
    diagnosticMetric: 'High click volume with zero target audience match.',
    consequence: 'Wasted acquisition spend on non-buyers.',
  },
  {
    id: 2,
    code: '02',
    name: 'INTEREST',
    question: 'Do they immediately understand what you actually offer?',
    commonBreak: 'Vague marketing jargon and complex messaging confuse the prospect.',
    diagnosticMetric: 'Bounce within 6-12 seconds on the landing page.',
    consequence: 'Interested visitors exit without grasping the core value.',
  },
  {
    id: 3,
    code: '03',
    name: 'TRUST',
    question: 'Do they have enough reason to believe you?',
    commonBreak: 'Lack of relevant case evidence, clear proof points, or commercial authority.',
    diagnosticMetric: 'Low engagement on credibility signals.',
    consequence: 'Prospects doubt feasibility and seek alternative options.',
  },
  {
    id: 4,
    code: '04',
    name: 'ENQUIRE',
    question: 'Is contacting you easy?',
    commonBreak: 'Long forms, unclear call-to-actions, or restrictive contact channels.',
    diagnosticMetric: '80%+ form initiation drop-off before submission.',
    consequence: 'High-intent prospects leave at the final micro-step.',
  },
  {
    id: 5,
    code: '05',
    name: 'RESPOND',
    question: 'How quickly does someone respond?',
    commonBreak: 'Inbound requests take hours or days to receive a human reply.',
    diagnosticMetric: 'Average response time exceeding 3 hours.',
    consequence: 'Buyer intent cools by 80%; lead contacts competitors.',
  },
  {
    id: 6,
    code: '06',
    name: 'QUALIFY',
    question: 'Can you identify serious opportunities?',
    commonBreak: 'No automated or structured filter to separate real prospects from tire-kickers.',
    diagnosticMetric: '50%+ of sales calls booked with budget-less leads.',
    consequence: 'Sales reps waste critical capacity on unfit prospects.',
  },
  {
    id: 7,
    code: '07',
    name: 'CONVERSE',
    question: 'Does the sales conversation move toward clarity?',
    commonBreak: 'Unstructured consultations without clear diagnostic direction.',
    diagnosticMetric: 'Indefinite "let me think about it" call ends.',
    consequence: 'Proposals sent into ambiguous consideration state.',
  },
  {
    id: 8,
    code: '08',
    name: 'FOLLOW UP',
    question: "Does the conversation continue when the lead doesn't buy immediately?",
    commonBreak: 'Zero systematic nurture; follow-up relies entirely on sales rep memory.',
    diagnosticMetric: '70%+ leads forgotten after one unreturned email.',
    consequence: 'Huge lost revenue from ready buyers who were simply busy.',
  },
  {
    id: 9,
    code: '09',
    name: 'DECIDE',
    question: 'Does the prospect know exactly what happens next?',
    commonBreak: 'Unclear pricing structures, hidden friction, or confusing proposal terms.',
    diagnosticMetric: 'Stalled decision phase lasting weeks without milestone.',
    consequence: 'Deals drag out indefinitely or get cancelled by default.',
  },
  {
    id: 10,
    code: '10',
    name: 'REVENUE',
    question: 'How much friction exists between intent and payment?',
    commonBreak: 'Cumbersome onboarding, manual paperwork, or delayed invoicing.',
    diagnosticMetric: 'Drop-off between verbal agreement and signed agreement.',
    consequence: 'Buyer regret or administrative friction kills closed deals.',
  },
];
