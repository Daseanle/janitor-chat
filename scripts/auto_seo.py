import os
import json
import datetime
import random
import re
import subprocess

# Consts
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(PROJECT_ROOT, 'data', 'posts')
SEO_DATA_FILE = os.path.join(PROJECT_ROOT, 'app', 'lib', 'seo-data.js')

# Mock Trend Source
CURRENT_YEAR = datetime.date.today().year
TRENDS = [
    "janitor-ai-slow-response-fix",
    f"best-janitor-ai-prompts-{CURRENT_YEAR}",
    "janitor-ai-api-error-solutions",
    "how-to-use-kobold-ai-with-janitor",
    "janitor-ai-vs-character-ai-comparison",
    "free-janitor-ai-proxy-list",
    "janitor-ai-jailbreak-guide",
    "why-is-janitor-ai-so-slow",
    "janitor-ai-mobile-app-download",
    "safe-janitor-ai-alternatives"
]

def generate_slug(title):
    return title.lower().replace(' ', '-').replace("'", "").replace('"', "")

def mock_llm_generate(keyword):
    """
    Simulates content generation with premium styling matching "janitor-ai-vs-chai-app".
    Includes rich HTML, comparison cards, and SVG icons.
    """
    current_date = datetime.date.today().strftime("%B %d, %Y")
    year = datetime.date.today().year
    
    title = keyword.replace('-', ' ').title()
    slug = keyword
    
    description = f"Latest update ({current_date}): Complete guide to {title}. Learn how to fix errors, optimize settings, and get the best experience in {year}."
    
    # SVG Strings for Icons
    ICON_CHECK = '<svg class="w-4 h-4 mt-1 text-green-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>'
    ICON_X = '<svg class="w-4 h-4 mt-1 text-red-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>'
    ICON_STAR = '<svg class="w-5 h-5 text-yellow-400 fill-current" fill="currentColor" stroke="none" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'
    ICON_ARROW = '<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>'

    # Rich HTML Content
    content = f"""
    <div class="mb-8">
        <p class="text-sm text-gray-400 mb-4 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-green-500"></span> 
            Last Updated: {current_date}
        </p>
        <p class="text-lg leading-relaxed text-gray-300">
            Are you looking for the latest information about <strong class="text-white">{title}</strong>? You are in the right place. 
            As of {current_date}, this is the definitive guide for {year}.
        </p>
    </div>

    <!-- Feature/Status Cards -->
    <div class="grid md:grid-cols-2 gap-6 my-10">
        <!-- Card 1: Current Status -->
        <div class="bg-[#1e1e24] p-6 rounded-xl border border-gray-700/50 hover:border-pink-500/30 transition-colors">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                Status Report
            </h3>
            <ul class="space-y-3 text-sm">
                <li class="flex gap-2 text-gray-300">{ICON_CHECK} <span><strong>Relevance:</strong> High ({year} Updated)</span></li>
                <li class="flex gap-2 text-gray-300">{ICON_CHECK} <span><strong>Accuracy:</strong> Verified</span></li>
                <li class="flex gap-2 text-gray-300">{ICON_CHECK} <span><strong>User Rating:</strong> 4.8/5.0</span></li>
            </ul>
        </div>

        <!-- Card 2: Quick Recommendation -->
        <div class="bg-[#1e1e24] p-6 rounded-xl border border-green-500/20 relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-green-600 text-white text-xs px-3 py-1 font-bold">Top Pick</div>
            <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-2">
                {ICON_STAR} Expert Tip
            </h3>
            <p class="text-sm text-gray-300 mb-3">
                While {title} is popular, many users are switching to specialized platforms for better stability.
            </p>
            <ul class="space-y-3 text-sm">
                <li class="flex gap-2 text-green-400">{ICON_CHECK} <span><strong>Zero Filter:</strong> Uncensored AI</span></li>
                <li class="flex gap-2 text-green-400">{ICON_CHECK} <span><strong>Fast Speed:</strong> No queues</span></li>
            </ul>
        </div>
    </div>
    
    <h2 class="text-3xl font-bold text-white mt-12 mb-6">Deep Dive: Understanding {title}</h2>
    <p class="text-gray-300 mb-6">
        {title} has evolved significantly in {year}. The community has developed new strategies to maximize its potential.
        However, users often encounter specific challenges that require updated solutions.
    </p>

    <h3 class="text-xl font-bold text-white mt-8 mb-4">Common Issues & Solutions</h3>
    <div class="space-y-4 mb-10">
        <div class="bg-[#16161a] p-4 rounded-lg border-l-4 border-red-500">
            <h4 class="font-bold text-white mb-1">Issue: Slow Response Times</h4>
            <p class="text-sm text-gray-400">Likely caused by high server load during peak hours.</p>
        </div>
        <div class="bg-[#16161a] p-4 rounded-lg border-l-4 border-green-500">
            <h4 class="font-bold text-white mb-1">Fix: Use Dedicated API</h4>
            <p class="text-sm text-gray-400">Connecting a dedicated endpoint usually resolves latency issues immediately.</p>
        </div>
    </div>

    <h2 class="text-2xl font-bold text-white mt-12 mb-6">Final Verdict for {year}</h2>
    <p class="text-gray-300 mb-8">
        We have tested {title} extensively. While it remains a solid choice, the stability issues can be frustrating. 
        For users seeking a seamless, ad-free experience with high-quality roleplay, we recommend exploring alternatives.
    </p>

    <div class="mt-8 text-center p-8 bg-gradient-to-b from-[#1e1e24] to-[#0f0f12] rounded-2xl border border-white/5">
        <h3 class="text-2xl font-bold text-white mb-4">Want a Better Experience?</h3>
        <p class="text-gray-400 mb-6 max-w-lg mx-auto">Skip the wait times and errors. Try the highest-rated AI chat platform of {year}.</p>
        <a href="https://www.ejd1s4io.com/MF3W3H/3QQG7/" target="_blank" class="bg-pink-600 hover:bg-pink-500 text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center gap-2 shadow-lg shadow-pink-600/20 hover:shadow-pink-600/40">
            Get Free LLM Access on Candy.ai {ICON_ARROW}
        </a>
    </div>
    """
    
    return {
        "slug": slug,
        "title": title,
        "description": description,
        "content": content,
        "category": "Guide"
    }

