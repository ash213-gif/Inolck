import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const features = [
  "2 years long batch for CLAT 2026 (2 days Classes, Sat-Sun)",
  "Over 75,000 CLAT Aspirants Trained | 5,000+ National Law School Selections",
  "13+ Years of CLAT Training Experience",
  "Average educator experience of 5+ years",
  "20+ Booklets (RSM) covering 100% CLAT, AILET and Other Law Entrances",
  "10,000+ Practice Questions & PYPs",
  "100+ Full Length Mocks with video analysis of EACH question",
  "Detailed performance reports and topic-wise insights",
  "Write offline mocks at 30+ LE Centres every week",
  
];

export default function Content() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left - List */}
      <div className="flex-1">
        <ul className="space-y-4">
          {features.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <FaCheckCircle className="text-green-600 mt-1 shrink-0" />
              <span className="text-gray-800 text-sm md:text-base leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right - Video */}
      <div className="flex-1 flex justify-center">
        <div className="aspect-video w-full max-w-md">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/a6RFqEBFmpM?si=LkMOtN7T0_g9DuSg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
