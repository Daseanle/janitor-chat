import Link from "next/link";
import { Heart } from "lucide-react";

export const metadata = {
  title: "5 Best AI Girlfriend Sites (NSFW & Realistic) 2025 Ranking",
  description: "Looking for a virtual partner? We ranked the top 5 AI Girlfriend sites based on realism, NSFW capabilities, and image generation.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center gap-3">
            <Heart className="text-pink-500 fill-current" /> Best AI Girlfriend Sites 2025
          </h1>
          <p>AI technology has evolved. You can now have a virtual girlfriend who remembers your conversations, sends you photos, and engages in deep roleplay.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">#1. Candy.ai (The Best Overall)</h2>
          <p>Candy.ai takes the crown for its stunning realism. It's not just a chat bot; it's a visual experience. You can choose from hundreds of personalities, from anime girls to realistic models.</p>
          
          <div className="mt-8 mb-12 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg">
              Create Your Dream AI Girlfriend
            </a>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">#2. Janitor AI</h2>
          <p>Good for text-only roleplay with a large variety of user-created characters, but lacks the visual immersion of Candy.</p>
        </article>
      </div>
    </div>
  );
}
