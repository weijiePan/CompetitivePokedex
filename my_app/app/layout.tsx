import type { Metadata } from "next";
import NavLinks from "./navLinks";
import "./globals.css";
import "./navLinks.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = "fullWidthAndHeight">
      <body className = "fullWidthAndHeight">
        <NavLinks></NavLinks>
        {children}
      </body>
    </html>
  );
}
