export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  excerpt: string;
  metaDescription?: string;
  content: string; // Markdown or HTML string
  directAnswer?: string; // 40-60 word GEO/AEO direct answer
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  category: 'lead-conversion' | 'whatsapp-sales' | 'website-conversion' | 'sales-process' | 'marketing-to-sales' | 'chennai-business-growth';
  categoryName: string;
  featuredImage?: string;
  relatedServiceSlug?: string;
  relatedServiceTitle?: string;
}

// Published posts array - ready to be populated with real, verified articles
export const BLOG_POSTS: BlogPost[] = [];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}
