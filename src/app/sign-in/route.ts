export async function POST() {
  return new Response(undefined, {
    status: 303,
    headers: {
      Location: "/",
      "Set-Cookie": `token=super-secret-authentication-token; Secure; HttpOnly`,
    },
  });
}
