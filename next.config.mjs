/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/games/legends-fusion",
    assetPrefix: "/games/legends-fusion-static",
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: "/games/legends-fusion-static/_next/:path+",
                    destination: "/_next/:path+",
                },
            ],
        };
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ddragon.leagueoflegends.com",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
        ],
    },
};

export default nextConfig;
