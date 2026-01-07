import os
import json
import datetime
import random
import re
import subprocess
import time
import requests
import xml.etree.ElementTree as ET
from urllib.parse import quote_plus

# Consts
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(PROJECT_ROOT, 'data', 'posts')
SEO_DATA_FILE = os.path.join(PROJECT_ROOT, 'app', 'lib', 'seo-data.js')

# --- 1. TRAFFIC ENGINE: Real Google Trends Scraping ---
def get_real_trends():
    """
    Fetches real-time related queries from Google Search Trends RSS.
    Falls back to smart keywords if connection fails.
    """
    trends = []
    # Search for related terms "AI Chat", "Janitor AI", "Character AI"
    urls = [
        "https://trends.google.com/trends/trendingsearches/daily/rss?geo=US",
        "https://trends.google.com/trends/trendingsearches/daily/rss?geo=GB"
    ]
    
    print("🌍 Traffic Engine: Scanning Google Trends...")
    try:
        for url in urls:
            response = requests.get(url, timeout=5)
            if response.status_code == 200:
                root = ET.fromstring(response.content)
                for item in root.findall('.//item'):
                    title = item.find('title').text.lower()
                    # Filter for relevant tech/AI terms or generic trends we can piggyback
                    if any(x in title for x in ['ai', 'chat', 'bot', 'tech', 'app', 'server', 'down', 'error']):
                        trends.append(title.replace(' ', '-'))
    except Exception as e:
        print(f"⚠️ Trend fetch warning: {e}")

    # Mix real trends with evergreen Janitor high-volume keywords
    evergreen = [
        "janitor-ai-load-failed-fix",
        "janitor-ai-slow-response",
        "best-janitor-ai-alternatives",
        "janitor-ai-settings-guide",
        "character-ai-vs-janitor-ai-nsfw",
        "how-to-use-kobold-ai",
        "silly-tavern-setup-android",
        "venus-chub-ai-scenarios",
        "crushon-ai-review",
        "spicy-chat-wait-time"
    ]
    
    combined = list(set(trends + evergreen))
    random.shuffle(combined)
    return combined[:5] # Return top 5 candidates

# --- 2. QUALITY ENGINE: E-E-A-T Narrative Templates (Simulated First-Person) ---
# These templates simulate "Experience" and "Authority" by using first-person testing narratives.

NARRATIVES = {
    "tech_expert": {
        "intro": "I spent last night debugging the Janitor AI API response headers because I was tired of the constant 'Load Failed' errors. What I found was surprising: it's not always the server's fault.",
        "tone": "Technical",
        "perspective": "Developer"
    },
    "frustrated_user": {
        "intro": "It happened again. Just as the roleplay was getting intense, the spinning wheel of death appeared. I checked Reddit, and everyone was screaming. But I found a workaround that actually let me finish my chat.",
        "tone": "Relatable",
        "perspective": "User"
    },
    "reviewer": {
        "intro": "I've tested over 20 AI chat platforms this month, comparing response times, memory token limits, and filter strictness. Here is why {keyword} is currently trending and what you should do about it.",
        "tone": "Authoritative",
        "perspective": "Analyst"
    }
}

# --- 3. CONVERSION ENGINE: Pain-Point Mapping ---
COLOR_MAP = {
    "speed": {"bg": "from-red-900/40 to-pink-900/40", "border": "border-pink-500/30", "text": "text-pink-400", "icon": "⚡️"},
    "freedom": {"bg": "from-purple-900/40 to-indigo-900/40", "border": "border-purple-500/30", "text": "text-purple-400", "icon": "🔞"},
    "quality": {"bg": "from-green-900/40 to-emerald-900/40", "border": "border-green-500/30", "text": "text-green-400", "icon": "💎"}
}

def get_contextual_cta(keyword):
    """
    Returns specific upsell logic based on user intent.
    """
    link = "https://www.ejd1s4io.com/MF3W3H/3QQG7/"
    
    if any(x in keyword for x in ['slow', 'down', 'error', 'load', 'wait', 'queue']):
        return {
            "type": "speed",
            "headline": "Stop Waiting. Start Chatting.",
            "sub": "Janitor servers are overloaded (again). Skip the line instantly with Candy.ai's dedicated GPUs.",
            "btn": "Get Instant Access",
            "link": link
        }
    elif any(x in keyword for x in ['filter', 'nsfw', 'ban', 'rules', 'bypass', 'uncensored']):
        return {
            "type": "freedom",
            "headline": "No Filters. No Bans. Just Chat.",
            "sub": "Tired of 'I can't generate that'? Switch to the only platform that truly allows ANYTHING.",
            "btn": "Unlock Uncensored Mode",
            "link": link
        }
    else:
        return {
            "type": "quality",
            "headline": "Experience Next-Gen AI",
            "sub": "Why settle for text? See your AI characters with dynamic image generation.",
            "btn": "Try Visual Chat Free",
            "link": link
        }

