import Link from "next/link";
import { Settings, X, Check, Zap, Server } from "lucide-react";

export const metadata = {
  title: "Janitor AI Kobold Settings Guide (2025) - Slow Generation Fix",
  description: "Struggling with Kobold AI settings on Janitor AI? Learn how to fix slow generation times, or switch to a faster, free alternative without API keys.",
};

export default function Page() {
  // 🔴 记得替换成你的真实 Affiliate 链接
  const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Best Janitor AI Kobold Settings for Speed</h1>
          
          <p>Many users try to use <strong>Kobold AI</strong> with Janitor AI to avoid paying for OpenAI API keys. However, Kobold often suffers from extremely slow generation times and connection timeouts.</p>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                    <X className="w-5 h-5 text-red-500" /> Kobold AI Issues
                </h3>
                <ul className="text-sm space-y-1 text-red-200/80">
                    <li>Requires running code on Colab</li>
                    <li>Slow response (2-5 mins)</li>
                    <li>Disconnects frequently</li>
                </ul>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-green-500" /> The Better Way
                </h3>
                <ul className="text-sm space-y-1 text-green-200/80">
                    <li><strong>Candy.ai</strong> (No Setup)</li>
                    <li>Instant text generation</li>
                    <li>No technical knowledge needed</li>
                </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Recommended Kobold Presets</h2>
          <p>If you insist on using Kobold, try these settings to reduce lag:</p>
          <ul className="bg-gray-800 p-6 rounded-lg space-y-2 border border-gray-700">
             <li><strong>Preset:</strong> Godlike or Erebus</li>
             <li><strong>Context Size:</strong> Lower to 2048 (Higher = Slower)</li>
             <li><strong>Temperature:</strong> 0.7</li>
             <li><strong>Repetition Penalty:</strong> 1.1</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Stop Waiting for Text to Load</h2>
          <p>Configuring endpoints and Google Colab links is a headache. Why not use a platform that hosts the models for you?</p>
          <p><strong>Candy.ai</strong> runs on dedicated high-speed servers. You just log in and chat. No API URL, no Kobold, no waiting.</p>

          <div className="mt-12 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg inline-flex items-center gap-2">
              <Server className="w-5 h-5" /> Try Instant Chat (Free)
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
