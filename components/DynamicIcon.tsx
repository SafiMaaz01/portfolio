"use client";

import {
  IconBrandGithub,
  IconBrandX,
  IconBriefcase,
  IconBulb,
  IconCertificate,
  IconCode,
  IconHome,
  IconMail,
  IconMessage,
  IconMessageCircle,
  IconNews,
  IconQuestionMark,
  IconRocket,
  IconSchool,
  IconTerminal2,
  IconTools,
  IconUser,
} from "@tabler/icons-react";
import type React from "react";

interface DynamicIconProps {
  iconName: string;
  className?: string;
}

// Common icons we want to bundle in the main chunk for instant loading
// This prevents slow dynamic imports of the entire 5000+ icon library
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
  IconBulb,
  IconTools,
  IconSchool,
  IconNews,
  IconMessageCircle,
  IconBrandGithub,
  IconBrandX,
  IconTerminal2,
  IconQuestionMark,
};

export function DynamicIcon({
  iconName,
  className = "h-full w-full text-neutral-500 dark:text-neutral-300",
}: DynamicIconProps) {
  // Check if the icon is in our static map
  const Icon = STATIC_ICONS[iconName] || STATIC_ICONS.IconQuestionMark;

  return <Icon className={className} />;
}
