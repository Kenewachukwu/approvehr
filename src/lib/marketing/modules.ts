/**
 * Module content for the marketing site. Copy lives here rather than inline in
 * JSX so the homepage grid, the platform overview and the module pages all
 * quote the product identically — a claim can never drift between two places.
 *
 * Rule for every line below: describe what the software does, not how the
 * buyer will feel about it. No "seamless", no "empower", no "revolutionise".
 */

export type ModuleId =
  | "core-hr"
  | "payroll"
  | "hiring"
  | "time"
  | "performance"
  | "desk";

export type Wash = "indigo" | "green" | "amber" | "blue" | "violet" | "rose";

export type ModuleDef = {
  id: ModuleId;
  label: string;
  /** One line, used on cards and in the platform rail. */
  headline: string;
  /** Two sentences maximum. Says what it does. */
  blurb: string;
  wash: Wash;
  /** Bullets for the module page. Each is a capability, not a benefit. */
  capabilities: { title: string; detail: string }[];
  /** The specific Nigerian obligation this module handles, where it has one. */
  statutory?: string;
};

export const MODULES: ModuleDef[] = [
  {
    id: "core-hr",
    label: "Core HR",
    headline: "One record per person, and it is always current",
    blurb:
      "Employee records, contracts, documents and org structure in one place. Staff update their own details, and changes route for approval before they land.",
    wash: "indigo",
    capabilities: [
      {
        title: "Employee records",
        detail:
          "Personal details, employment history, bank and pension identifiers, next of kin, and every document attached to the person rather than a folder.",
      },
      {
        title: "Self-service",
        detail:
          "Staff change their own address, bank account and emergency contact. Sensitive fields route to HR for approval before they take effect.",
      },
      {
        title: "Org structure",
        detail:
          "Departments, reporting lines and multiple entities. The chart is generated from the records, so it cannot fall out of date.",
      },
      {
        title: "Documents and letters",
        detail:
          "Generate confirmation letters, contract amendments and reference letters from templates that fill themselves from the record.",
      },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    headline: "Payroll that already knows Nigerian law",
    blurb:
      "Run payroll with PAYE, pension and NHF calculated against current bands. Every run produces the schedules your PFA and state IRS actually ask for.",
    wash: "green",
    statutory: "PAYE · Pension · NHF · NSITF · ITF",
    capabilities: [
      {
        title: "Statutory deductions",
        detail:
          "PAYE against the current Finance Act bands, 8% employee and 10% employer pension, and NHF. Reliefs apply in the right order without manual adjustment.",
      },
      {
        title: "Filing schedules",
        detail:
          "Pension schedules per PFA, PAYE schedules per state IRS, and NHF returns generated from the run rather than rebuilt in a spreadsheet.",
      },
      {
        title: "Approvals before money moves",
        detail:
          "A run is prepared, reviewed and approved by named people. The payment file is only generated after approval, and the trail is kept.",
      },
      {
        title: "Loans and salary advances",
        detail:
          "Staff loans with repayment schedules that deduct automatically, and earned wage access against salary already worked.",
      },
      {
        title: "Payslips",
        detail:
          "Every employee gets an itemised payslip showing gross, each deduction, and net — in the app and by email.",
      },
    ],
  },
  {
    id: "hiring",
    label: "Hiring & ATS",
    headline: "A full applicant tracking system, from requisition to signed offer",
    blurb:
      "Post a role, track every applicant through a pipeline you configure, and collect structured scorecards instead of opinions in a group chat. An accepted offer becomes an employee record without anyone retyping it.",
    wash: "amber",
    capabilities: [
      {
        title: "Requisitions with approval",
        detail:
          "A role is opened with a band, a headcount and a hiring team, then approved by the budget holder before it is published.",
      },
      {
        title: "Pipeline you configure",
        detail:
          "Sourcing, shortlisting, pre-screening, interview and selection. Turn off the stages a junior role does not need.",
      },
      {
        title: "Knockout screening",
        detail:
          "Ask the questions that disqualify early — right to work, notice period, salary expectation — and see the answers on the candidate card.",
      },
      {
        title: "Structured scorecards",
        detail:
          "Interviewers rate agreed competencies and give a recommendation. A candidate cannot leave the interview stage until every scorecard is in.",
      },
      {
        title: "Offers",
        detail:
          "Generate the offer from the requisition band, route it for approval, and track acceptance.",
      },
    ],
  },
  {
    id: "time",
    label: "Time and leave",
    headline: "Attendance and leave that agree with payroll",
    blurb:
      "Clock-in, shifts, and leave balances that accrue by your own policy. What time tracking records is what payroll pays.",
    wash: "blue",
    capabilities: [
      {
        title: "Clock in and out",
        detail:
          "From the web or a phone, with work locations so a site team clocks in where they actually are.",
      },
      {
        title: "Leave policies",
        detail:
          "Annual, sick, maternity, paternity and compassionate leave with your own accrual, carry-over and expiry rules.",
      },
      {
        title: "Approval chains",
        detail:
          "Requests route to the line manager, then HR where the policy demands it. Approvers see the team calendar before deciding.",
      },
      {
        title: "Public holidays",
        detail:
          "Nigerian public holidays maintained for you, including the ones announced at short notice.",
      },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    headline: "Reviews with evidence attached",
    blurb:
      "Set objectives, run review cycles on a schedule, and score against competencies you define. Ratings carry the evidence that produced them.",
    wash: "violet",
    capabilities: [
      {
        title: "Objectives and goals",
        detail:
          "Company goals cascade to teams and individuals, so an objective can be traced up to what it serves.",
      },
      {
        title: "Review cycles",
        detail:
          "Self, manager and peer review on a cycle you schedule, with reminders that go out without you chasing.",
      },
      {
        title: "Competency scoring",
        detail:
          "Define the competencies that matter per role and weight them. Scores are comparable across a department.",
      },
      {
        title: "Calibration",
        detail:
          "See rating distribution across teams before anything is published, so one lenient manager does not skew a cycle.",
      },
    ],
  },
  {
    id: "desk",
    label: "Help desk",
    headline: "Every HR question in one queue",
    blurb:
      "Staff raise requests instead of messaging four people. Tickets carry categories, owners and response targets, and the answers become a knowledge base.",
    wash: "rose",
    capabilities: [
      {
        title: "Ticketing",
        detail:
          "Categorised requests with an owner, a due time and a full thread, including attachments.",
      },
      {
        title: "Response targets",
        detail:
          "Set what a category should be answered within, and see what is breaching before the employee has to chase.",
      },
      {
        title: "Knowledge base",
        detail:
          "Publish the answers people ask for repeatedly, so the queue shrinks instead of growing with headcount.",
      },
    ],
  },
];

export const moduleById = (id: ModuleId) => MODULES.find((m) => m.id === id)!;

export const WASH_CLASS: Record<Wash, string> = {
  indigo: "bg-wash-indigo",
  green: "bg-wash-green",
  amber: "bg-wash-amber",
  blue: "bg-wash-blue",
  violet: "bg-wash-violet",
  rose: "bg-wash-rose",
};

export const CHIP_CLASS: Record<Wash, string> = {
  indigo: "bg-accent text-white",
  green: "bg-success-strong text-white",
  amber: "bg-warning text-slate",
  blue: "bg-info text-white",
  violet: "bg-[#7c5cd6] text-white",
  rose: "bg-danger text-white",
};
