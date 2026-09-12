import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Private Ephesus Tours | Reserve in 3 Easy Steps",
  description:
    "Private Ephesus tours from Kusadasi with licensed local guides, private vehicles and itineraries timed around your cruise ship.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
