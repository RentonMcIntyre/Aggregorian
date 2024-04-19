import type { Meta, StoryObj } from "@storybook/react";
import Calendar, { CalendarTask } from "../components/ui/calendar";
import { faker } from "@faker-js/faker";
import {
  startOfMonth,
  endOfMonth,
  differenceInCalendarDays,
  format,
  addDays,
  lastDayOfWeek,
  startOfWeek,
  isSameDay,
} from "date-fns";

const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

const today = new Date();
const tasks: CalendarTask[] = new Array(10).fill(0).map((_, i) => {
  return {
    id: faker.string.uuid(),
    title: `Task ${i + 1}`,
    date: faker.date.between({
      from: startOfWeek(startOfMonth(today)),
      to: lastDayOfWeek(endOfMonth(today)),
    }),
    color: faker.color.rgb(),
    description: faker.lorem.lines(1),
  };
});

export const Primary: Story = {
  args: {
    tasks,
  },
};
