import { ActivityTimeline } from "@/components/ui/activity-timeline";

interface LeadProfileProps {
  lead: {
    id: number;
    company: string;
    industry: string;
    city: string;
    country: string;
    employees: number;
    websiteScore: number;
    estimatedRevenue: number;
    opportunity: number;
  };
}

export default function LeadProfile({ lead }: LeadProfileProps) {
  return (
    <div className="space-y-6 rounded-3xl border bg-white p-8 shadow-sm">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Lead profile
        </p>
        <h1 className="text-3xl font-semibold">{lead.company}</h1>
        <p className="text-sm text-slate-500">
          {lead.industry} · {lead.city}, {lead.country}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Employees</p>
          <p className="mt-2 text-2xl font-semibold">{lead.employees}</p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Website score</p>
          <p className="mt-2 text-2xl font-semibold">{lead.websiteScore}%</p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Estimated revenue</p>
          <p className="mt-2 text-2xl font-semibold">${lead.estimatedRevenue.toLocaleString()}</p>
        </div>

        <div className="rounded-3xl bg-slate-50 p-5">
          <p className="text-sm text-slate-500">Opportunity</p>
          <p className="mt-2 text-2xl font-semibold">{lead.opportunity}</p>
        </div>
      </div>

      <ActivityTimeline
        events={[
          { title: "LinkedIn outreach sent", timestamp: "Today" },
          { title: "Site visit recorded", timestamp: "Yesterday" },
          { title: "Discovery call requested", timestamp: "2 days ago" },
        ]}
      />

      <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
        <h2 className="text-base font-semibold text-slate-900">Next steps</h2>
        <p className="mt-2 text-sm text-slate-600">
          Use this profile view to present deeper lead details, qualify the opportunity, and decide on the next outreach action.
        </p>
      </div>
    </div>
  );
}
