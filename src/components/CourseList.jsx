import React from 'react';
import CourseCard from './CourseCard';

const CourseList = ({ courses, onCourseSelect, userName = "Alex" }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10 text-left sm:text-center lg:text-left">
        <h2 className="text-4xl font-black text-slate-900 tracking-tight">
          Ready for another win, {userName}?
        </h2>
        <p className="text-slate-500 mt-3 text-xl max-w-2xl font-medium">
          Choose your next specialized mission and build something extraordinary today.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard 
            key={course.id} 
            course={course} 
            onCourseClick={onCourseSelect} 
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
