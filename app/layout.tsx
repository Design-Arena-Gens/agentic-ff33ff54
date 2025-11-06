import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI & Digital Skills in Primary School",
  description:
    "An argumentative presentation exploring whether AI and digital skills belong in primary school curricula now.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-100">
        {children}
      </body>
    </html>
  );
}
