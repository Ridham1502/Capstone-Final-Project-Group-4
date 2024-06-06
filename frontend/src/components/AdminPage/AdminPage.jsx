import React from 'react';
import './AdminPage.css';

export default function Adminpage() {
  const movies = [
    {
      sno: 1,
      image: 'path/to/image1.jpg',
      title: 'Movie Title 1',
      cast: 'Cast 1, Cast 2',
      description: 'This is the description for movie 1.',
      price: '$10'
    },
    {
      sno: 2,
      image: 'path/to/image2.jpg',
      title: 'Movie Title 2',
      cast: 'Cast 3, Cast 4',
      description: 'This is the description for movie 2.',
      price: '$12'
    }
    // Add more movies as needed
  ];

  return (
    <div className="background-gray min-height-screen">
      <div className="container">
        
        {/* Welcome Section */}
        <div className="card">
          <div className="flex justify-between align-center margin-bottom-large">
            <div>
              <h1 className="text-large text-black font-bold">Welcome back Luca!</h1>
              <p className="text-gray">Create events and publish in one go.</p>
            </div>
            <div className="image-placeholder"></div>
          </div>
          <button className="button button-purple">Add event</button>
        </div>
        
        {/* Main Image Section */}
        <div className="main-image-placeholder margin-bottom-large"></div>
        
        {/* Published Events Section */}
        <div className="card">
          <h2 className="text-medium text-black font-bold margin-bottom-medium">Published Events</h2>
          <div className="flex space-between-cards">
            {['Movie', 'Movie', 'Movie', 'Sport'].map((type, index) => (
              <div key={index} className="event-card">
                <div className="flex justify-between align-center margin-bottom-medium">
                  <span className="tag">{type}</span>
                </div>
                <div className="event-image-placeholder margin-bottom-medium"></div>
                <h3 className="text-medium font-semibold margin-bottom-small">Sed ut perspiciatis</h3>
                <p className="text-gray margin-bottom-medium">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                <button className="button button-gray">Remove event</button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Movie Table Section */}
        <div className="card">
          <h2 className="text-medium text-black font-bold margin-bottom-medium">Movie List</h2>
          <table className="movie-table">
            <thead>
              <tr>
                <th>SNo</th>
                <th>Image</th>
                <th>Title</th>
                <th>Cast</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie.sno}>
                  <td>{movie.sno}</td>
                  <td><img src={movie.image} alt={movie.title} className="movie-image"/></td>
                  <td>{movie.title}</td>
                  <td>{movie.cast}</td>
                  <td>{movie.description}</td>
                  <td>{movie.price}</td>
                  <td>
                    <button className="button button-blue margin-right-small">View</button>
                    <button className="button button-purple margin-right-small">Edit</button>
                    <button className="button button-gray">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Reviews Section */}
        <div className="card">
          <p className="text-gray margin-bottom-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="button button-blue">Contact Manager</button>
        </div>
      </div>
    </div>
  );
}
