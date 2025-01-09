export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	eleventyComputed: {
		title: data => data.title ? data.title : data.page.filePathStem.split('/').pop()
	}
};