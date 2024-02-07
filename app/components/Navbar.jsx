import Link from "next/link";
import Logo from "./spi-logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Logo"
        width={50}
        quality={100}
        placeholder="blur"
      />
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
