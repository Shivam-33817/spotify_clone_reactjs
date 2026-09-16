import Button from "../component/Button"
import Navbar from "../component/navbar"
import Footer from "../component/Footer"

function Home() {
    return (
        <>
            <Navbar />



            <div className="flex w-full gap-4 p-6 bg-gray-900"> ?


                {/* Box 1 (Pehle wala box) */}
                <div className="bg-black border w-1/2 p-6 h-170 w-110">
                    <div className="flex items-center justify-between mt-10 px-4">
                        <span className="text-white font-bold text-xl">
                            Your library
                        </span>
                        <button className="inline-flex items-center gap-2 rounded-full bg-[#1ED760] px-6 py-3 text-sm font-bold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1db954] active:scale-95">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Create
                        </button>
                    </div> <br />
                      {/* container of 2 small box */}
                        <div className="flex flex-col gap-4">
                            <div className="h-40 w-90 bg-gray-900">
   <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-s font-bold text-black shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1db954] active:scale-95">
                            
                            Create Playlist
                        </button>


                            </div>
                            <div className="bg-gray-900 h-40 w-90">



                            </div>

                        </div>
                </div>
                {/* yaha end hai phela wala */}

                {/* Box 2  */}
                <div className="bg-black border w-1/2 p-6 h-170 w-300">
                    <span className="text-white font-bold hover:underline" >Trending Song</span>
                    <span className="text-white ml-200  hover:underline">Show All</span>

                </div>
            </div>



            <Footer />
        </>
    )
}

export default Home