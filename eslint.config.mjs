import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  {
    ignores: [".astro/**", "src/**", "astro.config.mjs", "vite.config.js", "index.js"],
  },
  ...nextVitals,
];

export default config;
