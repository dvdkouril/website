import type { PageServerLoad } from "./$types";
import { parse } from "yaml";
import { marked } from "marked";

export const prerender = true;

const parseFrontmatter = (content: string) => {
	//~ find the part between the --- markers
	const match = content.match(/---\n([\s\S]*?)\n---/);
	if (match) {
		const frontmatterRaw = match[1];
		const frontmatter = parse(frontmatterRaw);
		return frontmatter;
	}
	return undefined;
}

const parseContent = (content: string) => {
	//~ remove the frontmatter part
	const contentWithoutFrontmatter = content.replace(/---\n([\s\S]*?)\n---/, '');
	return contentWithoutFrontmatter.trim();
}

export const load: PageServerLoad = () => {
	//~ load the posts markdown files
	const posts = Object.entries(import.meta.glob('../../../blogposts/*.md', { as: 'raw', eager: true }));
	//~ parse out the frontmatter: title, date, text preview
	return {
		posts: posts.map(([path, content]) => {
			const c = parseContent(content);
			const contentHtml = marked.parse(c);
			return { path, content: c, contentHtml, frontmatter: parseFrontmatter(content) };
			// ({ path, content })
		})
	};
};

/*
export const load: PageServerLoad = () => ({
	posts: Object.entries(
		import.meta.glob("../../../posts/*.md", {
			as: "raw",
			eager: true,
		}),
	)
		.toSorted((a, b) => a[0].localeCompare(b[0]))
		.map(([name, contents]) => {
			let { frontmatter } = utils.parseMarkdownPost(contents);
			let slug = name
				.split("/")
				.at(-1)
				?.replace(/^\d{3}-|\.md$/g, "");
			return { slug, frontmatter };
		}),
});
 */
