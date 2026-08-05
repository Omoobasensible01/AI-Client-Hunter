import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
  { label: "Status", value: "Drafting" },
  { label: "Audience", value: "Design leads" },
  { label: "Last updated", value: "2h ago" },
];

export default function CampaignSidebar() {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardHeader className="px-6 py-5">
        <CardTitle>Campaign</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 p-6 pt-0">
        {items.map((item) => (
          <div key={item.label} className="rounded-2xl bg-slate-50 p-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
            <p className="mt-1 text-sm font-medium text-slate-800">{item.value}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
