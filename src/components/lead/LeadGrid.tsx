import { Lead, LeadCard } from "./LeadCard"

type Props = {
  leads: Lead[]
}

export function LeadGrid({ leads }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {leads.map((l) => (
        <LeadCard key={l.id} lead={l} />
      ))}
    </div>
  )
}

export default LeadGrid
