import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";
import Link from "next/link";

export const metadata = {
  title: "Lojo Helpdesk | Tickets",
};

export default function page() {
  return (
    <main>
      <div className="flex align-middle justify-between mx-1">
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets</small>
          </p>
        </div>
        <div className="flex justify-center my-8">
          <Link href="/tickets/create">
            {" "}
            <button className="btn-primary">Create a New Ticket</button>
          </Link>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
