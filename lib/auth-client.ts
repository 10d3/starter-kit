import { stripeClient } from "@better-auth/stripe/client"
import { createAuthClient } from "better-auth/react"
import { magicLinkClient, emailOTPClient, lastLoginMethodClient, organizationClient } from "better-auth/client/plugins";

export const { signIn, signUp, useSession, signOut } = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
  plugins: [
    stripeClient({
      subscription: true //if you want to enable subscription management
    }),
    magicLinkClient(),
    emailOTPClient(),
    lastLoginMethodClient(),
    organizationClient()
  ]
})
