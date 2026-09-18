import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import TrendingSection from "../component/Songd";
import Library from "../component/Library";
import Artiest from "../component/Artiest";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex w-full gap-4 p-6 bg-gray-900 " >
        {" "}
      
        <Library />
        <div className="bg-black border w-1/2 p-6 h-170 w-260">
          <span className="text-white font-bold hover:underline">
            Trending Song
          </span>
          <span className="text-white ml-200  hover:underline">Show All</span>

          <TrendingSection />
          <span className="font-bold  text-white hover:underline">Popular Artiest</span>
          <Artiest/>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
