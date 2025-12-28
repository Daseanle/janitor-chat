import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Janitor AI Reverse Proxy List 2025 (Warning: Read Before Using)",
  description: "Looking for a free OpenAI reverse proxy for Janitor AI? Learn about the security risks and why you should avoid public proxies.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://candy.ai?via=yourcode";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Janitor AI Reverse Proxy List 2025</h1>
          
          <div className="bg-red-900/30 border border-red-500 p-6 rounded-xl my-6">
             <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
               <ShieldAlert className="text-red-500" /> Security Warning
             </h3>
             <p className="text-red-200">Using public reverse proxies means the proxy owner can <strong>read all your chat logs</strong>. Do not share personal info.</p>
          </div>

          <p>Reverse proxies are often used to bypass OpenAI costs, but they are unstable and often go offline within days. Searching for new proxies daily is a waste of time.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Safer, Stable Option</h2>
          <p>Instead of risking your privacy on shady proxies, use <strong>Candy.ai</strong>. It offers a secure, private environment with its own hosted models. No proxies needed.</p>

          <div className="mt-8">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all block text-center">
              Chat Securely on Candy.ai
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
