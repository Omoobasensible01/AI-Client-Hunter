import type { Deal } from "@/lib/mock-crm";

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({
  deal,
}: DealCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-slate-900">
      <h3 className="font-semibold">
        {deal.company}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Contact: {deal.owner}
      </p>

      <p className="mt-3 text-xl font-bold text-emerald-600">
        ${deal.value.toLocaleString()}
      </p>

      <button className="mt-4 w-full rounded-xl bg-emerald-600 py-2 text-white transition hover:bg-emerald-700">
        View Deal
      </button>
    </div>
  );
}