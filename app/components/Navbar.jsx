import Link from "next/link";
import Logo from "./SpideLogo.png";
import Image from "next/image";
import LogoutButton from "./LogoutButton";

export default function Navbar({ user }) {
  return (
    <nav>
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          quality={100}
          placeholder="blur"
        />
      </Link>
      <Link href="/">
        {" "}
        <h1>Lojo Helpdesk</h1>
      </Link>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/events" className="mr-auto">
        Events
      </Link>
      {user && <span>Hello, {user.email}</span>}

      <LogoutButton />
    </nav>
  );
}
