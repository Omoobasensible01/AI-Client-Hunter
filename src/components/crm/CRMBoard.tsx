import CRMColumn from "./CRMColumn";
import { mockDeals } from "@/lib/mock-crm";

const stages = [
  "New Lead",
  "Contacted",
  "Proposal",
  "Won",
  "Lost",
] as const;

export default function CRMBoard() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {stages.map((stage) => (
        <div key={stage} className="min-w-[320px]">
          <CRMColumn
            title={stage}
            deals={mockDeals.filter(
              (deal) => deal.stage === stage
            )}
          />
        </div>
      ))}
    </div>
  );
}