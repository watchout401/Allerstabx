
// export default ContactUs;
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../styles/SearchResult.css";
import { Link } from "react-router-dom"; 

function SearchResult() {
    const location = useLocation();
    const [results, setResults] = useState([]);
    const [diseases, setDiseases] = useState([]); 

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const queryParams = new URLSearchParams(location.search);
    const searchedCommonName  = queryParams.get("common_name");

    const fetchResults = async () => {
        // Extract the search parameters from URL
        setLoading(true);
        setError(null); 
        
        const commonName = queryParams.get("common_name");
        const scientificName = queryParams.get("scientific_name");
        const taxId = queryParams.get("ncbi_tax_id");
        
        if (!commonName && !scientificName && !taxId) {
            console.log("No search parameters provided");
            setResults([]);
            setLoading(false); 
            return;
        }
        try {
            const response = await fetch(
                                    `http://127.0.0.1:8000/spices/search/?common_name=${commonName}&scientific_name=${scientificName}&ncbi_tax_id=${taxId}`              );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();

            if (Array.isArray(data)) {
                setResults(data);
                if (data.length > 0) {
                    fetchDiseases(data[0].ncbi_tax_id); // Fetch diseases for the first result
                }
            } else {
                setResults([]);
            }
        } catch (error) {
            console.error("Failed to fetch spices:", error);
            setError("Failed to fetch spices. Please try again later.");
            setResults([]);
        } finally {
            setLoading(false);
        }
    };
     // Fetch disease associations
     const fetchDiseases = async (taxid) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/associations/${taxid}`);
            if (!response.ok) {
                throw new Error("Failed to fetch disease associations");
            }
            const data = await response.json();
            setDiseases(data.diseases);
        } catch (error) {
            setDiseases([]);
        }
    };

    useEffect(() => {
        fetchResults();
    }, [location.search]); // Re-fetch when search parameters change
    return (
        <>
            <Navbar />
         
         <div className="searchresult-page">
                {results.length > 0 && (
                    <div className="image-rightbox-wrapper">
                        {/* Left Box: Image */}
                        <div className="left-box">
                            { results[0].image_url ? (
                                <img
                                src={`http://localhost:8000/images/${results[0].ncbi_tax_id}.jpg`}
                                alt={results[0].common_name}
                                // className="spice-image"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Available'; 
                                  }}
                                />
                            
                        ) : (
                            <img
                                src="https://via.placeholder.com/300x200?text=No+Image+Available"
                                alt="default_image"
                                className="spice-image"
                            />
                        )}
                    </div>

                        {/* Right Box: Spice Details */}
                        <div className="right-box">
                            <div className="spice-details">
                                <p><strong>NCBI Taxonomy ID:</strong> {results[0].ncbi_tax_id || "N/A"}</p>
                                <p><strong>Common Names:</strong> {results[0].common_name || "N/A"}</p>
                                <p><strong>Scientific Name:</strong> {results[0].scientific_name || "N/A"}</p>
                                <p>
                                    <strong>Wikipedia:</strong>{" "}
                                    {results[0].wikipedia_link ? (
                                        <a href={results[0].wikipedia_link} target="_blank" rel="noopener noreferrer">
                                            Click Here
                                        </a>
                                    ) : (
                                        "N/A"
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {loading && <p>Loading...</p>}
                {error && <p className="error-message">{error}</p>}
                {!loading && !error && results.length === 0 && (
                    <p>No results found.</p>
                )}

                <h2>Diseases associated with {searchedCommonName|| "this spice"}</h2>
                <div className="diseases-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Diseases</th>
                                <th>Association</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {diseases.map((disease, index) => (
                                <tr key={index}>
                                    <td>{disease["Disease Title"]}</td>
                                    <td>
                                        <span style={{ color: "green" }}>{disease["Positive Associations"]}</span>
                                        {", "}
                                        <span style={{ color: "red" }}>{disease["Negative Associations"]}</span>
                                    </td>
                                    <td>
                                        <Link to={`/disease-details/${disease["MeSH ID"]}`}>Details</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default SearchResult;

