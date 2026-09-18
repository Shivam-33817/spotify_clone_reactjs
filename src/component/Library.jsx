import React from 'react'

function Library() {
  return (
    <div className="bg-black border w-1/2 p-6 h-170 w-110  ">
          <div className="flex items-center justify-between mt-2 px-4">
            <span className="text-white font-bold text-xl">Your library</span>
            <button className="inline-flex items-center gap-2 rounded-full bg-white  px-6 py-3 text-sm font-bold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1db954] active:scale-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              Create
            </button>
          </div>{" "}
          <br />
          {/* container of 2 small box */}
          <div className="flex flex-col gap-4">
            <div className="h-40 w-90 bg-gray-900">
              <p className="font-bold text-white p-3">
                create your first playlist
              </p>
              <p className="font-bold text-white p-3">
                It's easy we'll help you
              </p>
              <button className="inline-flex items-center gap-1 rounded-full bottom-left-4  bg-white px-2 py-2 text-xs font-bold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1db954] active:scale-95 mt-1   ml-4">
                Create Playlist
              </button>
            </div>
            <div className="bg-gray-900 h-40 w-90">
              <p className="font-bold text-white p-3">
                let's find some podcast
              </p>
              <p className="font-bold text-white p-3">
                we'll keep updateon new episodes
              </p>
              <a href="https://open.spotify.com/genre/podcasts-web">
                <button className="inline-flex items-center gap-1 rounded-full bottom-left-4  bg-white px-2 py-2 text-xs font-bold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1db954] active:scale-95 mt-1   ml-4">
                  Browse podcast
                </button>{" "}
              </a>
            </div>
          </div>
          <br />
          <div className="flex flex-row gap-8 ">
            <a href="#" className="text-gray-400 text-xs font-bold">
              {" "}
              legal
            </a>
            <a href="#" className="text-gray-400 text-xs font-bold">
              {" "}
              safety & privacy center
            </a>
            <a href="#" className="text-gray-400 text-xs font-bold">
              {" "}
              Privacyl
            </a>{" "}
          </div>{" "}
          <br />
          <div className="flex flex-row gap-8">
            <a href="#" className="text-gray-400 text-xs font-bold">
              {" "}
              cookies
            </a>
            <a href="#" className="text-gray-400 text-xs font-bold">
              About ads
            </a>
            <a href="#" className="text-gray-400 text-xs font-bold">
              {" "}
              Asccessiblity
            </a>{" "}
          </div>{" "}
          <br />
          <a href="#" className="text-gray-400 text-xs font-bold">
            {" "}
            cookies
          </a>{" "}
          <br /> <br />
          <br />
          <button className="inline-flex items-center gap-2 rounded-full   px-2 py-2 text-sm font-bold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1db954] active:scale-95 text-white  bg-black border border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-globe"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            English
          </button>
        </div>
  )
}

export default Library