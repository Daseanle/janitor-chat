import { Inter } from "next/font/google";
import "./globals.css"; // 👈 这行代码让样式生效！

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Janitor AI Chat Status & Alternatives",
  description: "Check Janitor AI status and find the best uncensored alternatives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
