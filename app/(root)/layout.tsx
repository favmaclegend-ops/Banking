import type { Metadata } from "next";
import {Inter, IBM_Plex_Serif} from "next/font/google";
import { Children } from "react";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main>
     SIDEBAR
     {children}
  </main>
  );
}
