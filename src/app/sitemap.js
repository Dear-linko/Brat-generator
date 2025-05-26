// app/sitemap.js
import { locales } from "@/config";
export default function sitemap() {
    
    return locales.map(locale => {
        let url, lastModified, changeFrequency, priority;
        if(locale === 'en'){
            url = `${process.env.WEB_URL}`
            lastModified = new Date()
            changeFrequency = 'weekly'
            priority = 1
        }else{
            url = `${process.env.WEB_URL}/${locale}`
            lastModified = new Date()
            changeFrequency = 'weekly'
            priority = 1
        }
        return {
            url: url,
            lastModified: lastModified,
            changeFrequency: changeFrequency,
            priority: priority,
        }
    });
}