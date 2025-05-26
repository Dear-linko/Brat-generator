import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getWhatIsBratGeneratorLanguageText, getHowToUseBratGeneratorLanguageText, getCreativeUsesOfBratGeneratorLanguageText } from '@/configs/languageText';

// 博客文章数据
const getBlogPosts = async () => {
  return {
    "what-is-brat-generator": await getWhatIsBratGeneratorLanguageText(),
    "how-to-use-brat-generator": await getHowToUseBratGeneratorLanguageText(),
    "creative-uses-of-brat-generator": await getCreativeUsesOfBratGeneratorLanguageText(),
  };
};

export async function generateMetadata({ params: { lng, slug } }) {
  unstable_setRequestLocale(lng);
  const blogPosts = await getBlogPosts();
  const post = blogPosts[slug];

  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${process.env.WEB_URL}/blog/${slug}`,
    },
  };
}

export default async function BlogPost({ params: { lng, slug } }) {
  unstable_setRequestLocale(lng);
  const blogPosts = await getBlogPosts();
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/blog" className="text-green-500 hover:underline mb-8 inline-block">
        ← 
      </Link>
      
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
            p: ({ children }) => <p className="mb-4">{children}</p>,
            ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
            li: ({ children }) => <li className="mb-2">{children}</li>,
            strong: ({ children }) => <strong className="font-bold">{children}</strong>,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
} 