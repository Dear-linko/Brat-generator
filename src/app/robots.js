// app/robots.js
export default function robots() {
    return {
        rules: {
            userAgent: '*', allow: '/', disallow: '/private/',
        }, sitemap: `${process.env.WEB_URL}/sitemap.xml`,
    }
}
