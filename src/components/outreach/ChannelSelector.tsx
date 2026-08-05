import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const channels = ["Email", "LinkedIn", "SMS"];

export default function ChannelSelector() {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardHeader className="px-6 py-5">
        <CardTitle>Channel</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2 p-6 pt-0">
        {channels.map((channel) => (
          <span
            key={channel}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
          >
            {channel}
          </span>
        ))}
      </CardContent>
    </Card>
  );
}
