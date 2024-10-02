

// page.tsx
import React from 'react';
import StudentCard from './components/StudentCard';

const Home = () => {
  const students = [
    { name: 'Ghulam Nasir', age: 20, rollNumber: '150829', studentClass: '10th Grade' },
    { name: 'Hasnain Nasir', age: 23, rollNumber: '150830', studentClass: '11th Grade' },
    { name: 'Hunain Nasir', age: 25, rollNumber: '150831', studentClass: '12th Grade' },
  ];

  return (
    <div className="min-h-screen bg-pink-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Student ID Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            studentClass={student.studentClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
