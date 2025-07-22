import React from 'react';
import { Quote } from 'lucide-react';

// Placeholder data for toppers. Replace with your actual data.
const toppers = [
  {
    name: 'Ananya Sharma',
    rank: 'AIR 1 - CLAT 2025',
    image: 'https://placehold.co/400x400/a5b4fc/3730a3?text=AS', 
    quote: 'The structured mock tests and detailed analytics were instrumental in my success. Inolck provided the perfect platform to hone my skills.'
  },
  {
    name: 'Rohan Verma',
    rank: 'AIR 3 - CLAT 2025',
    image: 'https://placehold.co/400x400/818cf8/3730a3?text=RV',
    quote: 'Consistent practice with the test series helped me manage my time effectively and tackle difficult questions with confidence.'
  },
  {
    name: 'Priya Singh',
    rank: 'AIR 5 - CLAT 2025',
    image: 'https://placehold.co/400x400/6366f1/ffffff?text=PS',
    quote: 'The quality of questions and the all-India ranking system gave me a real sense of the competition. Highly recommended!'
  },
];

export default function OurTopper() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-800">
            Meet Our Achievers
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Celebrating the success of our students who have excelled in the CLAT examination.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out group">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <img src={topper.image} alt={`Photo of ${topper.name}`} className="w-28 h-28 rounded-full object-cover border-4 border-indigo-200 group-hover:border-indigo-400 transition-colors duration-300" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{topper.name}</h3>
                  <p className="text-indigo-600 font-semibold">{topper.rank}</p>
                </div>
                <blockquote className="mt-6 border-l-4 border-indigo-200 pl-4 italic text-slate-600 relative">
                  <Quote className="absolute -top-1 -left-2 w-8 h-8 text-indigo-100" />
                  <p className="relative z-10">{topper.quote}</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}