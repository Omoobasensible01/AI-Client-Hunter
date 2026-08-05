import LeadSearchBar from "./LeadSearchBar"
import LeadFilters from "./LeadFilters"
import { Button } from "@/components/ui/button"

type Props = {
  search?: string
  onSearch?: (v: string) => void
}

export function LeadToolbar({ search = "", onSearch }: Props) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex w-full items-center gap-3">
        <LeadSearchBar value={search} onChange={onSearch} />
        <LeadFilters />
      </div>
      <div className="flex items-center gap-2">
        <Button>Import</Button>
        <Button>New Lead</Button>
      </div>
    </div>
  )
}

export default LeadToolbar
