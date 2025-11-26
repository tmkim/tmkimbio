"use client";

import ResumePage from "@/components/resume-page";

const avail = [
  { day: "Monday", hours: "8am - 5pm" },
  { day: "Tuesday", hours: "8am - 5pm" },
  { day: "Wednesday", hours: "8am - 5pm" },
  { day: "Thursday", hours: "8am - 5pm" },
  { day: "Friday", hours: "8am - 5pm" },
];

export default function Resume() {
  return (
    <div className="w-full h-screen py-10 px-4 sm:px-8 text-black">
      <div className="w-full h-full max-w-screen-xl mx-auto border border-white/20 rounded-3xl p-4 backdrop-blur-md bg-black/40 shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden">
        <div className="h-full grid grid-rows-[70%_30%] gap-6 min-[1260px]:grid-rows-none min-[1260px]:grid-cols-[3fr_1fr]">

          {/* LEFT — Resume Content */}
          <div className="bg-neutral-100 rounded-2xl shadow overflow-hidden">
            <div className="h-full overflow-auto">
              <ResumePage />
            </div>
          </div>

          {/* RIGHT — Sidebar */}
          <div className="grid grid-cols-2 gap-6 min-[1260px]:grid-cols-1 min-[1260px]:grid-rows-2 h-full max-[1260px]:pb-6">

            <div className="bg-neutral-100 rounded-2xl shadow p-6 overflow-auto">
              <h2 className="text-xl font-semibold mb-3">Availability (US EST)</h2>
              {avail.map((a) => (
                <div key={a.day} className="flex items-center justify-between w-full">
                  <strong>{a.day}</strong>
                  <span>{a.hours}</span>
                </div>
              ))}
              <p className="mt-2">Available to start immediately</p>
            </div>

            <div className="bg-neutral-100 rounded-2xl shadow p-6 overflow-auto">
              <h2 className="text-xl font-semibold">Current Location</h2>
              <p className="mt-2 mb-4">New Jersey / New York</p>
              <p className="mt-2">✅ Willing to relocate</p>
              <p className="mt-2">✅ On-Site roles</p>
              <p className="mt-2">✅ Hybrid roles</p>
              <p className="mt-2">✅ Remote roles</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
