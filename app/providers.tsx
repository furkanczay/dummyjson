"use client";

import {ThemeProvider} from "next-themes";
import {NextUIProvider} from "@nextui-org/react"
import { Toaster } from "react-hot-toast";

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider defaultTheme="dark" attribute="class">
        {children}
        <Toaster />
      </ThemeProvider>
    </NextUIProvider>
  )
}