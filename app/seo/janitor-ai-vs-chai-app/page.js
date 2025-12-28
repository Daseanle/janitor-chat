import Link from "next/link";
import { Check, X, ArrowRight, Star, Zap } from "lucide-react";

export const metadata = {
  title: "Janitor AI vs Chai App: Which is Better for NSFW? (2025)",
  description: "Comparing Janitor AI and Chai App. Which one offers better uncensored chat, fewer ads, and smarter AI characters? Read our honest comparison.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://candy.ai?via=yourcode";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans selection:bg-pink-500 selection:text-white">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Janitor AI vs Chai App: The Showdown</h1>
          
          <p>Both Janitor AI and Chai App are titans in the AI character chat world, but they suffer from opposite problems. Chai is flooded with intrusive ads, while Janitor AI is plagued by server instability.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Comparison: The Good & The Bad</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-[#1e1e24] p-6 rounded-xl border border-red-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Chai App</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 text-red-400"><X className="w-4 h-4 mt-1" /> <strong>Ads everywhere:</strong> Ads pop up constantly during chats.</li>
                <li className="flex gap-2 text-red-400"><X className="w-4 h-4 mt-1" /> <strong>Limited messages:</strong> You run out of free messages quickly.</li>
                <li className="flex gap-2 text-green-400"><Check className="w-4 h-4 mt-1" /> <strong>Good Mobile App:</strong> Native app available.</li>
              </ul>
            </div>

            <div className="bg-[#1e1e24] p-6 rounded-xl border border-green-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-green-600 text-white text-xs px-2 py-1">Winner</div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" /> Candy.ai
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 text-green-400"><Check className="w-4 h-4 mt-1" /> <strong>Zero Ads:</strong> Completely immersive experience.</li>
                <li className="flex gap-2 text-green-400"><Check className="w-4 h-4 mt-1" /> <strong>Unlimited Chat:</strong> No message caps on premium.</li>
                <li className="flex gap-2 text-green-400"><Check className="w-4 h-4 mt-1" /> <strong>Visuals:</strong> Generates photos during chat.</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-8">Verdict</h3>
          <p>If you hate ads breaking your immersion, skip Chai. If you hate server crashes, skip Janitor AI. <strong>Candy.ai</strong> offers the best middle ground: stable, ad-free, and uncensored.</p>

          <div className="mt-8 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center gap-2">
              Try the Ad-Free Alternative <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
