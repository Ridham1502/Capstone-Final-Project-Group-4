import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import axiosInstance from "../../utils/api";
import "./MovieDetails.css";
import toast from "react-hot-toast";

const TMDB_API_KEY = "4c015a84bcb8442128b8a1a9a8cf37c2";

export default function MovieDetails() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [tmdbDetails, setTmdbDetails] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState({ name: "", comment: "" });
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  console.log("_id : " + id);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        // Using API only for trailer and Image Gallery rest of movies details fetching from own database
        //TMDB API reference: https://developer.themoviedb.org/reference/intro/getting-started
        const response = await axiosInstance.get("/user/getMovieDetails", {
          params: { id: id },
        });
        console.log(response.data);
        setMovie(response?.data.data);

      
        const tmdbResponse = await axios.get(
          `https://api.themoviedb.org/3/search/movie`,
          {
            params: {
              api_key: TMDB_API_KEY,
              query: response?.data.data.title,
            },
          }
        );
        console.log(tmdbResponse.data);
        if (tmdbResponse.data.results && tmdbResponse.data.results.length > 0) {
          const movieId = tmdbResponse?.data.results[0].id;
          const tmdbMovieDetails = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}`,
            {
              params: {
                api_key: TMDB_API_KEY,
                append_to_response: "videos,images",
              },
            }
          );
          setTmdbDetails(tmdbMovieDetails.data);
          console.log("movie details : " + tmdbMovieDetails?.data);
        }

        const recommendationsResponse = await axiosInstance.get(
          "/user/movieRecomendation",
          {
            params: { id: id },
          }
        );
        setRecommendations(recommendationsResponse.data.data);

        // Fetch movie feedbacks
        const feedbacksResponse = await axiosInstance.get(
          "/user/movieFeedback",
          {
            params: { movieId: id },
          }
        );
        setFeedbacks(feedbacksResponse.data.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/user/createmovieFeedback", {
        movieId: id,
        ...newFeedback,
      });

      toast.success("Comment added successfully")
      // Clear form and refetch feedbacks
      setNewFeedback({ name: "", comment: "" });
      const feedbacksResponse = await axiosInstance.get("/user/movieFeedback", {
        params: { movieId: id },
      });
      setFeedbacks(feedbacksResponse.data.data);
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details-page">
      {/* Conditional rendering for the backdrop */}
      <div
        className="movie-banner"
        style={{
          backgroundImage: `url(${
            tmdbDetails?.backdrop_path
              ? `https://image.tmdb.org/t/p/original/${tmdbDetails.backdrop_path}`
              : "banner.jpg"
          })`,
        }}
      >
        <div className="movie-banner-content">
          <h1>{movie.title}</h1>
          
        </div>
      </div>
      <div className="movie-main-content">
        {/* fetching details from the database */}
        <div className="add-movie-details">
          <h2>Overview</h2>
          <p><strong></strong>{movie.plot}</p>
          <h3>Details</h3>
          <p><strong>Title:</strong> {movie.title}</p>
          <p><strong>Plot:</strong>{movie.plot}</p>
          <p><strong>Director:</strong> {movie?.director || 'Not Provided by Admin'}</p>
          <p><strong>Producer:</strong> {movie?.productionCompany || 'Not Provided by Admin'}</p>
          <p><strong>Language:</strong> {movie?.language || 'Not Provided by Admin'}</p>
          <p><strong>Release Date:</strong> {movie?. releaseDate || 'Not Provided by Admin'}</p>
          <p><strong>Runtime:</strong> {movie?.runtime ? `${movie.runtime} minutes` : 'Not Provided by Admin'}</p>
          <p><strong>Budget:</strong> {movie?.budget ? `$${movie.budget}` : 'Not Provided by Admin'}</p>
          <p><strong>Revenue:</strong> {movie?.boxOffice ? `$${movie.boxOffice}` : 'Not Provided by Admin'}</p>
          <p><strong>Production Company:</strong> {movie?.productionCompany || 'Not Provided by Admin'}</p>
          <p><strong>Genres:</strong> {movie?.genre?.length > 0 ? movie.genre.join(', ') : 'Not Provided by Admin'}</p>
          <p><strong>Award:</strong> {movie?.awards?.length > 0 ? movie.awards.join(', ') : 'Not Provided by Admin'}</p>
          <p><strong>Writers:</strong> {movie?.writers?.length > 0 ? movie.writers.join(', ') : 'Not Provided by Admin'}</p>
          <p><strong>Cast:</strong> {movie?.cast?.length > 0 ? movie.cast.join(', ') : 'Not Provided by Admin'}</p>
          
          
          <p><strong>Country:</strong> {movie?.country || 'N/A'}</p>

          <a
            href={movie.trailerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-trailer-button"
          >
            Watch Trailer
          </a>
          <Link to={`/bookticket?id=${id}`} className="watch-trailer-button">
            Book Ticket
          </Link>
        </div>
      </div>
      <div className="movie-trailer">
        {tmdbDetails?.videos?.results?.length > 0 ? (
          <iframe
            src={`https://www.youtube.com/embed/${tmdbDetails.videos.results[0].key}`}
            title="Trailer"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <p>No trailer available</p>
        )}
      </div>
      <div className="movie-gallery">
        <h3>Gallery</h3>
        <div className="image-slider">
          {tmdbDetails?.images?.backdrops?.length > 0 ? (
            tmdbDetails.images.backdrops
              .slice(0, 5)
              .map((image, index) => (
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/original/${image.file_path}`}
                  alt={`Backdrop ${index + 1}`}
                />
              ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>
      <div className="movie-link">
        <a
          href={`https://www.themoviedb.org/movie/${tmdbDetails?.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on TMDb
        </a>
      </div>
      <div className="movie-recommendations">
        <h3>Recommended Movies</h3>
        <div className="recommendations-list">
          {recommendations.length > 0 ? (
            recommendations.slice(0, 5).map((recMovie) => (
              <div key={recMovie.id} className="recommendation-card">
                <img src={recMovie.image} alt={recMovie.title} />
                <h4>{recMovie.title}</h4>
                <p>{recMovie.overview}</p>
                <Link
                  to={`/moviedetails?id=${recMovie.id}`}
                  className="view-details-button"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p>No recommendations available</p>
          )}
        </div>
      </div>
      <div className="feedback-section">
        <h3>Feedback</h3>
        <form onSubmit={handleFeedbackSubmit} className="feedback-form">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newFeedback.name}
              onChange={handleFeedbackChange}
              required
            />
          </label>
          <label>
            Comment:
            <textarea
              name="comment"
              value={newFeedback.comment}
              onChange={handleFeedbackChange}
              required
            />
          </label>
          <button type="submit">Submit Feedback</button>
        </form>

        <div className="feedback-list">
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <div key={feedback._id} className="feedback-item">
                <div className="feedback-avatar">
                  <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="User Avatar" />
                </div>
                <div className="feedback-content">
                  <p>
                    <strong>{feedback.name}:</strong> {feedback.comment}
                  </p>
                  <p>
                    <small>
                      {new Date(feedback.createdAt).toLocaleDateString()}
                    </small>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No feedback available</p>
          )}
        </div>
      </div>
    </div>
  );
}
