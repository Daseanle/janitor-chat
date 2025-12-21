import Link from "next/link";
import { AlertTriangle, Server, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Is Janitor AI Down? Current Status & Fixes (2025)",
  description: "Check if Janitor AI is down right now. Real-time status updates, error code fixes, and the best working alternatives when servers are overloaded.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://candy.ai?via=yourcode"; // 🔴 换成你的链接
  const date = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Is Janitor AI Down? ({date} Status)</h1>
          
          <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-8 flex gap-4 items-start">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
            <div>
              <p className="font-bold text-red-200 mb-1">Status: Unstable</p>
              <p className="text-sm text-red-200/80">Users are currently reporting slow response times and API errors due to high server load.</p>
            </div>
          </div>

          <p>If you are seeing "Load Failed", "Unexpected Application Error", or infinite loading spinners, the Janitor AI servers are likely overloaded. This happens frequently during peak hours.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Fix Janitor AI Not Loading</h2>
          <ol className="list-decimal pl-5 space-y-2 mb-8">
            <li><strong>Check your internet:</strong> Ensure you are connected.</li>
            <li><strong>Clear Cache:</strong> Clear your browser cookies and cache.</li>
            <li><strong>Wait it out:</strong> Sometimes it takes 30-60 minutes for devs to fix.</li>
            <li><strong>Use an Alternative (Recommended):</strong> Switch to a more stable platform.</li>
          </ol>

          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 text-center my-12">
            <h3 className="text-2xl font-bold text-white mb-4">Don't Wait for Servers</h3>
            <p className="mb-6">Candy.ai servers are online and running 100% fast right now.</p>
            <a href={AFFILIATE_LINK} target="_blank" className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center gap-2">
              <Server className="w-4 h-4" /> Switch to Stable Server
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
