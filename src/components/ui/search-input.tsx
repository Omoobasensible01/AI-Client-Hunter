"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  placeholder?: string;
}

export function SearchInput({
  placeholder = "Search..."
}: SearchInputProps) {
  return (
    <div className="relative">
      <Search
        className="absolute left-3 top-3 h-4 w-4 text-slate-400"
      />

      <Input
        className="pl-10"
        placeholder={placeholder}
      />
    </div>
  );
}