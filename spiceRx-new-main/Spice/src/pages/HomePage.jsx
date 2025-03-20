// import { useState } from "react";
// import { Chart } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// import { Input } from "../components/UI/input";
// import { Button } from "../components/UI/button";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/HomePage.css";

// export default function SpiceRx() {
//   const [activeTab, setActiveTab] = useState("Spices/Herbs");
//   const navigate = useNavigate();

//   // 🔹 Form States
//   const [searchTerm, setSearchTerm] = useState("");
//   const [scientificName, setScientificName] = useState("");
//   const [taxId, setTaxId] = useState("");
//   const [selectedGraph, setSelectedGraph] = useState("Spice");

//   // 🔹 Autocomplete State
//   const [autocompleteResults, setAutocompleteResults] = useState([]);
//   const [scientificNameResults, setScientificNameResults] = useState([]);
//   const [taxIdResults, setTaxIdResults] = useState([]);
//   const [spiceData, setSpiceData] = useState(null);

//   const API_BASE_URL = "http://127.0.0.1:8000";

//   // Dummy data for each graph button
//   const dummyGraphData = {
//     Spice: {
//       labels: ["Jan", "Feb", "Mar", "Apr"],
//       datasets: [
//         {
//           label: "Sales",
//           data: [10, 20, 30, 40],
//           backgroundColor: "rgba(75, 192, 192, 0.2)",
//           borderColor: "rgba(75, 192, 192, 1)",
//           borderWidth: 1,
//         },
//       ],
//     },
//     Disease: {
//       labels: ["Red", "Blue", "Yellow", "Green"],
//       datasets: [
//         {
//           label: "Colors",
//           data: [5, 15, 10, 20],
//           backgroundColor: "rgba(255, 99, 132, 0.2)",
//           borderColor: "rgba(255, 99, 132, 1)",
//           borderWidth: 1,
//         },
//       ],
//     },
//     PhytochemicalDisease: {
//       labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
//       datasets: [
//         {
//           label: "Visits",
//           data: [50, 60, 70, 80, 90],
//           backgroundColor: "rgba(153, 102, 255, 0.2)",
//           borderColor: "rgba(153, 102, 255, 1)",
//           borderWidth: 1,
//         },
//       ],
//     },
//     MolecularWeight: {
//       labels: ["Q1", "Q2", "Q3", "Q4"],
//       datasets: [
//         {
//           label: "Revenue",
//           data: [100, 150, 200, 250],
//           backgroundColor: "rgba(255, 206, 86, 0.2)",
//           borderColor: "rgba(255, 206, 86, 1)",
//           borderWidth: 1,
//         },
//       ],
//     },
//     ALogP: {
//       labels: ["Apple", "Banana", "Cherry", "Date"],
//       datasets: [
//         {
//           label: "Fruits",
//           data: [12, 19, 3, 5],
//           backgroundColor: "rgba(54, 162, 235, 0.2)",
//           borderColor: "rgba(54, 162, 235, 1)",
//           borderWidth: 1,
//         },
//       ],
//     },
//   };

//   ///////////////////////////////////////////

//   // Function to fetch autocomplete data
//   const fetchAutocomplete = async (query, field, setResults) => {
//     if (!query.trim()) {
//       setResults([]); // Clear suggestions if input is empty
//       return;
//     }
//     try {
//       const response = await fetch(
//         `${API_BASE_URL}/spices/autocomplete/?query=${query}&field=${field}`
//       );
//       if (!response.ok) throw new Error(`Failed to fetch autocomplete for ${field}`);

//       let data = await response.json();

//       if (field === "common_name" || field === "scientific_name") {
//         data = data.map((spice) => ({
//           [field]: spice[field].split(",")[0].trim(), // Take the first name
//         }));
//       }

//       setResults(data.slice(0, 5)); // Limit to top 5 suggestions
//     } catch (error) {
//       console.error(`Autocomplete error (${field}):`, error);
//     }
//   };

//   // Function to handle search
//   const handleSearch = async () => {
//     const commonName = searchTerm.trim();
//     const sciName = scientificName.trim();
//     const taxIdVal = taxId;
//     let taxIdNumber = null;

//     // Validate taxId (if provided)
//     if (taxIdVal) {
//       taxIdNumber = parseInt(taxIdVal, 10);
//       if (isNaN(taxIdNumber)) {
//         alert("NCBI Tax ID must be a valid number.");
//         return;
//       }
//     }

//     // Ensure at least one field is filled
//     if (!commonName && !sciName && !taxIdVal) {
//       alert("Please enter at least one search field before proceeding.");
//       return;
//     }

//     const queryParams = new URLSearchParams({
//       common_name: commonName,
//       scientific_name: sciName,
//       ncbi_tax_id: taxIdNumber || "" // Send as number (or omit if empty)
//     }).toString();

//     navigate(`/searchresult?${queryParams}`);
//   };

//   return (
//     <div className="page-container">
//       {/* NAVBAR */}
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="hero-section">
//         <div className="content-grid">
//           <div className="content-summary">
//             <h1 className="title">SpiceRx Summary</h1>
//             <div className="description">
//               <p>
//                 Spices and herbs are key dietary ingredients used in cuisines
//                 across the world. They have been reported to be of medicinal
//                 value for a wide variety of diseases through a large body of
//                 biomedical investigations.
//               </p>
//               <p>
//                 SpiceRx is a systematic compilation of evidence-based knowledge
//                 pertaining to the health impacts of culinary spices and herbs.
//                 It provides a platform for exploring the health impact of
//                 culinary spices and herbs through a structured database of
//                 tripartite relationships.
//               </p>
//             </div>
//           </div>

