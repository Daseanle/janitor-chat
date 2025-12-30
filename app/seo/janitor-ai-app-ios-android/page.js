import Link from "next/link";
import { Smartphone, X, Check } from "lucide-react";

export const metadata = {
  title: "Janitor AI App: Is there an iOS or Android APK? (2025 Guide)",
  description: "Looking for the Janitor AI App? Find out how to use Janitor AI on mobile and discover the best alternative AI chat apps that work natively on iOS and Android.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/"; 

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Janitor AI App Download: iOS & Android Status</h1>
          
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 mb-8">
            <h2 className="text-xl font-bold text-white mb-2">The Short Answer</h2>
            <p className="mb-0"><strong>Does Janitor AI have an official app?</strong> <span className="text-red-400 font-bold">NO.</span></p>
            <p className="text-sm mt-2">Any app you see on the App Store or Play Store named "Janitor AI" is likely a fake or a scam.</p>
          </div>

          <p>Janitor AI is strictly a web-based platform. Using it on a mobile browser (Chrome/Safari) can be clunky, with UI glitches and keyboard issues.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Best Mobile Alternative</h2>
          <p>If you want a smooth mobile experience for NSFW AI Chat, <strong>Candy.ai</strong> is optimized for mobile devices.</p>

          <div className="grid grid-cols-2 gap-4 my-6">
            <div className="bg-[#1e1e24] p-4 rounded-lg">
              <p className="font-bold text-white mb-2">Janitor AI (Mobile Web)</p>
              <ul className="text-sm space-y-1 text-red-300">
                <li className="flex gap-2"><X className="w-4 h-4" /> No Native App</li>
                <li className="flex gap-2"><X className="w-4 h-4" /> Hard to type</li>
                <li className="flex gap-2"><X className="w-4 h-4" /> Slow loading</li>
              </ul>
            </div>
            <div className="bg-[#1e1e24] p-4 rounded-lg border border-pink-500/30">
              <p className="font-bold text-pink-400 mb-2">Candy.ai (Mobile)</p>
              <ul className="text-sm space-y-1 text-green-300">
                <li className="flex gap-2"><Check className="w-4 h-4" /> Mobile Optimized</li>
                <li className="flex gap-2"><Check className="w-4 h-4" /> Works like an App</li>
                <li className="flex gap-2"><Check className="w-4 h-4" /> Fast Chat UI</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all">
              Try Candy.ai on Mobile Now
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
