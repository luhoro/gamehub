import { Montserrat } from "next/font/google"
import "./globals.css"
import { Metadata } from "next"
import Header from "@/components/header"

const mont = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GameHub - O seu arsenal de jogos",
  description: "Vários jogos para conhecer e chamar de seu",
  keywords: ['games', 'jogos', 'rpg', 'aventura', 'tiro'],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`]
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  },
  icons: 'favicon.svg'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={mont.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
