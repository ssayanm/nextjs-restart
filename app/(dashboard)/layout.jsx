import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Navbar from "../components/Navbar";

export default async function DasboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  return (
    <>
      <Navbar user={data.session.user} />
      {children}
    </>
  );
}
