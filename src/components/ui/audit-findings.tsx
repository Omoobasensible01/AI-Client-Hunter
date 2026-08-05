"use client";

export type AuditFindingSeverity = "high" | "medium" | "passed";

export interface AuditFinding {
  category: string;
  severity: AuditFindingSeverity;
  priority: string;
  description: string;
}

const severityStyles: Record<AuditFindingSeverity, string> = {
  high: "bg-rose-600 text-white",
  medium: "bg-amber-500 text-white",
  passed: "bg-emerald-600 text-white",
};

export function AuditFindingCard({ finding }: { finding: AuditFinding }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {finding.category}
          </p>
          <p className="mt-1 text-sm text-slate-500">{finding.priority}</p>
        </div>

        <span className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] ${severityStyles[finding.severity]}`}>
          {finding.severity === "passed" ? "Passed" : finding.severity === "high" ? "High" : "Medium"}
        </span>
      </div>

      <p className="mt-6 text-sm leading-6 text-slate-600">
        {finding.description}
      </p>
    </div>
  );
}

export function AuditFindings({ findings }: { findings: AuditFinding[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {findings.map((finding) => (
        <AuditFindingCard key={`${finding.category}-${finding.priority}`} finding={finding} />
      ))}
    </div>
  );
}
