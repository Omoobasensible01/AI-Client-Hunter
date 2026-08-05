import DealCard from "./DealCard";
import type { Deal } from "@/lib/mock-crm";

interface CRMColumnProps {
  title: string;
  deals: Deal[];
}

export default function CRMColumn({
  title,
  deals,
}: CRMColumnProps) {
  return (
    <div className="rounded-2xl bg-slate-100 p-4 dark:bg-slate-800">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold">{title}</h2>

        <span className="rounded-full bg-white px-3 py-1 text-sm dark:bg-slate-700">
          {deals.length}
        </span>
      </div>

      <div className="space-y-4">
        {deals.map((deal) => (
          <DealCard
            key={deal.id}
            deal={deal}
          />
        ))}
      </div>
    </div>
  );
}