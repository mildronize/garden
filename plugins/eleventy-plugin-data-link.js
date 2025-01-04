import { JSDOM } from 'jsdom';

/**
 * Eleventy Plugin to inject `data-link` attributes into every <a> tag.
 * @param {Object} eleventyConfig - The Eleventy configuration object.
 */
export default function dataLinkPlugin(eleventyConfig) {
  eleventyConfig.addTransform('addDataLink', async (content, outputPath) => {
    // Only process HTML files
    if (outputPath && outputPath.endsWith('.html')) {
      const dom = new JSDOM(content);
      const document = dom.window.document;

      // Find all <a> tags and inject the data-link attribute
      const links = document.querySelectorAll('a');
      links.forEach((link) => {
        // Add `data-link` attribute if not already present
        if (!link.hasAttribute('data-link')) {
          link.setAttribute('data-link', 'true');
        }
      });

      return document.documentElement.outerHTML; // Return the modified HTML
    }

    return content; // Return unchanged content for non-HTML files
  });
}
