"use client";

import dynamic from "next/dynamic";
import type { Skill } from "./SkillsChart";

// We create this wrapper to handle the dynamic import with ssr: false
// This must be in a client component file
const DynamicChart = dynamic(
  () => import("./SkillsChart").then((mod) => mod.SkillsChart),
  {
    loading: () => (
      <div className="h-[400px] w-full animate-pulse bg-muted/10 rounded-xl" />
    ),
    ssr: false,
  }
);

export function SkillsChartClient({ skills }: { skills: Skill[] }) {
  return <DynamicChart skills={skills} />;
}
