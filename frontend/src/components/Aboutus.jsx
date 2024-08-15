import React from "react";
import "./Aboutus.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>
          Welcome to CulturalCanvas, where we bring the magic of cinema to your
          fingertips.
        </p>
      </header>
{/* I have given source of every image that I used */}
      <section className="about-us-highlight">
        <div className="highlight-text">
          <h2>Discover Our Story</h2>
          <p>
          At CulturalCanvas, our mission goes beyond just showing movies. We strive to create a vibrant community of film lovers who can connect, share, and explore the world of cinema together. Our platform is designed with you in mind, offering features like tailored recommendations based on your viewing history, exclusive screenings, and real-time updates on the latest releases. 
       
          We’re committed to enhancing your movie-going experience with the latest advancements in technology, ensuring that you have access to high-quality images and immersive trailers that bring each film to life. Our dedicated customer support team is always here to assist you, making sure that your journey from booking to watching is as smooth and enjoyable as possible.

          At CulturalCanvas, we don’t just show movies; we celebrate them. Join us and be part of a community that cherishes the art of filmmaking and the joy it brings to our lives. Your next great movie experience is just a click away.
          </p>
        </div>
        <div className="highlight-image">
          <img
            src="https://cloudinary.hbs.edu/hbsit/image/upload/s--UxQUn00v--/f_auto,c_fill,h_375,w_750,/v20200101/7CB278D495C9D38E618D9EB1956BB5CF.jpg"
            alt="Discover Our Story"
          />
        </div>
      </section>

      <section className="about-us-content">
        <div className="about-us-intro">
          <div className="intro-text">
            <h2>Our Mission</h2>
            <p>
            Our Mission

At CulturalCanvas, our mission is to transform the way you experience cinema, making booking movie tickets as seamless and enjoyable as possible. We are dedicated to providing an unparalleled experience by delivering up-to-date movie schedules, effortless booking processes, and exclusive offers that cater to your preferences. Our commitment to innovation and customer satisfaction ensures that you receive timely information, intuitive navigation, and personalized recommendations. 

We believe that the magic of cinema should be accessible and enjoyable for everyone. By integrating cutting-edge technology with a passion for films, we aim to create a platform that not only meets your needs but exceeds your expectations. Whether you're planning a night out or looking for the perfect film to watch from the comfort of your home, CulturalCanvas is here to enhance your movie-going experience and bring the joy of cinema closer to you.
            </p>
          </div>
          <div className="intro-image">
            <img
              src="https://camo.githubusercontent.com/7dd3fb7a7de76ee345f8f40919c5017a750d1f6521c110edeab0b8b8dce27e85/68747470733a2f2f7777772e74656368757a2e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031392f30382f4f6e6c696e652d4d6f7669652d5469636b65742d426f6f6b696e672d42616e6e65722d312d31323830783732302e6a7067"
              alt="Our Mission"
            />
          </div>
        </div>

       

        <div className="about-us-founders">
          <h2>Meet Our Founders</h2>
          <div className="founders-cards">
            <div className="founder-card">
              <img
                src="https://cdn.outsideonline.com/wp-content/uploads/2022/12/steve-rendle-vf-corp.jpg?width=730"
                alt="Founder 1"
              />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
              <p>John Doe is the Founder and CEO of CulturalCanvas, where he combines his passion for cinema with his expertise in technology and business management. His leadership has driven the company’s growth and innovation, ensuring a seamless and enjoyable movie-going experience. John’s vision and dedication to excellence are reflected in every aspect of the platform, making CulturalCanvas a leading choice for movie enthusiasts.</p>
            </div>
            <div className="founder-card">
              <img
                src="https://cdn.outsideonline.com/wp-content/uploads/2022/04/Headshot.jpg"
                alt="Founder 2"
              />
              <h3>Jane Smith</h3>
              <p>Co-Founder & COO</p>
              <p>Jane Smith is the Co-Founder and COO of CulturalCanvas. With a strong background in operations and management, Jane plays a crucial role in ensuring the platform runs smoothly and efficiently. Her expertise in streamlining processes and optimizing user experiences is key to CulturalCanvas’s success. Jane’s commitment to excellence and operational excellence helps drive the company’s growth and deliver a top-notch experience for movie lovers.</p>
            </div>
            <div className="founder-card">
              <img
                src="https://img.freepik.com/photos-premium/jeune-femme-affaires-asiatique-souriant-camera-posant-fond-du-bureau-employe-bureau_899263-2640.jpg"
                alt="Founder 3"
              />
              <h3>Emily Johnson</h3>
              <p>Co-Founder & CTO</p>
              <p>Emily Johnson is the Co-Founder and CTO of CulturalCanvas. With a robust background in technology and innovation, Emily oversees the development and implementation of the platform’s technical infrastructure. Her expertise ensures that CulturalCanvas stays at the forefront of technological advancements, providing a seamless and cutting-edge experience for users. Emily’s dedication to excellence in tech drives the company’s growth and enhances the movie-going experience for cinema enthusiasts.</p>
            </div>
            <div className="founder-card">
              <img
                src="https://www.hollywoodreporter.com/wp-content/uploads/2021/06/SUM-HUANG-CourtesyEndeavor-H-2021.jpg?w=1296&h=730&crop=1"
                alt="Founder 4"
              />
              <h3>Michael Lee</h3>
              <p>Co-Founder & CMO</p>
              <p>Michael Lee is the Co-Founder and CMO of CulturalCanvas. With a strong background in marketing and brand strategy, Michael is responsible for shaping the company's brand identity and driving its marketing initiatives. His expertise in audience engagement and market analysis helps position CulturalCanvas as a leading platform in the industry. Michael’s strategic vision and creative approach ensure that CulturalCanvas connects effectively with movie lovers and stands out in the competitive landscape.</p>
            </div>
          </div>
        </div>

        <div className="about-us-newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="about-us-address">
          <h2>Our Address</h2>
          <div className="address-details">
            <p>123 Movie Street, Cinemaville, CA 90210</p>
            <div className="google-map">
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7391893627056!2d-122.4194180846811!3d37.7749292797585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f7c1c3b5f%3A0x95a0bcdac5ff7b40!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1633387714292!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="about-us-feedback">
          <h2>Feedback Form</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Feedback" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <footer className="about-us-footer">
        <p>
          &copy; {new Date().getFullYear()} CulturalCanvas. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
