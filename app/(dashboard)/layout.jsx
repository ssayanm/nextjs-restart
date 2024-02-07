import Navbar from "../components/Navbar";

export default function DasboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
