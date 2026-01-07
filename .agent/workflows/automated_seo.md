---
description: Automated SEO Content Generation System workflow
---

# Automated SEO System

This system allows you to automatically generate SEO-optimized content daily.

## Structure

1.  **Script**: `scripts/auto_seo.py`
    *   This python script picks a trending keyword (currently mocked list), creates a content JSON file, and updates the `seo-data.js` registry.
2.  **Data Storage**: `data/posts/*.json`
    *   Each generated article is stored here as a separate JSON file containing title, description, and HTML content.
3.  **Dynamic Route**: `app/seo/[slug]/page.js`
    *   This Next.js component checks if a JSON file exists for the requested slug and renders it.

## How to Run

### Manual Run
To generate a new article immediately:

```bash
python3 scripts/auto_seo.py
```

### Automatic Schedule (Crontab)
To run this daily at 4:00 AM, add this to your crontab:

```bash
0 4 * * * cd /Volumes/MOVESPEED/下载/AIcode/janitor-chat && python3 scripts/auto_seo.py >> /tmp/auto_seo.log 2>&1
```

## Customization

*   **Keywords**: Edit the `TRENDS` list in `scripts/auto_seo.py` to add real keyword sources (e.g., fetch from an API).
*   **Content**: Edit `mock_llm_generate` in `scripts/auto_seo.py` to connect to real LLM APIs (OpenAI, Claude, etc.) for high-quality content generation.
