import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    output: "standalone",

    // Compress responses — improves TTFB and LCP
    compress: true,

    experimental: {
        serverActions: {
            allowedOrigins: [
                "radwanfs.com",
                "www.radwanfs.com",
                "localhost:3000",
                "192.168.1.*",
            ],
        },
    },

    images: {
        // Prefer AVIF → WebP for better CWV (LCP images ~30% smaller)
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.radwanfs.com",
                pathname: "/public/images/**",
            },
        ],
        // Limit image sizes to avoid unnecessarily large LCP candidates
        deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    async headers() {
        return [
            {
                // Cache static assets aggressively (1 year) — improves repeat-visit CWV
                source: "/:path*.(js|css|woff|woff2|ttf|otf|ico)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
            {
                // Cache images for 30 days with stale-while-revalidate
                source: "/:path*.(jpg|jpeg|png|webp|avif|gif|svg)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=2592000, stale-while-revalidate=86400",
                    },
                ],
            },
            {
                // Security + SEO headers on all HTML responses
                source: "/(.*)",
                headers: [
                    // Prevent iframe embedding (prevents Google from treating as duplicate)
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    // Prevent MIME sniffing (security + crawl accuracy)
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    // HTTPS enforced for 1 year — required for Google HTTPS ranking signal
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=31536000; includeSubDomains; preload",
                    },
                    // Referrer data for analytics accuracy
                    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
                ],
            },
        ];
    },

    async redirects() {
        return [
            // Domain canonicalization: www → non-www
            {
                source: "/:path*",
                has: [{ type: "host", value: "www.radwanfs.com" }],
                destination: "https://radwanfs.com/:path*",
                permanent: true,
            },
            // Webmail shortcuts
            {
                source: "/webmail",
                destination: "https://webmail.radwanfs.com",
                permanent: true,
            },
            {
                source: "/mail",
                destination: "https://webmail.radwanfs.com",
                permanent: true,
            },
            // Fix: old /faq path → /faqs (canonical correct path)
            {
                source: "/:locale/faq",
                destination: "/:locale/faqs",
                permanent: true,
            },
        ];
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
