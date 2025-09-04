


import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import "./App.css";

function App() {
  const [on, setOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Helper for conditional classes to make JSX cleaner
  const themeToggleClasses = `
    absolute top-1 left-1 h-5 w-5 rounded-full 
    transition-transform duration-300 ease-out
    bg-white/20 ring-1 ring-white/40 shadow-[0_0_6px_rgba(255,255,255,0.4)]
    ${on ? "translate-x-7" : "translate-x-0"}
  `;

  const mobileMenuClasses = `
    absolute top-16 left-0 right-0 z-50 lg:hidden 
    transition-all duration-200
    ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
  `;


  return (
    <>
      <section className="min-h-screen w-full flex flex-col justify-between pt-5  md:px-8 lg:px-24 bg-[url(/imgi_1_bg2.png)] bg-cover bg-no-repeat bg-center">
        {/* ================================================================== */}
        {/* ========================== HEADER ================================ */}
        {/* ================================================================== */}
        <header className="w-full relative z-50">
          <div className="h-16 flex items-center justify-between gap-3">
            <div className="flex items-center gap-7">
              <div className="flex gap-3 items-center">
                <img className="w-10 cursor-pointer" src="/imgi_2_9.png" alt="Conquest.eth Logo" />
                <span className="text-xl font-bold text-white cursor-pointer">Conquest.eth</span>
              </div>
              <span className="hidden md:flex text-white items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15">
                <IoSearchSharp />
                <span>Search</span>
                <span className="px-2 py-0.5 rounded text-xs text-white/80 ring-1 ring-white/20">Ctrl K</span>
              </span>
            </div>
            <div className="hidden lg:flex gap-5 items-center">
              <a href="#" className="text-[#fdff36] hover:text-[#fdff36]/90">Home</a>
              <a href="#" className="text-white/90 hover:text-white">Develop</a>
              <a href="#" className="text-white/90 hover:text-white">Press</a>
              <button type="button" onClick={() => setOn(!on)} className="relative inline-flex items-center h-7 w-14 rounded-full bg-transparent ring-1 ring-white/40" aria-label="Theme switch">
                <span className={themeToggleClasses}>
                  <svg viewBox="0 0 24 24" className="absolute inset-0 m-auto h-3.5 w-3.5" aria-hidden><path d="M12.5 3.5c-4.9 0-8.9 4-8.9 8.9 0 4.1 2.8 7.6 6.6 8.6 2 .6 4.4.4 6.3-.6-3.6-.2-6.5-3.1-6.5-6.8 0-3.2 2.2-5.9 5.2-6.6-0.8-0.3-1.7-0.5-2.7-0.5z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </button>
              <FaGithub className="text-white/90 hover:text-white text-2xl" />
              <FaDiscord className="text-white/90 hover:text-white text-2xl" />
              <FaTwitter className="text-white/90 hover:text-white text-2xl" />
            </div>
            <div className="flex lg:hidden items-center gap-3">
              <button className="md:hidden p-2 rounded-full ring-1 ring-white/15 text-white/90" aria-label="Search"><IoSearchSharp /></button>
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-md ring-1 ring-white/15 text-white/90" aria-label="Open menu">
                <span className="block w-5 h-0.5 bg-white mb-1"></span><span className="block w-5 h-0.5 bg-white mb-1"></span><span className="block w-5 h-0.5 bg-white"></span>
              </button>
            </div>
          </div>
          {menuOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMenuOpen(false)} />}
          <div className={mobileMenuClasses}>
            <nav className="w-full px-4 py-4 bg-[rgba(22,27,44,0.95)] ring-1 ring-white/10 backdrop-blur-md shadow-xl flex flex-col gap-3">
              <a href="#" className="block px-2 py-2 rounded hover:bg-white/10 text-[#fdff36]">Home</a>
              <a href="#" className="block px-2 py-2 rounded hover:bg-white/10 text-white/90">Develop</a>
              <a href="#" className="block px-2 py-2 rounded hover:bg-white/10 text-white/90">Press</a>
              <div className="my-2 h-px bg-white/10" />
              <div className="flex items-center justify-between px-1 py-1.5">
                <span className="text-white/80">Theme</span>
                <button type="button" onClick={() => setOn(!on)} className="relative inline-flex items-center h-7 w-14 rounded-full bg-transparent ring-1 ring-white/40" aria-label="Theme switch">
                  <span className={themeToggleClasses}>
                    <svg viewBox="0 0 24 24" className="absolute inset-0 m-auto h-3.5 w-3.5" aria-hidden><path d="M12.5 3.5c-4.9 0-8.9 4-8.9 8.9 0 4.1 2.8 7.6 6.6 8.6 2 .6 4.4.4 6.3-.6-3.6-.2-6.5-3.1-6.5-6.8 0-3.2 2.2-5.9 5.2-6.6-0.8-0.3-1.7-0.5-2.7-0.5z" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </button>
              </div>
              <div className="my-2 h-px bg-white/10" />
              <div className="flex items-center gap-4 px-1 pt-1 text-2xl text-white/90">
                <FaGithub className="cursor-pointer hover:text-white" />
                <FaDiscord className="cursor-pointer hover:text-white" />
                <FaTwitter className="cursor-pointer hover:text-white" />
              </div>
            </nav>
          </div>
        </header>

        {/* ================================================================== */}
        {/* ======================== MAIN CONTENT ============================ */}
        {/* ================================================================== */}
        <div>
          <p className="font-[Anta] text-center uppercase tracking-widest text-[#8ceaea] drop-shadow-lg py-5 text-base md:text-xl">
            Rise as the greatest galactic commander of the universe. Build your own legacy among the stars
          </p>
          <div className="flex justify-center">
            <img className="w-full lg:w-3/4 2xl:w-1/2" src="/imgi_3_logo.png" alt="Conquest Game Logo" />
          </div>
        </div>

                <div className="hidden 2xl:hidden ">
          <p className="font-[Anta] text-center uppercase tracking-widest text-[#8ceaea] drop-shadow-lg py-5 text-base md:text-xl">
            Rise as the greatest galactic commander of the universe. Build your own legacy among the stars
          </p>
          <div className="flex justify-center">
            <img className="" src="/imgi_3_logo.png" alt="Conquest Game Logo" />
          </div>
        </div>

        {/* ================================================================== */}
        {/* ======================= LOWER SECTION ============================ */}
        {/* ================================================================== */}
        <div className="h-[90vh] lg:h-[63vh] 2xl:h-[63v] 3xl:h-[48vh]"> {/* <-- CHANGED: Added 3xl:h-[48vh] */}
          
          {/* Mobile & Tablet Design (< 1024px) */}
          <div className="flex md:hidden flex-col h-full"> {/* <-- This is now ONLY for mobile */}
            <div className="grid grid-cols-2 gap-1 py-5">
              <div className="flex flex-col items-center"><img className="w-full" src="/imgi_4_1.png" alt="Commanders"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">AVATAR<br/>COMMANDERS</p></div>
              <div className="flex flex-col items-center"><img className="w-full" src="/imgi_5_2.png" alt="Alliances"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">PLAYER<br/>ALLIANCES</p></div>
              <div className="flex flex-col items-center"><img className="w-full" src="/imgi_6_3.png" alt="Battles"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">PERSISTENT<br/>BATTLES</p></div>
              <div className="flex flex-col items-center"><img className="w-full" src="/imgi_7_4.png" alt="Decisions"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">STRATEGIC<br/>DECISIONS</p></div>
            </div>
            <div className="flex-grow w-full flex items-end justify-center bg-[url(/imgi_8_7.png)] bg-cover bg-no-repeat">
              <div className="flex flex-col items-center justify-center w-full z-10 pb-0">
                <img src="/imgi_16_5.png" alt="The Galaxy Awaits" className="w-4/5 -pb-0"/>
                {/* <button className="bg-[url(/imgi_9_6.png)] -mt-[120px] w-2/6 h-52  bg-contain bg-no-repeat bg-center hover:scale-110 transition-transform"></button> */}
                <button className="bg-[url(/imgi_9_6.png)] w-1/2 mb-10 -mt-9 h-10 bg-contain bg-no-repeat bg-center hover:scale-110 active:scale-110 transition-transform"></button>
              </div>
            </div>
          </div>

                    {/* ------------------------------------------------------------------ */}
          {/* ---------- NEW TABLET-ONLY DESIGN (768px to 1024px) -------------- */}
          {/* ------------------------------------------------------------------ */}
          <div className="hidden md:flex lg:hidden flex-col h-full"> {/* <-- CHANGED: This new block is ONLY for tablets */}
            <div className="grid grid-cols-4 gap-1 py-5">
              <div className="flex flex-col items-center"><img className="w-full" src="/imgi_4_1.png" alt="Commanders"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">AVATAR<br/>COMMANDERS</p></div>
              <div className="flex flex-col items-center"><img className="w-full" src="/imgi_5_2.png" alt="Alliances"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">PLAYER<br/>ALLIANCES</p></div>
              <div className="flex flex-col items-center"><img className="w-full" src="/imgi_6_3.png" alt="Battles"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">PERSISTENT<br/>BATTLES</p></div>
              <div className="flex flex-col items-center"><img className="w-full" src="/imgi_7_4.png" alt="Decisions"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">STRATEGIC<br/>DECISIONS</p></div>
            </div>
            <div className="flex-grow w-full flex items-end justify-center bg-[url(/imgi_8_7.png)] bg-cover bg-no-repeat ">
              <div className="flex flex-col items-center justify-center w-full z-10 pb-10">
                <img src="/imgi_16_5.png" alt="The Galaxy Awaits" className="w-3/5 pb-10"/>
                {/* <button className="bg-[url(/imgi_9_6.png)] -mt-42 w-2/6 h-[20vh] bg-contain bg-no-repeat bg-center hover:scale-110 transition-transform"></button> */}
                <button className="bg-[url(/imgi_9_6.png)] w-1/2 mb-10 -mt-24 h-16 bg-contain bg-no-repeat bg-center hover:scale-110 active:scale-110 transition-transform"></button>
              </div>
            </div>
          </div>
          
          {/* Laptop Design (1024px to 1536px) */}
          <div className="hidden lg:flex 2xl:hidden h-full items-end gap-6">
            <div className="w-1/2 flex flex-col justify-center h-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_4_1.png" alt="Commanders"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">AVATAR<br/>COMMANDERS</p></div>
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_5_2.png" alt="Alliances"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">PLAYER<br/>ALLIANCES</p></div>
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_6_3.png" alt="Battles"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">PERSISTENT<br/>BATTLES</p></div>
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_7_4.png" alt="Decisions"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-xl">STRATEGIC<br/>DECISIONS</p></div>
              </div>
            </div>
            <div className="w-1/2 h-full bg-[url(/imgi_8_7.png)] bg-contain bg-no-repeat bg-bottom flex flex-col items-center justify-end pb-5">
              <img src="/imgi_16_5.png" alt="The Galaxy Awaits" className="w-full"/>
              <button className="bg-[url(/imgi_9_6.png)] bg-contain bg-no-repeat bg-center w-2/5 h-32 -mt-20 lg:-mt-24 hover:scale-110 transition-transform"></button>
            </div>
          </div>

          {/* 1920px DESKTOP DESIGN (1536px to 2560px) */}
          <div className="hidden 2xl:flex 3xl:hidden h-full items-end">
            <div className="w-2/3 flex flex-col justify-end h-full pt-8 pb-5 gap-y-8">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_4_1.png" alt="Commanders"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-2xl">AVATAR<br/>COMMANDERS</p></div>
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_5_2.png" alt="Alliances"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-2xl">PLAYER<br/>ALLIANCES</p></div>
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_6_3.png" alt="Battles"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-2xl">PERSISTENT<br/>BATTLES</p></div>
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_7_4.png" alt="Decisions"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-2xl">STRATEGIC<br/>DECISIONS</p></div>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-col items-center w-3/5 -mr-20 z-10">
                  <img src="/imgi_16_5.png" alt="The Galaxy Awaits"/>
                  <button className="-mt-24 bg-[url(/imgi_9_6.png)] w-1/2 h-32 bg-contain bg-no-repeat bg-center hover:scale-110 transition-transform"></button>
                </div>
              </div>
            </div>
            <div className="w-1/3 h-full bg-[url(/imgi_8_7.png)] bg-contain bg-no-repeat bg-bottom"></div>
          </div>

          {/* 2560px DESKTOP DESIGN (2560px and wider) */}
          <div className="hidden 3xl:flex h-full items-end">
            <div className="w-3/4 flex flex-col justify-end h-full pt-8 pb-5 gap-y-8">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_4_1.png" alt="Commanders"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-2xl">AVATAR<br/>COMMANDERS</p></div>
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_5_2.png" alt="Alliances"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-2xl">PLAYER<br/>ALLIANCES</p></div>
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_6_3.png" alt="Battles"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-2xl">PERSISTENT<br/>BATTLES</p></div>
                <div className="flex flex-col items-center"><img className="w-11/12" src="/imgi_7_4.png" alt="Decisions"/><p className="text-3d-gold text-center font-[Russo_One] uppercase text-2xl">STRATEGIC<br/>DECISIONS</p></div>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-col items-center w-3/5 -mr-20 z-10">
                  <img src="/imgi_16_5.png" alt="The Galaxy Awaits"/>
                  <button className="-mt-16 bg-[url(/imgi_9_6.png)] w-1/2 h-32 bg-contain bg-no-repeat bg-center hover:scale-110 transition-transform"></button>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-full bg-[url(/imgi_8_7.png)] bg-contain bg-no-repeat bg-bottom"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;