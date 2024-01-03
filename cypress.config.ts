import { defineConfig } from "cypress";
import path from 'path';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        resolve: {
          alias: {
            '@components': path.resolve(__dirname, './src/components'),
          },
        },
      }
    },
  },
});
