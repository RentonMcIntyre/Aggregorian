"use client";

import Calendar, { CalendarTask } from "@/components/ui/calendar";
import { faker } from "@faker-js/faker";
import { endOfMonth, lastDayOfWeek, startOfMonth, startOfWeek } from "date-fns";

export default function Home() {
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

  return (
    <main className="flex h-full flex-col items-center justify-between p-4">
      <Calendar tasks={tasks} />
    </main>
  );
}
