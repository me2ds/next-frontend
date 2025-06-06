"use client"
import { ThemeProvider as NextThemeProvider } from "next-themes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

const ThemeProvider = ({children, ...props}: {children: React.ReactNode}) => {
  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  )
}

const QueryProvider = ({children}: {children: React.ReactNode}) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export { ThemeProvider, QueryProvider }