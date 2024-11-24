/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint:{
        ignoreDuringBuilds: true,
    },
    images:{
        remotePatterns:[{
            protocol : "https",
            hostname:  "i.imgflip.com"
        }]
    }
};

export default nextConfig;
