import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/config.js';

export default createMiddleware({
    locales,
    defaultLocale,
    // 默认语言不重定向
    localePrefix: 'as-needed',
    localeDetection: false
});

export const config = {
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
