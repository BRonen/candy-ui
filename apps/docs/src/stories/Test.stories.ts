import type { Meta, StoryObj } from "@storybook/vue3";

import Test from "ui/src/components/Test.vue";

const meta: Meta = {
  title: "Example/Test",
  component: Test,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
