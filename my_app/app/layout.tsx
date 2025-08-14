import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className = "fullWidthAndHeight">
      <body className = "fullWidthAndHeight">
        {children}
      </body>
    </html>
  );
}
