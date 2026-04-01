import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CourseList from '../components/CourseList';
import LessonViewer from '../components/LessonViewer';
import { COURSES } from '../data/courses';

const Dashboard = () => {
  const { state } = useLocation();
  const userName = state?.user?.name || "Alex Johnson";
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleHomeClick = () => setSelectedCourse(null);
  const handleCourseSelect = (course) => setSelectedCourse(course);

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col font-inter text-slate-100">
      <Header userName={userName} />
      
      <div className="flex flex-1">
        <Sidebar 
          onHomeClick={handleHomeClick} 
          activeCourseId={selectedCourse?.id} 
        />
        
        <main className="flex-1 overflow-y-auto bg-slate-900/20 backdrop-blur-3xl p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            {selectedCourse ? (
              <LessonViewer 
                course={selectedCourse} 
                onBack={handleHomeClick} 
              />
            ) : (
              <CourseList 
                userName={userName}
                courses={COURSES} 
                onCourseSelect={handleCourseSelect} 
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
