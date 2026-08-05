interface OpportunityScoreProps {
  score: number;
  label?: string;
}

export default function OpportunityScore({
  score,
  label = "Opportunity",
}: OpportunityScoreProps) {
  const ringColor = score >= 90 ? "ring-emerald-500" : score >= 75 ? "ring-sky-500" : "ring-amber-500";
  const bgColor = score >= 90 ? "bg-emerald-100 text-emerald-700" : score >= 75 ? "bg-sky-100 text-sky-700" : "bg-amber-100 text-amber-700";

  return (
    <div className={`inline-flex items-center gap-3 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-sm ring-1 ${ringColor}`}>
      <div className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColor} font-semibold`}>
        {score}
      </div>
      <div className="min-w-25 text-sm text-slate-600">
        <div className="font-medium text-slate-900">{label}</div>
        <div className="text-xs">Score</div>
      </div>
    </div>
  );
}
