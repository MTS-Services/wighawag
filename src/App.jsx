import { useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import "./App.css";

function App() {
  const [on, setOn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <section
        className="
    min-h-[100vh]
    flex
    flex-col
    justify-between
    pt-5
    px-[10px]
    md:px-[20px]
    lg:px-[100px]
    bg-[url(/imgi_1_bg2.png)]
    bg-cover
    bg-no-repeat
    bg-center
    w-full
  "
      >
        <header className="w-full relative z-50">
          <div className="h-16 flex items-center justify-between gap-3">
            <div className="flex items-center gap-7">
              <div className="flex gap-3">
                <img
                  className="w-10 cursor-pointer"
                  src="/imgi_2_9.png"
                  alt="Conquest.eth"
                />
                <span className="text-xl font-bold text-white cursor-pointer">
                  Conquest.eth
                </span>
              </div>

              <span className="hidden md:flex text-white cursor-pointer items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/15">
                <IoSearchSharp />
                <span>Search</span>
                <span className="px-2 py-0.5 rounded text-[12px] text-white/80 ring-1 ring-white/20">
                  Ctrl K
                </span>
              </span>
            </div>

            <div className="hidden lg:flex gap-5 items-center">
              <a
                className="text-[#fdff36] cursor-pointer hover:text-[#fdff36]/90"
                href="#"
              >
                Home
              </a>
              <a
                className="text-white/90 cursor-pointer hover:text-white"
                href="#"
              >
                Develop
              </a>
              <a
                className="text-white/90 cursor-pointer hover:text-white"
                href="#"
              >
                Press
              </a>

              <button
                type="button"
                onClick={() => setOn(!on)}
                className={[
                  "relative inline-flex items-center h-7 w-14 rounded-full transition-colors duration-300",
                  "bg-transparent ring-1 ring-white/40", 
                ].join(" ")}
                aria-label="Theme switch (UI only)"
              >
                <span
                  className={[
                    "absolute top-1 left-1 h-5 w-5 rounded-full transition-transform duration-300 ease-out",
                    "bg-white/20 ring-1 ring-white/40 shadow-[0_0_6px_rgba(255,255,255,0.4)]",
                    on ? "translate-x-7" : "translate-x-0",
                  ].join(" ")}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="absolute inset-0 m-auto h-3.5 w-3.5"
                    aria-hidden
                  >
                    <path
                      d="M12.5 3.5c-4.9 0-8.9 4-8.9 8.9 0 4.1 2.8 7.6 6.6 8.6 2 .6 4.4.4 6.3-.6-3.6-.2-6.5-3.1-6.5-6.8 0-3.2 2.2-5.9 5.2-6.6-0.8-0.3-1.7-0.5-2.7-0.5z"
                      fill="none"
                      stroke="rgba(255,255,255,0.7)" 
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <FaGithub className="text-white/90 cursor-pointer hover:text-white text-2xl" />
              <FaDiscord className="text-white/90 cursor-pointer hover:text-white text-2xl" />
              <FaTwitter className="text-white/90 cursor-pointer hover:text-white text-2xl" />
            </div>

            <div className="flex lg:hidden items-center gap-3">
              <button
                className="md:hidden p-2 rounded-full ring-1 ring-white/15 text-white/90 hover:bg-white/10"
                aria-label="Search"
              >
                <IoSearchSharp />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md ring-1 ring-white/15 text-white/90 hover:bg-white/10"
                aria-label="Open menu"
              >
                <span className="block w-5 h-0.5 bg-white mb-1"></span>
                <span className="block w-5 h-0.5 bg-white mb-1"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-[1px] z-40"
              onClick={() => setMenuOpen(false)}
            />
          )}

          <div
            className={[
              "absolute top-16 left-0 right-0 z-50 lg:hidden transition-all duration-200",
              menuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none",
            ].join(" ")}
          >
            <nav
              className="
        w-full
        px-[10px] md:px-[20px] lg:px-[100px]   /* section-এর padding match */
        py-4
        bg-[rgba(22,27,44,0.95)]
        ring-1 ring-white/10
        backdrop-blur-md
        shadow-xl
        flex flex-col gap-3
      "
            >
              <a
                className="block px-2 py-2 rounded hover:bg-white/10 text-[#fdff36]"
                href="#"
              >
                Home
              </a>
              <a
                className="block px-2 py-2 rounded hover:bg-white/10 text-white/90"
                href="#"
              >
                Develop
              </a>
              <a
                className="block px-2 py-2 rounded hover:bg-white/10 text-white/90"
                href="#"
              >
                Press
              </a>

              <div className="my-2 h-px bg-white/10" />

              <div className="flex items-center justify-between px-1 py-1.5">
                <span className="text-white/80">Theme</span>
                <button
                  type="button"
                  onClick={() => setOn(!on)}
                  className={[
                    "relative inline-flex items-center h-7 w-14 rounded-full transition-colors duration-300",
                    "bg-transparent ring-1 ring-white/40", 
                  ].join(" ")}
                  aria-label="Theme switch (UI only)"
                >
                  <span
                    className={[
                      "absolute top-1 left-1 h-5 w-5 rounded-full transition-transform duration-300 ease-out",
                      "bg-white/20 ring-1 ring-white/40 shadow-[0_0_6px_rgba(255,255,255,0.4)]",
                      on ? "translate-x-7" : "translate-x-0",
                    ].join(" ")}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="absolute inset-0 m-auto h-3.5 w-3.5"
                      aria-hidden
                    >
                      <path
                        d="M12.5 3.5c-4.9 0-8.9 4-8.9 8.9 0 4.1 2.8 7.6 6.6 8.6 2 .6 4.4.4 6.3-.6-3.6-.2-6.5-3.1-6.5-6.8 0-3.2 2.2-5.9 5.2-6.6-0.8-0.3-1.7-0.5-2.7-0.5z"
                        fill="none"
                        stroke="rgba(255,255,255,0.7)" 
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
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
        <div>
          <p className="font-[Anta] text-center leading-6 text-base md:text-xl uppercase tracking-widest  text-[#8ceaea] drop-shadow-lg py-5">
            Rise as the greatest galactic commander of the universe. Build your
            own legacy among the stars
          </p>
          <div className="flex justify-center">
            <img className="w-full lg:w-1/2" src="/imgi_3_logo.png" />
          </div>
        </div>
        <div className="grid grid-cols-2 2xl:hidden lg:grid-cols-4 md:grid-cols-4 gap-0.5 py-5">
           <div className="flex py-2 flex-col justify-center items-center">
             <img className="w-full" src="/imgi_4_1.png" />
            
            <p className="text-3d-gold text-center font-[Russo_One] uppercase
               text-xl
               tracking-wide">
              AVATAR<br></br>COMMANDERS
            </p>
          </div>
          <div className="flex py-2 flex-col justify-center items-center">
            <img className="w-full" src="/imgi_5_2.png" />
           
            <p className="text-3d-gold text-center font-[Russo_One] uppercase
               text-xl
               tracking-wide">
              PLAYER<br></br>ALLIANCES
            </p>
          </div>
          <div className="flex py-2 flex-col justify-center items-center">
            <img className="w-full" src="/imgi_6_3.png" />
            
            <p className="text-3d-gold text-center font-[Russo_One] uppercase
               text-xl
               tracking-wide">
              PERSISTENT<br></br>BATTLES
            </p>
          </div>
          <div className="flex py-2 flex-col justify-center items-center">
            <img className="w-full" src="/imgi_7_4.png" />
            <p className="text-3d-gold text-center font-[Russo_One] uppercase
               text-xl
               tracking-wide">
              STRATEGIC<br></br>DECISIONS
            </p>
          </div>
        </div>
        <div className="h-[50vh] lg:h-[63vh]">
          <div className="flex h-full md:items-end">
            <div className="w-full hidden xl:w-2/3 2xl:flex flex-col justify-between pt-8">
              <div className="hidden lg:grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-2 pb-8">
                 <div className="flex flex-col justify-center items-center">
                
                   <img className="w-11/12" src="/imgi_4_1.png" />
                  <p className="text-3d-gold text-center font-[Russo_One] uppercase
               text-2xl
               tracking-wide">
                    AVATAR<br></br>COMMANDERS
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                 
                    <img className="w-11/12" src="/imgi_5_2.png" />
                  <p className="text-3d-gold text-center font-[Russo_One] uppercase
               text-2xl
               tracking-wide">
                    PLAYER<br></br>ALLIANCES
                  </p>
                </div>
               
                <div className="flex flex-col justify-center items-center">
                 
                    <img className="w-11/12" src="/imgi_6_3.png" />
                  <p className="text-3d-gold text-center font-[Russo_One] uppercase
               text-2xl
               tracking-wide">
                    PERSISTENT<br></br>BATTLES
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                 <img className="w-11/12" src="/imgi_7_4.png" />
                  <p className="text-3d-gold text-center font-[Russo_One] uppercase
               text-2xl
               tracking-wide">
                    STRATEGIC<br></br>DECISIONS
                  </p>
                </div>
              </div>
              <div className="flex justify-end pb-5">
                <div className="flex items-center justify-end flex-col w-4/5 -mr-50 z-10">
                  <img src="/imgi_16_5.png" />
                  <button className="-mt-27 bg-[url(/imgi_9_6.png)] w-2/5 h-32 bg-contain bg-no-repeat bg-center hover:scale-110 transition duration-300 ease-in-out transform cursor-pointer"></button>
                </div>
              </div>
            </div>
            <div className="w-full  flex items-end justify-center 2xl:w-1/3  bg-[url(/imgi_8_7.png)] bg-contain bg-no-repeat bg-bottom h-full">
              <div className="flex 2xl:hidden items-center justify-center flex-col w-full z-10">
                <img src="/imgi_16_5.png" />
                <button className="bg-[url(/imgi_9_6.png)] -mt-20 md:-mt-30 lg:-bottom-5 w-4/10 h-[15vh] bg-contain bg-no-repeat bg-center hover:scale-110 transition duration-300 ease-in-out transform cursor-pointer"></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
