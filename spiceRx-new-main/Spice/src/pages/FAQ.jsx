import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import workflow from "../assets/images/workflow.jpg";
import "../styles/FAQ.css";

function FAQ() {
  // State to track which FAQ item is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Sample FAQ data
  const faqData = [
    {
      question:
        "Q1: What are the entities represented in SpiceRx and how are they related?",
      answer: (
        <>
          <p>
            SpiceRx integrates evidence-based knowledge pertaining to the health
            impacts of culinary spices and herbs and their phytochemicals. It
            provides a systematic compilation of tripartite relationships
            between culinary spices/herbs, their phytochemicals and diseases.
          </p>
          <img
            src={workflow}
            alt="SpiceRx Workflow"
            className="faq-image"
          />
        </>
      ),
    },
    {
      question: "Q2: What type of queries are processed by SpiceRx?",
      answer: (
        <>
          <p>
            SpiceRx is a resource of triangular relationships among
            Spices/Herbs, their Phytochemicals and Disease associations. It
            facilitates three types of queries, based on spices/herbs, diseases
            and phytochemicals. Given one of these, SpiceRx displays
            relationships with the remaining two.
          </p>
        </>
      ),
    },

    {
      question:
        "Q3: What are the culinary spices and herbs available in SpiceRx repository ?",
      answer: (
        <>
          <p>
            SpiceRx data was compiled starting with a total of 188 culinary
            spices and herbs that are used in recipes across the world regions.
            Out of which 152 were found to have disease associations in the
            literature.
          </p>
        </>
      ),
    },

    {
      question:
        "Q4: What are the spice/herb phytochemicals present in SpiceRx?",
      answer: (
        <>
          <p>
            SpiceRx includes data of 866 phytochemicals from 142 (of the 181
            investigated) culinary spices and were compiled from PhenolExlorer
            and KNApSAcK. Out of these, 570 of phytochemicals were found to be
            bioactive. The phytochemicals were involved in 2042
            spice-phytochemical associations.
          </p>
        </>
      ),
    },
    {
      question:
        "Q5: What is the source of spice-disease associations presented in SpiceRx?",
      answer: (
        <>
          <p>
            Spice-Disease associations were are text mined from 23 million
            MEDLINE abstracts indexed in PubMed till July 2017.
          </p>
        </>
      ),
    },
    {
      question:
        "Q6: How was the dictionary of culinary spices and herbs compiled?",
      answer: (
        <>
          <p>
            A dictionary of culinary herbs and spices were compiled for
            different sources such as FooDB (http://foodb.ca) Wikipedia
            (https://en.wikipedia.org/wiki/List_of_culinary_herbs_and_spices)
            PFAF Plants For A Future, (http://www.pfaf.org/user/Default.aspx),
            FPI (Food Plants International, http://foodplantsinternational.com )
            and FlavorDB (http://cosylab.iiitd.edu.in/flavordb).
          </p>
        </>
      ),
    },
    {
      question: "Q7: What is MeSH? What are the disease categories?",
      answer: (
        <>
          <p>
            MeSH is a controlled vocabulary of biomedical terms curated and
            developed by National Library of Medicine. MeSH classifies diseases
            into a logical hierarchy of Disease Categories, Disease
            Subcategories and Diseases.
          </p>
        </>
      ),
    },
    {
      question:
        "Q7: What are the culinary spices and herbs available in SpiceRx repository?",
      answer: (
        <>
          <p>
            SpiceRx data was compiled starting with a total of 188 culinary
            spices and herbs that are used in recipes across the world regions.
            Out of which 152 were found to have disease associations in the
            literature.
          </p>
        </>
      ),
    },

    {
      question: "Q8: What browser does SpiceRx support?",
      answer: (
        <>
          <p>SpiceRx supports all modern web browsers.</p>
        </>
      ),
    },
    {
      question: "Q9: What is the tech stack used to build SpiceRx?",
      answer: (
        <>
          <p>
            SpiceRx is implemented with the Python web development framework
            Django and PostgreSQL. The frontend was built using HTML, CSS,
            JavaScript, AJAX, jQuery(v1.12.4), JSME Molecular Editor,
            Bootstrap(v4.0.2), Jmol, DataTables and Google Charts. An Apache
            HTTP Server has been used to route requests to the Django
            application and to enable data compression for faster page load
            times.
          </p>
        </>
      ),
    },
    {
      question: "Q10: What are the prerequisites needed to run SpiceRx?",
      answer: (
        <>
          <p>A modern web browser with JavaScript enabled.</p>
        </>
      ),
    },
    {
      question: "Q11: Does SpiceRx use cookies?",
      answer: (
        <>
          <p>
            We use cookies to provide the statistics that help us give the best
            experience for our site.
          </p>
        </>
      ),
    },
    {
      question: "Q12: What is Jmol?",
      answer: (
        <>
          <p>
            Jmol: an open-source Java viewer for chemical structures in 3D.
            http://www.jmol.org/ Jmol does not require 3D acceleration plugins.
            Jmol returns a 3D representation of a molecule that may be used as a
            teaching tool, or for research e.g. in chemistry and biochemistry.
            It is free and open source software, written in Java and so it runs
            on Windows, Mac OS X, Linux and Unix systems. Few technical
            advantages of Jmol are: Molecular 3D visualisation Zooming
            facilities Provision to download the viewed molecule in mol2 format
            For further information please visit the Jmol website: here
          </p>
        </>
      ),
    },
    {
      question: "Q13: What do I need to have the Jmol files to render properly",
      answer: (
        <>
          <p>A modern web browser with JavaScript enabled.</p>
        </>
      ),
    },
    {
      question: "Q14: General Disclaimer",
      answer: (
        <>
          <p>
            All material on this website is a product of research and is
            provided for your information only and may not be construed as
            medical advice or instruction. No action or inaction should be taken
            based solely on the contents of this information; instead, readers
            should consult appropriate health professionals on any matter
            relating to their health and well-being.
          </p>
        </>
      ),
    },
    {
      question: "Q15: Who is the team behind SpiceRx?",
        answer: (
          <>
            <table className="team-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Affiliation</th>
                  <th>Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ganesh Bagler</td>
                  <td>Project Head</td>
                  <td>
                    Center for Computational Biology, Indraprastha Institute of Information
                    Technology (IIIT-Delhi), New Delhi
                  </td>
                  <td>
                    Idea conception, Project design and management, Database design and implementation
                  </td>
                </tr>
                <tr>
                  <td>Rakhi N K</td>
                  <td>PhD Research Scholar</td>
                  <td>
                    Department of Bioscience and Bioengineering, Indian Institute of Technology
                    Jodhpur, Jodhpur
                  </td>
                  <td>
                    Manual data compilation, Annotation and curation, Quality Check, Analysis
                  </td>
                </tr>
                <tr>
                  <td>Rudraksh Tuwani</td>
                  <td>Research Assistant</td>
                  <td>
                    Center for Computational Biology, Indraprastha Institute of Information Technology
                  </td>
                  <td>
                    Text Mining, Database design, Development of SpiceRx Web Resource, Data Visualisation and Data Analytics
                  </td>
                </tr>
                <tr>
                  <td>Neelansh Garg</td>
                  <td>Summer Research Intern</td>
                  <td>
                    USICT, Guru Gobind Singh Indraprastha University, New Delhi
                  </td>
                  <td>
                    Database design, Development of SpiceRx Web Resource, Data Visualisation and Data Analytics
                  </td>
                </tr>
                <tr>
                  <td>Jagriti Mukherjee</td>
                  <td>M.Tech student</td>
                  <td>
                    Center for Computational Biology, Indraprastha Institute of Information Technology (IIIT-Delhi), New Delhi
                  </td>
                  <td>Annotations</td>
                </tr>
                <tr>
                  <td>Kshitija Randive</td>
                  <td>M.Tech student</td>
                  <td>
                    Computer Science Engineering, Indraprastha Institute of Information Technology (IIIT-Delhi), New Delhi
                  </td>
                  <td>Database Redesign, Tech Stack Upgraded</td>
                </tr>
                <tr>
                  <td>Abhishek Gond</td>
                  <td>M.Tech student</td>
                  <td>
                  Computer Science Engineering, Indraprastha Institute of Information Technology (IIIT-Delhi), New Delhi
                  </td>
                  <td>Frontend Redesign, Tech Stack Upgraded</td>
                </tr>
              </tbody>
            </table>
          </>
        ),
    },
  ];

  // Toggle open/close a particular FAQ item
  const handleToggle = (index) => {
    // If the clicked FAQ is already active, close it. Otherwise, open it.
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      {/* Main FAQ Content */}
      <div className="faq-page">
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => handleToggle(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>

              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "1000px" : "0px",
                }}
              >
                <div className="faq-answer-content">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <Footer />
    </>
  );
}

export default FAQ;
