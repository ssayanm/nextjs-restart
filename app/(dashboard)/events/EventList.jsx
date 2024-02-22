import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

async function getEvents() {
  const supabase = createServerComponentClient({ cookies });

  const { data, error } = await supabase.from("Events").select();

  if (error) {
    console.log(error.message);
  }

  return data;
}
export default async function EventList({ limit = Infinity }) {
  const events = await getEvents();
  const limitedEvents = limit === Infinity ? events : events.slice(0, limit);

  return (
    <>
      {limitedEvents.map((event) => (
        <div key={event.id} className="card my-5">
          <Link href={`/events/${event.id}`}>
            <h3>{event.title}</h3>
            <p>{event.body.slice(0, 200)}...</p>
          </Link>
        </div>
      ))}
      {events.length === 0 && (
        <p className="text-center">There are no open events.</p>
      )}
    </>
  );
}
