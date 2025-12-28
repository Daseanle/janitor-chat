import Link from "next/link";
import { Lock, Unlock } from "lucide-react";

export const metadata = {
  title: "Janitor AI vs Yodayo: Which has less censorship? (2025 Update)",
  description: "Yodayo is tightening its NSFW rules. Find out if Janitor AI or Candy AI is the better safe haven for unrestricted, uncensored roleplay.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://candy.ai?via=yourcode";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Janitor AI vs Yodayo: The Censorship Update</h1>
          <p>Yodayo Tavern was once a haven for NSFW chat, but recent updates have introduced stricter content moderation and hidden sensitive content. Users are fleeing to find alternatives.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Who is truly Uncensored?</h2>
          <div className="grid grid-cols-3 gap-4 text-center my-6">
             <div className="p-4 bg-gray-800 rounded-lg">
                <div className="font-bold mb-2">Yodayo</div>
                <div className="text-yellow-500 text-sm">Restricted</div>
             </div>
             <div className="p-4 bg-gray-800 rounded-lg">
                <div className="font-bold mb-2">Janitor AI</div>
                <div className="text-green-500 text-sm">Uncensored</div>
             </div>
             <div className="p-4 bg-pink-900/30 border border-pink-500/30 rounded-lg">
                <div className="font-bold mb-2 text-pink-300">Candy.ai</div>
                <div className="text-green-400 font-bold text-sm">100% Uncensored</div>
             </div>
          </div>

          <p>If you want a platform that guarantees freedom of expression for your roleplay scenarios, <strong>Candy.ai</strong> is the safest bet in 2025.</p>
          
          <div className="mt-8">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all block text-center">
              Explore Uncensored Chat
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
