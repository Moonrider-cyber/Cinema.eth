require("dotenv").config();

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  env: {
    THEMOVIEDB_API_KEY: process.env.THEMOVIEDB_API_KEY,
  },
  images: {
    domains: ["image.tmdb.org", "localhost", "walletconnect.com"],
  },
};
