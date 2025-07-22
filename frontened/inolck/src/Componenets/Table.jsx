import React from 'react';

const coursesData = {
  courses: [
    "CLAT", "Judiciary", "IPMAT", "CUET [UG]", "NATA", "NID", "CAT", "Test Series"
  ],
  testSeries: [
    "CLAT", "AILET", "Judiciary", "IPMAT", "CUET [UG]", "NATA", "CAT"
  ],
  trendingExams: [
    "CLAT 2026", "IPMAT 2026", "CUET 2026", "NATA 2026", "NID 2026", "AILET 2026", "CAT 2025"
  ],
  blogs: [
    "CLAT", "CUET [UG]", "IPMAT", "Architecture", "Design", "CAT", "Career Counselling"
  ],
  scholarshipTests: [
    "LegalEdge", "Judiciary Gold", "Supergrads IPM", "Creative Edge", "SuperGrads CUET", "LegalEdge After College", "SuperGrads CAT"
  ],
  mentorTips: [
    "CLAT Prep Tips", "AILET Prep Tips", "IPMAT Prep Tips", "NATA Prep Tips", "NID Prep Tips", "Judiciary Prep Tips", "CAT Prep Tips"
  ]
};

const Courses = () => {
  return (
    <div className="grid grid-cols-1  bg-amber-200 m-4 rounded-4xl sm:grid-cols-2 md:grid-cols-3 justify-center lg:grid-cols-4 gap-4 p-4">
      <div className="   rounded-lg p-4">
        <h3 className="text-lg font-semibold text-center">Our Courses</h3>
        <ul className="mt-2">
          {coursesData.courses.map(course => <li key={course} className="py-1">{course}</li>)}
        </ul>
      </div>
      {/* <hr  className='flex flex-col  ' /> */}
      <div className="  rounded-lg p-4">
        <h3 className="text-lg font-semibold text-center">Test Series</h3>
        <ul className="mt-2">
          {coursesData.testSeries.map(test => <li key={test} className="py-1">{test}</li>)}
        </ul>
      </div>
      <div className="  rounded-lg p-4">
        <h3 className="text-lg font-semibold text-center">Trending Exams</h3>
        <ul className="mt-2">
          {coursesData.trendingExams.map(exam => <li key={exam} className="py-1">{exam}</li>)}
        </ul>
      </div>
      <div className="  rounded-lg p-4">
        <h3 className="text-lg font-semibold text-center">Blogs</h3>
        <ul className="mt-2">
          {coursesData.blogs.map(blog => <li key={blog} className="py-1">{blog}</li>)}
        </ul>
      </div>
      
    </div>
  );
};

export default Courses;
