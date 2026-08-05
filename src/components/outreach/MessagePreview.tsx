interface Props {
  message?: string;
  setMessage?: (value: string) => void;
}

export default function MessagePreview({
  message = "Hi there, I’d love to share a few ideas tailored to your current goals.",
  setMessage,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-4 text-lg font-semibold">
        Generated Message
      </h2>

      <textarea
        value={message}
        onChange={(e) => setMessage?.(e.target.value)}
        className="min-h-100 w-full rounded-xl border p-4"
      />
    </div>
  );
}