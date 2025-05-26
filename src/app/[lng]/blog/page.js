import React from 'react';
import Link from 'next/link';
import { unstable_setRequestLocale } from 'next-intl/server';

const blogPosts = [
  {
    id: 'what-is-brat-generator',
    title: 'What is Brat Generator? A Complete Guide',
    description: 'Discover the power of Brat Generator - a versatile tool for creating custom text images with unique styles.',
    date: '2024-03-20'
  },
  {
    id: 'how-to-use-brat-generator',
    title: 'How to Use Brat Generator: Step-by-Step Tutorial',
    description: 'Learn how to create stunning text images with Brat Generator\'s powerful customization features.',
    date: '2024-03-20'
  },
  {
    id: 'creative-uses-of-brat-generator',
    title: 'Creative Uses of Brat Generator for Social Media',
    description: 'Explore innovative ways to use Brat Generator for your social media content and branding.',
    date: '2024-03-20'
  }
];

export async function generateMetadata({ params: { lng } }) {
  unstable_setRequestLocale(lng);
  return {
    title: 'Blog - Brat Generator',
    description: 'Explore our collection of articles about Brat Generator and learn how to create stunning text images.',
    alternates: {
      canonical: `${process.env.WEB_URL}/blog`,
    },
  };
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-2xl font-semibold mb-2 hover:text-green-500 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <time className="text-sm text-gray-500">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  );
} 