import React from "react";
import "./faq.css";

export default function Faq() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about AllerStabX</p>
      </div>
      
      <div className="faq-content">
        <div className="faq-item">
          <h3>1. What are the various services provided by AllerStack webserver?</h3>
          <p>
            AllerStack provides the following services: <br/>
            • Prediction of allergenic and non-allergenic protein dataset <br/>
            • A large dataset of 23,830 proteins (11930 allergenic and 11930 non-allergenic) <br/>
            • Mini batch prediction of protein peptides (upto 10) <br/>
            • Batch prediction of peptides (upto 200)
          </p>
        </div>

        <div className="faq-item">
          <h3>2. What are the libraries used to extract the features of proteins?</h3>
          <p>
            The pre-trained ESM2 model and Biopython library were used to extract the features.
          </p>
        </div>

        <div className="faq-item">
          <h3>3. What is the predictive performance of the models?</h3>
          <p>
            We predict the allergenicity of proteins by the Stack Model with an accuracy of 96.87 and an F1 score of 96.86.
          </p>
        </div>

        <div className="faq-item">
          <h3>4. Which systems are supported by AllerStack?</h3>
          <p>
            AllerStack has been tested to run successfully on the following systems: Linux, MacOS, Windows.
          </p>
        </div>

        <div className="faq-item">
          <h3>5. Is the web server mobile friendly?</h3>
          <p>
            While all the functionality of AllerStack can be accessed using a mobile browser, AllerStack is best viewed on mid to large screen sizes.
          </p>
        </div>

        <div className="faq-item">
          <h3>6. Do you use cookies?</h3>
          <p>
            We are using cookies to provide statistics that help us give best experience for our site.
          </p>
        </div>

        <div className="faq-item">
          <h3>7. Under what licence is the server available?</h3>
          <p>
            Front End: HTML, CSS, JavaScript, jQuery, Bootstrap <br/>
            Back End: Python, Flask, MongoDB, Scikit-learn, Pandas, NumPy.
          </p>
        </div>

        <div className="faq-item">
          <h3>8. What is the Tech Stack used for building AllerStack?</h3>
          <p>
            While all the functionality of AllerStack can be accessed using a mobile browser, AllerStack is best viewed on mid to large screen sizes.
          </p>
        </div>

        <div className="faq-item">
          <h3>9. How do I contribute to AllerStack web server?</h3>
          <p>
            You may contact us at bagler+AllerStack@iiitd.ac.in for any suggestions pertaining to the web server.
          </p>
        </div>

        <div className="faq-item">
          <h3>10. How to cite AllerStack?</h3>
          <p>
            Harshika Sharma, Mansi Goel, Devkul Sahu, Mazhar Ayaz Sayed, Pratham Mangla, 
            Pratham Shekhawat, Shubham Yadav, and Ganesh Bagler, 
            “AllerStack- Computational Stack Model To Predict the Allergenicity of Proteins”, 
            BBA advances, 2024.
          </p>
        </div>
      </div>
    </div>
  );
}