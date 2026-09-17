import React from 'react';

// 1. Mock Data: Array of trending songs
const TRENDING_SONGS = [
  {
    id: 'track_1',
    title: 'Sita ram',
    artist: 'Baba neemkroli',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRA5bq4TdfUizTLJ3GvCjG3SWToAkiejU_fHjdj0POOQ&s=10',
    rank: 1
  },
  {
    id: 'track_2',
    title: 'Cherry cherry lady',
    artist: 'modern taking',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6zKo-YI3Awo3p0i1t_04IjNcFNZQ8CpnUMKOROb4Aw&s=10',
    rank: 2
  },
  {
    id: 'track_3',
    title: 'mirzapur',
    artist: 'mirzapur',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51OYqZ4Y65BL-nFFT-LbRrqq0eHgwgluwbvdIHjIghA&s=10',
    rank: 3
  },
  {
    id: 'track_4',
    title: 'Parvati',
    artist: 'Sandu  Tiwari',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8mko8S4CkfVA8mOWIt0TE-dBc2DuWdlOM6wwhGJPOA&s=10',
    rank: 4
  },

  {
    id: 'track_4',
    title: 'Parvati',
    artist: 'Sandu  Tiwari',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8mko8S4CkfVA8mOWIt0TE-dBc2DuWdlOM6wwhGJPOA&s=10',
    rank: 4
  },
    {
    id: 'track_2',
    title: 'Cherry cherry lady',
    artist: 'modern taking',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6zKo-YI3Awo3p0i1t_04IjNcFNZQ8CpnUMKOROb4Aw&s=10',
    rank: 2
  },
  {
    id: 'track_3',
    title: 'mirzapur',
    artist: 'mirzapur',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51OYqZ4Y65BL-nFFT-LbRrqq0eHgwgluwbvdIHjIghA&s=10',
    rank: 3
  },
  {
    id: 'track_4',
    title: 'Parvati',
    artist: 'Sandu  Tiwari',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8mko8S4CkfVA8mOWIt0TE-dBc2DuWdlOM6wwhGJPOA&s=10',
    rank: 4
  },

  {
    id: 'track_4',
    title: 'Parvati',
    artist: 'Sandu  Tiwari',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8mko8S4CkfVA8mOWIt0TE-dBc2DuWdlOM6wwhGJPOA&s=10',
    rank: 4
  }
];

function TrendingSection() {
  return (
    // Outer Spotify dark background container
    <div className=" bg-[#121212] text-white p-6 font-sans">
      
      


      
      <div className="flex flex-col">
  <div className="flex overflow-x-auto w-full gap-4 pb-4 overscroll-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    {TRENDING_SONGS.map((song) => (
      <div
        key={song.id} 
        className="bg-[#181818] p-4 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#282828] group flex-shrink-0 w-[180px] sm:w-[200px]"
      >
        {/* Image Wrapper (Maintains 1:1 square ratio) */}
        <div className="relative aspect-square w-full mb-4 rounded-md overflow-hidden shadow-2xl">
          <img 
            src={song?.albumCover}  
            alt={song?.title}
            width={300}
            height={300}
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>

        {/* Song Text Information */}
        <div className="min-h-[62px]">
          <h3 className="text-base font-bold mb-1 truncate group-hover:text-[#1db954] transition-colors">
            {song.title}
          </h3>
          <p className="text-sm text-[#b3b3b3] truncate">
            {song.artist}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default TrendingSection;