//           <div className="form-container">
//             <div className="tab-list">
//               {["Spices/Herbs", "Disease", "Phytochemical"].map((tab) => (
//                 <Button
//                   key={tab}
//                   variant="ghost"
//                   className={`tab-button ${activeTab === tab ? "active-tab" : ""}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab}
//                 </Button>
//               ))}
//             </div>

//             <div className="form">
//               <div className="fields">
//                 {activeTab === "Spices/Herbs" && (
//                   <>
//                     <div className="form-group">
//                       <label className="form-label">Common Name</label>
//                       <Input
//                         type="text"
//                         value={searchTerm}
//                         onChange={(e) => {
//                           setSearchTerm(e.target.value);
//                           fetchAutocomplete(e.target.value, "common_name", setAutocompleteResults);
//                         }}
//                         className="input-field"
//                         placeholder="Enter Common Name (e.g., Ginger)"
//                       />
//                       {autocompleteResults.length > 0 && (
//                         <div className="autocomplete-dropdown">
//                           {autocompleteResults.map((spice, index) => (
//                             <div
//                               key={index}
//                               onClick={() => {
//                                 setSearchTerm(spice.common_name);
//                                 setAutocompleteResults([]);
//                               }}
//                               className="autocomplete-item"
//                             >
//                               {spice.common_name}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Scientific Name</label>
//                       <Input
//                         type="text"
//                         value={scientificName}
//                         onChange={(e) => {
//                           setScientificName(e.target.value);
//                           fetchAutocomplete(e.target.value, "scientific_name", setScientificNameResults);
//                         }}
//                         className="input-field"
//                         placeholder="Enter Scientific Name (e.g., Zingiber officinale)"
//                       />
//                       {scientificNameResults.length > 0 && (
//                         <div className="autocomplete-dropdown">
//                           {scientificNameResults.map((spice, index) => (
//                             <div
//                               key={index}
//                               onClick={() => {
//                                 setScientificName(spice.scientific_name);
//                                 setScientificNameResults([]);
//                               }}
//                               className="autocomplete-item"
//                             >
//                               {spice.scientific_name}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">NCBI TAX ID</label>
//                       <Input
//                         type="text"
//                         value={taxId}
//                         onChange={(e) => {
//                           const value = e.target.value.replace(/[^0-9]/g, "");
//                           setTaxId(value);
//                           fetchAutocomplete(value, "ncbi_tax_id", setTaxIdResults);
//                         }}
//                         className="input-field"
//                         placeholder="Enter NCBI Tax ID (e.g., 943)"
//                       />
//                       {taxIdResults.length > 0 && (
//                         <div className="autocomplete-dropdown">
//                           {taxIdResults.map((spice, index) => (
//                             <div
//                               key={index}
//                               onClick={() => {
//                                 setTaxId(String(spice.ncbi_tax_id));
//                                 setTaxIdResults([]);
//                               }}
//                               className="autocomplete-item"
//                             >
//                               {spice.ncbi_tax_id}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "Disease" && (
//                   <>
//                     <div className="form-group">
//                       <label className="form-label">MeSH Disease Name:</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">MeSH Disease Category:</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">MeSH Disease Sub Category:</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">MeSH Disease ID:</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                   </>
//                 )}

//                 {activeTab === "Phytochemical" && (
//                   <>
//                     <div className="form-group">
//                       <label className="form-label">Common Name</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">IUPAC Name</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">PubChem ID</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">ALogP</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                   </>
//                 )}
//               </div>

//               <Button className="search-button" onClick={handleSearch}>
//                 Search
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* STATISTICS SECTION */}
//       <section className="statistics-section" id="statistics">
//         <div className="statistics-header">SpiceRx Statistics</div>
//         <div className="statistics-content">
//           <div className="graph-buttons">
//             <Button onClick={() => setSelectedGraph("Spice")}>Spice/Herb</Button>
//             <Button onClick={() => setSelectedGraph("Disease")}>Spice-Disease</Button>
//             <Button onClick={() => setSelectedGraph("PhytochemicalDisease")}>Phytochemical-Disease</Button>
//             <Button onClick={() => setSelectedGraph("MolecularWeight")}>Molecular Weight</Button>
//             <Button onClick={() => setSelectedGraph("ALogP")}>ALogP</Button>
//           </div>
//           {selectedGraph && (
//             <div className="graph-container">
//               <Chart
//                 type="bar"
//                 data={dummyGraphData[selectedGraph]}
//                 options={{
//                   scales: {
//                     y: {
//                       beginAtZero: true
//                     }
//                   }
//                 }}
//               />
//             </div>
//           )}
//         </div>
//       </section>

//       {/* FOOTER */}
//       <Footer />
//     </div>
//   );
// }

/* --------------------------New code which includes the graph fetching and design--------------------------------------  */

//

/*-New working code till 2nd graph -*/

// import { useState, useEffect } from "react";
// import { Chart } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import Papa from "papaparse";

