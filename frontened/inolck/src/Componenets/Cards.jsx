import React from 'react';
import { ShieldCheck, Zap, BarChart, Settings } from 'lucide-react';

const cardData = [
  {
    icon: ShieldCheck,
    title: "Secure Proctoring",
    description: "Ensure exam integrity with our AI-powered live proctoring and secure browser technology."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "Automated OMR scanning and result processing provide immediate feedback and detailed analytics."
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description: "Track progress with in-depth performance reports, all-India rankings, and topic-wise analysis."
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Tailor exams with your own branding, question banks, and custom scoring rules."
  }
];

export default function Cards() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800">
            Why Choose Inolck?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We provide a comprehensive suite of tools designed for excellence in online and offline examinations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="bg-slate-50 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 mb-6 mx-auto sm:mx-0"><card.icon className="h-8 w-8 text-indigo-600" /></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center sm:text-left">{card.title}</h3>
              <p className="text-slate-600 text-center sm:text-left">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}