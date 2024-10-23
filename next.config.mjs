import MillionLint from "@million/lint";
/** @type {import('next').NextConfig} */

// import {join} from "path";

const nextConfig = {
  // reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.ctfassets.net",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "cdn.wynnresorts.com",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "img.icons8.com",
  //     },
  //   ],
  // },
  // sassOptions: {
  //   includePaths: [join(__dirname, "styles")],
  // },
  // i18n: {
  //   locales: ["default", "en", "de", "fr"],
  //   defaultLocale: "default",
  //   localeDetection: false,
  // },
  // trailingSlash: true,
};

export default MillionLint.next({
  enabled: true
})(nextConfig);
