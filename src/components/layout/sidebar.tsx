import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-slate-950 p-6 text-slate-100 lg:flex lg:flex-col">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          AI Client Hunter
        </p>
      </div>

      <nav className="space-y-2">
        <Link href="/" className="block rounded-xl px-3 py-2 text-sm hover:bg-slate-800">
          Overview
        </Link>
        <Link href="/leads" className="block rounded-xl px-3 py-2 text-sm hover:bg-slate-800">
          Leads
        </Link>
        <Link href="/intelligence" className="block rounded-xl px-3 py-2 text-sm hover:bg-slate-800">
          Intelligence
        </Link>
      </nav>
    </aside>
  );
}
