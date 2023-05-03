/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    mapbox_key: 'pk.eyJ1Ijoic2lja29wYW0iLCJhIjoiY2xneWg5YzI1MDllYjNucDlyeDBqenVhNSJ9.3g23IMu8cIopnbTgKXM4pw'
  }
}

module.exports = nextConfig
