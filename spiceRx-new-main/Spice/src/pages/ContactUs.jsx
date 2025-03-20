import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ContactUs.css";

function ContactUs() {
  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      {/* Main Contact Content */}
      <div className="contact-page">
        <div className="contact-hero">
          <h1>Get In Touch</h1>
          <p>We’re here to answer your questions and help you get started.</p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>
              <strong>Name:</strong> Dr. Ganesh Bagler
            </p>
            <p>
              <strong>Department:</strong> Center for Computational Biology
            </p>
            <p>
              <strong>Address:</strong> Indraprastha Institute of Information Technology <br></br>Delhi (IIIT Delhi),
New Academic Block,
Okhla Phase III, Near Govindpuri Metro Station,
New Delhi, India 110020.
            </p>
            <p>
              <strong>Email:</strong> bagler+SpiceRx@iiitd.ac.in
            </p>
            <p>
              <strong>Phone:</strong> +91-11-26907433 (Work)
            </p>
            
          </div>
          <div className="contact-map">
            <h2>Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHazaZOXjDDkRVsV7DjQuWCw&key=AIzaSyBRBQG98E5YdUoooyAk2wd-_olpWmL5ACE"
              title="IIIT-Delhi Map"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <Footer />
    </>
  );
}

export default ContactUs;

