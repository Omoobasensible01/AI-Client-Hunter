"use client";

import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function LeadSearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />

      <input
        className="w-full rounded-xl border py-3 pl-12 pr-4"
        placeholder="Search businesses..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}