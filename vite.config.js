import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
/**
 * Fills in the site URL in index.html and emits robots.txt and sitemap.xml at build time using VITE_SITE_URL,
 * so the SEO files always match your real domain (set it in .env).
 */
function seoFiles(siteUrl) {
    return {
        name: 'seo-files',
        // Swap the __SITE_URL__ token in index.html (canonical, Open Graph, JSON-LD) for the real URL
        transformIndexHtml: function (html) { return html.replaceAll('__SITE_URL__', siteUrl.replace(/\/$/, '')); },
        generateBundle: function () {
            var base = siteUrl.replace(/\/$/, '');
            this.emitFile({
                type: 'asset',
                fileName: 'robots.txt',
                source: "User-agent: *\nAllow: /\n\nSitemap: ".concat(base, "/sitemap.xml\n"),
            });
            this.emitFile({
                type: 'asset',
                fileName: 'sitemap.xml',
                source: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url>\n    <loc>".concat(base, "/</loc>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n"),
            });
        },
    };
}
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd(), '');
    var siteUrl = env.VITE_SITE_URL || 'https://tarun-portfolio-beta-three.vercel.app';
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
    };
});
