import Link from "next/link";

export const metadata = {
  title: "Janitor AI LLM Error: What it means & How to fix it",
  description: "Understanding the 'LLM Error' on Janitor AI. Why your API key might be rejected and how to get a working LLM for free.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://candy.ai?via=yourcode";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Janitor AI "LLM Error": The Ultimate Guide</h1>
          <p>If you see "LLM Error", it means the AI model failed to generate a response. This is usually caused by running out of OpenAI credits or a KoboldAI connection drop.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Solution: Stop Paying for API Keys</h2>
          <p>Maintaining your own API keys for Janitor AI is expensive and technical. </p>
          <p><strong>Candy.ai</strong> includes the LLM cost in its service (and offers a free tier). You never have to worry about API errors, keys, or technical setups again.</p>

          <div className="mt-8 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all inline-block">
              Get Free LLM Access on Candy.ai
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
