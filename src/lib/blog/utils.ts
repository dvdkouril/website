import { parse } from "yaml";

export const parseFrontmatter = (content: string) => {
	//~ find the part between the --- markers
	const match = content.match(/---\n([\s\S]*?)\n---/);
	if (match) {
		const frontmatterRaw = match[1];
		const frontmatter = parse(frontmatterRaw);
		return frontmatter;
	}
	return undefined;
}

export const parseContent = (content: string) => {
	//~ remove the frontmatter part
	const contentWithoutFrontmatter = content.replace(/---\n([\s\S]*?)\n---/, '');
	return contentWithoutFrontmatter.trim();
}
