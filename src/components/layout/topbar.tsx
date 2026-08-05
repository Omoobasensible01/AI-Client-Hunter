export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <input
        type="search"
        placeholder="Search companies, leads, or contacts..."
        className="w-full max-w-md rounded-xl border px-4 py-2"
      />

      <div className="flex items-center gap-3">
        {/* Notifications */}
        {/* Theme Toggle */}
        {/* User Menu */}
      </div>
    </header>
  );
}