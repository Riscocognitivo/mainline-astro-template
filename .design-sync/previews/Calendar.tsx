import { Calendar } from "mainline-astro-template";

const month = new Date(2026, 9, 1);

export const Single = () => (
  <Calendar
    mode="single"
    defaultMonth={month}
    selected={new Date(2026, 9, 14)}
    className="rounded-lg border"
  />
);

export const Range = () => (
  <Calendar
    mode="range"
    defaultMonth={month}
    selected={{ from: new Date(2026, 9, 6), to: new Date(2026, 9, 12) }}
    className="rounded-lg border"
  />
);

export const Dropdown = () => (
  <Calendar
    mode="single"
    captionLayout="dropdown"
    defaultMonth={month}
    selected={new Date(2026, 9, 21)}
    className="rounded-lg border"
  />
);
