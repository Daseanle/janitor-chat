import Link from "next/link";
import { AlertCircle, RefreshCw } from "lucide-react";

export const metadata = {
  title: "How to Fix Janitor AI 'Load Failed' Error (2025 Solved)",
  description: "Getting the 'Load Failed' error on Janitor AI? Here are 3 ways to fix it immediately, and the best alternative to use when the site is broken.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://candy.ai?via=yourcode";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Fix Janitor AI "Load Failed" Error</h1>
          <div className="flex items-center gap-4 p-4 bg-red-900/20 border-l-4 border-red-500 mb-8">
             <AlertCircle className="text-red-500 w-8 h-8" />
             <p className="m-0 text-sm">This error usually means the Janitor AI database is overloaded. It's not your internet connection.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">3 Quick Fixes</h2>
          <ol className="list-decimal pl-5 space-y-4">
             <li><strong>Clear Cache:</strong> Go to browser settings and clear cookies for janitorai.com.</li>
             <li><strong>Disable Extensions:</strong> Ad-blockers sometimes interfere with the chat script.</li>
             <li><strong>Use a Stable Alternative:</strong> If you are tired of debugging, switch to <strong>Candy.ai</strong>. It uses dedicated servers that never show "Load Failed".</li>
          </ol>

          <div className="mt-12 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="text-pink-400 font-bold text-xl hover:underline">
              Try a Chat Site That Never Fails &rarr;
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