# --- MAIN GENERATOR ---

def generate_article(keyword):
    current_date = datetime.date.today().strftime("%B %d, %Y")
    year = datetime.date.today().year
    
    # Select Narrative
    persona_key = random.choice(list(NARRATIVES.keys()))
    persona = NARRATIVES[persona_key]
    
    # Select CTA
    cta = get_contextual_cta(keyword)
    theme = COLOR_MAP[cta['type']]
    
    title = keyword.replace('-', ' ').title()
    if cta['type'] == 'speed':
        title = f"Fixing {title}: A Faster Method ({year})"
    elif cta['type'] == 'freedom':
        title = f"{title} Uncensored Guide {year}"
    else:
        title = f"{title}: Ultimate Review {year}"

    # Simulate detailed content structure
    html_content = f"""
    <div class="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-400">
        <span class="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Updated: {current_date}</span>
        <span class="bg-gray-800 px-3 py-1 rounded-full border border-gray-700">Author: {persona['perspective']}</span>
        <span class="bg-{theme['text'].split('-')[1]}-500/10 {theme['text']} px-3 py-1 rounded-full border {theme['border']}">Status: Verified</span>
    </div>

    <!-- E-E-A-T Intro -->
    <div class="prose prose-invert prose-lg max-w-none mb-10">
        <p class="text-xl text-gray-200 leading-relaxed font-light border-l-4 {theme['border']} pl-6 italic">
            "{persona['intro'].format(keyword=title)}"
        </p>
    </div>

    <!-- The Problem Analysis (Table) -->
    <h2 class="text-2xl font-bold text-white mb-6">Attack of the Clones: Understanding the Issue</h2>
    <div class="overflow-x-auto mb-10 rounded-xl border border-gray-800">
        <table class="w-full text-left text-sm text-gray-400">
            <thead class="bg-gray-800 text-gray-200 uppercase">
                <tr>
                    <th class="px-6 py-4">Symptom</th>
                    <th class="px-6 py-4">Likely Cause</th>
                    <th class="px-6 py-4">Fix Difficulty</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-800 bg-[#1e1e24]">
                <tr>
                    <td class="px-6 py-4 font-medium text-white">Infinite Loading</td>
                    <td class="px-6 py-4">Server Overload</td>
                    <td class="px-6 py-4 text-yellow-500">Medium</td>
                </tr>
                <tr>
                    <td class="px-6 py-4 font-medium text-white">"I cannot generate..."</td>
                    <td class="px-6 py-4">Filter Triggered</td>
                    <td class="px-6 py-4 text-red-500">Hard</td>
                </tr>
                 <tr>
                    <td class="px-6 py-4 font-medium text-white">Blank Response</td>
                    <td class="px-6 py-4">API Timeout</td>
                    <td class="px-6 py-4 text-green-500">Easy</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Mid-Content CTA (Highly Contextual) -->
    <div class="my-12 p-8 bg-gradient-to-r {theme['bg']} rounded-2xl border {theme['border']} relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300">
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-left">
                <h3 class="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    {theme['icon']} {cta['headline']}
                </h3>
                <p class="text-gray-200 max-w-md">{cta['sub']}</p>
            </div>
            <a href="{cta['link']}" target="_blank" class="whitespace-nowrap bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-xl transition-colors">
                {cta['btn']} &rarr;
            </a>
        </div>
        <!-- Decorative Glow -->
        <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
    </div>

    <h2 class="text-2xl font-bold text-white mb-6">My Personal Fix Log ({current_date})</h2>
    <div class="space-y-6">
        <div class="flex gap-4">
            <div class="flex-none mt-1">
                <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold border border-gray-700">1</div>
            </div>
            <div>
                <h3 class="text-lg font-bold text-white mb-2">The "Network Switch" Trick</h3>
                <p class="text-gray-400 leading-relaxed">I noticed that switching from Wi-Fi to Mobile Data often forces a new session ID, bypassing the corrupted cache instantly. It sounds stupid, but it worked for me 3 times today.</p>
            </div>
        </div>
        <div class="flex gap-4">
            <div class="flex-none mt-1">
                <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-sm font-bold border border-gray-700">2</div>
            </div>
            <div>
                <h3 class="text-lg font-bold text-white mb-2">Changing the API Endpoint</h3>
                <p class="text-gray-400 leading-relaxed">If you are using the default proxy, try manually setting the Kobold URL to a different node. The main node is often choked by traffic.</p>
            </div>
        </div>
    </div>

    <h2 class="text-2xl font-bold text-white mt-12 mb-6">Final Recommendation</h2>
    <p class="text-gray-300 mb-8 leading-relaxed">
        Look, tinkering with settings is part of the fun for some. But if you just want to relax and chat without being an IT technician, the ecosystem has moved on.
        Platforms like <strong>Candy.ai</strong> have solved the scaling issues that plague community-run projects.
    </p>

    <div class="text-center">
        <a href="{cta['link']}" target="_blank" class="inline-block bg-[#1e1e24] hover:bg-[#25252b] text-white border border-gray-700 px-10 py-4 rounded-xl font-medium transition-all hover:border-pink-500/50">
            Read my full comparison: Janitor vs Candy &rarr;
        </a>
    </div>
    """
    
    return {
        "slug": keyword,
        "title": title,
        "description": f"Updated {current_date}: {persona['intro'][:100]}... Check out the full guide for {year}.",
        "content": html_content,
        "category": "Guide"
    }

