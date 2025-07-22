import React from "react";

export default function Studywrite() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-slate-50 to-indigo-100 rounded-2xl shadow-lg shadow-indigo-200/50 p-4 sm:p-8 md:p-12 my-4 sm:my-8 min-h-[320px] gap-6 sm:gap-8 overflow-hidden w-full">
      <div className="flex-1 w-full text-center md:text-left opacity-0 animate-[slide-in-left_1s_ease-out_forwards]">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-3 sm:mb-4">
          Best CLAT Mock Test Series 2026-2027
        </h2>
        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8">
          Elevate your preparation with the CLAT Mock Test for the 2026 exam, based on the latest pattern and syllabus.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-indigo-500 text-white rounded-lg font-bold text-base cursor-pointer shadow-md hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-label="Enroll Now">
            Enroll Now
          </button>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-indigo-500 border-2 border-indigo-500 rounded-lg font-bold text-base cursor-pointer shadow-md hover:bg-indigo-500 hover:text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400" aria-label="Enquiry Now">
            Enquiry Now
          </button>
        </div>
      </div>
      <div className="flex-1 w-full flex justify-center items-center opacity-0 animate-[slide-in-right_1s_ease-out_0.3s_forwards]">
        <div className="w-40 sm:w-56 h-40 sm:h-56 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-xl shadow-indigo-300/50 text-center p-2 sm:p-4 animate-[float_2.5s_ease-in-out_infinite_alternate]">
          <span className="block">CLAT 2026</span>
        </div>
      </div>
    </div>
  );
}
