import React from "react";
import ImageCarousel from "./Carousel";

function Contact() {
  return (
    <>
      <div>{<ImageCarousel />}</div>
      <div className="contact-container">
        <div className="contact-section">
          <h2>Contact Elida Gibbs AFC</h2>
          <p>
            <strong>Name:</strong> Dean Worrall
            <br />
            <strong>Phone:</strong> 07777 777 777
            <br />
            <strong>Email:</strong> deanworrall@example.com
          </p>
          <h4>Key Information</h4>
          <strong>Kick Off:</strong> Sunday (10 AM)
          <br />
          <strong>Home Pitch:</strong> Bedquilts Recreation Ground, Leeds, LS16
          8BX
          <br />
          <strong>Manager:</strong> Adam Fenwick
          <br />
          <strong>Captain:</strong> Dean Worrall
          <p>
            Elida Gibbs are always on the lookout for new players to join our
            squad. Following promotion from Division 3 in the 2023/24 season, we
            are ambitious to continue our journey up the divisions.
            <br />
          </p>
          <p>
            Whether you're an experienced footballer, fresh from underage
            football, or looking to get back into the game after a period of
            time out, we'd love to hear from you. Our team is made up of all
            ages so don't be shy! We're a good bunch of lads who enjoy
            competitive football, having a laugh, and supporting each other both
            on and off the pitch.
            <br />
          </p>
          <p>
            The team holds weekly training sessions every Tuesday at Cockburn
            School, Gipsy Lane, Beeston, Leeds, LS11 5TT, from 7:30 PM to 9:00
            PM. Matches kick off at 10:00 AM on Sundays, with our home games
            played at Bedquilts Recreation Ground, Leeds, LS16 8BX.
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default Contact;
