import { Skeleton } from "mainline-astro-template";

export const ArticleCard = () => (
  <div className="flex flex-col gap-3" style={{ width: 320 }}>
    <Skeleton className="w-full rounded-lg" style={{ height: 160 }} />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
  </div>
);

export const Byline = () => (
  <div className="flex items-center gap-3">
    <Skeleton className="size-10 rounded-full" />
    <div className="flex flex-col gap-2">
      <Skeleton className="h-4" style={{ width: 180 }} />
      <Skeleton className="h-4" style={{ width: 120 }} />
    </div>
  </div>
);
