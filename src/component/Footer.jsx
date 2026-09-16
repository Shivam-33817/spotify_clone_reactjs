import React from 'react';

 function Footer() {
  return (
    <footer className="bg-black text-neutral-400 font-sans px-6 md:px-16 py-12">
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
        
        
        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white hover:underline">About</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:text-white hover:underline">For the Record</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-white font-bold mb-4">Communities</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white hover:underline">For Artists</a></li>
            <li><a href="#" className="hover:text-white hover:underline">For Creators</a></li>
            <li><a href="#" className="hover:text-white hover:underline">For Authors</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Developers</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Advertising</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Investors</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Vendors</a></li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-white font-bold mb-4">Useful links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white hover:underline">Support</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Free Mobile App</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Popular by Country</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Top Song Lyrics</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Import your music</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-white font-bold mb-4">Spotify Plans</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white hover:underline">Premium Standard</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Premium Platinum</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Premium Student</a></li>
            <li><a href="#" className="hover:text-white hover:underline">Spotify Free</a></li>
          </ul>
        </div>

        
        <div className="flex gap-4 items-start col-span-2 md:col-span-4 lg:col-span-1">
        {/* //add social media icon after the project */}
        </div>

      </div>

    
      <hr className="border-neutral-800 my-8" />


      <div className="flex justify-between items-center text-xs text-neutral-500">
        <p>© shivam shrma</p>
      </div>
    </footer>
  );
}
export default Footer