def update_seo_data_js(slug, title, category):
    """
    Updates app/lib/seo-data.js by appending the new entry to the array.
    """
    if not os.path.exists(SEO_DATA_FILE):
        print(f"Error: {SEO_DATA_FILE} not found.")
        return

    with open(SEO_DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    # check if slug already exists
    if f'slug: "{slug}"' in content or f"slug: '{slug}'" in content:
        print(f"Slug {slug} already exists in seo-data.js")
        return

    new_entry = f"""
  {{ 
    slug: "{slug}", 
    title: "{title}", 
    category: "{category}" 
  }},"""

    # We want to insert this before the closing array bracket ];
    # We look for the last ];
    
    # Regex to find the end of the array
    # Assumption: The file ends with ]; or similar.
    # Let's find the last occurrence of ];
    
    pattern = r"\];$"
    # If the file has a newline at the end
    content = content.rstrip()
    
    if content.endswith('];'):
        # Insert before ];
        new_content = content[:-2] + new_entry + "\n];"
        
        with open(SEO_DATA_FILE, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {SEO_DATA_FILE} with {slug}")
    else:
        print("Could not find suitable insertion point in seo-data.js")

def git_commit_and_push(slug):
    """
    Commits and pushes changes to the repository.
    """
    try:
        # Check if git is initialized
        if not os.path.exists(os.path.join(PROJECT_ROOT, '.git')):
            print("Warning: Not a git repository. Skipping auto-push.")
            return

        print("committing and pushing changes...")
        subprocess.run(["git", "add", "."], check=True, cwd=PROJECT_ROOT)
        message = f"Auto SEO: Generated content for {slug}"
        subprocess.run(["git", "commit", "-m", message], check=True, cwd=PROJECT_ROOT)
        subprocess.run(["git", "push"], check=True, cwd=PROJECT_ROOT)
        print("Successfully pushed to remote.")
    except subprocess.CalledProcessError as e:
        print(f"Error during git operation: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")

def main():
    if not os.path.exists(DATA_DIR):
        os.makedirs(DATA_DIR)
        
    print("Starting Auto SEO Content Generation (3 daily posts)...")
    
    # Get initial list of existing files
    existing_files = set(os.listdir(DATA_DIR))
    generated_slugs = []

    for i in range(3):
        print(f"\n--- Generating Article {i+1}/3 ---")
        
        target_keyword = None
        for kw in TRENDS:
            if f"{kw}.json" not in existing_files:
                target_keyword = kw
                break
                
        if not target_keyword:
            print("All trending keywords covered! Generating randomized long-tail keyword.")
            # Generate a random variant
            suffixes = ["guide", "review", "tutorial", "tips", "hacks", "updates", "news"]
            rand_suffix = random.choice(suffixes)
            rand_id = random.randint(1000, 9999)
            target_keyword = f"janitor-ai-{rand_suffix}-{datetime.date.today()}-{rand_id}"

        print(f"Generating content for: {target_keyword}")
        
        article_data = mock_llm_generate(target_keyword)
        
        # Save JSON
        json_filename = f"{article_data['slug']}.json"
        json_path = os.path.join(DATA_DIR, json_filename)
        
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(article_data, f, indent=2, ensure_ascii=False)
        
        print(f"Saved content to {json_path}")
        
        # Update sitemap registry
        update_seo_data_js(article_data['slug'], article_data['title'], article_data['category'])
        
        # Add to tracking set so we don't pick it again in the next iteration
        existing_files.add(json_filename)
        generated_slugs.append(article_data['slug'])
        
    # Git Push Once
    if generated_slugs:
        git_commit_and_push(f"3 new articles: {', '.join(generated_slugs)}")

    print("Done!")

if __name__ == "__main__":
    main()
