import { JSDOM } from 'jsdom';

/**
 * Eleventy Plugin to inject `data-link` attributes into specific <a> tags.
 * @param {Object} eleventyConfig - The Eleventy configuration object.
 * @param {Object} options - Plugin options.
 * @param {string} options.hostname - The hostname for matching absolute URLs.
 */
export default function dataLinkPlugin(eleventyConfig, { hostname } = {}) {
  eleventyConfig.addTransform('addDataLink', async (content, outputPath) => {
    // Only process HTML files
    if (outputPath && outputPath.endsWith('.html')) {
      const dom = new JSDOM(content);
      const document = dom.window.document;

      // Find all <a> tags and filter based on the provided rules
      const links = document.querySelectorAll('a');
      links.forEach((link) => {
        const href = link.getAttribute('href');

        // Skip links without an href attribute
        if (!href) return;

        const isRelative = !/^https?:\/\//i.test(href); // Check if the link is relative
        const isMatchingHost =
          (hostname &&
          (href.startsWith(`http://${hostname}`) ||
            href.startsWith(`https://${hostname}`))) ?? false; // Check if the link matches the provided hostname

        // Add `data-link` only for relative links or matching absolute links
        if (isRelative || isMatchingHost ) {
          if (!link.hasAttribute('data-link')) {
            link.setAttribute('data-link', 'true');
          }
        }
      });

      return document.documentElement.outerHTML; // Return the modified HTML
    }

    return content; // Return unchanged content for non-HTML files
  });
}
