"use server";

import { z } from "zod";
import { Resend } from "resend";

const RECRUITING_EMAIL = process.env.RECRUITING_EMAIL || "limbrian@usc.edu";
const FROM_EMAIL = process.env.EMAIL_FROM || "Trojan SUITS <onboarding@resend.dev>";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string[]>;
};

async function sendNotification(subject: string, lines: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  const body = Object.entries(lines)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  if (!apiKey) {
    // Email delivery isn't configured yet — log so submissions aren't silently lost
    // during local development. Set RESEND_API_KEY (and RECRUITING_EMAIL) before launch.
    console.warn(`[email not configured] ${subject}\n${body}`);
    return;
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: FROM_EMAIL,
    to: RECRUITING_EMAIL,
    subject,
    text: body,
  });
}

function isUscEmail(email: string) {
  return /@usc\.edu$/i.test(email.trim());
}

const applicationSchema = z.object({
  team: z.string().min(1),
  teamLabel: z.string().min(1),
  domainRestriction: z.enum(["usc", "any"]),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  major: z.string().optional(),
  message: z.string().optional(),
});

export async function submitApplication(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    team: formData.get("team")?.toString() ?? "",
    teamLabel: formData.get("teamLabel")?.toString() ?? "",
    domainRestriction: formData.get("domainRestriction")?.toString() ?? "usc",
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    major: formData.get("major")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
  };

  const parsed = applicationSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  if (data.domainRestriction === "usc" && !isUscEmail(data.email)) {
    return {
      status: "error",
      message: "This role requires a USC email address (@usc.edu).",
      fieldErrors: { email: ["Must be a @usc.edu address"] },
    };
  }

  await sendNotification(`New interest: ${data.teamLabel}`, {
    Role: data.teamLabel,
    Name: data.name,
    Email: data.email,
    "Major / Year": data.major || "—",
    Message: data.message || "—",
  });

  return {
    status: "success",
    message: "Thanks! We've received your interest and will be in touch.",
  };
}

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email address"),
  organization: z.string().min(1, "Organization is required"),
  connectionType: z.enum(["industry", "government", "academic", "other"]),
  message: z.string().min(1, "Please include a short message"),
});

export async function submitOutreachContact(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    organization: formData.get("organization")?.toString() ?? "",
    connectionType: formData.get("connectionType")?.toString() ?? "other",
    message: formData.get("message")?.toString() ?? "",
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  await sendNotification(`New outreach contact: ${data.organization}`, {
    Name: data.name,
    Email: data.email,
    Organization: data.organization,
    "Connection Type": data.connectionType,
    Message: data.message,
  });

  return {
    status: "success",
    message: "Thanks for reaching out! We'll follow up soon.",
  };
}
