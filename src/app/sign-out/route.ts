export async function POST() {
  return new Response(undefined, {
    status: 303,
    headers: {
      Location: "/",
      "Set-Cookie": "token=; Max-Age=-1",
    },
  });
}
