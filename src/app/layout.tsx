import type { Metadata } from "next";
import RootStyleRegistry from "./emotion";
import Navbar from "../components/Navbar";

// These styles apply to every route in the application
import "./globals.css";

export const metadata: Metadata = {
  title: "Sensei Notes",
  description: "Created by Byron Corbett and Eniola Afolaranmi with Nextjs, Mantine, and Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head></head>
      <body suppressHydrationWarning>
        <RootStyleRegistry>
          <Navbar></Navbar>
          {children}
        </RootStyleRegistry>
      </body>
    </html>
  );
}