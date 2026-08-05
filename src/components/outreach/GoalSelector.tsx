import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const goals = ["Book a call", "Share a resource", "Start a conversation"];

export default function GoalSelector() {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardHeader className="px-6 py-5">
        <CardTitle>Goal</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 p-6 pt-0">
        {goals.map((goal) => (
          <span
            key={goal}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
          >
            {goal}
          </span>
        ))}
      </CardContent>
    </Card>
  );
}
