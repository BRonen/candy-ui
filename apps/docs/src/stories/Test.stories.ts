import type { Meta, StoryObj } from "@storybook/vue3";
import Test from "@bronen/candy-ui/src/components/Test.vue";

const meta: Meta<typeof Test> = {
  title: "Example/Test",
  component: Test,
} as Meta<typeof Test>;

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