// // Register Chart.js components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // Import local TSV files from src/GraphData folder
// import spiceReferencesTSV from "../GraphData/spice-references.tsv";
// import discatRefTSV from "../GraphData/discat-ref.tsv";
// import discatChemRefTSV from "../GraphData/discat-chem-ref.tsv";
// import mwTSV from "../GraphData/mw.tsv";
// import alogpTSV from "../GraphData/alogp.tsv";

// import { Input } from "../components/UI/input";
// import { Button } from "../components/UI/button";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/NavBar";
// import Footer from "../components/Footer";
// import "../styles/HomePage.css";

// export default function SpiceRx() {
//   const [activeTab, setActiveTab] = useState("Spices/Herbs");
//   const navigate = useNavigate();

//   // 🔹 Form States
//   const [searchTerm, setSearchTerm] = useState("");
//   const [scientificName, setScientificName] = useState("");
//   const [taxId, setTaxId] = useState("");
//   // Default to "A" so that Spice/Herb (spice-references.tsv) is loaded on page load.
//   const [selectedGraph, setSelectedGraph] = useState("A");
//   const [chartData, setChartData] = useState(null);
//   const [chartTitle, setChartTitle] = useState("");

//   // 🔹 Autocomplete State
//   const [autocompleteResults, setAutocompleteResults] = useState([]);
//   const [scientificNameResults, setScientificNameResults] = useState([]);
//   const [taxIdResults, setTaxIdResults] = useState([]);

//   // Mapping of button keys to their corresponding local TSV file imports
//   const tsvFiles = {
//     A: spiceReferencesTSV,       // Spice/Herb references
//     B: discatRefTSV,            // Disease category references
//     C: discatChemRefTSV,        // Phytochemical-Disease references
//     D: mwTSV,                   // Molecular Weight
//     E: alogpTSV,                // AlogP
//   };

//   // Function to fetch autocomplete data (unchanged)
//   const fetchAutocomplete = async (query, field, setResults) => {
//     if (!query.trim()) {
//       setResults([]);
//       return;
//     }
//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/spices/autocomplete/?query=${query}&field=${field}`
//       );
//       if (!response.ok) throw new Error(`Failed to fetch autocomplete for ${field}`);
//       let data = await response.json();
//       if (field === "common_name" || field === "scientific_name") {
//         data = data.map((spice) => ({
//           [field]: spice[field].split(",")[0].trim(),
//         }));
//       }
//       setResults(data.slice(0, 5));
//     } catch (error) {
//       console.error(`Autocomplete error (${field}):`, error);
//     }
//   };

//   // Function to handle search (unchanged)
//   const handleSearch = async () => {
//     const commonName = searchTerm.trim();
//     const sciName = scientificName.trim();
//     const taxIdVal = taxId;
//     let taxIdNumber = null;
//     if (taxIdVal) {
//       taxIdNumber = parseInt(taxIdVal, 10);
//       if (isNaN(taxIdNumber)) {
//         alert("NCBI Tax ID must be a valid number.");
//         return;
//       }
//     }
//     if (!commonName && !sciName && !taxIdVal) {
//       alert("Please enter at least one search field before proceeding.");
//       return;
//     }
//     const queryParams = new URLSearchParams({
//       common_name: commonName,
//       scientific_name: sciName,
//       ncbi_tax_id: taxIdNumber || "",
//     }).toString();
//     navigate(`/searchresult?${queryParams}`);
//   };

//   // Helper function to parse the TSV and build chart data
//   const parseTsvData = (results, labelKey) => {
//     // Filter out empty rows for the labelKey
//     const rows = results.data.filter(
//       (row) => row[labelKey] && row[labelKey].trim() !== ""
//     );

//     // Convert "Positive references" & "Negative references" to numbers
//     rows.forEach((row) => {
//       row["Positive references"] = parseFloat(row["Positive references"] || 0);
//       row["Negative references"] = parseFloat(row["Negative references"] || 0);
//     });

//     // Sort rows descending by total references
//     rows.sort((a, b) => {
//       const totalA = a["Positive references"] + a["Negative references"];
//       const totalB = b["Positive references"] + b["Negative references"];
//       return totalB - totalA;
//     });

//     // Limit to 25 entries (or however many you want to display)
//     const limitedRows = rows.slice(0, 25);

//     // Build arrays for Chart.js
//     const labels = limitedRows.map((row) => row[labelKey]);
//     const positives = limitedRows.map((row) => row["Positive references"]);
//     const negatives = limitedRows.map((row) => row["Negative references"]);

//     return {
//       labels,
//       datasets: [
//         {
//           label: "Positive",
//           data: positives,
//           backgroundColor: "rgba(54, 162, 235, 0.8)", // Blue
//           barThickness: 8,
//         },
//         {
//           label: "Negative",
//           data: negatives,
//           backgroundColor: "rgba(255, 99, 132, 0.8)", // Red
//           barThickness: 8,
//         },
//       ],
//     };
//   };

//   // useEffect to fetch and parse TSV data whenever selectedGraph changes
//   useEffect(() => {
//     const tsvUrl = tsvFiles[selectedGraph];
//     if (!tsvUrl) return;

//     fetch(tsvUrl)
//       .then((res) => res.text())
//       .then((tsvText) => {
//         // Parse the TSV text using PapaParse with a tab delimiter
//         const results = Papa.parse(tsvText, {
//           header: true,
//           delimiter: "\t",
//         });

