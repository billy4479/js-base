// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
    public: {
      url: '/',
      static: true,
    },
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-postcss',
  ],
  optimize: {
    bundle: true,
    splitting: false,
    manifest: true,
    minify: true,
    treeshake: true,
    target: 'es2020',
  },
  // installOptions: {},
  // devOptions: {},
  // buildOptions: {},
};
