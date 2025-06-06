import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { ThemeToggle } from "@/widgets/theme-toggle"
import { QueryProvider } from "@/shared/providers"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Desme",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ThemeProvider
            attribute={"class"}
            defaultTheme={"system"}
            enableSystem
          >
            {children}
            <Toaster position="top-right" swipeDirections={["right", "top"]} />
            <ThemeToggle />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}

export default RootLayout
