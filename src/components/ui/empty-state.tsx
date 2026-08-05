import { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

export function EmptyState({
  icon,
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed p-12 text-center">
      {icon}

      <h2 className="mt-6 text-2xl font-semibold">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-slate-500">
        {description}
      </p>
    </div>
  );
}