interface ToneSelectorProps {
  value?: string;
  onChange?: (value: string) => void;
}

const tones = [
  "Friendly",
  "Professional",
  "Confident",
  "Consultative",
  "Short",
  "Formal",
];

export default function ToneSelector({
  value,
  onChange,
}: ToneSelectorProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        Tone
      </label>

      <select
        value={value ?? "Friendly"}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-xl border p-3"
      >
        {tones.map((tone) => (
          <option key={tone} value={tone}>
            {tone}
          </option>
        ))}
      </select>
    </div>
  );
}