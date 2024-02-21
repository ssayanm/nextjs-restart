import Link from "next/link";
import EventList from "./EventList";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p className="mb-4">
        Found a glitch on our website? Help us swat it away! Submit a "Bug
        Ticket" here, like booking a movie ticket. Tell us what you saw, where
        it happened, and if possible, add a screenshot.{" "}
      </p>
      <p>
        The clearer your report, the faster our tech heroes can fix it! Every
        ticket helps make our site smoother for everyone. Plus, you'll earn
        badges for reporting bugs, climbing the leaderboard to become a top bug
        squasher! So grab your virtual fly swatter and let's make this website
        shine! ✨🪲
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          {" "}
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
      <h2>Company Updates</h2>

      <Suspense fallback={<Loading />}>
        <EventList />
      </Suspense>
    </main>
  );
}
