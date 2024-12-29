import type { Metadata } from "next";
import { helvetica } from "@/utils/config/customFonts";
import "@/styles/globals.css";

const metadata: Metadata = {
  title: "baseFood",
  description: "We",
  icons: "/icons/bf_icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="description" content={metadata.description || ""} />
      <link rel="icon" href={String(metadata?.icons)} />
      <title>{String(metadata.title)}</title>
      <body className={`${helvetica} antialiased`}>{children}</body>
    </html>
  );
}
