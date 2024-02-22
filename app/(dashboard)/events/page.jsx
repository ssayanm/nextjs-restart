import { Suspense } from "react";

import Loading from "../loading";
import Link from "next/link";
import EventList from "./EventList";

export const metadata = {
  title: "Lojo Helpdesk | Tickets",
};

export default function page() {
  return (
    <main>
      <nav>
        <div>
          <h2>Events</h2>
          <p>
            <small>Current Events</small>
          </p>
        </div>

        <Link href="/events/create" className="ml-auto">
          <button className="btn-primary">Create a New Event</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <EventList />
      </Suspense>
    </main>
  );
}
