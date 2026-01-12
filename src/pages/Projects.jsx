import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const resumeLink = "https://drive.google.com/drive/folders/1lK8R4rUkW13xJqYgMzPobLs0cm0YScgT?usp=sharing";

  const projectList = [
    {
      title: "This Portfolio Website :)",
      role: "Front-End Developer",
      tags: ["React + Vite", "ThreeJS", "TailwindCSS"],
      inProgress: false, 
      description: "Yes! One of my favorite projects. Showcasing my resume in an interactive format while simultaneously showing some of my skills",
      github: "#",
      drive: "#",
      details: "Automated CI/CD workflow and optimized image loading for better performance on both desktop and mobile!",
      customMessage: "⊹ How do you like it? ⊹"
    },
    {
      title: "MealStash App",
      role: "Full-stack Developer",
      tags: ["React Native", "Firebase", "Gemini API"],
      inProgress: true, 
      description: "Building a full-stack mobile app that generates personalized recipes using JSON-based prompt engineering.",
      github: "#",
      drive: "#",
      details: "Implemented Firebase for personalized user data persistence and used the Google Gemini API for dynamic recipe generation."
    },
    {
      title: "Spotify Notes",
      role: "Project Manager",
      tags: ["React Vite", "Spotify API", "Scrum"],
      inProgress: true,
      description: "A full-stack web application developed using Scrum methodologies that allows users to attach and share notes on Spotify songs.",
      github: "",
      drive: "",
      details: "Led the team as PM to utilize Spotify's API, enabling users to share notes with friends using their existing Spotify accounts.",
      customMessage: "⊹ Beta access coming soon to UCLA students ⊹"
    },
    {
      title: "Email Marketing Analysis",
      role: "Data Analyst",
      tags: ["Python", "SQL", "Power BI"],
      inProgress: true,
      description: "Analyzed an email marketing database to identify key drivers of subscriber churn.",
      github: "",
      drive: "",
      additionalLinks: [
        { label: "RETENTION ANALYSIS", url: "https://public.tableau.com/views/Email_Marketing_Project/EmailMarketingTacticsRetentionAnalysisChurnRates?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
        { label: "CAMPAIGN PERFORMANCE", url: "https://public.tableau.com/views/Email_Marketing_Project_1/FactorsAffectingCampaignPerformanceandUnsubscribes?:language=en-US&:sid=&:redirect=auth&publish=yes&showOnboarding=true&:display_count=n&:origin=viz_share_link" },
        { label: "GOOGLE COLLAB NOTEBOOK", url: "https://colab.research.google.com/drive/1mhdwNTwaHzZLoCvDHMzGlWP6pfy8Sn2-?usp=sharing" } 
      ],
      details: "Developed interactive Tableau and Power BI dashboards to translate raw data into audience retention strategies. Power BI process still in progress."
    },
    {
      title: "HYEL Mobile Game",
      role: "Mobile Game Development Intern",
      tags: ["Swift", "Figma", "iOS Development"],
      inProgress: false,
      description: "Developed a completed mobile game featured in the HYEL app, focusing on game logic and professional UI/UX.",
      github: "",
      drive: "",
      details: "Iterated on gameplay, testing, and debugging to create a professional product for real users.",
      customMessage: "⊹ code + designs handed over to company ⊹"
    },
    {
      title: "ThinkNeuro Research",
      role: "Assistant Associate Researcher",
      tags: ["R", "Tableau", "Data Visualization"],
      inProgress: false,
      description: "Researched AI's role in neuro-prosthetic spinal cord stimulation and neurological injury restoration.",
      github: "",
      drive: "https://drive.google.com/file/d/1s_5AsrhkINyDAB_-xuOmg8BW5YMgcHZa/view?usp=sharing",
      details: "Utilized R, Tableau, and Excel to scrape data, identify research gaps, and visualize results for a group of 12 researchers."
    },
    
    
    {
      title: "SWE UCLA Event Design",
      role: "Design & Publicity Intern",
      tags: ["Figma", "Marketing", "Graphic Design"],
      inProgress: false,
      description: "Sole intern responsible for creating digital and physical marketing assets for the Society of Women Engineers.",
      github: "",
      drive: "",
      additionalLinks: [
        { label: "INSTAGRAM POST", url: "https://www.instagram.com/p/DCKICvQRj_c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
        { label: "EVENT RSVP FORM", url: "https://forms.gle/dSBVS5qCA75dqx5X7" } 
      ],
      details: "Designed event flyers, forms, and social media posts to promote event marketing among the UCLA student body."
    },
    {
      title: "Campus Cruizin",
      role: "MERN Stack Developer",
      tags: ["React", "MongoDB", "Node.js"],
      inProgress: false,
      description: "Developed a review page for engineering clubs at UCLA to increase club exposure.",
      github: "https://github.com/layahvigneaud/campus_cruzin",
      drive: "#",
      details: "Built the platform using the MERN stack (MongoDB, Express, React, Node.js) to help students navigate campus organizations."
    },
    {
      title: "Otter Half",
      role: "Lead Gameplay Developer",
      tags: ["Unity", "C#", "Game Design"],
      inProgress: false, 
      description: "A creature-collection adventure game inspired by Pokémon, featuring complex cave navigation and intelligent enemy behavior.",
      github: "https://github.com/hannahtrng/Otter-Half", 
      drive: "#",  
      details: "Engineered enemy AI detection and trigger systems to enhance combat engagement. Developed player movement and navigation for intricate cave systems while leading a team of 5 through weekly sprints and scene management."
    },
    
  ];

  return (
    <div className="w-full min-h-screen py-20 px-6 bg-[#fff0f5] font-vt323">
      
   
      <a 
        href={resumeLink} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group"
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-pink-200 rounded-full blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500"></div>
          <div className="relative bg-white border-[3px] border-pink-300 px-6 py-3 rounded-full shadow-[4px_4px_0px_#fdf2f8] group-hover:shadow-none group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-300">
            <span className="text-2xl md:text-3xl text-pink-400 flex items-center gap-2">
              <span className="animate-pulse">⋆</span> resume <span className="animate-pulse">⋆</span>
            </span>
          </div>
        </div>
      </a>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl text-pink-400 leading-none">
            MY QUESTS
            </h2>
          <div className="text-pink-300 text-3xl md:text-4xl mt-2 tracking-widest">
            ₊ ⊹ ₊ ⊹ ₊ ⊹ ₊ ⊹ ₊ ⊹ ₊ ⊹
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div 
              key={index} 
              className="relative bg-white/90 backdrop-blur-sm border-4 border-pink-200 p-8 rounded-[40px] shadow-[8px_8px_0px_#fdf2f8] flex flex-col justify-between">
              {project.inProgress && (
                <div className="absolute -top-4 -right-2 bg-pink-400 text-white text-lg px-4 py-1 rounded-full shadow-md animate-pulse z-10 rotate-3 border-2 border-white">
                  QUEST IN-PROGRESS... ₊ ⊹
                </div>
              )}

              <div>
                <span className="text-pink-300 text-xl uppercase tracking-widest italic">⊹ {project.role} ⊹</span>
                <h3 className="text-4xl text-pink-500 mb-2 leading-tight">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-pink-400 text-lg border-b border-pink-200">#{tag}</span>
                  ))}
                </div>
                <p className="text-2xl text-gray-500 mb-6 leading-tight">{project.description}</p>
              </div>

              <button 
                onClick={() => setSelectedProject(project)}
                className="w-full py-2 bg-pink-100 text-pink-500 text-2xl rounded-full border-2 border-pink-200 hover:bg-pink-400 hover:text-white transition-all active:scale-95"
              >
                {project.inProgress ? "VIEW PROGRESS ↻" : "VIEW LOG ₊ ⊹"}
              </button>
            </div>
          ))}
        </div>
      </div>


      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-pink-100/40 backdrop-blur-md">
          <div className="bg-white border-[6px] border-pink-300 p-8 rounded-[50px] max-w-lg w-full shadow-2xl relative animate-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-8 text-pink-400 text-4xl hover:scale-110 transition-transform">
              ✕
            </button>
            
            <span className="text-pink-300 text-2xl uppercase tracking-tighter italic">
                {selectedProject.inProgress ? "₊ ⊹ Active Quest ⊹ ₊" : "₊ ⊹ Quest Details ⊹ ₊"}
            </span>
            <h3 className="text-5xl text-pink-500 mb-2">{selectedProject.title}</h3>
            
            {selectedProject.inProgress && (
              <p className="text-pink-400 text-xl mb-4 italic leading-none animate-pulse">
                * Leveling up! This project is under development.
              </p>
            )}

            <p className="text-2xl text-gray-600 mb-8 leading-snug">
              {selectedProject.details}
            </p>

            <div className="flex flex-col gap-3">
                
                {selectedProject.github && (
                    selectedProject.github !== '#' ? (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-pink-50 border-2 border-pink-200 px-6 py-3 rounded-2xl text-2xl text-pink-500 hover:bg-pink-400 hover:text-white transition-all">
                        GITHUB REPO <span>→</span>
                    </a>
                    ) : (
                    <div className="flex items-center justify-between bg-gray-50 border-2 border-gray-200 px-6 py-3 rounded-2xl text-2xl text-gray-400 cursor-not-allowed opacity-70">
                        GITHUB: UPON REQUEST <span>☁︎</span>
                    </div>
                    )
                )}


                {selectedProject.drive && (
                    selectedProject.drive !== '#' ? (
                    <a href={selectedProject.drive} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-pink-50 border-2 border-pink-200 px-6 py-3 rounded-2xl text-2xl text-pink-500 hover:bg-pink-400 hover:text-white transition-all">
                        PROJECT DOCS <span>→</span>
                    </a>
                    ) : (
                    <div className="flex items-center justify-between bg-gray-50 border-2 border-gray-200 px-6 py-3 rounded-2xl text-2xl text-gray-400 cursor-not-allowed opacity-70">
                        DOCS: UPON REQUEST <span>☁︎</span>
                    </div>
                    )
                )}


                {selectedProject.additionalLinks?.map((link, i) => (
                    link.url !== '#' ? (
                    <a key={i} href={link.url} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-pink-50 border-2 border-pink-200 px-6 py-3 rounded-2xl text-2xl text-pink-500 hover:bg-pink-400 hover:text-white transition-all">
                        {link.label} <span>→</span>
                    </a>
                    ) : (
                    <div key={i} className="flex items-center justify-between bg-gray-50 border-2 border-gray-200 px-6 py-3 rounded-2xl text-2xl text-gray-400 cursor-not-allowed opacity-70">
                        {link.label}: UPON REQUEST <span>☁︎</span>
                    </div>
                    )
                ))}

                
                {!selectedProject.github && !selectedProject.drive && (!selectedProject.additionalLinks || selectedProject.additionalLinks.length === 0) && (
                    <p className="text-pink-300 italic text-xl text-center mt-2">
                    {selectedProject.customMessage || "⊹ Documentation available upon request ⊹"}
                    </p>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;