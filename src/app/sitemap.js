// app/sitemap.js
import { locales } from "@/config";

export default function sitemap() {
    const baseUrl = process.env.WEB_URL;
    const currentDate = new Date();
    
    // 博客文章列表
    const blogPosts = [
        'what-is-brat-generator',
        'how-to-use-brat-generator', 
        'creative-uses-of-brat-generator'
    ];

    const sitemapEntries = [];

    locales.forEach(locale => {
        const isDefaultLocale = locale === 'en';
        const localePrefix = isDefaultLocale ? '' : `/${locale}`;

        // 主页
        sitemapEntries.push({
            url: `${baseUrl}${localePrefix}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0
        });

        // 博客主页
        sitemapEntries.push({
            url: `${baseUrl}${localePrefix}/blog`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8
        });

        // 博客文章页面
        blogPosts.forEach(slug => {
            sitemapEntries.push({
                url: `${baseUrl}${localePrefix}/blog/${slug}`,
                lastModified: new Date('2024-03-20'),
                changeFrequency: 'monthly',
                priority: 0.7
            });
        });

        // 隐私政策页面
        sitemapEntries.push({
            url: `${baseUrl}${localePrefix}/privacy-policy`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3
        });

        // 服务条款页面
        sitemapEntries.push({
            url: `${baseUrl}${localePrefix}/terms-of-service`,
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 0.3
        });
    });

    return sitemapEntries;
}