//         // Decide which column to use for the chart labels and the chart title
//         let labelKey = "Spice/Herb name";
//         let newChartTitle = "Statistics of research articles for spices/herbs";

//         if (selectedGraph === "B") {
//           labelKey = "Disease category";
//           newChartTitle = "Statistics of research articles for MeSH disease categories";
//         } else if (selectedGraph === "C") {
//           // Example for a future "Phytochemical name" column
//           labelKey = "Phytochemical name";
//           newChartTitle = "Phytochemical-Disease references";
//         } else if (selectedGraph === "D") {
//           // Example for a future "Phytochemical name" or some MW-specific column
//           labelKey = "Phytochemical name";
//           newChartTitle = "Molecular Weight distribution";
//         } else if (selectedGraph === "E") {
//           // Example for AlogP
//           labelKey = "Phytochemical name";
//           newChartTitle = "ALogP distribution";
//         }

//         // Parse and build the chart data
//         const data = parseTsvData(results, labelKey);
//         setChartData(data);
//         setChartTitle(newChartTitle);
//       })
//       .catch((error) => {
//         console.error("Error fetching/parsing TSV:", error);
//       });
//   }, [selectedGraph]);

//   return (
//     <div className="page-container">
//       <Navbar />

//       {/* HERO SECTION */}
//       <section className="hero-section">
//         <div className="content-grid">
//           <div className="content-summary">
//             <h1 className="title">SpiceRx Summary</h1>
//             <div className="description">
//               <p>
//                 Spices and herbs are key dietary ingredients used in cuisines
//                 across the world. They have been reported to be of medicinal
//                 value for a wide variety of diseases through a large body of
//                 biomedical investigations.
//               </p>
//               <p>
//                 SpiceRx is a systematic compilation of evidence-based knowledge
//                 pertaining to the health impacts of culinary spices and herbs.
//                 It provides a platform for exploring the health impact of
//                 culinary spices and herbs through a structured database of
//                 tripartite relationships.
//               </p>
//             </div>
//           </div>

//           <div className="form-container">
//             <div className="tab-list">
//               {["Spices/Herbs", "Disease", "Phytochemical"].map((tab) => (
//                 <Button
//                   key={tab}
//                   variant="ghost"
//                   className={`tab-button ${activeTab === tab ? "active-tab" : ""}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab}
//                 </Button>
//               ))}
//             </div>

//             <div className="form">
//               <div className="fields">
//                 {/* ----- TAB: SPICES/HERBS ----- */}
//                 {activeTab === "Spices/Herbs" && (
//                   <>
//                     <div className="form-group">
//                       <label className="form-label">Common Name</label>
//                       <Input
//                         type="text"
//                         value={searchTerm}
//                         onChange={(e) => {
//                           setSearchTerm(e.target.value);
//                           fetchAutocomplete(
//                             e.target.value,
//                             "common_name",
//                             setAutocompleteResults
//                           );
//                         }}
//                         className="input-field"
//                         placeholder="Enter Common Name (e.g., Ginger)"
//                       />
//                       {autocompleteResults.length > 0 && (
//                         <div className="autocomplete-dropdown">
//                           {autocompleteResults.map((spice, index) => (
//                             <div
//                               key={index}
//                               onClick={() => {
//                                 setSearchTerm(spice.common_name);
//                                 setAutocompleteResults([]);
//                               }}
//                               className="autocomplete-item"
//                             >
//                               {spice.common_name}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">Scientific Name</label>
//                       <Input
//                         type="text"
//                         value={scientificName}
//                         onChange={(e) => {
//                           setScientificName(e.target.value);
//                           fetchAutocomplete(
//                             e.target.value,
//                             "scientific_name",
//                             setScientificNameResults
//                           );
//                         }}
//                         className="input-field"
//                         placeholder="Enter Scientific Name (e.g., Zingiber officinale)"
//                       />
//                       {scientificNameResults.length > 0 && (
//                         <div className="autocomplete-dropdown">
//                           {scientificNameResults.map((spice, index) => (
//                             <div
//                               key={index}
//                               onClick={() => {
//                                 setScientificName(spice.scientific_name);
//                                 setScientificNameResults([]);
//                               }}
//                               className="autocomplete-item"
//                             >
//                               {spice.scientific_name}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     <div className="form-group">
//                       <label className="form-label">NCBI TAX ID</label>
//                       <Input
//                         type="text"
//                         value={taxId}
//                         onChange={(e) => {
//                           const value = e.target.value.replace(/[^0-9]/g, "");
//                           setTaxId(value);
//                           fetchAutocomplete(value, "ncbi_tax_id", setTaxIdResults);
//                         }}
//                         className="input-field"
//                         placeholder="Enter NCBI Tax ID (e.g., 943)"
//                       />
//                       {taxIdResults.length > 0 && (
//                         <div className="autocomplete-dropdown">
//                           {taxIdResults.map((spice, index) => (
//                             <div
//                               key={index}
//                               onClick={() => {
//                                 setTaxId(String(spice.ncbi_tax_id));
//                                 setTaxIdResults([]);
//                               }}
//                               className="autocomplete-item"
//                             >
//                               {spice.ncbi_tax_id}
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </>
//                 )}

