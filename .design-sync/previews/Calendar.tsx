import { Calendar } from "mainline-astro-template";
import { ptBR } from "react-day-picker/locale";

const month = new Date(2026, 9, 1);
const formatters = {
  formatMonthDropdown: (d: Date) => d.toLocaleString("pt-BR", { month: "short" }),
};

export const Single = () => (
  <Calendar
    mode="single"
    locale={ptBR}
    defaultMonth={month}
    selected={new Date(2026, 9, 14)}
    className="rounded-lg border"
  />
);

export const Range = () => (
  <Calendar
    mode="range"
    locale={ptBR}
    defaultMonth={month}
    selected={{ from: new Date(2026, 9, 6), to: new Date(2026, 9, 12) }}
    className="rounded-lg border"
  />
);

export const Dropdown = () => (
  <Calendar
    mode="single"
    locale={ptBR}
    formatters={formatters}
    captionLayout="dropdown"
    startMonth={new Date(2024, 0, 1)}
    endMonth={new Date(2027, 11, 1)}
    defaultMonth={month}
    selected={new Date(2026, 9, 21)}
    className="rounded-lg border"
  />
);
