"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export interface ActivityEvent {
  title: string;
  timestamp: string;
}

export function ActivityTimeline({
  events,
  initialNotes = [
    "Owner responded on LinkedIn.",
    "Interested in redesign.",
    "Call scheduled Thursday.",
  ],
}: {
  events: ActivityEvent[];
  initialNotes?: string[];
}) {
  const [notes, setNotes] = useState(initialNotes);
  const [draft, setDraft] = useState("");

  const handleAddNote = () => {
    const nextNotes = draft
      .split(/\r?\n/)
      .map((entry) => entry.trim())
      .filter(Boolean);

    if (nextNotes.length === 0) {
      return;
    }

    setNotes((current) => [...nextNotes, ...current]);
    setDraft("");
  };

  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Lead notes</h2>
          <p className="mt-1 text-sm text-slate-500">
            Capture quick updates from calls, emails, and social conversations.
          </p>
        </div>

        <div className="space-y-3">
          <ul className="space-y-2">
            {notes.map((note, index) => (
              <li
                key={`${note}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                {note}
              </li>
            ))}
          </ul>

          <textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Write a note about the lead..."
            className="min-h-24 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-emerald-500"
          />

          <div className="flex justify-end">
            <Button type="button" size="sm" onClick={handleAddNote}>
              Add note
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 pt-4">
        <h3 className="text-base font-semibold text-slate-900">Activity timeline</h3>
        <p className="mt-1 text-sm text-slate-500">
          Recent events from your lead and site activity.
        </p>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={`${event.title}-${event.timestamp}`} className="space-y-2">
            <div className="flex items-center justify-between gap-4 rounded-3xl bg-slate-50 p-4">
              <p className="font-medium text-slate-900">{event.title}</p>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {event.timestamp}
              </span>
            </div>
            {index < events.length - 1 && <div className="border-t border-slate-200" />}
          </div>
        ))}
      </div>
    </div>
  );
}
