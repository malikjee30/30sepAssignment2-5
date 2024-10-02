

// StudentCard.tsx
import react from 'react';

const StudentCard = ({ name, age, rollNumber, studentClass }) => {
  return (
    <div className="bg-blue-200 shadow-lg rounded-lg p-6 mb-6 w-80 md:w-96 mx-auto">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-red-700 mb-1"><strong>Age:</strong> {age}</p>
      <p className="text-red-600 mb-1"><strong>Roll Number:</strong> {rollNumber}</p>
      <p className="text-red-500"><strong>Class:</strong> {studentClass}</p>
    </div>
  );
};

export default StudentCard;
