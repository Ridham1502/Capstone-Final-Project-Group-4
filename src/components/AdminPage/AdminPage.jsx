import React from 'react';

export default function AdminPage() {
  return (
    <div className="bg-light min-vh-100">
      <div className="container py-5">
        
        {/* Welcome Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h1 className="h4 text-dark font-weight-bold">Welcome back Luca!</h1>
              <p className="text-secondary">Create events and publish in one go.</p>
            </div>
            <div className="bg-secondary rounded-lg" style={{ width: '8rem', height: '8rem' }}></div>
          </div>
          <button className="btn btn-primary">Add event</button>
        </div>
        
        {/* Main Image Section */}
        <div className="bg-secondary rounded-lg mb-4" style={{ height: '16rem' }}></div>
        
        {/* Published Events Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <h2 className="h5 text-dark font-weight-bold mb-3">Published Events</h2>
          <div className="d-flex justify-content-between">
            {/* Event Card */}
            {['Movie', 'Movie', 'Movie', 'Sport'].map((type, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm flex-grow-1 mx-2">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="bg-light px-2 py-1 rounded-pill text-muted small">{type}</span>
                </div>
                <div className="bg-light rounded-lg mb-3" style={{ height: '8rem' }}></div>
                <h3 className="h6 font-weight-bold mb-2">Sed ut perspiciatis</h3>
                <p className="text-secondary mb-3">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                <button className="btn btn-outline-secondary btn-sm">Remove event</button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <p className="text-secondary mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="btn btn-primary">Contact Manager</button>
        </div>
      </div>
    </div>
  );
}
