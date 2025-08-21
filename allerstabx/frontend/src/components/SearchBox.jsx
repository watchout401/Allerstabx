import React, { useState } from "react";
import "./SearchBox.css";

export default function SearchBox() {
  const [tab, setTab] = useState("search");
  const [criteria, setCriteria] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("single_input");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");

  const submitSearch = async (e) => {
    e.preventDefault();
    if (!criteria || !query) {
      alert("choose criterion and input");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ criteria, query }),
      });
      const data = await res.json();
      console.log("search result", data);
      alert("Search response logged in console");
    } catch (err) {
      console.error(err);
      alert("search failed");
    } finally {
      setLoading(false);
    }
  };

  const submitPredict = async (e) => {
    e.preventDefault();

    if (model === "fasta") {
      if (!file) {
        alert("Please upload a file");
        return;
      }
      if (!email) {
        alert("Please enter an email");
        return;
      }
    } else {
      if (!query) {
        alert("Please enter sequence");
        return;
      }
    }

    setLoading(true);
    try {
      let res;
      if (model === "fasta") {
        const formData = new FormData();
        formData.append("model", "esm2");
        formData.append("file", file);
        formData.append("email", email);
        res = await fetch("http://127.0.0.1:8000/api/predict", {
          method: "POST",
          body: formData,
        });
      } else {
        res = await fetch("http://127.0.0.1:8000/api/predict", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: "esm2", sequence: query }),
        });
      }
      const data = await res.json();
      console.log("predict result", data);
      alert("Prediction response logged in console");
    } catch (err) {
      console.error(err);
      alert("prediction failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-card">
      <div className="tabs">
        <button
          className={tab === "search" ? "tab-btn active" : "tab-btn"}
          onClick={() => setTab("search")}
        >
          Search
        </button>
        <button
          className={tab === "predict" ? "tab-btn active" : "tab-btn"}
          onClick={() => setTab("predict")}
        >
          Predict
        </button>
      </div>

      {tab === "search" ? (
        <form onSubmit={submitSearch} className="search-form">
          <div className="form-group">
            <label>Search By-</label>
            <select
              value={criteria}
              onChange={(e) => setCriteria(e.target.value)}
              className="form-select"
            >
              <option value="">-- Select Criterion --</option>
              <option value="Entry">Entry</option>
              <option value="Sequence">Sequence</option>
              <option value="Entry Name">Entry Name</option>
              <option value="Organism">Organism</option>
              <option value="Protine Name">Protine Name</option>
              <option value="Classification">Classification</option>
            </select>
          </div>
          <div className="form-group">
          {criteria ? `Enter ${criteria.toLowerCase()}:` : "Enter:"}
          {criteria === "Classification" ? (
            <select
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-select"
            >
              <option value="">-- Select Classification --</option>
              <option value="Neurotoxin">Neurotoxin</option>
              <option value="Cytotoxin">Cytotoxin</option>
              <option value="Hemotoxin">Hemotoxin</option>
              <option value="Enterotoxin">Enterotoxin</option>
            </select>
          ) : (
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-textarea"
              placeholder="Enter your search query..."
            />
          )}
          </div>
          <button type="submit" disabled={loading} className="search-btn">
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
      ) : (
        <form onSubmit={submitPredict} className="search-form">
          <div className="form-group">
            <label>Model</label>
            <select
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
                setQuery("");
                setFile(null);
              }}
              className="form-select"
            >
              <option value="single_input">Single Input</option>
              <option value="mini_batch">Mini Batch (Multiple sequences, one per line)</option>
              <option value="fasta">Batch Upload (.txt , .csv , .fasta)</option>
            </select>
          </div>

          {model === "single_input" && (
            <div className="form-group">
              <label>Enter sequence</label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-textarea"
                placeholder="Enter protein sequence here..."
              />
            </div>
          )}

          {model === "mini_batch" && (
            <div className="form-group">
              <label>Enter sequence</label>
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="form-textarea"
                placeholder="Enter protein sequences line by line..."
              />
            </div>
          )}

          {model === "fasta" && (
            <>
              <div className="form-group">
                <label>Upload file</label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".txt,.csv,.fasta"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <button
                  type="button"
                  className="upload-btn"
                  onClick={() => document.getElementById("file-upload").click()}
                >
                  {file ? file.name : "Choose File"}
                </button>
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="Enter your email. Results will be sent here."
                  required
                />
              </div>
            </>
          )}

          <button type="submit" disabled={loading} className="search-btn">
            {loading ? "Predicting..." : "Predict"}
          </button>
        </form>
      )}
    </div>
  );
}