import type { StorybookConfig } from "@storybook/vue3-vite";

import { join, dirname } from "path";

const getAbsolutePath = (value: string) => dirname(
  require.resolve(join(value, "package.json"))
) as "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.ts"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
