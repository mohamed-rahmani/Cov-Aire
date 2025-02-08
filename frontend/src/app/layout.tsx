import Header from "@/components/feature/layout/Header";
import QueryClientProvider from "@/components/feature/layout/QueryClientProvider";
import "cal-sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Covaire",
  description:
    "A web application that allows you to search for carpooling areas in France",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="mx-auto flex min-h-screen max-w-6xl border-x border-[#e1e2e3] flex-col px-8 selection:bg-black selection:text-white">
        <Header />
        <main className="flex-1 flex">
          <QueryClientProvider>{children}</QueryClientProvider>
        </main>
      </body>
    </html>
  );
}
