// app/sitemap.js
import { seoPages } from "./lib/seo-data";

export default function sitemap() {
  const baseUrl = 'https://www.janitor-ai.chat';

  // 1. 生成首页
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // 2. 自动把 seo-data.js 里的所有页面生成出来
  const posts = seoPages.map((page) => ({
    url: `${baseUrl}/seo/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...routes, ...posts];
}
