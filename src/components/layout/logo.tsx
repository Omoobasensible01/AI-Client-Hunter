export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-black">
        AI
      </div>

      <div>
        <h1 className="font-bold">
          AI Client Hunter
        </h1>

        <p className="text-xs text-gray-500">
          Sales Intelligence
        </p>
      </div>
    </div>
  )
}