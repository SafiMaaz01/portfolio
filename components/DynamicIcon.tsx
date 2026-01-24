"use client";

import {
  IconBriefcase,
  IconCertificate,
  IconCode,
  IconHome,
  IconMail,
  IconMessage,
  IconQuestionMark,
  IconRocket,
  IconUser,
} from "@tabler/icons-react";
import type React from "react";

interface DynamicIconProps {
  iconName: string;
  className?: string;
}

// Map common icons used in the CMS to their components
// This prevents bundling the entire 5000+ icon library
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  IconHome,
  IconUser,
  IconBriefcase,
  IconCode,
  IconMail,
  IconMessage,
  IconRocket,
  IconCertificate,
};

export function DynamicIcon({
  iconName,
  className = "h-full w-full text-neutral-500 dark:text-neutral-300",
}: DynamicIconProps) {
  // Try to find the icon in our curated map
  const Icon = ICON_MAP[iconName];

  // If the icon exists in our map, render it; otherwise show a fallback question mark icon
  // This approach is much faster than dynamic string-based lookups from the whole library
  return Icon ? (
    <Icon className={className} />
  ) : (
    <IconQuestionMark className={className} />
  );
}
