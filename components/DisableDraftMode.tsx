"use client";

import { useRouter } from "next/navigation";
import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useTransition } from "react";
import { disableDraftMode } from "@/app/actions/disableDraftMode";


export function DisableDraftMode() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode();
      router.refresh();
    });

  return (
    <div className="fixed top-2 left-2 z-50">
      {pending ? (
        "Disabling draft mode..."
      ) : (
        <button
          type="button"
          onClick={disable}
          className="bg-destructive text-white hover:bg-destructive/90 px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Disable draft mode
        </button>
      )}
    </div>
  );
}
