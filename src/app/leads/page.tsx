"use client";

import { useMemo, useState } from "react";

import LeadCard from "@/components/lead/LeadCard";
import LeadFilters from "@/components/lead/LeadFilters";
import LeadSearchBar from "@/components/lead/LeadSearchBar";
import { EmptyState } from "@/components/ui/empty-state";

import { mockLeads } from "@/lib/mock-leads";

type SortByOption = "company" | "website" | "opportunity";

export default function LeadsPage() {
  const [query, setQuery] = useState("");
  const [industry, setIndustry] = useState("");
  const [country, setCountry] = useState("");
  const [sortBy, setSortBy] = useState<SortByOption>("opportunity");

  const filteredLeads = useMemo(() => {
    return mockLeads.filter((lead) => {
      const matchesQuery =
        lead.company.toLowerCase().includes(query.toLowerCase());

      const matchesIndustry =
        industry === "" || lead.industry === industry;

      const matchesCountry =
        country === "" || lead.country === country;

      return (
        matchesQuery &&
        matchesIndustry &&
        matchesCountry
      );
    });
  }, [query, industry, country]);

  const sortedLeads = [...filteredLeads].sort((a, b) => {
    switch (sortBy) {
      case "company":
        return a.company.localeCompare(b.company);

      case "website":
        return b.websiteScore - a.websiteScore;

      case "opportunity":
      default:
        return b.opportunity - a.opportunity;
    }
  });

  return (
    <main className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
        <aside>
          <LeadFilters
            industry={industry}
            country={country}
            onIndustryChange={setIndustry}
            onCountryChange={setCountry}
            onClear={() => {
              setIndustry("");
              setCountry("");
            }}
          />
        </aside>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <LeadSearchBar value={query} onChange={setQuery} />

              <div className="flex items-center gap-3 rounded-2xl border bg-white p-3 shadow-sm">
                <label htmlFor="sortBy" className="text-sm font-medium text-slate-600">
                  Sort by
                </label>

                <select
                  id="sortBy"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value as SortByOption)}
                  className="rounded-xl border p-3"
                >
                  <option value="opportunity">Opportunity</option>
                  <option value="company">Company</option>
                  <option value="website">Website Score</option>
                </select>
              </div>
            </div>

            {sortedLeads.length === 0 ? (
              <EmptyState
                title="No leads found"
                description="Try changing your search terms or filters."
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {sortedLeads.map((lead) => (
                  <LeadCard key={lead.id} lead={lead} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}