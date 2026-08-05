import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MessagePreview() {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardHeader className="border-b border-slate-100 px-6 py-5">
        <CardTitle>Preview</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          Hi {"{contact_name}"}, I noticed your team is investing in redesign and thought I could share a few ideas that may help.
        </div>
      </CardContent>
    </Card>
  );
}
