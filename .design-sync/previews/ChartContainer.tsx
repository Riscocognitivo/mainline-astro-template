import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "mainline-astro-template";
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis } from "recharts";

const dados = [
  { mes: "Mai", leituras: 186, avaliacoes: 80 },
  { mes: "Jun", leituras: 305, avaliacoes: 120 },
  { mes: "Jul", leituras: 237, avaliacoes: 98 },
  { mes: "Ago", leituras: 273, avaliacoes: 140 },
  { mes: "Set", leituras: 309, avaliacoes: 162 },
  { mes: "Out", leituras: 344, avaliacoes: 190 },
];

const config = {
  leituras: { label: "Leituras", color: "var(--chart-1)" },
  avaliacoes: { label: "Avaliações", color: "var(--chart-2)" },
} satisfies ChartConfig;

export const Bars = () => (
  <ChartContainer config={config} style={{ width: "100%", maxWidth: 560, height: 280 }}>
    <BarChart accessibilityLayer data={dados}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="mes" tickLine={false} axisLine={false} tickMargin={8} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <ChartLegend content={<ChartLegendContent />} />
      <Bar dataKey="leituras" fill="var(--color-leituras)" radius={4} isAnimationActive={false} />
      <Bar dataKey="avaliacoes" fill="var(--color-avaliacoes)" radius={4} isAnimationActive={false} />
    </BarChart>
  </ChartContainer>
);

export const Lines = () => (
  <ChartContainer config={config} style={{ width: "100%", maxWidth: 560, height: 280 }}>
    <LineChart accessibilityLayer data={dados} margin={{ left: 12, right: 12 }}>
      <CartesianGrid vertical={false} />
      <XAxis dataKey="mes" tickLine={false} axisLine={false} tickMargin={8} />
      <ChartLegend content={<ChartLegendContent />} />
      <Line dataKey="leituras" type="monotone" stroke="var(--color-leituras)" strokeWidth={2} dot={false} isAnimationActive={false} />
      <Line dataKey="avaliacoes" type="monotone" stroke="var(--color-avaliacoes)" strokeWidth={2} dot={false} isAnimationActive={false} />
    </LineChart>
  </ChartContainer>
);
