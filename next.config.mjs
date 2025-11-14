/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true,
    images: {
        domains: ['assets.aceternity.com', "media.istockphoto.com", "aceternity.com", "michelle.stefan-laux.dev", "six-group.github.io", "shadergradient.co"],
    },
};

export default nextConfig;
