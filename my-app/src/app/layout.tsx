import type { Metadata } from "next";

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
