import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Fills in the site URL in index.html and emits robots.txt and sitemap.xml at build time using VITE_SITE_URL,
 * so the SEO files always match your real domain (set it in .env).
 */
function seoFiles(siteUrl: string): Plugin {
  return {
    name: 'seo-files',
    // Swap the __SITE_URL__ token in index.html (canonical, Open Graph, JSON-LD) for the real URL
    transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl.replace(/\/$/, '')),
    generateBundle() {
      const base = siteUrl.replace(/\/$/, '')
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${base}/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = env.VITE_SITE_URL || 'https://example.com'
  return {
    plugins: [react(), seoFiles(siteUrl)],
    build: {
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks: {
            motion: ['framer-motion'],
            vendor: ['react', 'react-dom'],
          },
        },
      },
    },
  }
})
