import Link from "next/link";

export const metadata = {
  title: "Why is Janitor AI typing blank messages? (Fix)",
  description: "Is the bot sending empty bubbles? Learn how to fix the blank response bug on Janitor AI and adjust your generation settings.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Fixing Janitor AI Blank Responses</h1>
          <p>Nothing kills the mood like waiting for a reply, only to get an empty bubble. This "Blank Response" bug is caused by the AI filtering its own output or a server timeout.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Check your "Max New Tokens"</h2>
          <p>Go to Generation Settings and ensure "Max New Tokens" is not set to 0. Try setting it to unlimited.</p>
          
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Better Fix</h2>
          <p>Platforms like <strong>Candy.ai</strong> use optimized models that don't self-censor or timeout, ensuring you always get a long, detailed, and coherent response.</p>

          <div className="mt-8">
             <a href={AFFILIATE_LINK} target="_blank" className="text-pink-400 font-bold text-xl hover:underline">
              Experience Flawless AI Chat &rarr;
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