//                 {/* ----- TAB: DISEASE ----- */}
//                 {activeTab === "Disease" && (
//                   <>
//                     <div className="form-group">
//                       <label className="form-label">MeSH Disease Name:</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">MeSH Disease Category:</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">
//                         MeSH Disease Sub Category:
//                       </label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">MeSH Disease ID:</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                   </>
//                 )}

//                 {/* ----- TAB: PHYTOCHEMICAL ----- */}
//                 {activeTab === "Phytochemical" && (
//                   <>
//                     <div className="form-group">
//                       <label className="form-label">Common Name</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">IUPAC Name</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">PubChem ID</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">ALogP</label>
//                       <Input type="text" className="input-field" />
//                     </div>
//                   </>
//                 )}
//               </div>

//               <Button className="search-button" onClick={handleSearch}>
//                 Search
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* STATISTICS SECTION */}
//       <section className="statistics-section" id="statistics">
//         <div className="statistics-header">SpiceRx Statistics</div>
//         <div className="statistics-content">
//           {/* Display all five graph buttons with custom labels */}
//           <div className="graph-buttons">
//             <Button onClick={() => setSelectedGraph("A")}>Spice/Herb</Button>
//             <Button onClick={() => setSelectedGraph("B")}>Spice-Disease</Button>
//             <Button onClick={() => setSelectedGraph("C")}>Phytochemical-Disease</Button>
//             <Button onClick={() => setSelectedGraph("D")}>Molecular Weight</Button>
//             <Button onClick={() => setSelectedGraph("E")}>Alogp</Button>
//           </div>

//           {chartData ? (
//             <div className="graph-container">
//               <Chart
//                 type="bar"
//                 data={chartData}
//                 options={{
//                   indexAxis: "y", // horizontal bars
//                   responsive: true,
//                   maintainAspectRatio: false,
//                   animation: false,
//                   plugins: {
//                     title: {
//                       display: true,
//                       text: chartTitle, // Dynamically set
//                       font: { size: 16 },
//                     },
//                     legend: {
//                       position: "top",
//                     },
//                   },
//                   scales: {
//                     x: {
//                       stacked: true,
//                       title: {
//                         display: true,
//                         text: "Number of publications",
//                       },
//                       beginAtZero: true,
//                     },
//                     y: {
//                       stacked: true,
//                       title: {
//                         display: true,
//                         // "Spices/herbs" or "Disease category", etc.
//                         text: selectedGraph === "B" ? "Disease category" : "Spices/herbs",
//                       },
//                     },
//                   },
//                 }}
//               />
//             </div>
//           ) : (
//             <p>Loading chart data...</p>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }


// ===============================================
// IMPORT LOCAL TSV FILES & COMPONENTS
// ===============================================

import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Chart as GoogleChart } from "react-google-charts";
import spiceReferencesTSV from "../GraphData/spice-references.tsv";
import discatRefTSV from "../GraphData/discat-ref.tsv";
import discatChemRefTSV from "../GraphData/discat-chem-ref.tsv"; // For Button C
import mwTSV from "../GraphData/mw.tsv"; // For Button D (histogram)
import alogpTSV from "../GraphData/alogp.tsv";
import { Input } from "../components/UI/input";
import { Button } from "../components/UI/button";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/HomePage.css";

