import { getCollection } from 'astro:content';
import { playbookSetting } from '../data/config';
import type { Tag } from '../data/tags';


export async function getTagPlaybooks(tag: Tag, currentPage = 1) {
  const allPlaybooks = await getCollection('playbook', ({ data }) => {
    return import.meta.env.DEV || data.publish !== false;
  });

  const filtered = allPlaybooks.filter(playbook =>
    playbook.data.tags?.includes(tag.slug)
  );

  const sorted = filtered.sort((a, b) =>
    b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  const totalPosts = sorted.length;
  const postsPerPage = playbookSetting.postsPerPage;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginated = sorted.slice(start, end);

  return {
    playbooks: paginated,
    totalPosts,
    totalPages,
    currentPage,
  };
}
