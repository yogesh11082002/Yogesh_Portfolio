// import React, { useState, useEffect } from "react";
// import { projects } from "../../constants";

// const Work = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   // ✅ Lock scroll when modal is open
//   useEffect(() => {
//     if (selectedProject) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [selectedProject]);

//   const handleOpenModal = (project) => {
//     setSelectedProject(project);
//   };

//   const handleCloseModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <section
//       id="work"
//       className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
//         <p className="text-gray-400 mt-4 text-lg font-medium">
//           A showcase of the projects I have worked on, highlighting my skills
//           and experience in various technologies
//         </p>
//       </div>

//       {/* Projects Grid */}
//       <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             onClick={() => handleOpenModal(project)}
//             className="border border-gray-700 bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl 
//                        overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-2 
//                        transition-transform duration-300"
//           >
//             <div className="p-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover rounded-xl"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 {project.title}
//               </h3>
//               <p className="text-gray-400 mb-4 line-clamp-3">
//                 {project.description}
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 {project.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 
//                                rounded-full px-3 py-1"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto">
//           <div className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl relative animate-fadeIn">
//             {/* Close Button */}
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-purple-500 z-10"
//             >
//               &times;
//             </button>

//             <div className="flex flex-col lg:flex-row">
//               {/* Project Image */}
//               <div className="w-full lg:w-1/2 flex justify-center bg-gray-900 p-4">
//                 <img
//                   src={selectedProject.image}
//                   alt={selectedProject.title}
//                   className="w-full h-56 sm:h-72 lg:h-full object-contain rounded-xl"
//                 />
//               </div>

//               {/* Project Details */}
//               <div className="w-full lg:w-1/2 lg:p-8 p-6 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
//                     {selectedProject.title}
//                   </h3>
//                   <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
//                     {selectedProject.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-6">
//                     {selectedProject.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-4 justify-center mt-4">
//                   <a
//                     href={selectedProject.webapp}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl 
//                                text-center font-semibold transition"
//                   >
//                     View Live
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Work;


import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // ✅ Lock scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-medium">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-gray-700 bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-xl 
                       overflow-hidden cursor-pointer hover:shadow-purple-500/40 hover:-translate-y-2 
                       transition-transform duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-400 
                               rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div
            className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl relative animate-fadeIn 
                       max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-4 text-white text-3xl font-bold hover:text-purple-500 z-10"
            >
              &times;
            </button>

            <div className="flex flex-col lg:flex-row">
              {/* Project Image */}
              <div className="w-full lg:w-1/2 flex justify-center bg-gray-900 p-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-60 sm:max-h-72 lg:max-h-full object-contain rounded-xl"
                />
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 lg:p-8 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 justify-center mt-4">
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl 
                               text-center font-semibold transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
