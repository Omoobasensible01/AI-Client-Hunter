interface Props {
  company?: string;
  channel?: string;
  tone?: string;
  goal?: string;
}

export default function CampaignSidebar({
  company = "AI Client Hunter",
  channel = "Email",
  tone = "Professional",
  goal = "Book Discovery Call",
}: Props) {
  return (
    <aside className="rounded-2xl border bg-white p-6">
      <h2 className="text-xl font-bold">
        Campaign
      </h2>

      <div className="mt-6 space-y-4">
        <p>
          <strong>Company:</strong> {company}
        </p>

        <p>
          <strong>Channel:</strong> {channel}
        </p>

        <p>
          <strong>Tone:</strong> {tone}
        </p>

        <p>
          <strong>Goal:</strong> {goal}
        </p>
      </div>
    </aside>
  );
}