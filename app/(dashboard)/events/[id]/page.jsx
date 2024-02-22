import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import DeleteButton from "./DeleteButton";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { data: event } = await supabase
    .from("Events")
    .select()
    .eq("id", params.id)
    .single();

  return {
    title: `Lojo Helpdesk | ${event ? event.title : "Event not found"}`,
  };
}

async function getEvent(id) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("Events").select().eq("id", id).single();

  if (!data) {
    notFound();
  }

  return data;
}

export default async function EventDetails({ params }) {
  const event = await getEvent(params.id);
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main>
      <nav>
        <h2>Event Details</h2>
        <div className="ml-auto">
          {data.session.user.email === event.user_email && (
            <DeleteButton id={event.id} />
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{event.title}</h3>
        <small>Created by {event.user_email}</small>
        <p>{event.body}</p>
      </div>
    </main>
  );
}
