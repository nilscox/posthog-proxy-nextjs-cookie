import { User } from "@/user";
import { cookies } from "next/headers";

export default function Home() {
  const token = cookies().get("token");

  return (
    <>
      <form action="/sign-in" method="post">
        <button type="submit">Sign in</button>
      </form>

      <form action="/sign-out" method="post">
        <button type="submit">Sign out</button>
      </form>

      <User token={token?.value} />
    </>
  );
}
