"use client";

import { useActionState } from "react";
import { submitOutreachContact, type FormState } from "@/app/actions";

const initialState: FormState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitOutreachContact,
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
      {state.status === "error" && state.message && (
        <div className="rounded border border-cardinal-bright/60 bg-cardinal/15 p-3 text-sm text-foreground">
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded border border-space-border-bright bg-space-black px-3 py-2 text-foreground outline-none focus:border-hud-cyan"
          />
          {state.fieldErrors?.email && (
            <p className="mt-1 text-xs text-cardinal-bright">
              {state.fieldErrors.email[0]}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block font-hud text-sm uppercase tracking-wide text-foreground-muted">
            Organization
          </label>
          <input
            name="organization"
            required
            className="w-full rounded border border-space-border-bright bg-space-black px-3 py-2 text-foreground outline-none focus:border-hud-cyan"
          />
          {state.fieldErrors?.organization && (
            <p className="mt-1 text-xs text-cardinal-bright">
              {state.fieldErrors.organization[0]}
            </p>
          )}
        </div>

        <div>
          <label className="mb-1 block font-hud text-sm uppercase tracking-wide text-foreground-muted">
            Connection Type
          </label>
          <select
            name="connectionType"
            defaultValue="industry"
            className="w-full rounded border border-space-border-bright bg-space-black px-3 py-2 text-foreground outline-none focus:border-hud-cyan"
          >
            <option value="industry">Industry</option>
            <option value="government">Government Agency</option>
            <option value="academic">Academic</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1 block font-hud text-sm uppercase tracking-wide text-foreground-muted">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell us about your organization and how you'd like to connect — sponsorship, mentorship, a site visit, a speaking engagement, etc."
          className="w-full rounded border border-space-border-bright bg-space-black px-3 py-2 text-foreground outline-none focus:border-hud-cyan"
        />
        {state.fieldErrors?.message && (
          <p className="mt-1 text-xs text-cardinal-bright">
            {state.fieldErrors.message[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="rounded border border-cardinal-bright bg-cardinal px-5 py-2.5 font-hud text-base uppercase tracking-wide text-white transition-colors hover:bg-cardinal-bright disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
