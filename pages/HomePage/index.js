import React from 'react';

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-8">
        
        {/* Welcome Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl text-black font-bold">Welcome back Luca!</h1>
              <p className="text-gray-700">Create events and publish in one go.</p>
            </div>
            <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
          </div>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600">Add event</button>
        </div>
        
        {/* Main Image Section */}
        <div className="bg-gray-200 h-64 rounded-lg mb-8"></div>
        
        {/* Published Events Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-xl text-black font-bold mb-4">Published Events</h2>
          <div className="flex space-x-4">
            {/* Event Card */}
            {['Movie', 'Movie', 'Movie', 'Sport'].map((type, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md w-1/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">{type}</span>
                </div>
                <div className="bg-gray-200 h-32 rounded-lg mb-4"></div>
                <h3 className="text-lg font-semibold mb-2">Sed ut perspiciatis</h3>
                <p className="text-gray-700 mb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400">Remove event</button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Contact Manager</button>
        </div>
      </div>
    </div>
  );
}
