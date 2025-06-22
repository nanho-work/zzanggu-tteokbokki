const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/zzanggu-tteokbokki" : "",
  assetPrefix: isProd ? "/zzanggu-tteokbokki" : "",
};

export default nextConfig;