/** @type {import('next').NextConfig} */

const nextConfig = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
        NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
        NEXT_PUBLIC_PROD_DOMAIN: process.env.NEXT_PUBLIC_PROD_DOMAIN,
        NEXT_PUBLIC_PROD_API: process.env.NEXT_PUBLIC_PROD_API,
    },
};

export default nextConfig;