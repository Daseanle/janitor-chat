import os
import json
import datetime
import random
import re
import subprocess
import time

# Consts
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(PROJECT_ROOT, 'data', 'posts')
SEO_DATA_FILE = os.path.join(PROJECT_ROOT, 'app', 'lib', 'seo-data.js')

# --- "Mini-AI" Knowledge Base ---
# This allows the script to generate unique, high-quality content without an external API.

TEMPLATES = {
    "hooks": [
        "Is Janitor AI letting you down just when the conversation was getting good? You aren't alone.",
        "Nothing kills the mood faster than a 'Load Failed' error or an endless spinning wheel.",
        "We've all been there: You've crafted the perfect prompt, hit send, and... nothing.",
        "In 2026, finding a reliable, uncensored AI chat platform is harder than it should be.",
        "Are you tired of constantly refreshing the page hoping for a server miracle?"
    ],
    "pain_points": [
        "The servers are overloaded, the responses are slow, and the filter seems to be getting stricter.",
        "Community reports indicate that API timeouts have increased by 40% this month alone.",
        "Users on Reddit are frustrated with the frequent downtime and lack of communication.",
        "While Janitor AI was great in the beginning, stability has become a major issue recently."
    ],
    "solutions_tech": [
        """
        <div class="bg-gray-800/50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
            <h4 class="font-bold text-white mb-2">Method 1: The Cache Flush</h4>
            <p class="text-sm text-gray-300">Often, a corrupted session token is the culprit. Go to your browser settings, clear cookies for 'janitorai.com', and re-login.</p>
        </div>
        """,
        """
        <div class="bg-gray-800/50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
            <h4 class="font-bold text-white mb-2">Method 2: Check API Quota</h4>
            <p class="text-sm text-gray-300">If you are using OpenAI, check your billing dashboard. Even if you have credits, an expired card can block generation.</p>
        </div>
        """,
        """
        <div class="bg-gray-800/50 p-4 rounded-lg my-4 border-l-4 border-blue-500">
            <h4 class="font-bold text-white mb-2">Method 3: KoboldCPP Proxy</h4>
            <p class="text-sm text-gray-300">Switching to a local KoboldCPP instance can bypass the main server queue entirely, though it requires a good GPU.</p>
        </div>
        """
    ],
    "solutions_alt": [
        """
        <div class="bg-gray-800/50 p-4 rounded-lg my-4 border-l-4 border-green-500">
            <h4 class="font-bold text-white mb-2">Method 1: Switch to a Stable Platform</h4>
            <p class="text-sm text-gray-300">Instead of fighting errors, switch to a platform built for stability. Candy.ai guarantees 99.9% uptime.</p>
        </div>
        """,
        """
        <div class="bg-gray-800/50 p-4 rounded-lg my-4 border-l-4 border-green-500">
            <h4 class="font-bold text-white mb-2">Method 2: Go Premium elsewhere</h4>
            <p class="text-sm text-gray-300">Free services will always have queues. Investing a few dollars in a specialized service ensures zero wait times.</p>
        </div>
        """
    ]
}

KEYWORDS_BASE = [
    "janitor-ai-slow-fix",
    "janitor-ai-not-loading",
    "character-ai-filter-bypass",
    "kobold-ai-settings-guide",
    "best-nsfw-ai-chat-2026",
    "janitor-ai-alternative-reddit",
    "silly-tavern-presets",
    "venus-chub-api-key",
    "risu-ai-guide",
    "spicy-chat-queue-skip"
]

# --- Logic Engine ---

def get_current_date():
    return datetime.date.today().strftime("%B %d, %Y")

def get_year():
    return datetime.date.today().year

def generate_dynamic_keyword():
    """
    Combines a base keyword with a random suffix to create long-tail SEO traffic.
    """
    suffix = random.choice([
        f"updated-{get_year()}",
        "solution",
        "tutorial",
        "easy-fix",
        "no-ban"
    ])
    base = random.choice(KEYWORDS_BASE)
    return f"{base}-{suffix}"

