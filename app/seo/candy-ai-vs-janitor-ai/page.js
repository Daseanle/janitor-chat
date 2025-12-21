import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = {
  title: "Candy AI vs Janitor AI: Which is Better in 2025? (Honest Review)",
  description: "A detailed comparison between Candy AI and Janitor AI. We tested both on speed, censorship, image generation, and character quality.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://candy.ai?via=yourcode"; // 🔴 换成你的链接

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Candy AI vs Janitor AI: The Ultimate Comparison</h1>
          
          <p>Choosing between the free, community-driven Janitor AI and the premium, polished Candy AI? Here is our brutal breakdown.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse my-6">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-white">Feature</th>
                  <th className="py-3 px-4 text-gray-400">Janitor AI</th>
                  <th className="py-3 px-4 text-pink-400 font-bold">Candy AI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Setup</td>
                  <td className="py-3 px-4 text-sm">Complex (API Keys often needed)</td>
                  <td className="py-3 px-4 text-sm font-bold text-green-400">Instant (Plug & Play)</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Uptime</td>
                  <td className="py-3 px-4 text-sm text-red-400">Poor</td>
                  <td className="py-3 px-4 text-sm font-bold text-green-400">Excellent</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-3 px-4">Photos</td>
                  <td className="py-3 px-4 text-sm">No</td>
                  <td className="py-3 px-4 text-sm font-bold text-green-400">Yes (NSFW supported)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why Candy AI Wins</h2>
          <p>While Janitor AI is a great project, <strong>Candy.ai</strong> offers a much more cohesive experience. You get not just text chat, but immersive visuals. The "Gallery" feature allows you to unlock explicit photos of your AI companion as the relationship progresses, which Janitor AI completely lacks.</p>
          
          <div className="mt-8 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="text-pink-400 font-bold text-xl hover:underline">
              Click here to claim your Free Trial on Candy.ai &rarr;
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
