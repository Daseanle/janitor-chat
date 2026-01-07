import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { seoPages } from '../../lib/seo-data'; // Adjust path if needed

// Helper to get post data
async function getPostData(slug) {
    const filePath = path.join(process.cwd(), 'data/posts', `${slug}.json`);

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        return null;
    }
}

export async function generateMetadata({ params }) {
    const post = await getPostData(params.slug);
    if (!post) {
        // If no JSON file, maybe check if it's in seoPages but handled dynamically? 
        // But for now, if no data, return default or let generic 404 handle it.
        // However, we might want to fallback to title from seo-data if json is missing (WIP).
        const seoEntry = seoPages.find(p => p.slug === params.slug);
        if (seoEntry) {
            return { title: seoEntry.title };
        }
        return { title: 'Page Not Found' };
    }

    return {
        title: post.title,
        description: post.description,
    };
}

// Optional: for static export
export async function generateStaticParams() {
    // Get all slugs that HAVE a corresponding json file in data/posts
    const postsDir = path.join(process.cwd(), 'data/posts');
    if (!fs.existsSync(postsDir)) return [];

    const files = fs.readdirSync(postsDir);
    return files
        .filter(file => file.endsWith('.json'))
        .map(file => ({
            slug: file.replace('.json', ''),
        }));
}

export default async function Page({ params }) {
    const post = await getPostData(params.slug);

    if (!post) {
        notFound();
    }

    const AFFILIATE_LINK = "https://www.ejd1s4io.com/MF3W3H/3QQG7/"; // Keep the affiliate link

    return (
        <div className="min-h-screen bg-[#0f0f12] text-gray-300 font-sans">
            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <Link href="/" className="text-sm text-pink-400 hover:underline mb-8 block">&larr; Back to Home</Link>
                <article className="prose prose-invert prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{post.title}</h1>
                    {/* Render HTML content securely */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

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
