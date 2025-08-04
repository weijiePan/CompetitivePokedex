import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = "fullWidthAndHeight">
      <body className = "fullWidthAndHeight">
         <Link href = "/"><p>home</p></Link>
        <Link href = "team"><p>team</p></Link>
        
        {children}
      </body>
    </html>
  );
}
