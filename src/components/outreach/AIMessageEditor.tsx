import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AIMessageEditor() {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardHeader className="border-b border-slate-100 px-6 py-5">
        <CardTitle>AI message editor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-900">Draft message</p>
          <p className="mt-2 text-sm text-slate-600">
            Hi {"{company}"}, I reviewed your team’s recent redesign work and thought this could be a strong fit for your next initiative.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500">
          Add personalization tokens, urgency, and a CTA here.
        </div>
      </CardContent>
    </Card>
  );
}
