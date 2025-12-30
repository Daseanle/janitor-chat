import Link from "next/link";
import { Sliders } from "lucide-react";

export const metadata = {
  title: "Best Janitor AI Settings for NSFW & Roleplay (2025 Guide)",
  description: "Struggling with Janitor AI repetition or filters? Here are the best generation settings, temperature, and prompts. Or switch to a platform that just works.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/"; 

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Best Janitor AI Generation Settings</h1>
          
          <p>Is your AI repeating itself? Or speaking for you? Here are the recommended settings for LLMs like GPT-3.5 or Claude on Janitor AI:</p>

          <ul className="bg-gray-800 p-6 rounded-lg space-y-4 my-6">
             <li><strong>Temperature:</strong> 0.85 (Best for creativity)</li>
             <li><strong>Max New Tokens:</strong> 0 (Unlimited)</li>
             <li><strong>Context Size:</strong> 4096</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Tired of Tweaking Settings?</h2>
          <p>Configuring LLM parameters is complex. If you get it wrong, the bot becomes stupid. </p>
          <p>If you just want to roleplay without being a prompt engineer, we recommend <strong>Candy.ai</strong>. Their models are pre-tuned for immersive, uncensored roleplay. No settings required.</p>

          <div className="mt-8">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all">
              Try Pre-configured NSFW AI
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
