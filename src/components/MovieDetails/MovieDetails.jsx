import React from "react";
import "./MovieDetails.css"; // Import the CSS file for the component

export default function MovieDetails() {
  return (
    <div className="bg-light">
      <div className="container py-5">
        <p className="text-dark">
          Movies &gt; <b>Movie Details</b>
        </p>

        {/* Movie Details Section */}
        <div className="bg-white p-4 rounded shadow-sm d-flex mb-4">
          <div className="flex-fill mr-4 col-md-4">
            <div
              className="bg-secondary rounded"
              style={{ height: "16rem", width: "100%" }}
            >
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_themarvels_poster_rebrand_8c17eea5.jpeg"
                style={{ height: "16rem", width: "100%" }}
                alt="movie Detail"
              ></img>
            </div>
          </div>
          <div
            className="flex-fill d-flex flex-column justify-content-center col-md-6"
            style={{ marginLeft: "20px" }}
          >
            <h1 className="h4 font-weight-bold mb-3">Movie Name</h1>
            <p className="text-secondary mb-4">
              Brie Larson as Carol Danvers / Vers / Captain Marvel: An ex-U.S. Air Force fighter pilot and member of an elite Kree military unit called Starforce. She was imbued with superhuman strength, energy projection, and flight after exposure to Tesseract energy.
            </p>
            <button className="btn btn-primary btn-sm align-self-start mt-3">
              Book Tickets
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="d-flex mb-4">
          <button className="btn btn-secondary mr-2">Filters</button>
          <button className="btn btn-secondary mr-2">English</button>
          <button className="btn btn-secondary mr-2">Telugu</button>
          <button className="btn btn-secondary mr-2">Hindi</button>
          <button className="btn btn-secondary mr-2">Punjabi</button>
          <button className="btn btn-secondary mr-2">French</button>
          <button className="btn btn-secondary mr-2">French</button>
        </div>

        {/* Cast and Crew Details Section */}
        <div className="bg-white p-4 rounded shadow-sm mb-4">
          <h2 className="h5 text-dark font-weight-bold mb-3">
            Cast and Crew Details
          </h2>
          <div className="d-flex">
            <div className="d-flex flex-column align-items-center mr-4">
              <div
                className="bg-secondary rounded-circle mb-3"
                style={{ width: "6rem", height: "6rem" }}
              >
                <img
                  src="https://static01.nyt.com/images/2021/05/02/fashion/00BRIELARSON3/merlin_186947316_424938a0-d64b-431c-8c0b-0cb750d6f173-superJumbo.jpg?quality=75&auto=webp"
                  style={{ width: "6rem", height: "6rem" }}
                  alt="crew"
                ></img>
              </div>
              <h3 className="h6 font-weight-bold">Sed ut perspiciatis</h3>
              <p className="text-secondary text-center mb-3">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
            <div className="d-flex flex-column align-items-center mr-4">
              <div
                className="bg-secondary rounded-circle mb-3"
                style={{ width: "6rem", height: "6rem" }}
              >
                <img
                  src="https://static01.nyt.com/images/2021/05/02/fashion/00BRIELARSON3/merlin_186947316_424938a0-d64b-431c-8c0b-0cb750d6f173-superJumbo.jpg?quality=75&auto=webp"
                  style={{ width: "6rem", height: "6rem" }}
                  alt="crew"
                ></img>
              </div>
              <h3 className="h6 font-weight-bold">Lorem ipsum dolor</h3>
              <p className="text-secondary text-center mb-3">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white p-4 rounded shadow-sm mb-4">
          <h2 className="h5 text-dark font-weight-bold mb-3">Reviews</h2>
          <div className="d-flex">
            <div className="flex-fill mr-4">
              <p className="text-secondary mb-3">
                Captain Marvel was just amazing I loved it the humour and entertainment. I say the plot of the film was well set up showing how carol got her powers and I would rate this film 9 out of 10.
              </p>
              <div className="d-flex align-items-center">
                <div
                  className="bg-secondary rounded-circle mr-3"
                  style={{ width: "3rem", height: "3rem" }}
                >
                  <img
                    src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMYfcBLlhgizPF017p6cbAnAk6uDITSLkIqWg6IBt1qWg2I8dZ"
                    className="bg-secondary rounded-circle mr-3"
                    alt="review"
                    style={{ width: "3rem", height: "3rem" }}
                  ></img>
                </div>
                <p className="font-weight-bold text-dark">Nemo enim</p>
              </div>
            </div>
            <div
              className="bg-secondary"
            >
              <img
                src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMYfcBLlhgizPF017p6cbAnAk6uDITSLkIqWg6IBt1qWg2I8dZ"
                alt="review"
                style={{ width: "23rem", height: "13rem" }}
              ></img>
            </div>
          </div>
        </div>

        {/* You might also like Section */}
        <div>
          <h2 className="h5 text-dark font-weight-bold mb-3">
            You might also like
          </h2>
          <div className="row">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="col-md-2 mb-4">
                <div className="bg-white p-3 rounded shadow-sm d-flex flex-column align-items-center">
                  <div
                    className="bg-secondary rounded mb-3"
                    style={{ width: "100%", height: "8rem" }}
                  >
                    <img src="https://upload.wikimedia.org/wikipedia/en/e/ed/The_Flash_%28film%29_poster.jpg" className="bg-secondary rounded mb-3"
                    style={{ width: "100%", height: "8rem" }} alt="movie"></img>
                  </div>
                  <h3 className="h6 font-weight-bold">Sed ut perspiciatis</h3>
                  <p className="text-secondary text-center">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
