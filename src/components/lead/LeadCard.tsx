interface Lead {
  company: string;
  industry: string;
  city: string;
  country: string;
  opportunity: number;
}

export default function LeadCard({
  lead,
}: {
  lead: Lead;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        {lead.company}
      </h2>

      <p className="mt-2 text-gray-500">
        {lead.industry}
      </p>

      <p className="mt-4">
        {lead.city}, {lead.country}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Opportunity {lead.opportunity}
        </span>

        <button className="rounded-xl bg-emerald-600 px-4 py-2 text-white">
          View
        </button>
      </div>
    </div>
  );
}