// import React from 'react';
// import ReactTypingEffect from 'react-typing-effect';
// import Tilt from 'react-parallax-tilt';
// import profileImage from '../../assets/profile2.png';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw]  font-sans mt-8 md:mt-6 lg:mt-20"
//     >
//       <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 justify-between items-center">
//         {/* Left Side */}
//        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
//   {/* Greeting */}
//   <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-1 leading-snug">
//     Hi, I am
//   </h1>

//   {/* Name */}
//   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
//     Yogesh Thakur
//   </h2>

//   {/* Skills Heading with Typing Effect */}
//   <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-[#8245ec] leading-snug">
//     <span className="text-white">I am a </span>
//     <ReactTypingEffect
//       text={[
//         'Fullstack Developer',
//         'Python Developer',
//         'UI/UX Designer',
//         'Coder',
//       ]}
//       speed={100}
//       eraseSpeed={50}
//       typingDelay={500}
//       eraseDelay={2000}
//       cursorRenderer={(cursor) => (
//         <span className="text-[#8245ec]">{cursor}</span>
//       )}
//     />
//   </h3>

//   {/* About Me Paragraph */}
//   <p className="text-sm sm:text-base md:text-base text-gray-400 mb-6 mt-4 leading-normal">
//     I am a full-stack developer with over 2 years of experience in
//     building scalable web applications. Skilled in both front-end and
//     back-end development, I specialize in the MERN stack and other
//     modern technologies.
//   </p>

//   {/* Resume Button */}
//   <a
//     href="https://drive.google.com/file/d/1GY8GTnK_3krgvGnUULMo3AIhJr6qmIKd/view?usp=sharing"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="inline-block text-white py-2.5 px-6 rounded-full mt-4 text-base font-bold transition duration-300 transform hover:scale-105"
//     style={{
//       background: 'linear-gradient(90deg, #8245ec, #a855f7)',
//       boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 30px #8245ec',
//     }}
//   >
//     DOWNLOAD CV
//   </a>
// </div>

//         {/* Right Side */}
//         <div className="md:w-81 flex justify-center md:justify-end">
//           <Tilt
//             className="w-64 h-64 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//           >
//             <img
//               src={profileImage}
//               alt="Yogesh Thakur"
//               className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
//             />
//           </Tilt>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint (tablet & up)
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-6 lg:mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-10 justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-white mb-1 leading-snug">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-snug">
            Yogesh Thakur
          </h2>

          {/* Skills with Typing Effect */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-[#8245ec] leading-snug">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Fullstack Developer',
                'Python Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          {/* About Me */}
          <p className="text-sm sm:text-base md:text-base text-gray-400 mb-6 mt-4 leading-normal">
            I am a full-stack developer with over 2 years of experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1GY8GTnK_3krgvGnUULMo3AIhJr6qmIKd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-2.5 px-6 rounded-full mt-4 text-base font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 30px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-81 flex justify-center md:justify-end">
          {isMobile ? (
            // ✅ For Mobile (No Tilt)
            <img
              src={profileImage}
              alt="Yogesh Thakur"
              className="w-64 h-64 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          ) : (
            // ✅ For Tablet & Laptop (Tilt Enabled)
            <Tilt
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-[20rem] md:h-[20rem] border-4 border-purple-700 rounded-full"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <img
                src={profileImage}
                alt="Yogesh Thakur"
                className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
