const Hero = () => {


const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/home/saaransh/MAJOR PROJECTS/PORTFOLIO/public/resume-saaransh-new-2025.pdf";
    link.download = "resume-saaransh-new-2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section className="min-h-screen pt-32 pb-20 px-8 relative overflow-hidden">
      {/* Background gradient blur */}
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-300 via-green-200 to-pink-300 rounded-full blur-[120px] opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Decorative lines */}
            <div className="absolute top-20 right-1/2 w-32 h-32">
              <div className="absolute rotate-45 w-24 h-0.5 bg-black top-8"></div>
              <div className="absolute rotate-45 w-24 h-0.5 bg-black top-12 left-2"></div>
            </div>

            {/* Greeting */}
            <div className="space-y-4">
              <div className="text-6xl">👋</div>
              <div className="space-y-2">
                <h1 className="text-7xl outfit font-light">
                  Hello! <span className="font-bold outfit">I'm Saaransh</span>
                </h1>
                <div className="flex items-center gap-3">
                  <div className="h-px bg-black w-32"></div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-light outfit">FullStack Engineer</span>
                    <svg 
                      className="w-6 h-6" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg outfit leading-relaxed max-w-lg">
              Hello! I'm Saaransh. I'm a <span className="font-semibold">Frontend Engineer, Backend Engineer, product designer</span>, 
              Engineer building product-driven, scalable web systems.
            </p>

            {/* Principles */}
       <div className="space-y-3">
  <div className="flex items-center gap-3">
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
    <span className="text-base outfit">Build real things before polishing narratives</span>
  </div>

  <div className="flex items-center gap-3">
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
    <span className="text-base outfit">Solve problems, not feature checklists</span>
  </div>

  <div className="flex items-center gap-3">
    <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
    <span className="text-base outfit">Let users validate ideas, not assumptions</span>
  </div>
</div>


            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-colors">
                Let's Talk
              </button>
              <button onClick={handleDownload} className="flex cursor-pointer items-center gap-2 px-6 py-4 text-base font-medium hover:underline">
                <span>Download CV</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative mt-24">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64">
              <div className="absolute rotate-12 w-48 h-0.5 bg-black right-0"></div>
              <div className="absolute w-24 h-24 border-4 border-black rounded-full -right-4 top-8"></div>
            </div>

            {/* Decorative line bottom right */}
            <div className="absolute -bottom-10 -right-5 w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path d="M10 50 Q 50 10, 90 50" stroke="black" strokeWidth="2" fill="none"/>
              </svg>
            </div>

            {/* Code Window Alternative (instead of Profile Image) */}
            <div className="relative z-10 rounded-2xl overflow-hidden bg-white/50 backdrop-blur-md shadow-xl flex flex-col font-mono text-sm sm:text-base border border-gray-200">
              {/* Terminal Header */}
              <div className="w-full h-12 bg-gray-100/80 flex items-center px-4 gap-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                <div className="ml-2 flex-1 text-center text-gray-500 text-xs font-sans tracking-wider font-medium">saaransh.ts</div>
              </div>
              
              {/* Code Content */}
              <div className="p-6 sm:p-8 text-gray-800 flex-1 overflow-x-auto">
                <p><span className="text-pink-600">const</span> <span className="text-blue-600">saaransh</span> <span className="text-pink-600">=</span> {'{'}</p>
                <p className="ml-4"><span className="text-teal-600">role:</span> <span className="text-yellow-600">'FullStack Engineer'</span>,</p>
                <p className="ml-4"><span className="text-teal-600">skills:</span> [</p>
                <p className="ml-8"><span className="text-yellow-600">'Frontend Development'</span>,</p>
                <p className="ml-8"><span className="text-yellow-600">'Backend Engineering'</span>,</p>
                <p className="ml-8"><span className="text-yellow-600">'System Design'</span></p>
                <p className="ml-4">],</p>
                <p className="ml-4"><span className="text-teal-600">focus:</span> <span className="text-yellow-600">'Product-driven systems'</span>,</p>
                <p className="ml-4"><span className="text-teal-600">coffee_consumed:</span> <span className="text-purple-600">Infinity</span>,</p>
                <p className="ml-4"><span className="text-green-600">solveProblems:</span> () <span className="text-pink-600">{'=>'}</span> {'{'}</p>
                <p className="ml-8"><span className="text-pink-600">return</span> <span className="text-orange-500">"Build real things"</span>;</p>
                <p className="ml-4">{'}'}</p>
                <p>{'};'}</p>
                <p className="mt-4"><span className="text-pink-600">export default</span> <span className="text-blue-600">saaransh</span>;</p>
              </div>
            </div>

            {/* Diagonal line top left */}
            <div className="absolute top-0 left-20 w-1 h-40 bg-black transform -rotate-45 -translate-y-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
