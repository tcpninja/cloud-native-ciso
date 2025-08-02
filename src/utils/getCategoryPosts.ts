// src/utils/getCategoryPosts.ts
import { getCollection } from 'astro:content';
import { blogSetting } from '../data/config';

interface Category {
  slug: string;
  name: string;
  description?: string;
}

export async function getCategoryPosts(category: Category, currentPage = 1) {
  const allPosts = await getCollection('blog', ({ data }) => {
    return import.meta.env.DEV || data.publish !== false;
  });

  // Filter by category slug
  const filtered = allPosts.filter(post => {
    const isPublished = import.meta.env.DEV || post.data.publish !== false;
    const hasCategory = post.data.categories?.includes(category.slug);
    return isPublished && hasCategory;
  });

  // Sort by publishDate descending
  const sorted = filtered.sort((a, b) =>
    b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  // Pagination
  const totalPosts = sorted.length;
  const postsPerPage = blogSetting.postsPerPage;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = sorted.slice(start, end);

  return {
    posts: paginatedPosts,
    totalPosts,
    totalPages,
    currentPage,
  };
}
