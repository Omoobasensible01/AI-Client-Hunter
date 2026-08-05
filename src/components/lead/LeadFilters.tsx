"use client";

interface LeadFiltersProps {
  industry: string;
  country: string;
  onIndustryChange: (value: string) => void;
  onCountryChange: (value: string) => void;
  onClear: () => void;
}

export default function LeadFilters({
  industry,
  country,
  onIndustryChange,
  onCountryChange,
  onClear,
}: LeadFiltersProps) {
  return (
    <aside className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">Filters</h2>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Industry
        </label>

        <select
          value={industry}
          onChange={(e) => onIndustryChange(e.target.value)}
          className="w-full rounded-xl border p-3"
        >
          <option value="">All Industries</option>
          <option>Dental Clinic</option>
          <option>Healthcare</option>
          <option>Automotive</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Country
        </label>

        <select
          value={country}
          onChange={(e) => onCountryChange(e.target.value)}
          className="w-full rounded-xl border p-3"
        >
          <option value="">All Countries</option>
          <option>USA</option>
          <option>Canada</option>
          <option>United Kingdom</option>
        </select>
      </div>

      <button
        onClick={onClear}
        className="w-full rounded-xl bg-red-500 py-3 font-medium text-white"
      >
        Clear Filters
      </button>
    </aside>
  );
}