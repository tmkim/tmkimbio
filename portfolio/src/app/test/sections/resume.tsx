"use client";

import { Download, Clock } from "lucide-react";
import Link from "next/link";
import ResumePage from "@/components/resume-page";

const avail = [
  {day: 'Monday',     hours: '8am - 5pm'},
  {day: 'Tuesday',    hours: '8am - 5pm'},
  {day: 'Wednesday',  hours: '8am - 5pm'},
  {day: 'Thursday',   hours: '8am - 5pm'},
  {day: 'Friday',     hours: '8am - 5pm'},
]

export default function Resume() {
  return (
    <div className="w-full max-h-full py-10">
      <div className="max-w-screen-2xl mx-auto px-16 grid grid-cols-1 min-[1260px]:grid-cols-[3fr_1fr] gap-8 min-w-[840px]">

        {/* LEFT — Resume Content */}
        <div className="bg-neutral-100 rounded-2xl shadow p-0 overflow-hidden">
          <div className="max-h-[60vh] sm:max-h-[70vh] min-[1260px]:max-h-[80vh] overflow-y-auto p-6">
            <ResumePage />
          </div>
        </div>


        {/* RIGHT — Sidebar */}
        <aside className="grid grid-cols-1 max-[1260px]:grid-cols-2 grid-cols-1 gap-6 text-black">

          <div className="bg-neutral-100 rounded-2xl shadow p-6 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-3">Availability (US EST)</h2>
            {avail.map((a) => (
              <div key={a.day} className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <strong>{a.day}</strong>
                </div>
                <span>{a.hours}</span>
              </div>
            ))}
            <p className="mt-2">
              Available to start immediately
            </p>
          </div>

          <div className="bg-neutral-100 rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold">Current Location</h2>
            <p className="mt-2 mb-4">New Jersey / New York</p>
            <p className="mt-2">✅ Willing to relocate</p>
            <p className="mt-2">✅ On-Site roles</p>
            <p className="mt-2">✅ Hybrid roles</p>
            <p className="mt-2">✅ Remote roles</p>
          </div>
        </aside>

      </div>
    </div>
  );
}
