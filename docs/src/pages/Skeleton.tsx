import { Box, DarkThemeSwitch, Title, Skeleton } from "tailtheme/components";

export default function SkeletonPage() {
  return (
    <Box flat full items="start" justify="start" direction="column">
      <Title size="2xl">Skeleton</Title>

      <DarkThemeSwitch />

      <Box>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </Box>
    </Box>
  );
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
