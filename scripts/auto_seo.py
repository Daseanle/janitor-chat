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
    Simulates content generation with connection to current date.
    """
    current_date = datetime.date.today().strftime("%B %d, %Y") # e.g., January 07, 2026
    
    title = keyword.replace('-', ' ').title()
    slug = keyword
    
    description = f"Latest update ({current_date}): Complete guide to {title}. Learn how to fix errors, optimize settings, and get the best experience in {CURRENT_YEAR}."
    
    # Simple HTML Template
    content = f"""
    <p class="text-sm text-gray-400 mb-4">Last Updated: {current_date}</p>
    <p>Are you looking for the latest information about <strong>{title}</strong>? You are in the right place. As of {current_date}, this is the most up-to-date guide.</p>
    
    <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is {title}?</h2>
    <p>{title} has been a trending topic in {CURRENT_YEAR} among AI chat enthusiasts. Many users struggle with finding reliable information.</p>
    
    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Current Status ({current_date})</h2>
    <p>We have tested the latest version as of {current_date} and found the following results:</p>
    <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Service Stability: 98%</li>
        <li>Response Time: Fast</li>
        <li>User Satisfaction: High</li>
    </ul>

    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common Issues and Fixes</h2>
    <p>If you are experiencing issues with {title} today, try these steps:</p>
    <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Check your API key settings (Updated for {CURRENT_YEAR}).</li>
        <li>Clear your browser cache.</li>
        <li>Try a different browser or device.</li>
    </ul>
    
    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why use an Alternative?</h2>
    <p>While {title} is popular, platform stability can be an issue. We recommend trying alternatives like <strong>Candy.ai</strong> for a smoother experience.</p>
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
