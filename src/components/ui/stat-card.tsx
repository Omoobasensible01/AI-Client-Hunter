import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string;
  icon?: ReactNode;
  footer?: string;
}

export function StatCard({
  title,
  value,
  icon,
  footer,
}: StatCardProps) {
  return (
    <Card className="rounded-2xl p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>
        </div>

        {icon}
      </div>

      {footer && (
        <p className="mt-6 text-sm text-slate-500">
          {footer}
        </p>
      )}
    </Card>
  );
}