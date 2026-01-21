"use client";
import WorldMap from "@/components/ui/world-map";

export default function WorldMapDemo() {
  return (
    <div className="w-full px-4 sm:px-6 pb-12">
      <div className="container mx-auto max-w-6xl space-y-4">
        <h2 className="text-center text-2xl font-semibold">
          Working Globally From Jamshedpur, India 🇮🇳
        </h2>

        <WorldMap
          dots={[
            {
              start: {
                lat: 22.8046,
                lng: 86.2029,
                label: "Jamshedpur, India",
              },
              end: {
                lat: 28.6139,
                lng: 77.209,
                label: "New Delhi, India",
              },
            },
            {
              start: {
                lat: 22.8046,
                lng: 86.2029,
                label: "Jamshedpur, India",
              },
              end: {
                lat: 25.276987,
                lng: 55.296249,
                label: "Dubai, UAE",
              },
            },
            {
              start: {
                lat: 22.8046,
                lng: 86.2029,
                label: "Jamshedpur, India",
              },
              end: {
                lat: 51.5074,
                lng: -0.1278,
                label: "London, UK",
              },
            },
            {
              start: {
                lat: 22.8046,
                lng: 86.2029,
                label: "Jamshedpur, India",
              },
              end: {
                lat: 40.7128,
                lng: -74.006,
                label: "New York, USA",
              },
            },
          ]}
        />
      </div>
    </div>
  );
}
