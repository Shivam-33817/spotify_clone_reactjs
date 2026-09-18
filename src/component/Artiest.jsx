import React from 'react';

// 1. Mock Data: Array of trending songs
const Artiest_section = [
  {
    id: 'track_1',
    title: 'Masoom sharma',
    artist: 'Artist',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlW7_NczzcElt4Uf28K_AY8WpDJQRnQ_mYhj0z8dtfug&s=10',
    rank: 1
  },
  {
    id: 'track_2',
    title: 'Amanrajgill',
    artist: 'Artist',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL7MxjqPj_B4YXxmK15DHWllb5Ban9c_pXpk0IHnoUA&s=10',
    rank: 2
  },
  {
    id: 'track_3',
    title: 'vijay verma',
    artist: 'Artist',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROK1Z6SP7RKlHb0EzIEmi1yPAFQMsvinRtD8RfER1Aw&s=10',
    rank: 3
  },
  {
    id: 'track_4',
    title: 'Arjit singh',
    artist: 'Artist',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwoKGLall3QkLVvyKYae_Gy903JC0tNen1JYUCFHLIsg&s=10',
    rank: 4
  },

  {
    id: 'track_4',
    title: 'Hanuman',
    artist: 'Artist',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8mko8S4CkfVA8mOWIt0TE-dBc2DuWdlOM6wwhGJPOA&s=10',
    rank: 4
  },
    {
    id: 'track_2',
    title: 'modern talking',
    artist: 'Artist',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6zKo-YI3Awo3p0i1t_04IjNcFNZQ8CpnUMKOROb4Aw&s=10',
    rank: 2
  },
  {
    id: 'track_3',
    title: 'Dhanda Noyoliwala',
    artist: 'Artist',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6yBvsBMiGKJ4htbYGD6PInPOJDGezyGes1COGlkjOw&s=10',
    rank: 3
  },
  {
    id: 'track_4',
    title: 'Ram ',
    artist: 'Artist',
    albumCover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8mko8S4CkfVA8mOWIt0TE-dBc2DuWdlOM6wwhGJPOA&s=10',
    rank: 4
  },

  
];

function Artiest() {
  return (
    // Outer Spotify dark background container
    <div className=" bg-[#121212] text-white p-6 h-50 font-sans">
      
      <div className="flex flex-col">
  <div className="flex overflow-x-auto w-full gap-4 pb-4 overscroll-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
    {Artiest_section.map((song) => (
      <div
        key={song.id} 
        className="bg-[#181818] p-4 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#282828] group flex-shrink-0 w-[180px] sm:w-[200px]"
      >
      
        <div className="relative aspect-square w-29 mb-4 rounded-full overflow-hidden shadow-2xl ml-6">
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

export default Artiest;
