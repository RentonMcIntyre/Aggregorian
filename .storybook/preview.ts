import type { Preview } from "@storybook/react";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { dataTheme: "light", name: "Light" },
        { dataTheme: "dark", name: "Dark" },
        { dataTheme: "coffee", name: "Coffee" },
        { dataTheme: "retro", name: "Retro" },
      ],
    },
  },
  dataTheme: {
    defaultValue: "retro",
  },
};
