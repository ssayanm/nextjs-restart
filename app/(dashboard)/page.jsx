import Link from "next/link";
import EventList from "./EventList";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nam in
        magni id corrupti saepe quo repellendus ipsum hic obcaecati fuga,
        placeat voluptatibus, officiis vel distinctio, esse laboriosam deleniti
        officia.
      </p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          {" "}
          <button className="btn-primary">View Events</button>
        </Link>
      </div>
      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member of the web deve team...</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          suscipit consequatur saepe ratione sunt omnis corporis eligendi a
          dolore aperiam quae maiores assumenda at fuga, ex perspiciatis beatae.
          Dicta, qui!
        </p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
          suscipit consequatur saepe ratione sunt omnis corporis eligendi a
          dolore aperiam quae maiores assumenda at fuga, ex perspiciatis beatae.
          Dicta, qui!
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        <EventList />
      </Suspense>
    </main>
  );
}
