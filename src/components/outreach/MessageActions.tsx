import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MessageActions() {
  return (
    <Card className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <CardHeader className="px-6 py-5">
        <CardTitle>Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3 p-6 pt-0">
        <Button size="sm">Generate</Button>
        <Button variant="outline" size="sm">
          Save draft
        </Button>
        <Button variant="secondary" size="sm">
          Send test
        </Button>
      </CardContent>
    </Card>
  );
}
