import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Kevin Cruz | Engenheiro em Computação',
  description: 'Portfólio pessoal de Kevin Cruz, Engenheiro em Computação',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
