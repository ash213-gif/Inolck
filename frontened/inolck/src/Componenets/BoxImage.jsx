import React from 'react';

import logoImg from '../assets/Images/Logo.jpg';
import reactImg from '../assets/react.svg';

const teachers = [
  {
    name: 'Amit Sharma',
    experience: '10+ years teaching CLAT & Judiciary',
    image: 'https://static.uacdn.net/thumbnail/course/v2/637D2C40-F9C1-4BC9-9E2E-41A0C6EABBE0_special_class.png?q=75&w=3840&auto=format%2Ccompress',
    details: 'Specializes in Legal Aptitude and Reasoning. Mentor to 1000+ successful students.'
  },
  {
    name: 'Priya Singh',
    experience: '8 years experience in English & GK',
    image: 'https://static.uacdn.net/thumbnail/course/v2/478D194D-8555-4A20-83E7-9ECA95D7845C_special_class.png?q=75&w=3840&auto=format%2Ccompress',
    details: 'Expert in English comprehension and General Knowledge. Known for interactive teaching style.'
  },
  {
    name: 'Rahul Verma',
    experience: '12 years in Quantitative Aptitude',
    image: 'https://static.uacdn.net/thumbnail/course/v2/6C16C459-EA35-4B60-AF1B-EC477B932B37_special_class.png?q=75&w=640&auto=format%2Ccompress',
    details: 'Quant expert, author of 2 books, helped 500+ students.'
  },
  {
    name: 'Sneha Gupta',
    experience: '7 years in Legal Reasoning',
    image: 'https://static.uacdn.net/thumbnail/course/v2/9400F299-E7D1-4459-9C2E-7AFFE4003365_special_class.png?q=75&w=640&auto=format%2Ccompress',
    details: 'Legal Reasoning specialist, known for case study approach.'
  },
  {
    name: 'Vikram Patel',
    experience: '9 years in Current Affairs',
    image: 'https://static.uacdn.net/thumbnail/course/v2/7CD6A4DA-B93F-4AF1-BEF7-62C3AFC5D47C_special_class.png?q=75&w=640&auto=format%2Ccompress',
    details: 'Current Affairs mentor, daily news analysis sessions.'
  },
  {
    name: 'Meera Joshi',
    experience: '11 years in English Literature',
    image: 'https://static.uacdn.net/thumbnail/course/v2/2684D3C8-E8F6-4472-8B36-B5F4F6081F70_special_class.png?q=75&w=640&auto=format%2Ccompress',
    details: 'English Literature expert, interactive workshops.'
  },
  {
    name: 'Suresh Kumar',
    experience: '8 years in Logical Reasoning',
    image: 'https://static.uacdn.net/thumbnail/course/v2/7BB10645-1C34-4080-A54F-A20EF8ECBB86_special_class.png?q=75&w=640&auto=format%2Ccompress',
    details: 'Logical Reasoning coach, puzzle master.'
  },
  
];

const FlipCard = ({ teacher }) => {
  return (
    <>

    <div className="flip-card-container">
       
      <div className="flip-card-inner">

        <div className="flip-card-front">
          <img src={teacher.image} alt={teacher.name} className="card-image" />
          <div className="teacher-name">{teacher.name}</div>
          <div className="teacher-experience">{teacher.experience}</div>
        </div>


        <div className="flip-card-back">
          <div className="card-back-content">
              <span className="icon">⭐</span>
              <i className="fas fa-info-circle"></i> {/* Font Awesome icon */}
            {teacher.details}
          </div>
        </div>

        
      </div>
    </div>
     </>
  );
};

const BoxImage = () => {
  return (
    <div className="box-image-container">
      {teachers.map((teacher, idx) => (
        <FlipCard key={idx} teacher={teacher} />
      ))}
    </div>
  );
};

export default BoxImage;

