import { useState } from "react";
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
import { twMerge } from "tailwind-merge";
import { faker } from "@faker-js/faker";

export interface CalendarTask {
  title: string;
  date: Date;
  description?: string;
  color?: string;
}

interface CalendarDateProps {
  date: Date;
  key: number;
  rows: number;
  cols: number;
  index: number;
  tasks?: CalendarTask[];
}

const CalendarDate = (props: CalendarDateProps) => {
  let className = twMerge(
    "p-2 border-secondary",
    (props.index + 1) % props.cols === 0 ? "" : "border-r-2",
    props.index >= props.rows * props.cols - props.cols ? "" : "border-b-2"
  );
  return (
    <div className={className}>
      <span className="text-bold uppercase text-center">
        {format(props.date, "iii dd")}
      </span>

      {props.tasks?.map((task) => (
        <div
          key={task.title}
          className="flex  justify-center items-center my-1 last:my-0 rounded-box w-full"
          style={{
            backgroundColor: task.color + "90",
            border: `1px solid ${task.color}`,
          }}
        >
          {task.title}
        </div>
      ))}
    </div>
  );
};

const Calendar = (props: { tasks?: CalendarTask[] }) => {
  const today = new Date();
  const defaultStartDate = startOfWeek(startOfMonth(today));
  const defaultEndDate = lastDayOfWeek(endOfMonth(today));
  const defaultDates = new Array(
    differenceInCalendarDays(defaultEndDate, defaultStartDate) + 1
  )
    .fill(0)
    .map((_, i) => {
      return addDays(defaultStartDate, i);
    });

  let [dates, setDates] = useState(defaultDates);

  let [cols, setCols] = useState(7);

  let rows = Math.ceil(dates.length / cols);

  let className = twMerge(
    "grid grid-cols-7 bg-base-100 border-secondary border-2 rounded-2xl text-primary-content",
    `grid-rows-${rows}`
  );

  const tasksOnDate = (date: Date): CalendarTask[] | undefined => {
    if (!props.tasks) return undefined;
    return props.tasks.filter((task) => {
      return isSameDay(task.date, date.toDateString());
    });
  };

  return (
    <div className={className}>
      {dates.map((date, i) => (
        <CalendarDate
          key={date.getTime()}
          date={date}
          rows={rows}
          cols={cols}
          index={i}
          tasks={tasksOnDate(date)}
        />
      ))}
    </div>
  );
};

export default Calendar;
