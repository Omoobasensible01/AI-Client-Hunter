interface IntelligencePageProps {
  params: {
    id: string;
  };
}

export default function IntelligencePage({ params }: IntelligencePageProps) {
  return (
    <main className="space-y-6 p-6">
      <h1 className="text-3xl font-semibold">Intelligence</h1>
      <p className="text-sm text-slate-500">Viewing data for ID: <strong>{params.id}</strong></p>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-medium">Details</h2>
        <p className="mt-3 text-slate-600">
          This is a dynamic route page for intelligence items. Use the route parameter to fetch or display the corresponding data.
        </p>
      </section>
    </main>
  );
}
