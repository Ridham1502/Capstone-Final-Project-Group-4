import React, { useEffect, useState } from "react";
import "./MovieList.css";
import axiosInstance from "../../utils/api.js";
import { Link } from "react-router-dom";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [events, setEvents] = useState([]);

  async function fetchData(language = null) {
    try {
      let url = "/user/listMovie";
      if (language) {
        url += `?language=${language}`;
      }
      const response = await axiosInstance.get(url);
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
      console.error("Error fetching events:", error);
    }
  }

  useEffect(() => {
    fetchData(); // Initially fetch all movies
    fetcheventData(); // Fetch events
  }, []);

  const handleFilterClick = (language) => {
    fetchData(language);
  };

  return (
    <div className="container">
      <div className="filters">
        <button className="filter-button">Filters</button>
        <button className="language-button" onClick={() => handleFilterClick("english")}>English</button>
        <button className="language-button" onClick={() => handleFilterClick("telugu")}>Telugu</button>
        <button className="language-button" onClick={() => handleFilterClick("hindi")}>Hindi</button>
        <button className="language-button" onClick={() => handleFilterClick("punjabi")}>Punjabi</button>
        <button className="language-button" onClick={() => handleFilterClick("french")}>French</button>
      </div>
      
      <h2>Movies</h2>
      <div className="movie-list">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <div className="movie-poster">
                <img src={movie.image} alt={movie.title} />
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p><b>Language : </b>{movie.language}</p>
                <Link to={`/MovieDetails?id=${movie._id}`}>
                  <button className="book-button">Know more</button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No movie found</p>
        )}
      </div>

      <h2>Events</h2>
      <div className="movie-list">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div className="movie-card" key={index}>
              <div className="movie-poster">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="movie-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p><b>Language : </b>{event.language}</p>
                <Link to={`/MovieDetails?id=${event._id}`}>
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
