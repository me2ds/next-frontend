import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { ThemeToggle } from "@/widgets/theme-toggle"
import { Toaster } from "sonner"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Desme",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
        >
          {children}
          <Toaster position="top-right" swipeDirections={["right", "top"]} />
          <ThemeToggle />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
