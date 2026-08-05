export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          AI Client Hunter
        </h1>

        <p className="mt-4 text-lg text-slate-300">
          Find. Analyze. Convert.
        </p>

        <button className="mt-10 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400">
          Launch Dashboard
        </button>
      </div>
    </main>
  );
}