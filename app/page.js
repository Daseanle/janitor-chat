import Link from "next/link";
import { CheckCircle2, XCircle, Zap, ShieldAlert, ArrowRight, Star, AlertTriangle, Server, Users, Lock } from "lucide-react";

export default function Home() {
  // 🔴 核心修改点：把这里换成你申请到的 Candy.ai 真实推广链接
  // 如果还没批下来，暂时填 Candy 官网首页，或者填你上一版代码里的链接
  const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/"; 
  
  // 获取当前日期，让SEO标题看起来像最新的
  const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <main className="min-h-screen bg-[#0f0f12] text-white selection:bg-pink-500 selection:text-white font-sans">
      {/* 顶部紧急状态栏 - 制造焦虑 */}
      <div className="bg-red-500/10 border-b border-red-500/20 px-4 py-2 text-center text-sm font-medium text-red-200 animate-pulse">
        <span className="flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4" />
          System Alert: Janitor AI is currently experiencing high latency.
        </span>
      </div>

      {/* Hero 区域 */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* 背景光效 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
            </span>
            Updated: {currentDate}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-purple-200">
            Is Janitor AI Down? <br />
            <span className="text-pink-500">Try the #1 Uncensored Chat.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop waiting in queues or dealing with strict filters. Experience faster, smarter, and completely <strong>unfiltered AI roleplay</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="nofollow noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full text-lg font-bold shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all hover:scale-105 flex items-center gap-2"
            >
              Start Chatting Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-sm text-gray-500">No login required for guest mode</span>
          </div>
        </div>
      </section>

      {/* 核心对比表格 - 转化神器 */}
      <section className="py-20 bg-[#16161a]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-4">Why Users Are Switching in 2025</h2>
          <p className="text-gray-400 text-center mb-12">The definitive comparison between the official site and top alternatives.</p>
          
          <div className="bg-[#1e1e24] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-3 p-6 border-b border-gray-800 bg-gray-900/50">
              <div className="col-span-1 text-gray-400 font-medium flex items-center">Feature</div>
              <div className="col-span-1 text-center font-bold text-gray-400">Janitor AI</div>
              <div className="col-span-1 text-center font-bold text-pink-400 flex items-center justify-center gap-1">
                <Star className="w-4 h-4 fill-current" />
                Candy.ai
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-3 p-6 border-b border-gray-800 items-center hover:bg-white/5 transition-colors">
              <div className="col-span-1 font-medium text-sm md:text-base">NSFW Filter Policy</div>
              <div className="col-span-1 flex flex-col items-center justify-center text-yellow-500">
                <ShieldAlert className="w-6 h-6 mb-1" />
                <span className="text-xs text-gray-500">Strict/Inconsistent</span>
              </div>
              <div className="col-span-1 flex flex-col items-center justify-center text-green-500 font-bold">
                 <CheckCircle2 className="w-6 h-6 mb-1" />
                 <span className="text-xs">100% Uncensored</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 p-6 border-b border-gray-800 items-center hover:bg-white/5 transition-colors">
              <div className="col-span-1 font-medium text-sm md:text-base">Server Stability</div>
              <div className="col-span-1 flex flex-col items-center text-red-400">
                <XCircle className="w-6 h-6 mb-1" />
                <span className="text-xs">Frequent Crashes</span>
              </div>
              <div className="col-span-1 flex flex-col items-center text-green-500">
                <Zap className="w-6 h-6 mb-1" />
                <span className="text-xs font-bold">99.9% Uptime</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 p-6 border-b border-gray-800 items-center hover:bg-white/5 transition-colors">
              <div className="col-span-1 font-medium text-sm md:text-base">Image Generation</div>
              <div className="col-span-1 flex justify-center text-gray-600 text-sm">Text Only</div>
              <div className="col-span-1 flex justify-center text-pink-400 font-bold text-center text-sm">Text + NSFW Images</div>
            </div>

            {/* CTA Row */}
            <div className="grid grid-cols-3 p-6 bg-gray-900/50 items-center">
              <div className="col-span-1 hidden md:block"></div>
              <div className="col-span-1 text-center text-xs text-gray-500">
                <Link href="https://janitorai.com" className="underline hover:text-gray-400">Check Official Status</Link>
              </div>
              <div className="col-span-1">
                <a 
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="block w-full py-3 bg-pink-600 hover:bg-pink-500 rounded-lg text-center text-sm font-bold transition-all shadow-lg shadow-pink-900/20"
                >
                  Try Free Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO 深度内容区域 - 专门给 Google 爬虫看的干货 */}
      <article className="py-24 px-4 bg-[#0f0f12]">
        <div className="container mx-auto max-w-3xl prose prose-invert prose-lg prose-headings:text-gray-100 prose-a:text-pink-400">
          
          {/* Section 1: 状态分析 (Target Keyword: Is Janitor AI Down) */}
          <div className="mb-16">
            <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 text-white">
              <AlertTriangle className="text-yellow-500" />
              Is Janitor AI Down right now? ({currentDate} Status)
            </h2>
            <p className="text-gray-400 leading-relaxed">
              If you are experiencing connection errors, infinite loading screens, or "API Error" messages when trying to access JanitorAI.com, you are not alone. 
              As of <strong>{currentDate}</strong>, many users on Reddit and Discord have reported intermittent downtime. 
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              The official Janitor AI servers often struggle to handle the massive influx of traffic, leading to database connection failures and slow LLM response times. 
              While the developers are working on scaling their infrastructure, stability remains a major issue for daily users.
            </p>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 mt-6">
              <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-2">Common Error Codes:</h4>
              <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                <li>504 Gateway Time-out</li>
                <li>"Load Failed" on chat screen</li>
                <li>LLM API Quota Exceeded</li>
              </ul>
            </div>
          </div>

          {/* Section 2: 速度分析 (Target Keyword: Why is Janitor AI slow) */}
          <div className="mb-16">
            <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 text-white">
              <Server className="text-blue-500" />
              Why is Janitor AI so slow lately?
            </h2>
            <p className="text-gray-400 leading-relaxed">
              The primary reason for Janitor AI's slowness is <strong>GPU server overload</strong>. Running uncensored LLMs (Large Language Models) requires immense computational power. 
              Unlike paid services like <a href={AFFILIATE_LINK} target="_blank" rel="nofollow" className="font-bold hover:underline">Candy.ai</a> which use optimized enterprise-grade GPUs, Janitor AI relies on a mix of beta infrastructure and KoboldAI endpoints which can easily become bottlenecked during peak hours (usually evenings in the US).
            </p>
          </div>

          {/* Section 3: 替代品推荐 (Target Keyword: Uncensored AI Chat Sites) */}
          <div className="mb-16">
            <h2 className="flex items-center gap-3 text-3xl font-bold mb-6 text-white">
              <Users className="text-pink-500" />
              Top 5 Uncensored AI Chat Sites like Janitor AI
            </h2>
            <p className="text-gray-400 mb-6">
              If you are tired of waiting for the servers to come back online, here are the best reliable alternatives that offer <strong>NSFW filters disabled</strong> by default:
            </p>
            
            <div className="space-y-8">
              {/* Alt 1 */}
              <div className="bg-[#1e1e24] p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">1. Candy.ai (Editor's Choice)</h3>
                <p className="text-gray-400 text-sm mb-4">
                  The most advanced AI companion platform in 2025. It offers both realistic and anime styles, photo generation capabilities, and zero censorship on roleplay scenarios. The response time is instant.
                </p>
                <a href={AFFILIATE_LINK} target="_blank" rel="nofollow" className="text-pink-400 font-bold hover:text-pink-300 text-sm">Try Candy.ai Free &rarr;</a>
              </div>

              {/* Alt 2 */}
              <div className="bg-[#1e1e24] p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">2. Crushon.AI</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A great alternative that focuses on "No Filter" character interactions. It has a large community library of user-created characters similar to Janitor AI.
                </p>
              </div>

              {/* Alt 3 */}
              <div className="bg-[#1e1e24] p-6 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">3. SoulGen</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Unique for its ability to generate visual characters from text prompts. If you want to visualize your AI girlfriend/boyfriend, this is the tool.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-pink-900/20 border border-pink-900/50 rounded-xl text-center">
            <p className="text-pink-200 font-medium mb-4">Ready to stop waiting?</p>
            <a 
              href={AFFILIATE_LINK}
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-block px-8 py-3 bg-pink-600 hover:bg-pink-500 text-white rounded-full font-bold transition-all"
            >
              Get Unlimited Chat Access
            </a>
          </div>

        </div>
      </article>
      {/* 内部链接区域 - SEO 关键！让爬虫顺着爬到子页面 */}
      <section className="py-20 bg-[#0f0f12] border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Latest Guides & Comparisons</h3>
          <div className="grid md:grid-cols-2 gap-4">
            
            {/* 竞品对比类 */}
            <Link href="/seo/janitor-ai-vs-chai-app" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-pink-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Comparison</span>
              <span className="text-white group-hover:text-pink-400 font-medium">Janitor AI vs Chai App: Which is Better? &rarr;</span>
            </Link>
            <Link href="/seo/janitor-ai-vs-spicy-chat" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-pink-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Comparison</span>
              <span className="text-white group-hover:text-pink-400 font-medium">Janitor AI vs Spicy Chat: Queue Times & Features &rarr;</span>
            </Link>
            <Link href="/seo/janitor-ai-vs-yodayo" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-pink-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Comparison</span>
              <span className="text-white group-hover:text-pink-400 font-medium">Janitor AI vs Yodayo: Censorship Update &rarr;</span>
            </Link>
            <Link href="/seo/character-ai-vs-janitor-ai" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-pink-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Comparison</span>
              <span className="text-white group-hover:text-pink-400 font-medium">Character AI vs Janitor AI: NSFW Guide &rarr;</span>
            </Link>

            {/* 修复指南类 */}
            <Link href="/seo/fix-janitor-ai-load-failed" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Troubleshooting</span>
              <span className="text-white group-hover:text-blue-400 font-medium">How to Fix "Load Failed" Error &rarr;</span>
            </Link>
            <Link href="/seo/janitor-ai-blank-response" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Troubleshooting</span>
              <span className="text-white group-hover:text-blue-400 font-medium">Fixing Blank/Empty Responses &rarr;</span>
            </Link>
            <Link href="/seo/janitor-ai-llm-error-fix" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Troubleshooting</span>
              <span className="text-white group-hover:text-blue-400 font-medium">"LLM Error" Explained & Solved &rarr;</span>
            </Link>

            {/* 资源类 */}
            <Link href="/seo/janitor-ai-app-ios-android" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-green-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Download</span>
              <span className="text-white group-hover:text-green-400 font-medium">Janitor AI App: iOS & Android APK Status &rarr;</span>
            </Link>
            <Link href="/seo/janitor-ai-free-api-key" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-green-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Guide</span>
              <span className="text-white group-hover:text-green-400 font-medium">How to use Janitor AI for Free (No API Key) &rarr;</span>
            </Link>
            <Link href="/seo/best-ai-girlfriend-sites" className="p-4 bg-[#1e1e24] rounded-lg border border-gray-800 hover:border-green-500/50 transition-all group">
              <span className="text-gray-400 text-xs uppercase tracking-wider block mb-1">Top List</span>
              <span className="text-white group-hover:text-green-400 font-medium">5 Best AI Girlfriend Sites (2025) &rarr;</span>
            </Link>

          </div>
        </div>
      </section>
      {/* Footer - 法律护身符 */}
      <footer className="py-12 border-t border-gray-800 text-center text-gray-600 text-sm bg-[#0a0a0c]">
        <div className="container mx-auto px-4">
          <p className="mb-4">
            &copy; 2025 Janitor-AI.chat. All rights reserved.
          </p>
          <div className="max-w-2xl mx-auto p-4 bg-gray-900 rounded text-xs leading-relaxed border border-gray-800 text-left">
            <div className="flex items-start gap-2 mb-2">
              <Lock className="w-4 h-4 mt-0.5" />
              <strong>Disclaimer:</strong>
            </div>
            Janitor-AI.chat is an independent review, status check, and informational website. 
            We are <strong>NOT</strong> affiliated, associated, authorized, endorsed by, or in any way officially connected with 
            <strong>JanitorAI.com</strong> or its developers. All product and company names are trademarks™ or registered® trademarks of their respective holders. 
            Use of them does not imply any affiliation with or endorsement by them.
            <br/><br/>
            <strong>Affiliate Disclosure:</strong> This site contains affiliate links. We may earn a commission if you sign up through our links at no extra cost to you.
            We only recommend products we trust. Content is intended for users 18+.
          </div>
        </div>
      </footer>
    </main>
  );
}
