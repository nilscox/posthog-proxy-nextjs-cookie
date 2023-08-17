## PostHog reverse proxy with next middleware

This is a minimal reproduction of a security issue when using Next.js middleware as a reverse proxy to access PostHog.

Because PostHog is accessed through the app's domain name, it forwards all the cookies, including some that can contain sensitive information, like authentication tokens.

To see the issue, copy the .env.example file to .env.local and set a PostHog token, start next server with `pnpm dev`, open the app and click the "Sign in" button. Go back to the terminal where next was started, you should see the value of the cookie header forwarded to PostHog. Among the cookies set by PostHog, there is a "token" cookie with value "super-secret-authentication-token".

https://nextjs.org/docs/app/building-your-application/routing/middleware  
https://posthog.com/docs/advanced/proxy/nextjs-middleware
