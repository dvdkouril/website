import type { PageServerLoad } from "./$types";
import { marked } from "marked";
import { parseFrontmatter, parseContent } from '$lib/blog/utils';

export const prerender = true;

export const load: PageServerLoad = () => {
	//~ load the posts markdown files
	const posts = Object.entries(import.meta.glob('../../../blogposts/*.md', { as: 'raw', eager: true }));
	//~ parse out the frontmatter: title, date, text preview
	return {
		posts: posts.map(([path, content]) => {
			const c = parseContent(content);
			const contentHtml = marked.parse(c);
			const slug = path.split('/').pop()?.replace('.md', '');
			return { path, content: c, contentHtml, frontmatter: parseFrontmatter(content), slug };
			// ({ path, content })
		})
	};
};
