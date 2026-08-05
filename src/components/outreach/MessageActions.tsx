interface Props {
  onCopy?: () => void;
  onRegenerate?: () => void;
}

export default function MessageActions({
  onCopy,
  onRegenerate,
}: Props) {
  return (
    <div className="mt-6 flex gap-3">
      <button
        onClick={onRegenerate}
        className="rounded-xl bg-blue-600 px-5 py-3 text-white"
      >
        Regenerate
      </button>

      <button
        onClick={onCopy}
        className="rounded-xl bg-emerald-600 px-5 py-3 text-white"
      >
        Copy
      </button>
    </div>
  );
}