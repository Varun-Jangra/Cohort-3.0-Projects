import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Insight | Dashboard",
  description: "A yearly retail sales dashboard",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
