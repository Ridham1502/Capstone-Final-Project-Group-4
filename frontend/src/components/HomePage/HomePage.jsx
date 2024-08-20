import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './HomePage.css';
import promoImage from '../Assets/home.png'

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [events, setEvents] = useState([]);
    const [theaters, setTheaters] = useState([]);
    const movieListRef = useRef(null);
    const theaterListRef = useRef(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('http://localhost:5002/api/movies');
                setMovies(response.data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5002/api/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        const fetchTheaters = async () => {
            try {
                const response = await axios.get('http://localhost:5002/api/theaters');
                setTheaters(response.data);
            } catch (error) {
                console.error('Error fetching theaters:', error);
            }
        };

        fetchMovies();
        fetchEvents();
        fetchTheaters();
    }, []);

    const scroll = (ref, direction) => {
        if (direction === 'left') {
            ref.current.scrollBy({ left: -300, behavior: 'smooth' });
        } else {
            ref.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="homepage">
            <div className="welcome-section">
                <h1>Welcome to Cultural Canvas!</h1>
                <p>
                    Discover cultural events near you, explore movies and events! 
                    Whether you are looking for the latest blockbusters or local art 
                    exhibitions, Cultural Canvas has got you covered. Dive into a 
                    world of cultural diversity and entertainment. Stay updated 
                    with upcoming events and never miss out on any cultural activities 
                    in your area. Join our community and enjoy exclusive offers and 
                    promotions tailored just for you. 
                </p>
                <button className="explore-button">Explore</button>
            </div>

            <div className="promo-image-container">
             <img src={promoImage} alt="Promotional Offer" className="promo-image" />
            </div>

            <div className="content-section">
                <h2>Now Playing</h2>
                <div className="scroll-container">
                    <button className="scroll-button left" onClick={() => scroll(movieListRef, 'left')}>&#8249;</button>
                    <div className="horizontal-scroll" ref={movieListRef}>
                        {movies.map((movie, index) => (
                            <div className="card" key={index}>
                                <img src={movie.image} alt={movie.title} />
                                <h3>{movie.title}</h3>
                                <p className="description">{movie.description}</p>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-button right" onClick={() => scroll(movieListRef, 'right')}>&#8250;</button>
                </div>
                <h2>Best of cultural events in upcoming weeks</h2>
                <p>At Cultural Canvas, we strive to bring you the finest selection of cultural events and experiences. 
                   Whether you're interested in music, theater, dance, or visual arts, our platform provides a diverse 
                   array of events to enrich your cultural journey. Join our community and explore the vibrant tapestry of 
                   cultural offerings that await you. Don't miss out on the opportunity to immerse yourself in the best 
                   cultural events happening near you. Stay connected, stay inspired!
                </p>

                <div className="events-container">
                    {events.map((event, index) => (
                        <div className="card" key={index}>
                            <img src={event.image} alt={event.name} />
                            <h3>{event.name}</h3>
                            <p className="description">{event.description}</p>
                        </div>
                    ))}
                </div>
                <h2>Popular Theaters Near You</h2>
                <p> Explore the best theaters in your area and enjoy the ultimate cinematic experience. 
                    Whether you prefer watching the latest blockbuster or an indie film, our curated list of popular 
                    theaters ensures you have the perfect venue for every movie night. From state-of-the-art sound systems to 
                    luxurious seating, discover what makes these theaters the top choice for moviegoers. Get ready to immerse 
                    yourself in an unparalleled movie-watching experience right in your neighborhood.</p>

                <div className="scroll-container">
                    <button className="scroll-button left" onClick={() => scroll(theaterListRef, 'left')}>&#8249;</button>
                    <div className="horizontal-scroll" ref={theaterListRef}>
                        {theaters.map((theater, index) => (
                            <div className="card" key={index}>
                                <img src={theater.image} alt={theater.name} />
                                <h3>{theater.name}</h3>
                                <p>{theater.location}</p>
                            </div>
                        ))}
                    </div>
                    <button className="scroll-button right" onClick={() => scroll(theaterListRef, 'right')}>&#8250;</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;



