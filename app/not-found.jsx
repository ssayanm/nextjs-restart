import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Oops! There was a problem with the Link. </h2>
      <p>We could not find the link you are looking for.</p>
      <div className="flex justify-center my-8">
        <Link href="/">
          {" "}
          <button className="btn-primary">Back to home</button>
        </Link>
      </div>
    </main>
  );
}
