// @ts-check
import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  site: 'https://kurodagp.github.io',
  base: '/guideline_astro',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        }
      }
    }
  },
  markdown: {
    rehypePlugins: [rehypeSlug],
    shikiConfig: {
      theme: "github-dark",  // 好きなテーマ名（"nord", "dracula", "github-light" なども可）
      wrap: true,            // 長いコードを折り返す場合は true
    },
  }
});
