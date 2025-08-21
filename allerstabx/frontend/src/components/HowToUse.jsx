import React from "react";
import "./HowToUse.css";

export default function HowToUse() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>How To Use AllerStabX</h1>
        <p>Learn how to effectively use our platform for allergenicity prediction</p>
      </div>
      
      <div className="how-to-use-content">
        <div className="step-item">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Prepare Your Protein Sequence</h3>
            <p>Ensure your protein sequence is in the correct amino acid format. Remove any non-standard characters or spaces.</p>
          </div>
        </div>
        
        <div className="step-item">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Enter Sequence in Search Box</h3>
            <p>Go to the home page and paste your protein sequence into the search box provided.</p>
          </div>
        </div>
        
        <div className="step-item">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Submit for Analysis</h3>
            <p>Click the search button to submit your sequence for allergenicity prediction analysis.</p>
          </div>
        </div>
        
        <div className="step-item">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Review Results</h3>
            <p>Examine the prediction results, including confidence scores and detailed analysis.</p>
          </div>
        </div>
        
        <div className="step-item">
          <div className="step-number">5</div>
          <div className="step-content">
            <h3>Download Results</h3>
            <p>Optionally download your results in various formats for further analysis or reporting.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
