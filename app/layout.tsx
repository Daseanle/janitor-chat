import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Janitor AI Chat – Best AI Character Chat Platform",
  description:
    "Explore uncensored AI character chat, roleplay prompts, and immersive AI conversations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
