import React from 'react';

// 1. Mock Data: Array of trending songs
const TRENDING_SONGS = [
  {
    id: 'track_1',
    title: 'Hopeless',
    artist: 'Amanrajgill',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5qtBAdzwRa_x_m2H-QdXoWtKD-YUwwwswAt1qcV-yQ&s=10',
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
    title: 'Dhurunder Revenge ',
    artist: 'B prank',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj6SaB-BGwaJJpmL9ugi81ZAmNCQjUBl8Lg2KpHa-IDw&s=10',
    rank: 3
  },
  {
    id: 'track_4',
    title: 'Chawal',
    artist: 'sumit parta',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfxBEt4pssNGa7lzoE9wD5eoMm4wPnaOTBYzdqNeCbw&s=10',
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
    title: 'Dhurunder',
    artist: 'Ranveer singh',
    albumCover: 'https://images.genius.com/09ee47515009ff843932eb27b81b3e6f.1000x1000x1.png',
    rank: 2
  },
  {
    id: 'track_3',
    title: 'Deva Deva',
    artist: 'Ranvir Kapoor',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UiLngw6BypllIrQZG2xVeyN0Sq68kT8QYjeo4PDBvg&s=10',
    rank: 3
  },
  {
    id: 'track_4',
    title: 'Maruti',
    artist: 'Dhanda Noyoliwala',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvGrG79u9PUnMQGxwbDlcpC2wdfW3zglvJTSZ3O_8VQ&s',
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
      
        <div className="relative aspect-square w-full mb-4 rounded-md overflow-hidden shadow-2xl">
          <img 
            src={song?.albumCover}  
            alt={song?.title}
            width={300}
            height={300}
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
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
