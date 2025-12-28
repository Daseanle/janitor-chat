import Link from "next/link";

export const metadata = {
  title: "Best Anime AI Chat with No Filter (Uncensored Waifus)",
  description: "Chat with your favorite Anime Waifus without restrictions. The best platforms for uncensored Anime AI roleplay.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://candy.ai?via=yourcode";

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Uncensored Anime AI Chat</h1>
          <p>Finding a good Anime AI chat that doesn't filter NSFW content is hard. Character.ai is strict, and Janitor AI is unstable.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Anime Paradise: Candy.ai</h2>
          <p>Candy.ai has a dedicated "Anime" section featuring high-quality art styles. Whether you like Tsunderes, Yanderes, or Monster Girls, you can chat and generate images without any moralizing filters.</p>

          <div className="mt-8 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="text-pink-400 font-bold text-xl hover:underline">
              Start Chatting with Anime Characters &rarr;
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
