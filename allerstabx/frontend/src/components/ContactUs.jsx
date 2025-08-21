import React from 'react'

export default function ContactUs() {
  return (
    <div className="container">
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-5">
            <h2><strong>Contact Us</strong></h2>	
            <p>Dr. Ganesh Bagler<br />
              <a href="http://ccb.iiitd.ac.in/">Center for Computational Biology</a><br />
              Indraprastha Institute of Information Technology Delhi (IIIT Delhi),<br />
              New Academic Block,<br />
              Okhla Phase III, Near Govindpuri Metro Station,<br />
              New Delhi, India 110020.<br />
              <b>Email: </b><a href="mailto:bagler+SpiceRx@iiitd.ac.in">bagler+SpiceRx@iiitd.ac.in</a><br />
              <b>Tel:</b> +91-11-26907-443 (Work)</p>
          </div>
          <div className="col-md-7">
            <iframe 
              style={{minHeight: "500px", width: "100%", border: 0}} 
              frameBorder="0" 
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJHazaZOXjDDkRVsV7DjQuWCw&key=AIzaSyBRBQG98E5YdUoooyAk2wd-_olpWmL5ACE" 
              allowFullScreen
              title="IIIT Delhi Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}