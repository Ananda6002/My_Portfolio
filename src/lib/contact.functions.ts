import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(10).max(2000),
});

export const submitContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const serviceRoleKey = process.env["SUPABASE_SERVICE_ROLE_KEY"];
    const supabaseUrl =
      process.env["SUPABASE_URL"] ||
      process.env["VITE_SUPABASE_URL"] ||
      "https://giuxavotygnxmoiawnyd.supabase.co";
    const publishableKey =
      process.env["SUPABASE_PUBLISHABLE_KEY"] ||
      process.env["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
      "sb_publishable_rxADIMljpXTxUvDB1oT31w_PsbxWUbn";

    // 1. Try with admin client if service role key is present
    if (serviceRoleKey) {
      try {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("contact_messages").insert({
          name: data.name,
          email: data.email,
          message: data.message,
        });
        if (!error) return { ok: true as const };
        console.error("supabaseAdmin insert failed:", error);
      } catch (adminErr) {
        console.error("supabaseAdmin error:", adminErr);
      }
    }

    // 2. Fall back to publishable key via REST API
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
        method: "POST",
        headers: {
          apikey: publishableKey,
          Authorization: `Bearer ${publishableKey}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (res.ok) {
        return { ok: true as const };
      }
      console.error("Publishable key REST insert response:", res.status, await res.text());
    } catch (fetchErr) {
      console.error("REST fetch error:", fetchErr);
    }

    return { ok: false as const, fallback: true as const };
  });
