"use client";

import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  imageUrl: string;
  firstName: string;
  middleName?: string;
  lastName: string;
}

export function ProfileImage({
  imageUrl,
  firstName,
  middleName,
  lastName,
}: ProfileImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const handleInteraction = () => {
    if (!isSignedIn) {
      openSignIn();
    }
  };

  return (
    <button
      type="button"
      onClick={handleInteraction}
      className="relative aspect-square rounded-2xl overflow-hidden border-4 border-primary/20 block group cursor-pointer w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Toggle AI Chat Sidebar"
    >
      <Image
        src={imageUrl}
        alt={`${firstName} ${middleName ? middleName + " " : ""}${lastName}`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority
      />

      {/* Online Badge */}
      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
        <div className="relative">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping" />
        </div>
        <span className="text-xs font-medium text-white">Online</span>
      </div>
      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center space-y-3">
          {/* Icon placeholder (optional but keeps layout identical) */}
          <div className="w-12 h-12 mx-auto rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">
              {isSignedIn ? "👋" : "🔐"}
            </span>
          </div>

          <div className="text-white text-xl font-semibold">
            {isSignedIn ? "Welcome back" : "Sign in"}
          </div>

          <div className="text-white/80 text-sm">
            {isSignedIn ? "Glad to see you here" : "Click to sign in"}
          </div>
        </div>
      </div>
    </button>
  );
}
