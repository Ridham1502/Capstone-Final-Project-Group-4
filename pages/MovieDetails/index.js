import React from 'react';

export default function MovieDetails() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto p-8">
      <p className='text-black'>Movies &gt; <b>Movie Details</b></p>
        {/* Movie Details Section */}
        <div className="bg-white p-8 rounded-lg shadow-md flex space-x-8 mb-8">
          <div className="w-1/2">
            <div className="bg-gray-200 h-64 rounded-lg"></div>
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-4">Movie Name</h1>
            <p className="text-gray-700 mb-6">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600">
              Book Tickets
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="flex space-x-4 mb-8">
          <button className="bg-gray-400 px-4 py-2 rounded-lg shadow-md">Filters</button>
          <button className="bg-gray-400 px-4 py-2 rounded-lg shadow-md">English</button>
          <button className="bg-gray-400 px-4 py-2 rounded-lg shadow-md">Telugu</button>
          <button className="bg-gray-400 px-4 py-2 rounded-lg shadow-md">Hindi</button>
          <button className="bg-gray-400 px-4 py-2 rounded-lg shadow-md">Punjabi</button>
          <button className="bg-gray-400 px-4 py-2 rounded-lg shadow-md">French</button>
          <button className="bg-gray-400 px-4 py-2 rounded-lg shadow-md">French</button>
        </div>

        {/* Cast and Crew Details Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-black text-xl font-bold mb-4">Cast and Crew Details</h2>
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 h-24 w-24 rounded-full mb-4"></div>
              <h3 className="text-lg font-semibold">Sed ut perspiciatis</h3>
              <p className="text-gray-700 text-center mb-4">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Learn More
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 h-24 w-24 rounded-full mb-4"></div>
              <h3 className="text-lg font-semibold">Lorem ipsum dolor</h3>
              <p className="text-gray-700 text-center mb-4">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-black text-xl font-bold mb-4">Reviews</h2>
          <div className="flex space-x-8">
            <div className="w-1/2">
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center">
                <div className="bg-gray-200 h-12 w-12 rounded-full mr-4"></div>
                <p className="text-gray-800 font-semibold">Nemo enim</p>
              </div>
            </div>
            <div className="w-1/2 bg-gray-200 h-32 rounded-lg"></div>
          </div>
        </div>

        {/* You might also like Section */}
        <div>
          <h2 className="text-xl text-black font-bold mb-4">You might also like</h2>
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-gray-200 h-32 w-full rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold">Sed ut perspiciatis</h3>
              <p className="text-gray-700 text-center">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-gray-200 h-32 w-full rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold">Sed ut perspiciatis</h3>
              <p className="text-gray-700 text-center">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-gray-200 h-32 w-full rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold">Sed ut perspiciatis</h3>
              <p className="text-gray-700 text-center">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-gray-200 h-32 w-full rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold">Sed ut perspiciatis</h3>
              <p className="text-gray-700 text-center">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="bg-gray-200 h-32 w-full rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold">Sed ut perspiciatis</h3>
              <p className="text-gray-700 text-center">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
