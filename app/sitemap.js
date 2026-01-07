import { seoPages } from "./lib/seo-data";

export default function sitemap() {
  const baseUrl = 'https://www.janitor-ai.chat';

  // 基础页面
  const routes = [
    '', // 首页
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  }));

  // 自动生成的 SEO 页面
  const seoRoutes = seoPages.map((page) => ({
    url: `${baseUrl}/seo/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...routes, ...seoRoutes];
}
