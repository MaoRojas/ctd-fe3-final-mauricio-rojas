import React from "react";
import { Link } from "react-router-dom";
import odontologia1 from "../../assets/img/odontologia1.png";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="texto">
        <h1>Oral Care Benefits</h1>
        <p>Dental services are crucial for maintaining optimal oral health and overall well-being. Our dental practice offers a comprehensive range of dental services to help patients achieve a healthy, beautiful smile.</p>
        <p>We provide preventive care services such as regular check-ups, cleanings, and oral cancer screenings to detect any potential issues early on. Our restorative services include fillings, crowns, bridges, and dental implants to restore damaged or missing teeth.</p>
        <p>Cosmetic dentistry services such as teeth whitening, veneers, and orthodontics are also available to enhance the appearance of your smile. Our experienced dentists utilize state-of-the-art technology to ensure that you receive the highest quality of care possible.</p>
        <p>In addition to our dental services, we also offer sedation options to help patients who experience dental anxiety or fear. We prioritize patient comfort and strive to make every visit as stress-free as possible.</p>
        <p>We believe that a healthy smile is essential to your overall health and well-being. That's why we are committed to providing the best possible dental care to all of our patients. Contact us today to schedule an appointment and start your journey towards optimal oral health.</p>
      </div>
      <img src={odontologia1} />
    </div>
  );
};
