import Link from "next/link";
import { Clock, Zap } from "lucide-react";

export const metadata = {
  title: "Janitor AI vs Spicy Chat AI: Wait Times & Features Compared",
  description: "Tired of waiting in line on Spicy Chat? See how it compares to Janitor AI and why Candy AI might be the faster alternative you are looking for.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Janitor AI vs Spicy Chat: The Battle of Queue Times</h1>
          <p>Spicy Chat AI became popular as a Janitor AI alternative, but it introduced a new problem: <strong>Waiting Queues</strong>. Free users often have to wait minutes just to send a message.</p>
          
          <div className="my-8 p-6 bg-gray-800 rounded-xl border border-gray-700">
             <h3 className="text-xl font-bold text-white mb-4">The "Waiting Room" Problem</h3>
             <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <Clock className="text-red-400 w-6 h-6" />
                    <span><strong>Spicy Chat:</strong> 5-10 minute wait times during peak hours.</span>
                </li>
                <li className="flex items-center gap-3">
                    <Zap className="text-green-400 w-6 h-6" />
                    <span><strong>Candy.ai:</strong> Instant access. No queues, ever.</span>
                </li>
             </ul>
          </div>

          <p>While Janitor AI doesn't have a queue, its servers simply crash. Candy.ai solves both issues by providing enterprise-grade infrastructure that is always online and instant.</p>
          
          <div className="mt-8 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="text-pink-400 font-bold text-xl hover:underline">
              Skip the Queue & Chat Instantly on Candy.ai &rarr;
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
