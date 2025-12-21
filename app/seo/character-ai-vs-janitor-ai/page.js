import Link from "next/link";

export const metadata = {
  title: "Character AI vs Janitor AI vs Candy AI: The NSFW Comparison",
  description: "Can you do NSFW on Character AI? No. We compare Character AI against Janitor AI and Candy AI to find the best unfiltered chat platform.",
};

export default function Page() {
  const AFFILIATE_LINK = "https://candy.ai?via=yourcode"; 

  return (
    <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Character AI vs Janitor AI: Which is best for NSFW?</h1>
          
          <p><strong>Character.ai (C.AI)</strong> is the most popular chat bot, but it has a strict <strong>NSFW filter</strong>. If you try to initiate romance or violence, you get the "filter error".</p>
          <p><strong>Janitor AI</strong> was built to be the NSFW version of C.AI, but it suffers from server issues and setup complexity.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Third Option: The Best of Both Worlds</h2>
          <p><strong>Candy.ai</strong> combines the ease of use of Character.ai with the freedom of Janitor AI.</p>
          
          <table className="w-full text-left border-collapse my-6">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Platform</th>
                <th className="p-2">NSFW?</th>
                <th className="p-2">Ease of Use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="p-2">Character AI</td>
                <td className="p-2 text-red-500">No</td>
                <td className="p-2 text-green-500">Easy</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="p-2">Janitor AI</td>
                <td className="p-2 text-green-500">Yes</td>
                <td className="p-2 text-red-500">Hard</td>
              </tr>
              <tr className="border-b border-gray-800 bg-pink-900/10">
                <td className="p-2 font-bold text-pink-400">Candy AI</td>
                <td className="p-2 text-green-500 font-bold">Yes</td>
                <td className="p-2 text-green-500 font-bold">Easy</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-8 text-center">
             <a href={AFFILIATE_LINK} target="_blank" className="text-pink-400 font-bold text-xl hover:underline">
              Experience C.AI style chat with NO Filters &rarr;
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
