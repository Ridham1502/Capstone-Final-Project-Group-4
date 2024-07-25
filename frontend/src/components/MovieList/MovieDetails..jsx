import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../../utils/api';
import './MovieDetails.css';

const TMDB_API_KEY = '4c015a84bcb8442128b8a1a9a8cf37c2';

export default function MovieDetails() {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [tmdbDetails, setTmdbDetails] = useState(null);
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  console.log("_id : " + id);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        // Using API only for trailer and Image Gallery rest of movies details fetching from own database
        //TMDB API reference: https://developer.themoviedb.org/reference/intro/getting-started
        const response = await axiosInstance.get("/user/getMovieDetails", {
          params: { id: id }
        });
        console.log(response.data);
        setMovie(response?.data?.data);

        
        const tmdbResponse = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
          params: {
            api_key: TMDB_API_KEY,
            query: response?.data?.data?.title
          }
        });
        console.log(tmdbResponse.data);
        if (tmdbResponse.data.results && tmdbResponse.data.results.length > 0) {
          const movieId = tmdbResponse?.data?.results[0]?.id;
          const tmdbMovieDetails = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
            params: {
              api_key: TMDB_API_KEY,
              append_to_response: 'videos,images'
            }
          });
          setTmdbDetails(tmdbMovieDetails.data);
          console.log("movie details : " + tmdbMovieDetails?.data);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details-page">
      
      <div
        className="movie-banner"
        style={{
          backgroundImage: `url(${tmdbDetails?.backdrop_path ? `https://image.tmdb.org/t/p/original/${tmdbDetails.backdrop_path}` : 'default-banner.jpg'})`
        }}
      >
        <div className="movie-banner-content">
          <h1>{movie.title}</h1>
          <p><strong>Plot:</strong>{movie.plot}</p>
        </div>
      </div>
      <div className="movie-main-content">
        <div className="movie-poster">
          <img src={movie.image} alt={movie.title} />
        </div>
        <div className="movie-details">
          <h2>Overview</h2>
          {/* fetching all details from the own database  */}
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

          <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer" className="watch-trailer-button">
            Watch Trailer
          </a>
          <a href='#' target="_blank" rel="noopener noreferrer" className="watch-trailer-button">
            Book Ticket
          </a>
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
        {/* From API */}
        <div className="image-slider">
          {tmdbDetails?.images?.backdrops?.length > 0 ? (
            tmdbDetails.images.backdrops.slice(0, 5).map((image, index) => (
              <img key={index} src={`https://image.tmdb.org/t/p/original/${image.file_path}`} alt={`Backdrop ${index + 1}`} />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </div>

      
    </div>
  );
}
