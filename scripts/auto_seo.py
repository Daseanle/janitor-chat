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
TRENDS = [
    "janitor-ai-slow-response-fix",
    "best-janitor-ai-prompts-2025",
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
    Simulates content generation. separate title and body.
    """
    title = keyword.replace('-', ' ').title()
    slug = keyword # keyword is already slug-like in our list
    
    description = f"Complete guide to {title}. Learn how to fix errors, optimize settings, and get the best experience."
    
    # Simple HTML Template
    content = f"""
    <p>Are you looking for information about <strong>{title}</strong>? You are in the right place.</p>
    
    <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is {title}?</h2>
    <p>{title} has been a trending topic recently among AI chat enthusiasts. Many users struggle with finding reliable information.</p>
    
    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common Issues and Fixes</h2>
    <p>If you are experiencing issues with {title}, try these steps:</p>
    <ul className="list-disc pl-5 space-y-2 mb-6">
        <li>Check your API key settings.</li>
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
        "category": "Guide" # Default category
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
        
    print("Starting Auto SEO Content Generation...")
    
    # Pick a random keyword that doesn't exist yet
    # For now, just pick one from the list that we haven't created files for
    
    existing_files = os.listdir(DATA_DIR)
    
    target_keyword = None
    for kw in TRENDS:
        if f"{kw}.json" not in existing_files:
            target_keyword = kw
            break
            
    if not target_keyword:
        print("All trending keywords covered!")
        # Optional: Generate a random variant
        target_keyword = f"janitor-ai-{datetime.date.today()}-update"

    print(f"Generating content for: {target_keyword}")
    
    article_data = mock_llm_generate(target_keyword)
    
    # Save JSON
    json_path = os.path.join(DATA_DIR, f"{article_data['slug']}.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(article_data, f, indent=2, ensure_ascii=False)
    
    print(f"Saved content to {json_path}")
    
    # Update sitemap registry
    update_seo_data_js(article_data['slug'], article_data['title'], article_data['category'])
    
    # Git Push
    git_commit_and_push(article_data['slug'])

    print("Done!")

if __name__ == "__main__":
    main()
