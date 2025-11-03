import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { TanstackProvider } from "./tanstack-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ThemeProvider>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </ThemeProvider>
    </>
  )
}
