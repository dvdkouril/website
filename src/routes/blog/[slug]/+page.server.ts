import type { PageServerLoad } from "./$types";
import { parse } from "yaml";
import { marked } from "marked";
import { parseFrontmatter, parseContent } from '$lib/blog/utils';
import * as kit from "@sveltejs/kit";

export const prerender = true;

export const load: PageServerLoad = ({ params }) => {
	//~ load the posts markdown files
	const posts = Object.entries(import.meta.glob('../../../../blogposts/*.md', { as: 'raw', eager: true }));
	const post = posts.find(([path, _]) => path.endsWith(`${params.slug}.md`));

	if (!post) {
		kit.error(404, 'Post not found');
	}

	const [path, content] = post;
	const c = parseContent(content);
	const contentHtml = marked.parse(c);

	//~ parse out the frontmatter: title, date, text preview
	return {
		path,
		content: c,
		contentHtml,
		frontmatter: parseFrontmatter(content)
	};
};
