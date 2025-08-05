import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import dynamic from "next/dynamic"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Desme",
}

const Toaster = dynamic(() => import("sonner").then(({ Toaster }) => Toaster))
const ThemeToggle = dynamic(() =>
  import("@/widgets/theme-toggle").then(({ ThemeToggle }) => ThemeToggle)
)

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
          {children}
          <Suspense fallback={null}>
            <Toaster position="top-right" swipeDirections={["right", "top"]} />
            <ThemeToggle />
          </Suspense>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
