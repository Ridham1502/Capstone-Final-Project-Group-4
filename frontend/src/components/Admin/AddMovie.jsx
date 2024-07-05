import React, { useState } from "react";
import "./AddMovie.css";
import axios from "axios";

export default function AddMovie() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/100",
      title: "Inception",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      director: "Christopher Nolan",
      genre: "Sci-Fi, Thriller",
      releaseDate: "2010-07-16",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      price: 12,
      category: "movie",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/100",
      title: "The Dark Knight",
      cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
      director: "Christopher Nolan",
      genre: "Action, Crime, Drama",
      releaseDate: "2008-07-18",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      price: 15,
      category: "movie",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/100",
      title: "Interstellar",
      cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
      director: "Christopher Nolan",
      genre: "Adventure, Drama, Sci-Fi",
      releaseDate: "2014-11-07",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      price: 18,
      category: "movie",
    },
  ]);
  const [showBookingRecordsModal, setShowBookingRecordsModal] = useState(false);
  const [selectedMovieBookings, setSelectedMovieBookings] = useState([]);

  const toggleBookingRecordsModal = (bookings) => {
    setSelectedMovieBookings(bookings);
    setShowBookingRecordsModal(!showBookingRecordsModal);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addMovie = async (event) => {
    event.preventDefault();
    const form = event.target;
    const newMovie = {
      image: form.image.value,
      title: form.title.value,
      cast: form.cast.value,
      director: form.director.value,
      genre: form.genre.value,
      releaseDate: form.releaseDate.value,
      description: form.description.value,
      price: form.price.value,
      category: form.category.value,
    };

    console.log("newMovie : " + newMovie)

    try {
      const response = await axios.post("admin/createMovie", newMovie);
      console.log("Movie added:", response.data);
      setMovies([...movies, response.data]);
      form.reset();
      toggleModal();
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const mostWatchedMovies = [
    {
      image: "https://m.media-amazon.com/images/S/pv-target-images/06d86913c84a8e3c32f08eaabc56d8fded1c58943f1b4150c9fd0a9d4cea7a70.jpg",
      title: "The Matrix",
      rating: "4.1", //Retrieved from https://m.media-amazon.com/images/S/pv-target-images/06d86913c84a8e3c32f08eaabc56d8fded1c58943f1b4150c9fd0a9d4cea7a70.jpg
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg",
      title: "Avatar",
      rating: "4.2",    //Retrieved from https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg
    },
    {
      image: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
      title: "Titanic",
      rating: "4.3", //Retrieved from https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg
    },
    {
      image: "https://i.ebayimg.com/images/g/dpkAAOSw~llgqj0q/s-l1600.jpg",
      title: "Gladiator",
      rating: "4.4", //Retrieved from https://i.ebayimg.com/images/g/dpkAAOSw~llgqj0q/s-l1600.jpg
    },
  ];

  return (
    <div className="add-movie-container">
      <div className="most-watched-section">
        <h2>Most Watched Movies</h2>
        <div className="most-watched-movies">
          {mostWatchedMovies.map((movie, index) => (
            <div key={index} className="movie-card">
              <img
                src={movie.image}
                alt={movie.title}
              />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="add-movie-section">
        <button className="add-movie-button" onClick={toggleModal}>
          + Add Movie
        </button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>
              &times;
            </span>
            <h2>Add Movie</h2>
            <form onSubmit={addMovie}>
              <div className="form-row">
                <div className="form-group">
                  <label>Movie Name / Event</label>
                  <input type="text" name="title" required />
                </div>
                <div className="form-group">
                  <label>Image URL</label>
                  <input type="text" name="image" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Cast</label>
                  <input type="text" name="cast" required />
                </div>
                <div className="form-group">
                  <label>Director</label>
                  <input type="text" name="director" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Genre</label>
                  <input type="text" name="genre" required />
                </div>
                <div className="form-group">
                  <label>Release Date</label>
                  <input type="date" name="releaseDate" required />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" required></textarea>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price</label>
                  <input type="number" name="price" required />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select name="category" required>
                    <option value="movie">Movie</option>
                    <option value="event">Event</option>
                  </select>
                </div>
              </div>
              <button type="submit">Add Movie</button>
            </form>
          </div>
        </div>
      )}
      <div className="movie-list-section">
        <h2>Movie List</h2>
        <table>
          <thead>
            <tr>
              <th>SNo</th>
              <th>Image</th>
              <th>Title</th>
              <th>Cast</th>
              <th>Director</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="movie-image"
                  />
                </td>
                <td>{movie.title}</td>
                <td>{movie.cast}</td>
                <td>{movie.director}</td>
                <td>{movie.genre}</td>
                <td>{movie.releaseDate}</td>
                <td>{movie.description}</td>
                <td>${movie.price}</td>
                <td>{movie.category}</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">View</button>
                  <button className="action-button">Delete</button>
                  <button className="action-button" onClick={() => toggleBookingRecordsModal(movie.bookings || [])}>Booking Records</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showBookingRecordsModal && (
  <div className="modal">
    <div className="modal-content">
      <span className="close-button" onClick={() => toggleBookingRecordsModal([])}>
        &times;
      </span>
      <h2>Ticket Booking Records</h2>
      {selectedMovieBookings.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>SNo</th>
              <th>Booking ID</th>
              <th>Customer Name</th>
              <th>Booking Date</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            {selectedMovieBookings.map((booking, index) => (
              <tr key={booking.id}>
                <td>{index + 1}</td>
                <td>{booking.id}</td>
                <td>{booking.customerName}</td>
                <td>{booking.date}</td>
                <td>{booking.seats.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // <p>No booking records found</p>
        <img src="https://ssap.ugrocapital.com/assets/images/noRecords.png" alt="not found" width='100%' height='90%'></img>
      )}
    </div>
  </div>
)}

    </div>
  );
}
