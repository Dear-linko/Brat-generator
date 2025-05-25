import ReactMarkdown from 'react-markdown';
import { getPrivacyPolicyLanguageText } from '@/configs/languageText';
import { unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { lng } }) {
  unstable_setRequestLocale(lng);
  const tPrivacyPolicy = await getPrivacyPolicyLanguageText(lng);
  return {
    title: tPrivacyPolicy.title,
    description: tPrivacyPolicy.description,
    alternates: {
      canonical: `${process.env.WEB_URL}/privacy-policy`,
    },
  };
}

export default async function PrivacyPolicy({ params: { lng } }) {
  unstable_setRequestLocale(lng);
  const tPrivacyPolicy = await getPrivacyPolicyLanguageText(lng);
  const markdownContent = tPrivacyPolicy.content;
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => (
              <h1 className="text-4xl font-bold mb-8 text-center">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold mt-8 mb-4">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-semibold mb-2">{children}</h3>
            ),
            p: ({ children }) => {
              // Handle the "Last updated" paragraph
              if (typeof children === 'string' && children.includes('Last updated')) {
                return (
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    {children}
                  </p>
                );
              }
              // Handle summary paragraph
              if (typeof children === 'string' && children.includes('We respect your privacy')) {
                return (
                  <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8">
                    <h3 className="text-lg font-semibold mb-2">Summary</h3>
                    <p className="text-sm">{children}</p>
                  </div>
                );
              }
              return <p>{children}</p>;
            },
            hr: () => <div className="my-8" />,
          }}
        >
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
} 