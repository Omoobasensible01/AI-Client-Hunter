import AIMessageEditor from "@/components/outreach/AIMessageEditor";
import CampaignSidebar from "@/components/outreach/CampaignSidebar";
import ChannelSelector from "@/components/outreach/ChannelSelector";
import GoalSelector from "@/components/outreach/GoalSelector";
import MessageActions from "@/components/outreach/MessageActions";
import MessagePreview from "@/components/outreach/MessagePreview";
import ToneSelector from "@/components/outreach/ToneSelector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const campaignIdeas = [
  {
    title: "Personalized LinkedIn follow-up",
    description: "Send a tailored note referencing the lead’s recent site update and latest product interest.",
  },
  {
    title: "Offer a redesign audit",
    description: "Share a quick high-impact audit with three concrete recommendations the lead can act on.",
  },
  {
    title: "Book a discovery call",
    description: "Use a short, friendly CTA to schedule a call before the lead loses momentum.",
  },
];

const outreachStats = [
  { label: "Drafts ready", value: "12" },
  { label: "Follow-ups due", value: "4" },
  { label: "Response rate", value: "31%" },
];

export default function OutreachPage() {
  return (
    <main className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-600">
          AI Outreach
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Launch your next outreach sequence
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Turn lead insights into timely messaging, follow-ups, and outreach plays that feel personal and relevant.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {outreachStats.map((stat) => (
          <Card key={stat.label} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <CardContent className="p-5">
              <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.6fr_0.8fr]">
        <div className="space-y-6">
          <div className="grid gap-4 md:grid-cols-3">
            <ChannelSelector />
            <ToneSelector />
            <GoalSelector />
          </div>

          <AIMessageEditor />
          <MessagePreview />
          <MessageActions />
        </div>

        <div className="space-y-6">
          <CampaignSidebar />

          <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <CardHeader className="border-b border-slate-100 px-6 py-5">
              <CardTitle>Suggested outreach ideas</CardTitle>
              <CardDescription>
                Use these prompts to create thoughtful follow-up messages for active leads.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 p-6">
              {campaignIdeas.map((idea) => (
                <div
                  key={idea.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h2 className="text-base font-semibold text-slate-900">{idea.title}</h2>
                  <p className="mt-2 text-sm text-slate-600">{idea.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
