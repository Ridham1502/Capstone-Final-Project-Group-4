import React, { useEffect, useState } from "react";
import "./AddMovie.css";
import axiosInstance from "../../utils/api.js";
import moment from "moment";

export default function AddMovie() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([]);
  const [showBookingRecordsModal, setShowBookingRecordsModal] = useState(false);
  const [selectedMovieBookings, setSelectedMovieBookings] = useState([]);
  const [modalType, setModalType] = useState("add");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editModel, setEditModel] = useState(false);

  const toggleBookingRecordsModal = (bookings) => {
    setSelectedMovieBookings(bookings);
    setShowBookingRecordsModal(!showBookingRecordsModal);
  };

  const toggleModal = (type = "add", movie = null) => {
    setModalType(type);
    setSelectedMovie(movie);
    setShowModal(!showModal);
  };

  const addMovie = async (event) => {
    event.preventDefault();
    const form = event.target;
    const newMovie = {
      image: form.image.value,
      title: form.title.value,
      cast: form.cast.value.split(",").map((item) => item.trim()),
      director: form.director.value,
      genre: form.genre.value.split(",").map((item) => item.trim()),
      releaseDate: form.releaseDate.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      category: form.category.value,
      language: form.language.value,
      originalTitle: form.originalTitle.value,
      writers: form.writers.value.split(",").map((item) => item.trim()),
      producers: form.producers.value.split(",").map((item) => item.trim()),
      productionCompany: form.productionCompany.value,
      distributors: form.distributors.value
        .split(",")
        .map((item) => item.trim()),
      runtime: parseInt(form.runtime.value),
      rating: parseFloat(form.rating.value),
      budget: parseFloat(form.budget.value),
      boxOffice: parseFloat(form.boxOffice.value),
      awards: form.awards.value.split(",").map((item) => item.trim()),
      trailerLink: form.trailerLink.value,
      website: form.website.value,
      plot: form.plot.value,
      country: form.country.value,
    };

    try {
      const response = await axiosInstance.post("/admin/createMovie", newMovie);
      form.reset();
      toggleModal();
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const fetchMovieDetails = async (movieId) => {
    try {
      const response = await axiosInstance.get(
        `/admin/MovieDetails?id=${movieId}`
      );
      console.log("response : " + response);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching movie details:", error);
      return null;
    }
  };

  const handleViewMovie = async (movieId) => {
    const movieDetails = await fetchMovieDetails(movieId);
    toggleModal("view", movieDetails);
  };

  const handleEditMovie = async (movieId) => {
    const movieDetails = await fetchMovieDetails(movieId);
    setSelectedMovie(movieDetails);
    setEditModel(true);
  };

  const [movie, setMovie] = useState([]);

  async function fetchData() {
    try {
      const response = await axiosInstance.get("/admin/Movie");
      setMovie(response.data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  async function fetchAllData() {
    try {
      const response = await axiosInstance.get("/admin/listAllMovieAndEvent");
      setMovies(response.data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchAllData();
  }, []);

  const handleEditMovieSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedMovie = {
      ...selectedMovie,
      image: form.image.value,
      title: form.title.value,
      cast: form.cast.value.split(",").map((item) => item.trim()),
      director: form.director.value,
      genre: form.genre.value.split(",").map((item) => item.trim()),
      releaseDate: form.releaseDate.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      category: form.category.value,
      language: form.language.value,
      originalTitle: form.originalTitle.value,
      writers: form.writers.value.split(",").map((item) => item.trim()),
      producers: form.producers.value.split(",").map((item) => item.trim()),
      productionCompany: form.productionCompany.value,
      distributors: form.distributors.value
        .split(",")
        .map((item) => item.trim()),
      runtime: parseInt(form.runtime.value),
      rating: parseFloat(form.rating.value),
      budget: parseFloat(form.budget.value),
      boxOffice: parseFloat(form.boxOffice.value),
      awards: form.awards.value.split(",").map((item) => item.trim()),
      trailerLink: form.trailerLink.value,
      website: form.website.value,
      plot: form.plot.value,
      country: form.country.value,
    };

    try {
      await axiosInstance.patch(
        `/admin/editMovieDetails?movieId=${selectedMovie._id}`,
        updatedMovie
      );
      setEditModel(false); // Close the modal after successful update
      fetchAllData(); // Refresh the movie list
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };


  const handleDeleteMovie = async (movieId) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        await axiosInstance.delete(`/admin/movieDeleteById?movieId=${movieId}`);
        // Refresh the list of movies
        fetchAllData();
      } catch (error) {
        console.error("Error deleting movie:", error);
      }
    }
  };
  

  return (
    <div className="add-movie-container">
      <div className="most-watched-section">
        <h2>Most Watched Movies</h2>
        <div className="most-watched-movies">
          {movie.map((movie, index) => (
            <div key={index} className="movie-card">
              <img src={movie.image} alt={`Movie ${index + 1}`} />
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>Rating: 4.{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="add-movie-section">
        <button className="add-movie-button" onClick={() => toggleModal("add")}>
          + Add Movie
        </button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => toggleModal(modalType, null)}
            >
              &times;
            </span>
            {modalType === "add" ? (
              <>
                <h2>Add Movie</h2>
                <form onSubmit={addMovie}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Movie Name</label>
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
                  <div className="form-row">
                    <div className="form-group">
                      <label>Description</label>
                      <textarea name="description" required></textarea>
                    </div>
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
                    <div className="form-group">
                      <label>Language</label>
                      <select name="language" required>
                        <option value="hindi">Hindi</option>
                        <option value="english">English</option>
                        <option value="punjabi">Punjabi</option>
                        <option value="french">French</option>
                        <option value="chinese">Chinese</option>
                        <option value="Tamil">Tamil</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Original Title</label>
                      <input type="text" name="originalTitle" />
                    </div>
                    <div className="form-group">
                      <label>Writers (comma separated)</label>
                      <input type="text" name="writers" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Producers (comma separated)</label>
                      <input type="text" name="producers" />
                    </div>
                    <div className="form-group">
                      <label>Production Company</label>
                      <input type="text" name="productionCompany" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Distributors (comma separated)</label>
                      <input type="text" name="distributors" />
                    </div>
                    <div className="form-group">
                      <label>Runtime (minutes)</label>
                      <input type="number" name="runtime" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Rating</label>
                      <input type="number" name="rating" step="0.1" />
                    </div>
                    <div className="form-group">
                      <label>Budget</label>
                      <input type="number" name="budget" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Box Office</label>
                      <input type="number" name="boxOffice" />
                    </div>
                    <div className="form-group">
                      <label>Awards (comma separated)</label>
                      <input type="text" name="awards" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Trailer Link</label>
                      <input type="text" name="trailerLink" />
                    </div>
                    <div className="form-group">
                      <label>Website</label>
                      <input type="text" name="website" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Plot</label>
                    <textarea name="plot" required></textarea>
                  </div>
                  <div className="form-group">
                    <label>Country</label>
                    <input type="text" name="country" required />
                  </div>
                  <button type="submit">Add Movie</button>
                </form>
              </>
            ) : (
              <>
                <h2>View Movie</h2>
                {selectedMovie ? (
                  <div className="movie-details">
                    <img
                      src={selectedMovie.image}
                      alt={selectedMovie.title}
                      width={"45%"}
                    />
                    <div className="movie-info">
                      <h3>{selectedMovie.title}</h3>
                      <p>
                        <strong>Cast:</strong> {selectedMovie.cast.join(", ")}
                      </p>
                      <p>
                        <strong>Director:</strong> {selectedMovie.director}
                      </p>
                      <p>
                        <strong>Genre:</strong> {selectedMovie.genre.join(", ")}
                      </p>
                      <p>
                        <strong>Release Date:</strong>{" "}
                        {moment(selectedMovie.releaseDate).format(
                          "MMMM Do YYYY"
                        )}
                      </p>
                      <p>
                        <strong>Description:</strong>{" "}
                        {selectedMovie.description}
                      </p>
                      <p>
                        <strong>Price:</strong> ${selectedMovie.price}
                      </p>
                      <p>
                        <strong>Category:</strong> {selectedMovie.category}
                      </p>
                      <p>
                        <strong>Language:</strong> {selectedMovie.language}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </>
            )}
          </div>
        </div>
      )}
      <div className="movie-list-section">
        <h2>Movie List</h2>
        <table>
          <thead>
            <tr>
              <th>SNo</th>
              <th>Title</th>
              <th>Cast</th>
              <th>Director</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Price</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>{index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.cast}</td>
                <td>{movie.director}</td>
                <td>{movie.genre}</td>
                <td>{moment(movie.releaseDate).format("MMMM Do YYYY")}</td>
                <td>${movie.price}</td>
                <td>{movie.category}</td>
                <td>
                  <button
                    className="action-button"
                    onClick={() => handleEditMovie(movie._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="action-button"
                    onClick={() => handleViewMovie(movie._id)}
                  >
                    View
                  </button>
                  {/* <button className="action-button">Delete</button> */}
                  <button onClick={() => handleDeleteMovie(movie._id)}>Delete</button>

                  <button
                    className="action-button"
                    onClick={() =>
                      toggleBookingRecordsModal(movie.bookings || [])
                    }
                  >
                    Booking Records
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showBookingRecordsModal && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-button"
              onClick={() => toggleBookingRecordsModal([])}
            >
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
                      <td>{booking.seats.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <img
                src="https://ssap.ugrocapital.com/assets/images/noRecords.png"
                alt="not found"
                width="100%"
                height="90%"
              ></img>
            )}
          </div>
        </div>
      )}

      {editModel === true && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setEditModel(false)}>
              &times;
            </span>
            <h2>Edit Movie</h2>
            <form onSubmit={handleEditMovieSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Movie Name</label>
                  <input
                    type="text"
                    name="title"
                    defaultValue={selectedMovie?.title}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Image URL</label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={selectedMovie?.image}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Cast</label>
                  <input
                    type="text"
                    name="cast"
                    defaultValue={selectedMovie?.cast.join(", ")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Director</label>
                  <input
                    type="text"
                    name="director"
                    defaultValue={selectedMovie?.director}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Genre</label>
                  <input
                    type="text"
                    name="genre"
                    defaultValue={selectedMovie?.genre.join(", ")}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Release Date</label>
                  <input
                    type="date"
                    name="releaseDate"
                    defaultValue={moment(selectedMovie?.releaseDate).format(
                      "YYYY-MM-DD"
                    )}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    name="description"
                    defaultValue={selectedMovie?.description}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={selectedMovie?.price}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    name="category"
                    defaultValue={selectedMovie?.category}
                    required
                  >
                    <option value="movie">Movie</option>
                    <option value="event">Event</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Language</label>
                  <select
                    name="language"
                    defaultValue={selectedMovie?.language}
                    required
                  >
                    <option value="hindi">Hindi</option>
                    <option value="english">English</option>
                    <option value="punjabi">Punjabi</option>
                    <option value="french">French</option>
                    <option value="chinese">Chinese</option>
                    <option value="Tamil">Tamil</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Original Title</label>
                  <input
                    type="text"
                    name="originalTitle"
                    defaultValue={selectedMovie?.originalTitle}
                  />
                </div>
                <div className="form-group">
                  <label>Writers (comma separated)</label>
                  <input
                    type="text"
                    name="writers"
                    defaultValue={selectedMovie?.writers.join(", ")}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Producers (comma separated)</label>
                  <input
                    type="text"
                    name="producers"
                    defaultValue={selectedMovie?.producers.join(", ")}
                  />
                </div>
                <div className="form-group">
                  <label>Production Company</label>
                  <input
                    type="text"
                    name="productionCompany"
                    defaultValue={selectedMovie?.productionCompany}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Distributors (comma separated)</label>
                  <input
                    type="text"
                    name="distributors"
                    defaultValue={selectedMovie?.distributors.join(", ")}
                  />
                </div>
                <div className="form-group">
                  <label>Runtime (minutes)</label>
                  <input
                    type="number"
                    name="runtime"
                    defaultValue={selectedMovie?.runtime}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Rating</label>
                  <input
                    type="number"
                    name="rating"
                    step="0.1"
                    defaultValue={selectedMovie?.rating}
                  />
                </div>
                <div className="form-group">
                  <label>Budget</label>
                  <input
                    type="number"
                    name="budget"
                    defaultValue={selectedMovie?.budget}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Box Office</label>
                  <input
                    type="number"
                    name="boxOffice"
                    defaultValue={selectedMovie?.boxOffice}
                  />
                </div>
                <div className="form-group">
                  <label>Awards (comma separated)</label>
                  <input
                    type="text"
                    name="awards"
                    defaultValue={selectedMovie?.awards.join(", ")}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Trailer Link</label>
                  <input
                    type="text"
                    name="trailerLink"
                    defaultValue={selectedMovie?.trailerLink}
                  />
                </div>
                <div className="form-group">
                  <label>Website</label>
                  <input
                    type="text"
                    name="website"
                    defaultValue={selectedMovie?.website}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Plot</label>
                <textarea
                  name="plot"
                  defaultValue={selectedMovie?.plot}
                  required
                ></textarea>
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  defaultValue={selectedMovie?.country}
                  required
                />
              </div>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
