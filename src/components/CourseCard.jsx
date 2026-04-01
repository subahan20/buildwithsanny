import React from 'react';

const CourseCard = ({ course, onCourseClick }) => {
  const { title, instructor, image, description } = course;
  
  return (
    <div 
      onClick={() => onCourseClick(course)}
      className="group bg-slate-900/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/5 shadow-2xl hover:border-yellow-500/50 transition-all duration-500 cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-yellow-400 tracking-widest uppercase border border-white/10">
          Technology
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-white tracking-tight group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm font-bold text-slate-400 mt-4 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto pt-8 flex items-center justify-between border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
              <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${instructor}`} alt={instructor} />
            </div>
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{instructor}</span>
          </div>
          <span className="text-[10px] font-black text-yellow-400 uppercase tracking-widest bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-yellow-500/20 group-hover:bg-yellow-500 group-hover:text-white transition-all">
            View Lessons
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
