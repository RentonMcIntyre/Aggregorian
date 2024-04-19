"use client";

import { useEffect, useState } from "react";
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
import {
  DndContext,
  rectIntersection,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export interface CalendarTask {
  id: string;
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

const CalendarTask = (props: { task: CalendarTask }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.task.id,
    data: {
      date: props.task.date,
    },
  });
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
        backgroundColor: props.task.color + "90",
        border: `1px solid ${props.task.color}`,
      }
    : {
        backgroundColor: props.task.color + "90",
        border: `1px solid ${props.task.color}`,
      };

  return (
    <div
      key={props.task.title}
      className="flex  justify-center items-center my-1 last:my-0 rounded-box w-full"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
      {props.task.title}
    </div>
  );
};

const CalendarDate = (props: CalendarDateProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.date.getTime(),
    data: {
      date: props.date,
    },
  });

  const [tasks, setTasks] = useState<CalendarTask[]>([]);

  useEffect(() => {
    const filteredTasks = props.tasks?.filter((task) =>
      isSameDay(task.date, props.date)
    );
    setTasks(filteredTasks || []);
  }, [props.tasks, props.date]);

  let className = twMerge(
    "p-2 border-secondary h-36 w-36",
    (props.index + 1) % props.cols === 0 ? "" : "border-r-2",
    props.index >= props.rows * props.cols - props.cols ? "" : "border-b-2",
    isOver ? "bg-primary text-primary-content" : ""
  );

  return (
    <div ref={setNodeRef} className={className}>
      <span className="text-bold uppercase text-center">
        {format(props.date, "iii dd")}
      </span>
      <div className="divider my-0"></div>

      <div id="tasks" className="pt-2">
        {tasks
          ?.filter((task) => isSameDay(task.date, props.date))
          .map((task) => <CalendarTask key={task.id} task={task} />)}
      </div>
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

  let [tasks, setTasks] = useState<CalendarTask[]>(props.tasks || []);
  let [dates, setDates] = useState(defaultDates);
  let cols = 7;
  let rows = Math.ceil(dates.length / cols);

  let className = twMerge(
    `grid grid-cols-7 bg-base-200 border-secondary border-4 rounded-2xl text-base-content`
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    let taskCurrentDate = active.data.current?.date;
    let overDate = over.data.current?.date;

    if (!isSameDay(taskCurrentDate, overDate)) {
      setTasks((tasks) =>
        tasks.map((task) => {
          if (task.id === active.id) {
            return {
              ...task,
              date: overDate,
            };
          }
          return task;
        })
      );
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={rectIntersection}>
      <div className={className}>
        {dates.map((date, i) => (
          <CalendarDate
            key={i}
            date={date}
            rows={rows}
            cols={cols}
            index={i}
            tasks={tasks}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default Calendar;
