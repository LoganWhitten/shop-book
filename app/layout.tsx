import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { PageTransition } from "@/components/transition-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Lighting Equipment Reference",
  description: "A reference guide for lighting equipment",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground overflow-hidden">
        <main className="flex-1 w-full h-[calc(100vh-3rem)] overflow-y-auto z-0">
          <div className="h-full w-full">
            <PageTransition>{children}</PageTransition>
          </div>
        </main>
        <footer className="sticky bottom-0 w-full border-t bg-background/80 backdrop-blur-sm z-10 grid grid-cols-1 gap-4 p-4">
          <div className="items-center justify-center mx-auto text-center text-xs gap-8">
            <p className="flex items-center justify-center gap-1">
              Made very quickly by
              <a
                href="https://instagram.com/loganwhitten512"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
              >
                Logan Whitten
              </a>
            </p>
For reference only, do your own research.
          </div>
        </footer>
      </body>
    </html>
  );
}

