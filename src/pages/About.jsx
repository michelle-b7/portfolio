import michelle_photo from '../assets/michelle_flower.jpg';


const About = () => {
  return (
    <div className="w-full py-12 px-4 sm:px-8 md:px-12 flex justify-center">
      {/* Card */}
      <div className="max-w-6xl w-full bg-white/80 backdrop-blur-md rounded-50px border-4 border-pink-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-xl overflow-hidden">
        
        {/* left */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="w-56 h-56 sm:w-72 sm:h-72 bg-pink-50 rounded-40px border-4px border-pink-300 overflow-hidden shadow-md">
              <img src={michelle_photo} alt="Michelle Bai" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-2 bg-pink-400 text-white  text-xl px-4 py-1 rounded-full rotate-3 shadow-md whitespace-nowrap">
              ₊ ⊹ UCLA 2027 ₊ ⊹
              </div>
          </div>

          <div className="w-full max-w-sm bg-white p-6 rounded-30px border-2 border-pink-100  shadow-sm">
            <h3 className="text-pink-400 text-3xl text-center uppercase mb-1">
                Personalized Stats
                </h3>
            <div className="text-pink-200 text-center text-xl mb-4 leading-none">
                ₊ ⊹ ━━━━━━━━━━━━ ⊹ ₊
                </div>
            <div className="space-y-4">
              {[
                { label: "Frontend Inventory", val: "92%" },
                { label: "Logic & Spells", val: "85%" },
                { label: "AI & Psychic Reading", val: "78%" },
                { label: "Aesthetics & Wardrobe", val: "82%" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between text-xl text-pink-400">
                    <span>{stat.label}</span>
                    <span>{stat.val}</span>
                  </div>
                  <div className="w-full bg-pink-50 h-2 rounded-full mt-1 border border-pink-50 overflow-hidden">
                    <div className="bg-pink-300 h-full rounded-full" style={{ width: stat.val }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="inline-block">
            <h2 className="text-6xl md:text-8xl  text-pink-400/70 leading-none">
                {"I'M"} <span className="text-pink-400">MICHELLE</span>!
            </h2>
            <div className="text-pink-300 text-2xl lg:text-3xl leading-none mt-2 flex justify-center md:justify-start">₊ ⊹ ₊ ⊹ ₊ ⊹ ₊ ⊹</div>
          </div>
          
          <div className=" text-xl md:text-2xl text-gray-500 leading-snug space-y-4">
            <p>
              {"I'm a Computer Science Major at UCLA Samueli with a focus on Data Science and Tech Management. I love transforming ideas into tangible & interactive experiences via React!"}
            </p>
            <p>
              {"In my free time, I love to travel, try new foods, karaoke, snowboard, and capture some sick shots on my Nikon or Dji :) "}
            </p>
            <p>
              Recent quests: UI/UX at ZEKI and PM at ACM Cloud. I have been so fortunate to have had these opportunities to level up my coding and skills and progress my career.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {['SWE Intern', 'PM @ ACM', 'UCLA Engineer', 'AI Explorer'].map((tag) => (
              <span key={tag} className="bg-pink-50 text-pink-400  text-lg px-4 py-1 rounded-full border border-pink-200">⊹ {tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;