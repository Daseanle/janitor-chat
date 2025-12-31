import Link from "next/link";
import { ShieldBan, Lock, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Janitor AI Account Banned? How to Appeal & Fix (2025)",
  description: "Did you get banned from Janitor AI or OpenAI? Learn why your account was terminated and the best ban-proof alternatives for NSFW chat.",
};

export default function Page() {
  // 🔴 记得替换成你的真实 Affiliate 链接
  const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <div className="flex items-center gap-3 mb-6">
             <ShieldBan className="w-10 h-10 text-red-500" />
             <h1 className="text-4xl md:text-5xl font-bold text-white m-0">Janitor AI Account Banned?</h1>
          </div>
          
          <div className="bg-red-900/20 border-l-4 border-red-500 p-4 mb-8">
            <p className="text-red-200 font-bold m-0">Why it happened:</p>
            <p className="text-red-200/80 m-0 text-sm">OpenAI has a strict policy against NSFW content. If you use their API on Janitor AI for explicit roleplay, they will eventually terminate your account.</p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Can you get unbanned?</h2>
          <p>Unfortunately, <strong>OpenAI bans are usually permanent</strong>. You can try to appeal via email, but the success rate is less than 1% for NSFW violations.</p>
          <p>Creating a new account requires a new phone number, which is annoying.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Permanent Solution: Use a Ban-Proof Platform</h2>
          <p>Stop playing hide-and-seek with OpenAI's moderation team. Switch to a platform that is <strong>built for NSFW</strong> from the ground up.</p>

          <div className="my-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
             <h3 className="text-xl font-bold text-white mb-4">Why Candy.ai is Safer</h3>
             <ul className="space-y-3">
                <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span><strong>No Filters:</strong> NSFW is the intended use case.</span>
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span><strong>Private:</strong> Your chats are encrypted and private.</span>
                </li>
                <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span><strong>No Bans:</strong> You will never be banned for roleplay content.</span>
                </li>
             </ul>
          </div>

          <div className="mt-12 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg inline-block">
              Start Chatting Safely (No Ban Risk)
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
