// Each Markdown file in src/posts is a blog post; its file name becomes the URL.
const files = import.meta.glob<any>('./posts/*.md', { eager: true });

export const posts = Object.entries(files)
  .map(([path, file]) => ({
    slug: path.split('/').pop()!.replace('.md', ''),
    title: file.frontmatter.title as string,
    date: file.frontmatter.date as string,
    Content: file.Content,
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' });