def update_seo_data_js(slug, title, category):
    if not os.path.exists(SEO_DATA_FILE): return
    with open(SEO_DATA_FILE, 'r', encoding='utf-8') as f: content = f.read()
    if f'slug: "{slug}"' in content or f"slug: '{slug}'" in content: return
    new_entry = f'\n  {{ slug: "{slug}", title: "{title}", category: "{category}" }},'
    if content.strip().endswith('];'):
        with open(SEO_DATA_FILE, 'w', encoding='utf-8') as f:
            f.write(content.strip()[:-2] + new_entry + "\n];")

def git_push(message):
    try:
        subprocess.run(["git", "add", "."], check=True, cwd=PROJECT_ROOT)
        subprocess.run(["git", "commit", "-m", message], check=True, cwd=PROJECT_ROOT)
        subprocess.run(["git", "push"], check=True, cwd=PROJECT_ROOT)
    except: pass


# --- TELEGRAM NOTIFICATION ---
TELEGRAM_TOKEN = "7879788099:AAH7fT5ClqevXiwzD1gNzk9nj7bE1koUnMk"
TELEGRAM_CHAT_ID = "7551442992"

def send_telegram_notification(message):
    """
    Sends a notification to Telegram.
    """
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHAT_ID,
        "text": message,
        "parse_mode": "Markdown"
    }
    try:
        requests.post(url, json=payload, timeout=5)
        print("📱 Telegram notification sent.")
    except Exception as e:
        print(f"⚠️ Telegram Error: {e}")

def main():
    if not os.path.exists(DATA_DIR): os.makedirs(DATA_DIR)
    
    print("🚀 Auto-SEO Professional: Starting...")
    
    # 1. Traffic Strategy
    candidates = get_real_trends()
    existing_files = set(os.listdir(DATA_DIR))
    generated_slugs = []

    for i in range(3):
        print(f"\n--- Post {i+1}/3 ---")
        
        # Pick Keyword
        keyword = None
        for cand in candidates:
            # Add dynamic date suffix to ensure uniqueness
            cand_unique = f"{cand}-{datetime.date.today().year}"
            if f"{cand_unique}.json" not in existing_files:
                keyword = cand_unique
                break
        
        # Fallback if trends exhausted
        if not keyword:
            keyword = f"janitor-ai-update-{int(time.time())}"
        
        print(f"Targeting: {keyword}")
        
        # 2. Generate
        data = generate_article(keyword)
        
        # 3. Save
        path = os.path.join(DATA_DIR, f"{data['slug']}.json")
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
            
        update_seo_data_js(data['slug'], data['title'], data['category'])
        existing_files.add(f"{data['slug']}.json")
        generated_slugs.append(data['slug'])

    # Git
    if generated_slugs:
        git_push(f"Auto-SEO Pro: {len(generated_slugs)} new articles")
        
        # Telegram Notify
        msg = f"✅ *Auto-SEO Report*\n\nGenerated {len(generated_slugs)} new articles:\n"
        for slug in generated_slugs:
            msg += f"- `{slug}`\n"
        send_telegram_notification(msg)
    
    print("✅ Done.")

if __name__ == "__main__":
    main()
