type Props = {
  page: number
  totalPages: number
  onChange?: (page: number) => void
}

export function LeadPagination({ page, totalPages, onChange }: Props) {
  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={() => onChange?.(Math.max(1, page - 1))}
        disabled={page <= 1}
        className="rounded-md border px-3 py-1"
      >
        Prev
      </button>
      <div className="text-sm">{page} / {totalPages}</div>
      <button
        onClick={() => onChange?.(Math.min(totalPages, page + 1))}
        disabled={page >= totalPages}
        className="rounded-md border px-3 py-1"
      >
        Next
      </button>
    </div>
  )
}

export default LeadPagination
