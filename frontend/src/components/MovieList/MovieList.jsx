import React, { useEffect, useState } from "react";
import "./MovieList.css";
import axiosInstance from "../../utils/api.js";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [events, setEvents] = useState([]);

  async function fetchData() {
    try {
      const response = await axiosInstance.get("/user/listMovie");
      console.log(response.data);
      setMovies(response.data.data);  
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  async function fetcheventData() {
    try {
      const response = await axiosInstance.get("/user/listEvents");
      console.log(response.data);
      setEvents(response.data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }
  useEffect(() => {
    fetchData();
    fetcheventData()
  }, []);

  return (
    <div className="container">
      <div className="filters">
        <button className="filter-button">Filters</button>
        <button className="language-button">English</button>
        <button className="language-button">Telugu</button>
        <button className="language-button">Hindi</button>
        <button className="language-button">Punjabi</button>
        <button className="language-button">French</button>
        <button className="language-button">French</button>
      </div>
      <h2>Movies</h2>
      <div className="movie-list">
        {console.log(movies?.length)}
        {movies?.length > 0 ? (
          movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <div className="movie-poster">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <Link to={`/MovieDetails?id=${movie._id}`}>
                  <button className="book-button">Know more</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>

        <h2>Events</h2>
      <div className="movie-list">
        {console.log(events.length)}
        {events.length > 0 ? (
          events.map((movie, index) => (
            <div className="movie-card" key={index}>
              <div className="movie-poster">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <Link to={`/MovieDetails?id=${movie._id}`}>
                  <button className="book-button">Know more</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Not found</p>
        )}
      </div>


      {/* <div className="footer">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <button className="join-button">Join Today</button>
      </div> */}
    </div>
  );
}
