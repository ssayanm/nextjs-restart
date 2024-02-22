"use server";

import { cookies } from "next/headers";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addEvent(formData) {
  const event = Object.fromEntries(formData);

  const supabase = createServerActionClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  //insert data
  const { error } = await supabase.from("Events").insert({
    ...event,
    user_email: session.user.email,
  });

  if (error) {
    throw new Error("oops, could not add the new event");
  }

  revalidatePath("/events");
  redirect("/events");
}

export async function deleteEvent(id) {
  const supabase = createServerActionClient({ cookies });

  //delete data
  const { error } = await supabase.from("Events").delete().eq("id", id);

  if (error) {
    throw new Error("oops, could not delete the event");
  }

  revalidatePath("/events");
  redirect("/events");
}
