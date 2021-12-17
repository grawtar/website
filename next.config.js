/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  // this is need ONLY for nginx, otherwise hot reload doesn't work
  // assetPrefix: isProd ? "./" : "",
};
