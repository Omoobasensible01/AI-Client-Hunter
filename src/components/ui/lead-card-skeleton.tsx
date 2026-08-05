import { Skeleton } from "@/components/ui/skeleton"

export function LeadCardSkeleton() {
  return (
    <div className="space-y-4 rounded-2xl border p-6">
      <Skeleton className="h-6 w-48" />
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  )
}
