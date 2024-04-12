import type { Meta, StoryObj } from "@storybook/react";
import Menu from "../components/ui/menu";

const meta = {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { value: "light", label: "Light" },
      { value: "dark", label: "Dark" },
      { value: "coffee", label: "Coffee" },
      { value: "retro", label: "Retro" },
    ],
  },
};
