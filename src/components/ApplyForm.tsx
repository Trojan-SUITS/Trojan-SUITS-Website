"use client";

import { useActionState } from "react";
import { submitApplication, type FormState } from "@/app/actions";
import type { DomainRestriction } from "@/data/teams";

const initialState: FormState = { status: "idle" };

export default function ApplyForm({
  team,
  teamLabel,
  domainRestriction,
}: {
  team: string;
  teamLabel: string;
  domainRestriction: DomainRestriction;
}) {
  const [state, formAction, pending] = useActionState(
    submitApplication,
    initialState
  );

  if (state.status === "success") {
    return (
      <div className="rounded border border-hud-cyan/50 bg-hud-cyan/10 p-4 text-foreground">
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="team" value={team} />
      <input type="hidden" name="teamLabel" value={teamLabel} />
      <input type="hidden" name="domainRestriction" value={domainRestriction} />

      {state.status === "error" && state.message && (
        <div className="rounded border border-cardinal-bright/60 bg-cardinal/15 p-3 text-sm text-foreground">
          {state.message}
        </div>
      )}

      <div>
        <label className="mb-1 block font-hud text-sm uppercase tracking-wide text-foreground-muted">
          Name
        </label>
        <input
          name="name"
          required
          className="w-full rounded border border-space-border-bright bg-space-black px-3 py-2 text-foreground outline-none focus:border-hud-cyan"
        />
        {state.fieldErrors?.name && (
          <p className="mt-1 text-xs text-cardinal-bright">
            {state.fieldErrors.name[0]}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-hud text-sm uppercase tracking-wide text-foreground-muted">
          Email {domainRestriction === "usc" && "(@usc.edu required)"}
        </label>
        <input
          type="email"
          name="email"
          required
          pattern={domainRestriction === "usc" ? "^[^@\\s]+@usc\\.edu$" : undefined}
          title={
            domainRestriction === "usc"
              ? "Must be a @usc.edu email address"
              : undefined
          }
          className="w-full rounded border border-space-border-bright bg-space-black px-3 py-2 text-foreground outline-none focus:border-hud-cyan"
        />
        {state.fieldErrors?.email && (
          <p className="mt-1 text-xs text-cardinal-bright">
            {state.fieldErrors.email[0]}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-hud text-sm uppercase tracking-wide text-foreground-muted">
          Major / Year (optional)
        </label>
        <input
          name="major"
          className="w-full rounded border border-space-border-bright bg-space-black px-3 py-2 text-foreground outline-none focus:border-hud-cyan"
        />
      </div>

      <div>
        <label className="mb-1 block font-hud text-sm uppercase tracking-wide text-foreground-muted">
          What do you bring? (optional)
        </label>
        <textarea
          name="message"
          rows={3}
          className="w-full rounded border border-space-border-bright bg-space-black px-3 py-2 text-foreground outline-none focus:border-hud-cyan"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded border border-cardinal-bright bg-cardinal px-5 py-2.5 font-hud text-base uppercase tracking-wide text-white transition-colors hover:bg-cardinal-bright disabled:opacity-60"
      >
        {pending ? "Sending…" : "Submit Interest"}
      </button>
    </form>
  );
}
