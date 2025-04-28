// src/pages/rss.xml.js
import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    // Your blog’s title and description
    title:       'Ashriel & Aslan Pouncy | Blog',
    description: 'Our journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
    customData: `<language>en-us</language>`,
  });
}
