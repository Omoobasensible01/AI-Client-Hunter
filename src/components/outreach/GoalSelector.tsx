interface GoalSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
}

const goals = [
  "Book Discovery Call",
  "Offer Free Audit",
  "Schedule Demo",
  "Send Proposal",
  "Follow Up",
  "Reconnect",
];

export default function GoalSelector({
  value,
  onChange,
}: GoalSelectorProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        Goal
      </label>

      <select
        value={value ?? goals[0]}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-xl border p-3"
      >
        {goals.map((goal) => (
          <option
            key={goal}
            value={goal}
          >
            {goal}
          </option>
        ))}
      </select>
    </div>
  );
}