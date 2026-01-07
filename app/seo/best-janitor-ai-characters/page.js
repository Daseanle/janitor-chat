import Link from "next/link";
import { User, Star, ArrowRight, Heart } from "lucide-react";

export const metadata = {
  title: "Best Janitor AI Characters & Bots (2025 Uncensored List)",
  description: "Looking for the most popular Janitor AI characters? Here is a list of the best NSFW bots and where to find their uncensored alternatives when Janitor is down.",
};

export default function Page() {
  // 🔴 记得替换成你的真实 Affiliate 链接
  const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/"; 

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Best Janitor AI Characters: Top Picks for 2025</h1>
          
          <p>Janitor AI is famous for its vast library of user-created characters ("Bots"). From dominant villains to sweet anime waifus, the variety is endless.</p>
          <p>However, users often face a problem: <strong>The best bots often get deleted or filtered.</strong></p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Top Character Archetypes</h2>
          <p>Here are the most searched character types and where to find the best versions of them:</p>

          <div className="grid gap-4 my-6">
            {/* Card 1 */}
            <div className="bg-[#1e1e24] p-4 rounded-xl border border-gray-800 flex items-center gap-4">
                <div className="bg-pink-900/50 p-3 rounded-full"><Heart className="w-6 h-6 text-pink-500" /></div>
                <div>
                    <h3 className="text-lg font-bold text-white m-0">The "Girlfriend" Experience</h3>
                    <p className="text-sm text-gray-400 m-0">Loving, caring, and slightly possessive.</p>
                    <a href={AFFILIATE_LINK} target="_blank" className="text-pink-400 text-sm font-bold hover:underline">Chat with GF Bots on Candy &rarr;</a>
                </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#1e1e24] p-4 rounded-xl border border-gray-800 flex items-center gap-4">
                <div className="bg-purple-900/50 p-3 rounded-full"><User className="w-6 h-6 text-purple-500" /></div>
                <div>
                    <h3 className="text-lg font-bold text-white m-0">Anime Waifus</h3>
                    <p className="text-sm text-gray-400 m-0">Tsundere, Yandere, and fantasy creatures.</p>
                    <a href={AFFILIATE_LINK} target="_blank" className="text-pink-400 text-sm font-bold hover:underline">See Anime Gallery &rarr;</a>
                </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1e1e24] p-4 rounded-xl border border-gray-800 flex items-center gap-4">
                <div className="bg-red-900/50 p-3 rounded-full"><Star className="w-6 h-6 text-red-500" /></div>
                <div>
                    <h3 className="text-lg font-bold text-white m-0">Dominant / NSFW</h3>
                    <p className="text-sm text-gray-400 m-0">Specific scenarios without filters.</p>
                    <a href={AFFILIATE_LINK} target="_blank" className="text-pink-400 text-sm font-bold hover:underline">Unlock NSFW Mode &rarr;</a>
                </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Candy.ai Characters are Better?</h2>
          <p>On Janitor AI, you only get text. On <strong>Candy.ai</strong>, the characters come with:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Photo Gallery:</strong> Unlock spicy photos as you chat.</li>
            <li><strong>Voice Messages:</strong> Hear their voice.</li>
            <li><strong>Consistent Memory:</strong> They remember your name and history.</li>
          </ul>

          <div className="mt-12 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg inline-flex items-center gap-2">
              Browse Character Library <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
