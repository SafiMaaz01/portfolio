"use client";

import {
  IconBriefcase,
  IconCertificate,
  IconCode,
  IconHome,
  IconMail,
  IconMessage,
  IconRocket,
  IconUser,
} from "@tabler/icons-react";
import dynamic from "next/dynamic";
import type React from "react";

interface DynamicIconProps {
  iconName: string;
  className?: string;
}

// Common icons we want to bundle in the main chunk for instant loading
const STATIC_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  IconHome,
  IconUser,
  IconBriefcase,
  IconCode,
  IconMail,
  IconMessage,
  IconRocket,
  IconCertificate,
};

// Lazily load the rest of the library only if needed
// This keeps the initial bundle size small while supporting all 5000+ icons
const FullIconLibrary = dynamic(
  () =>
    import("@tabler/icons-react").then((mod) => {
      const Icons = mod as unknown as Record<
        string,
        React.ComponentType<{ className?: string }>
      >;
      return function IconComponent({ iconName, className }: DynamicIconProps) {
        const Icon = Icons[iconName] || Icons.IconQuestionMark;
        return <Icon className={className} />;
      };
    }),
  { ssr: false },
);

export function DynamicIcon({
  iconName,
  className = "h-full w-full text-neutral-500 dark:text-neutral-300",
}: DynamicIconProps) {
  // 1. Check if the icon is in our fast static map
  const StaticIcon = STATIC_ICONS[iconName];
  if (StaticIcon) {
    return <StaticIcon className={className} />;
  }

  // 2. Fallback to the full library (lazily loaded)
  return <FullIconLibrary iconName={iconName} className={className} />;
}
