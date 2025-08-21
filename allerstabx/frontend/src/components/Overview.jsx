import React from 'react'
import './Overview.css'

export default function Overview(){
  return (
    <section className="overview">
      <div className="overview-header">
        <hr className="divider" />
        <h2>Overview</h2>
      </div>
      
      <div className="overview-diagram">
        {/* Data Collection */}
        <div className="diagram-section data-collection">
          <h3>Data Collection</h3>
          <div className="data-flow">
            <div className="hexagon">aa</div>
            <div className="arrow">→</div>
            <div className="database-icon">🗄️</div>
          </div>
        </div>

        {/* Datasets of Protein */}
        <div className="diagram-section datasets">
          <h3>Datasets of Protein</h3>
          <div className="dataset-containers">
            <div className="dataset positive">
              <div className="container-icon">🔴</div>
              <div className="container-label">Allergenic (Positive)</div>
              <div className="container-count">11,930</div>
            </div>
            <div className="dataset negative">
              <div className="container-icon">🔵</div>
              <div className="container-label">Non-Allergenic (Negative)</div>
              <div className="container-count">11,930</div>
            </div>
          </div>
        </div>

        {/* Data Redundancy */}
        <div className="diagram-section redundancy">
          <h3>Data Redundancy</h3>
          <div className="cd-hit">
            <div className="cd-hit-icon">⚙️</div>
            <div className="cd-hit-label">CD-HIT</div>
            <div className="cd-hit-threshold">Threshold (0.9)</div>
            <div className="cd-hit-clusters">
              <div>Positive (2341)</div>
              <div>Negative (4829)</div>
            </div>
          </div>
        </div>

        {/* Data Division */}
        <div className="diagram-section division">
          <h3>Data Division</h3>
          <div className="pie-chart">
            <div className="pie-slice training">20% Training</div>
            <div className="pie-slice testing">20% Testing</div>
            <div className="pie-slice validation">60% Validation</div>
          </div>
        </div>

        {/* AllerStack Web Server */}
        <div className="diagram-section server">
          <h3>AllerStack Web Server</h3>
          <div className="server-icon">🌐</div>
        </div>

        {/* Stack Model */}
        <div className="diagram-section stack-model">
          <h3>Stack Model</h3>
          <div className="stack-architecture">
            <div className="meta-model">
              <div className="meta-label">XGBoost Meta Model (2nd Layer)</div>
              <div className="meta-icon">⚙️</div>
            </div>
            <div className="base-models">
              <div className="base-model">
                <div className="model-icon">⚙️</div>
                <div className="model-label">ANN</div>
              </div>
              <div className="base-model">
                <div className="model-icon">⚙️</div>
                <div className="model-label">KNN</div>
              </div>
              <div className="base-model">
                <div className="model-icon">⚙️</div>
                <div className="model-label">SVC</div>
              </div>
              <div className="base-model">
                <div className="model-icon">⚙️</div>
                <div className="model-label">QDA</div>
              </div>
            </div>
            <div className="predictions">
              <div className="predictions-label">Predictions</div>
              <div className="features-label">Features for Meta Model (2nd Layer)</div>
            </div>
          </div>
        </div>

        {/* Selection */}
        <div className="diagram-section selection">
          <h3>Selection</h3>
          <div className="selection-bars">
            <div className="selection-bar biopython">
              <div className="bar-fill"></div>
              <div className="bar-label">Biopython</div>
              <div className="bar-count">53</div>
            </div>
            <div className="selection-bar gradient">
              <div className="bar-fill"></div>
              <div className="bar-label">GradientBoosting selection</div>
              <div className="bar-count">437</div>
            </div>
          </div>
          <div className="esm2-selection">
            <div className="esm2-label">ESM2</div>
            <div className="esm2-counts">
              <span>133</span>
              <span>1280</span>
            </div>
          </div>
        </div>

        {/* Feature Extraction */}
        <div className="diagram-section feature-extraction">
          <h3>Feature Extraction</h3>
          <div className="feature-methods">
            <div className="feature-method">
              <div className="method-label">Biopython</div>
              <div className="method-icon">🔗</div>
              <div className="method-name">Library</div>
            </div>
            <div className="feature-method">
              <div className="method-label">ESM2 pre-trained model</div>
              <div className="method-icon">🧠</div>
              <div className="method-name">Neural Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}