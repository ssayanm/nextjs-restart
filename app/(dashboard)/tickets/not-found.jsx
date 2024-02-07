import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Oops! We hit a brick wall. </h2>
      <p>We could not find the ticket you are looking for.</p>
      <div className="flex justify-center my-8">
        <Link href="/tickets">
          {" "}
          <button className="btn-primary">Back to Ticket List</button>
        </Link>
      </div>
    </main>
  );
}