def assemble_content(keyword):
    """
    'Mini-AI' that assembles a coherent article from content blocks.
    """
    title = keyword.replace('-', ' ').title()
    current_date = get_current_date()
    year = get_year()
    
    # 1. Decide Context
    cta_type = "general"
    if "slow" in keyword or "load" in keyword:
        title_prefix = "How to Fix: "
        cta_type = "speed"
    elif "alternative" in keyword or "vs" in keyword:
        title_prefix = "Comparison: "
        cta_type = "quality"
    else:
        title_prefix = "Guide: "
        cta_type = "general"
        
    final_title = f"{title_prefix}{title}"

    # 2. Pick Blocks
    hook = random.choice(TEMPLATES["hooks"])
    pain = random.choice(TEMPLATES["pain_points"])
    
    # Randomly pick 2 tech solutions and 1 alt solution
    solutions = random.sample(TEMPLATES["solutions_tech"], 2) + random.sample(TEMPLATES["solutions_alt"], 1)
    random.shuffle(solutions)
    
    # 3. Generate Contextual CTA
    candy_link = "https://www.ejd1s4io.com/MF3W3H/3QQG7/"
    if cta_type == "speed":
        cta_box = f"""
        <div class="mt-8 p-6 bg-gradient-to-r from-red-900/40 to-pink-900/40 border border-pink-500/30 rounded-xl relative overflow-hidden">
            <div class="relative z-10">
                <h3 class="text-xl font-bold text-white mb-2">🛑 Stop Waiting in Queues</h3>
                <p class="text-gray-300 text-sm mb-4">Janitor server load is high. Skip the line instantly.</p>
                <a href="{candy_link}" target="_blank" class="inline-flex items-center text-pink-400 font-bold hover:text-white transition-colors">
                    Try Fast Mode on Candy.ai &rarr;
                </a>
            </div>
        </div>
        """
    else:
         cta_box = f"""
        <div class="mt-8 p-6 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-blue-500/30 rounded-xl relative overflow-hidden">
            <div class="relative z-10">
                <h3 class="text-xl font-bold text-white mb-2">✨ Experience Visual Chat</h3>
                <p class="text-gray-300 text-sm mb-4">Chat is good. Chat + Images is better. See what you're missing.</p>
                <a href="{candy_link}" target="_blank" class="inline-flex items-center text-blue-400 font-bold hover:text-white transition-colors">
                    Unlock Visual Mode &rarr;
                </a>
            </div>
        </div>
        """

    # 4. Final HTML Assembly
    description = f"{hook} {pain} Updated guide for {year}."
    
    content_html = f"""
    <div class="mb-8 flex items-center gap-3 text-sm text-gray-400">
        <span class="bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full border border-pink-500/20">Updated: {current_date}</span>
        <span>{random.randint(2, 8)} min read</span>
    </div>

    <p class="text-xl text-gray-200 leading-relaxed mb-8">
        {hook}
    </p>

    <div class="grid md:grid-cols-2 gap-6 mb-12">
        <div class="bg-[#1e1e24] p-6 rounded-xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-3 text-red-400 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                The Problem
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">{pain}</p>
        </div>
        <div class="bg-[#1e1e24] p-6 rounded-xl border border-gray-800">
            <h3 class="text-lg font-bold text-white mb-3 text-green-400 flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                The Fix
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed">We have tested 3 reliable methods to bypass this issue in {year}.</p>
        </div>
    </div>
    
    {cta_box}

    <h2 class="text-3xl font-bold text-white mt-12 mb-6">Step-by-Step Solutions</h2>
    <div class="prose prose-invert max-w-none text-gray-300">
        <p>Follow these steps to resolve <strong>{title}</strong> efficiently.</p>
        {''.join(solutions)}
    </div>

    <h2 class="text-2xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
    <p class="text-gray-300">
        AI technology moves fast. While these fixes work for now, using a platform with dedicated infrastructure like <strong>Candy.ai</strong> is the only permanent fix for connection issues.
    </p>
    
    <div class="mt-12 text-center">
        <a href="{candy_link}" target="_blank" class="bg-pink-600 hover:bg-pink-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-600/20 hover:scale-105 transition-transform inline-block">
            Start Chatting Instantly &rarr;
        </a>
    </div>
    """

    return {
        "slug": keyword,
        "title": final_title,
        "description": description,
        "content": content_html,
        "category": "Guide"
    }

def update_seo_data_js(slug, title, category):
    if not os.path.exists(SEO_DATA_FILE):
        return

    with open(SEO_DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    if f'slug: "{slug}"' in content or f"slug: '{slug}'" in content:
        print(f"Slug {slug} already exists in registry.")
        return

    new_entry = f"""
  {{ 
    slug: "{slug}", 
    title: "{title}", 
    category: "{category}" 
  }},"""
    
    content = content.strip()
    # Insert before the last closing bracket
    if content.endswith('];'):
        new_content = content[:-2] + new_entry + "\n];"
        with open(SEO_DATA_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Registered {slug} in seo-data.js")

def git_push(message):
    try:
        # Check if git is available
        subprocess.run(["git", "--version"], stdout=subprocess.DEVNULL, check=True)
        if not os.path.exists(os.path.join(PROJECT_ROOT, '.git')):
            return

        print("🚀 Git: Staging changes...")
        subprocess.run(["git", "add", "."], check=True, cwd=PROJECT_ROOT)
        
        print(f"🚀 Git: Committing '{message}'...")
        subprocess.run(["git", "commit", "-m", message], check=True, cwd=PROJECT_ROOT)
        
        print("🚀 Git: Pushing...")
        subprocess.run(["git", "push"], check=True, cwd=PROJECT_ROOT)
        print("✅ Git Push Complete.")
    except Exception as e:
        print(f"⚠️ Git Error: {e}")

def main():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        
    print("🔥 Starting Local Content Engine (No API Key Required)...")
    
    existing_files = set(os.listdir(DATA_DIR))
    generated_slugs = []

    # Generate 3 Unique Articles
    for i in range(3):
        # 1. Generate unique keyword
        target_keyword = generate_dynamic_keyword()
        while f"{target_keyword}.json" in existing_files:
            target_keyword = generate_dynamic_keyword()

        print(f"Processing: {target_keyword}")

        # 2. Assemble Content using Local Logic
        article_data = assemble_content(target_keyword)
        
        # 3. Save to JSON
        json_filename = f"{article_data['slug']}.json"
        json_path = os.path.join(DATA_DIR, json_filename)
        
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(article_data, f, indent=2, ensure_ascii=False)
        
        # 4. Register
        update_seo_data_js(article_data['slug'], article_data['title'], article_data['category'])
        
        existing_files.add(json_filename)
        generated_slugs.append(article_data['slug'])
        
    # Git Sync
    if generated_slugs:
        slugs_str = ", ".join(generated_slugs[:2]) + "..."
        git_push(f"Auto-generated {len(generated_slugs)} new articles: {slugs_str}")

    print("🎉 Done! No API Key needed.")

if __name__ == "__main__":
    main()
