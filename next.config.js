/** @type {import('next').NextConfig} */
const { SERVER_ENV } = process.env;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,//使用swc压缩
  publicRuntimeConfig: {}, // 导入全局配置，服务端和客户端都可以访问
  poweredByHeader: SERVER_ENV !== "production", // 是否在head中增加Nextjs信息
  images: {
    unoptimized: true,
  },
  assetPrefix: "/", //静态资源引用的前缀，默认不需要处理。CDN优化需要修改。
}

module.exports = nextConfig