export default function SpiceRx() {
  // ---------------------------
  // STATE DECLARATIONS
  // ---------------------------
  const [activeTab, setActiveTab] = useState("Spices/Herbs");
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [taxId, setTaxId] = useState("");
  // Default to "A" so that Button A loads on page load.
  const [selectedGraph, setSelectedGraph] = useState("A");
  const [chartData, setChartData] = useState(null);
  const [chartTitle, setChartTitle] = useState("");

  const [autocompleteResults, setAutocompleteResults] = useState([]);
  const [scientificNameResults, setScientificNameResults] = useState([]);
  const [taxIdResults, setTaxIdResults] = useState([]);

  // Mapping of button keys to TSV file imports
  const tsvFiles = {
    A: spiceReferencesTSV, // Spice/Herb references
    B: discatRefTSV, // Disease category references
    C: discatChemRefTSV, // For Button C: single "References" column
    D: mwTSV, // Molecular Weight (histogram)
    E: alogpTSV, // AlogP
  };

  // -----------------------------------------------
  // AUTOCOMPLETE FUNCTION (unchanged)
  // -----------------------------------------------
  const fetchAutocomplete = async (query, field, setResults) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/spices/autocomplete/?query=${query}&field=${field}`
      );
      if (!response.ok)
        throw new Error(`Failed to fetch autocomplete for ${field}`);
      let data = await response.json();
      if (field === "common_name" || field === "scientific_name") {
        data = data.map((spice) => ({
          [field]: spice[field].split(",")[0].trim(),
        }));
      }
      setResults(data.slice(0, 5));
    } catch (error) {
      console.error(`Autocomplete error (${field}):`, error);
    }
  };

  // -----------------------------------------------
  // HANDLE SEARCH FUNCTION (unchanged)
  // -----------------------------------------------
  const handleSearch = async () => {
    const commonName = searchTerm.trim();
    const sciName = scientificName.trim();
    const taxIdVal = taxId;
    let taxIdNumber = null;
    if (taxIdVal) {
      taxIdNumber = parseInt(taxIdVal, 10);
      if (isNaN(taxIdNumber)) {
        alert("NCBI Tax ID must be a valid number.");
        return;
      }
    }
    if (!commonName && !sciName && !taxIdVal) {
      alert("Please enter at least one search field before proceeding.");
      return;
    }
    const queryParams = new URLSearchParams({
      common_name: commonName,
      scientific_name: sciName,
      ncbi_tax_id: taxIdNumber || "",
    }).toString();
    navigate(`/searchresult?${queryParams}`);
  };

  // ---------------------------------------------------------
  // HELPER #1: PARSE POSITIVE/NEGATIVE REFERENCES (For Buttons A & B)
  // ---------------------------------------------------------
  const parsePositiveNegativeReferences = (results, labelKey) => {
    const rows = results.data.filter(
      (row) => row[labelKey] && row[labelKey].trim() !== ""
    );
    rows.forEach((row) => {
      row["Positive references"] = parseFloat(row["Positive references"] || 0);
      row["Negative references"] = parseFloat(row["Negative references"] || 0);
    });
    rows.sort((a, b) => {
      const totalA = a["Positive references"] + a["Negative references"];
      const totalB = b["Positive references"] + b["Negative references"];
      return totalB - totalA;
    });
    const limitedRows = rows.slice(0, 25);
    const labels = limitedRows.map((row) => row[labelKey]);
    const positives = limitedRows.map((row) => row["Positive references"]);
    const negatives = limitedRows.map((row) => row["Negative references"]);
    return {
      labels,
      datasets: [
        {
          label: "Positive",
          data: positives,
          backgroundColor: "#36A2EB", // blue (hex for rgb(54,162,235))
          barThickness: 8,
        },
        {
          label: "Negative",
          data: negatives,
          backgroundColor: "#FF6384", // red (hex for rgb(255,99,132))
          barThickness: 8,
        },
      ],
    };
  };

  // ---------------------------------------------------------
  // HELPER #2: PARSE SINGLE "REFERENCES" COLUMN (For Button C)
  // ---------------------------------------------------------
  const parseSingleReference = (results, labelKey) => {
    const rows = results.data.filter(
      (row) => row[labelKey] && row[labelKey].trim() !== ""
    );
    rows.forEach((row) => {
      row["References"] = parseFloat(row["References"] || 0);
    });
    rows.sort((a, b) => b["References"] - a["References"]);
    const limitedRows = rows.slice(0, 25);
    const labels = limitedRows.map((row) => row[labelKey]);
    const references = limitedRows.map((row) => row["References"]);
    return {
      labels,
      datasets: [
        {
          label: "References",
          data: references,
          backgroundColor: "#36A2EB", // blue
          barThickness: 8,
        },
      ],
    };
  };

  // ---------------------------------------------------------
  // HELPER #3: PARSE MOLECULAR WEIGHT FOR A STACKED HISTOGRAM (For Button D)
  // ---------------------------------------------------------
  function parseMolecularWeightHistogram(results) {
    const allRows = results.data.filter((row) => row["Molecular weight"]);
    const binSize = 25;
    const minValue = 0;
    const maxValue = 800;
    const binLabels = [];
    for (let start = minValue; start < maxValue; start += binSize) {
      binLabels.push(`${start}-${start + binSize}`);
    }
    const datasets = [];
    allRows.forEach((row) => {
      const mwVal = parseFloat(row["Molecular weight"]);
      if (isNaN(mwVal) || mwVal < minValue || mwVal >= maxValue) return;
      const binIndex = Math.floor((mwVal - minValue) / binSize);
      const binData = new Array(binLabels.length).fill(0);
      binData[binIndex] = 1;
      const compoundName = row["Common name"] || `Compound`;
      datasets.push({
        label: compoundName,
        data: binData,
        backgroundColor: "blue",
        mwValue: mwVal,
        barThickness: 8,
      });
    });
    return {
      labels: binLabels,
      datasets,
    };
  }

  // ---------------------------------------------------------
  // HELPER #4: PARSE ALogP FOR A STACKED HISTOGRAM (For Button E)
  // ---------------------------------------------------------
  function parseALogPHistogram(results) {
    const binEdges = [
      -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0,
      5.0, 6.0, 7.0,
    ];
    const labels = [];
    for (let i = 0; i < binEdges.length - 1; i++) {
      labels.push(`${binEdges[i]} to ${binEdges[i + 1]}`);
    }
    const datasets = [];
    results.data.forEach((row) => {
      const alogp = parseFloat(row.ALogP);
      if (isNaN(alogp)) return;
      let binIndex = -1;
      for (let i = 0; i < binEdges.length - 1; i++) {
        if (alogp >= binEdges[i] && alogp < binEdges[i + 1]) {
          binIndex = i;
          break;
        }
      }
      if (binIndex === -1) return;
      const binData = new Array(labels.length).fill(0);
      binData[binIndex] = 1;
      const compoundName = row["Common name"] || `Compound`;
      datasets.push({
        label: compoundName,
        data: binData,
        backgroundColor: "blue",
        alogpValue: alogp,
        barThickness: 8,
      });
    });
    return {
      labels,
      datasets,
    };
  }

  // ---------------------------------------------------------
  // CONVERSION FUNCTION FOR GOOGLE CHARTS (For Buttons D & E)
  // ---------------------------------------------------------
  const convertToGoogleChartData = (dataObj) => {
    const header = ["Range", ...dataObj.datasets.map((ds) => ds.label)];
    const rows = dataObj.labels.map((binLabel, binIndex) => {
      const row = [
        binLabel,
        ...dataObj.datasets.map((ds) => ds.data[binIndex] || 0),
      ];
      return row;
    });
    return [header, ...rows];
  };

  // ---------------------------------------------------------
  // CONVERSION FUNCTION FOR GOOGLE CHARTS (For Buttons A, B & C)
  // ---------------------------------------------------------
  const convertToGoogleChartDataForABC = (dataObj) => {
    let header = [];
    if (dataObj.datasets.length === 1) {
      header = [
        "Name",
        dataObj.datasets[0].label,
        { role: "tooltip", p: { html: true } },
      ];
    } else {
      header = [
        "Name",
        dataObj.datasets[0].label,
        { role: "tooltip", p: { html: true } },
        dataObj.datasets[1].label,
        { role: "tooltip", p: { html: true } },
      ];
    }
    const rows = dataObj.labels.map((label, i) => {
      if (dataObj.datasets.length === 1) {
        const val = dataObj.datasets[0].data[i];
        const tooltip = `<div style="padding:5px;"><strong>${label}</strong><br/>${val} ${dataObj.datasets[0].label}</div>`;
        return [label, val, tooltip];
      } else {
        const val1 = dataObj.datasets[0].data[i];
        const val2 = dataObj.datasets[1].data[i];
        const tooltip1 = `<div style="padding:5px;"><strong>${label}</strong><br/>${val1} ${dataObj.datasets[0].label}</div>`;
        const tooltip2 = `<div style="padding:5px;"><strong>${label}</strong><br/>${val2} ${dataObj.datasets[1].label}</div>`;
        return [label, val1, tooltip1, val2, tooltip2];
      }
    });
    return [header, ...rows];
  };

  // ---------------------------------------------------------
  // FETCH & PARSE TSV DATA ON selectedGraph CHANGE
  // ---------------------------------------------------------
  useEffect(() => {
    const tsvUrl = tsvFiles[selectedGraph];
    if (!tsvUrl) return;
    fetch(tsvUrl)
      .then((res) => res.text())
      .then((tsvText) => {
        const results = Papa.parse(tsvText, { header: true, delimiter: "\t" });
        let labelKey = "Spice/Herb name";
        let newChartTitle = "Statistics of research articles for spices/herbs";
        let chartDataObj = null;
        if (selectedGraph === "A") {
          labelKey = "Spice/Herb name";
          newChartTitle = "Statistics of research articles for spices/herbs";
          chartDataObj = parsePositiveNegativeReferences(results, labelKey);
        } else if (selectedGraph === "B") {
          labelKey = "Disease category";
          newChartTitle =
            "Statistics of research articles for MeSH disease categories";
          chartDataObj = parsePositiveNegativeReferences(results, labelKey);
        } else if (selectedGraph === "C") {
          labelKey = "Disease category";
          newChartTitle =
            "Statistics of research articles for therapeutic effects of phytochemicals";
          chartDataObj = parseSingleReference(results, labelKey);
        } else if (selectedGraph === "D") {
          newChartTitle = "Molecular weight distribution of phytochemicals";
          chartDataObj = parseMolecularWeightHistogram(results);
        } else if (selectedGraph === "E") {
          newChartTitle = "ALogP distribution of phytochemicals";
          chartDataObj = parseALogPHistogram(results);
        }
        setChartData(chartDataObj);
        setChartTitle(newChartTitle);
      })
      .catch((error) => {
        console.error("Error fetching/parsing TSV:", error);
      });
  }, [selectedGraph]);

  // ---------------------------------------------------------
  // RENDER COMPONENT
  // ---------------------------------------------------------
  return (
    <div className="page-container">
      <Navbar />
      {/* HERO SECTION & SEARCH FORM */}
      <section className="hero-section">
        <div className="content-grid">
          <div className="content-summary">
            <h1 className="title">SpiceRx Summary</h1>
            <div className="description">
              <p>
                Spices and herbs are key dietary ingredients used in cuisines
                across the world. They have been reported to be of medicinal
                value for a wide variety of diseases through a large body of
                biomedical investigations.
              </p>
              <p>
                SpiceRx is a systematic compilation of evidence-based knowledge
                pertaining to the health impacts of culinary spices and herbs.
                It provides a platform for exploring the health impact of
                culinary spices and herbs through a structured database of
                tripartite relationships.
              </p>
            </div>
          </div>
          <div className="form-container">
            <div className="tab-list">
              {["Spices/Herbs", "Disease", "Phytochemical"].map((tab) => (
                <Button
                  key={tab}
                  variant="ghost"
                  className={`tab-button ${
                    activeTab === tab ? "active-tab" : ""
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </Button>
              ))}
            </div>
            <div className="form">
              <div className="fields">
                {activeTab === "Spices/Herbs" && (
                  <>
                    <div className="form-group">
                      <label className="form-label">Common Name</label>
                      <Input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                          fetchAutocomplete(
                            e.target.value,
                            "common_name",
                            setAutocompleteResults
                          );
                        }}
                        className="input-field"
                        placeholder="Enter Common Name (e.g., Ginger)"
                      />
                      {autocompleteResults.length > 0 && (
                        <div className="autocomplete-dropdown">
                          {autocompleteResults.map((spice, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setSearchTerm(spice.common_name);
                                setAutocompleteResults([]);
                              }}
                              className="autocomplete-item"
                            >
                              {spice.common_name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Scientific Name</label>
                      <Input
                        type="text"
                        value={scientificName}
                        onChange={(e) => {
                          setScientificName(e.target.value);
                          fetchAutocomplete(
                            e.target.value,
                            "scientific_name",
                            setScientificNameResults
                          );
                        }}
                        className="input-field"
                        placeholder="Enter Scientific Name (e.g., Zingiber officinale)"
                      />
                      {scientificNameResults.length > 0 && (
                        <div className="autocomplete-dropdown">
                          {scientificNameResults.map((spice, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setScientificName(spice.scientific_name);
                                setScientificNameResults([]);
                              }}
                              className="autocomplete-item"
                            >
                              {spice.scientific_name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label">NCBI TAX ID</label>
                      <Input
                        type="text"
                        value={taxId}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9]/g, "");
                          setTaxId(value);
                          fetchAutocomplete(
                            value,
                            "ncbi_tax_id",
                            setTaxIdResults
                          );
                        }}
                        className="input-field"
                        placeholder="Enter NCBI Tax ID (e.g., 943)"
                      />
                      {taxIdResults.length > 0 && (
                        <div className="autocomplete-dropdown">
                          {taxIdResults.map((spice, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setTaxId(String(spice.ncbi_tax_id));
                                setTaxIdResults([]);
                              }}
                              className="autocomplete-item"
                            >
                              {spice.ncbi_tax_id}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
                {activeTab === "Disease" && (
                  <>
                    <div className="form-group">
                      <label className="form-label">MeSH Disease Name:</label>
                      <Input type="text" className="input-field" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        MeSH Disease Category:
                      </label>
                      <Input type="text" className="input-field" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        MeSH Disease Sub Category:
                      </label>
                      <Input type="text" className="input-field" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">MeSH Disease ID:</label>
                      <Input type="text" className="input-field" />
                    </div>
                  </>
                )}
                {activeTab === "Phytochemical" && (
                  <>
                    <div className="form-group">
                      <label className="form-label">Common Name</label>
                      <Input type="text" className="input-field" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">IUPAC Name</label>
                      <Input type="text" className="input-field" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">PubChem ID</label>
                      <Input type="text" className="input-field" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">ALogP</label>
                      <Input type="text" className="input-field" />
                    </div>
                  </>
                )}
              </div>
              <Button className="search-button" onClick={handleSearch}>
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* STATISTICS SECTION (GRAPH) */}
      <section className="statistics-section" id="statistics">
        <div className="statistics-header">SpiceRx Statistics</div>
        <div className="statistics-content">
          <div className="graph-buttons">
            <Button className = "graph-btn" onClick={() => setSelectedGraph("A")}>Spice/Herb</Button>
            <Button  className = "graph-btn" onClick={() => setSelectedGraph("B")}>Spice-Disease</Button>
            <Button  className = "graph-btn" onClick={() => setSelectedGraph("C")}>
              Phytochemical-Disease
            </Button>
            <Button  className = "graph-btn" onClick={() => setSelectedGraph("D")}>
              Molecular Weight
            </Button>
            <Button  className = "graph-btn" onClick={() => setSelectedGraph("E")}>Alogp</Button>
          </div>
          {chartData ? (
            <div className="graph-container">
              <GoogleChart
                // For Buttons A, B, and C we use "BarChart" (horizontal)
                // For Buttons D and E we use "ColumnChart" (vertical)
                chartType={
                  selectedGraph === "D" || selectedGraph === "E"
                    ? "ColumnChart"
                    : "BarChart"
                }
                data={
                  selectedGraph === "D" || selectedGraph === "E"
                    ? convertToGoogleChartData(chartData)
                    : convertToGoogleChartDataForABC(chartData)
                }
                options={
                  selectedGraph === "D" || selectedGraph === "E"
                    ? {
                        title: chartTitle,
                        isStacked: true,
                        legend: { position: "none" },
                        hAxis: {
                          title:
                            selectedGraph === "D"
                              ? "Molecular Weight"
                              : "ALogP Range",
                        },
                        vAxis: { title: "Count" },
                        tooltip: { isHtml: true },
                        colors: ["#36A2EB"],
                        backgroundColor: "transparent",
                        chartArea: {
                          width: "70%",
                          height: "70%",
                          backgroundColor: "transparent",
                        },
                      }
                    : {
                        title: chartTitle,
                        isStacked:
                          selectedGraph === "A" || selectedGraph === "B",
                        legend: { position: "none" },
                        hAxis: {
                          title:
                            selectedGraph === "A"
                              ? "Spices/Herbs"
                              : selectedGraph === "B"
                              ? "Disease Category"
                              : "Spices/Herbs",
                        },
                        vAxis: {
                          title:
                            selectedGraph === "C" ? "Number of References" : "",
                        },
                        tooltip: { isHtml: true },
                        colors:
                          selectedGraph === "A" || selectedGraph === "B"
                            ? ["#36A2EB", "#FF6384"]
                            : ["#36A2EB"],
                        backgroundColor: "transparent",
                        chartArea: {
                          width: "70%",
                          height: "70%",
                          backgroundColor: "transparent",
                        },
                      }
                }
                width="100%"
                height="100%"
              />
            </div>
          ) : (
            <p>Loading chart data...</p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
