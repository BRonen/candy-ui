import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "@bronen/candy-ui/src/components/Button.vue";

const meta: Meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    backgroundColor: { control: "color" },
    onClick: { action: "clicked" },
  },
  args: { primary: false },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: StoryObj<typeof meta> = {
  args: {
    primary: false,
    label: "Button",
  },
};

export const Large: StoryObj<typeof meta> = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const Small: StoryObj<typeof meta> = {
  args: {
    label: "Button",
    size: "small",
  },
};
