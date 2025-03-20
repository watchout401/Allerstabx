import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import workflow from "../assets/images/workflow.jpg";
import search from "../assets/images/spice-search.png";
import disease from "../assets/images/spice-diseases.png";
import phytochemical from "../assets/images/spice-phytochemicals.png";
import "../styles/HowToUse.css";

const HowToUse = () => {
  // Set up a state variable to track the active tab
  const [activeTab, setActiveTab] = useState("overview");

  // A function to render the content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <section id="overview" className="section">
            <h2>Overview</h2>
            <img
              src={workflow}
              alt="SpiceRx workflow"
              className="overview-image"
            />
            <p>
              SpiceRx provides a platform for exploring the health impact of
              spices and herbs used in food preparations through a structured
              database of tripartite relationships with their phytochemicals and
              disease associations. Starting with an extensive dictionary of 188
              culinary spices and herbs, their disease associations were text
              mined from 28 million MEDLINE abstracts. These data were further
              combined with evidence of spice-phytochemical and
              phytochemical-disease associations. 
              <br></br> <br></br>
              SpiceRx presents a compilation
              of 11750 MEDLINE abstracts containing 8957 disease associations
              (8172 positive and 783 negative) for 152 spices linked to 848
              unique disease-specific Medical Subject Headings (MeSH) IDs. The
              hierarchical organization of MeSH was used as a basis for
              ontological classification of disease terms. Spice names were
              tagged using a dictionary matching method whereas diseases were
              tagged using a machine learning based model, TaggerOne. A
              convolutional neural network based relation extraction model was
              trained on 6712 manually annotated sentences to extract and
              classify positive, negative and neutral associations. <br></br>
              <br></br>
              Information of 866 phytochemicals was obtained for 142 of the spices using
              KNApSAcK and PhenolExplorer that comprised of 570 bioactive
              compounds with a total of 2042 spice-phytochemical associations.
              These compounds were further linked to diseases with the help of
              Comparative Toxicogenomics Database (CTD), a public database of
              literature-curated and inferred chemical-disease associations. The
              resource unearths literature-supported spice-disease associations
              for which the spice phytochemical(s) have been independently
              reported for therapeutic effects. Thus, through interlinked
              triangular relationships between culinary herbs and spices, their
              phytochemicals, and diseases, SpiceRx facilitates seamless
              exploration of evidence-based knowledge for their disease-specific
              culinary recommendations as well as enquiry into underlying
              molecular mechanisms.
            </p>
          </section>
        );
      case "spice-search":
        return (
          <section id="spice-search" className="section">
            <h2>Spice Search</h2>
            <img src={search} alt="Spice search" className="search-image" />
            <p>
              Spice search can be performed using the common name, scientific
              name as well as NCBI taxonomy ID of the spice/herb. For example a
              user can search with the common name ‘saffron’, scientific name
              ‘saffron crocus’ or NCBI Tax ID ‘82528’. The search box comes with
              an autocomplete option to assist you with any spice/herb name
              containing a string matching with two or more characters typed,
              greatly enabling the user’s ability to navigate the database.
            </p>
            <h2>Search Results Page</h2>
            <img src={disease} alt="Search results" className="disease-image" />
            <p>
              The search directs the user to the results for the spice
              ‘saffron’. It displays number of disease associations found for
              ‘saffron’, both positive and negative obtained through text mining
              PubMed abstracts. By clicking on the ‘Details’ tab, the user will
              be able to see the diseases with which ‘saffron’ is associated
              with. For each disease association, link to the relevant PubMed
              article is provided.
            </p>
            <h2>Phytochemicals in Spices</h2>
            <img
              src={phytochemical}
              alt="Phytochemicals"
              className="disease-image"
            />
            <p>
              The phytochemicals present in a spice (for example ‘saffron’) is
              displayed in this panel. User can click on the ‘Explore’ button
              present against each phytochemical to obtain the its profile
              including chemical identifiers, 2D and 3D structure, Spices/Herbs
              containing the molecule and association with diseases. The
              ‘Phytochemical Profile’ window also facilitates finding similar
              molecules within SpiceRx as well as identification of those from
              commercially available from external resources (ZINC).
            </p>
          </section>
        );
      case "disease-search":
        return (
          <section id="disease-search" className="section">
            <h2>Disease Search</h2>
            <img
              src={phytochemical}
              alt="Disease search"
              className="disease-image"
            />
            <p>
              Disease search in SpiceRx is integrated with MeSH hierarchical
              structure for diseases. Four types of search options are available
              in the disease search panel: MeSH Disease ID, MeSH Disease
              Category, MeSH Disease Sub Category, and MeSH Disease Title. The
              MeSH Disease category represents a broad classification of
              diseases such as ‘Cardiovascular Diseases’, ‘Endocrine System
              Diseases’ or ‘Neoplasms’. The option ‘Disease Sub Category”
              represents further refined categories of diseases such as ‘Heart
              Diseases’, ‘Metabolic Diseases”, ‘Liver Diseases’ etc. The option
              “MeSH Disease Title’ can be used to perform search for more
              specific disease types such as ‘Heart Attack’, ‘Diabetes Mellitus
              Type 1’ etc. Users can search for disease using its corresponding
              MeSH ID as well. For Example searching with MeSH ID ‘D003922’ will
              provide the disease information of Diabetes Mellitus, Type 1. The
              user can also perform a ‘null search’ which will display all
              diseases listed in the database.
            </p>

            <h2>Diseasae Result Page</h2>
            <img
              src={phytochemical}
              alt="Disease search"
              className="disease-image"
            />
            <p>
              By searching any disease qualifier, the results for the disease
              will appear to the right of the search page. By default the first
              10 results will be displayed. By clicking on the respective MeSH
              ID, for instance ‘D00487’, you will be redirected to the results
              page for that disease, in this case ‘edema’. The results page for
              ‘edema’ contains the details of the disease such as its MeSH
              category as well subcategory information. By clicking on the MeSH
              ID, the user can navigate to the MeSH webpage of the particular
              disease.
            </p>

            <h2>Spices/Herbs associated with Disease panel</h2>
            <img
              src={phytochemical}
              alt="Disease search"
              className="disease-image"
            />
            <p>
              This Panel provides the list of spices which are associated with
              the searched disease. The positive and negative associations are
              shown in green and red respectively. By clicking on the ‘Details’
              tab, the details of relevant references for the association will
              be listed.
            </p>

            <h2>Linked Phytochemicals</h2>
            <img
              src={phytochemical}
              alt="Disease search"
              className="disease-image"
            />
            <p>
              The phytochemicals which are associated with the disease will be
              displayed here along with the references from PubMed. User can
              click on ‘Explore’ tab present against each phytochemical name to
              obtain the phytochemical profile and identifiers of each
              phytochemical.
            </p>
          </section>
        );
      case "phytochemical-search":
        return (
          <section id="phytochemical-search" className="section">
            <h2>Phytochemical Search</h2>
            <h4>Search by Phytochemical</h4>
            <img
              src={phytochemical}
              alt="Phytochemical search"
              className="disease-image"
            />
            <p>
              Phytochemicals search is facilitated through various options. User
              can search a phytochemical with its common name, for example,
              ‘Piperene’, its IUPAC name, ‘(2E,4E)-5- (1,3-benzodioxol- 5-yl)-
              1-piperidin- 1-ylpenta- 2,4-dien- 1-one’ or its PubChem ID
              ‘638024’. The query will display the page for searched
              phytochemical. Users can use the ‘Explore’ tab to obtain full
              phytochemical profile. You may also search for spice
              phytochemicals molecular weight, hydrogen bond donors/acceptors or
              partition coefficient (ALogP). If the user does not have any
              particular phytochemical to search, they can perform a null search
              which will display a list of all available phytochemicals in the
              database.
            </p>

            <h2>Phytochemical Profile Panel</h2>
            <img
              src={phytochemical}
              alt="Phytochemical search"
              className="disease-image"
            />
            <p>
              This panel provides the complete ‘Phytochemical Profile’ of the
              molecule searched. This includes molecular identities such as MeSH
              ID, PubChem ID, IUPAC Name, Canonical and Isomeric SMILES and the
              Molecular Formula. Using JSmol applet, the panel also provides 2D
              image of the molecule, which transforms into 3D view upon clicking
              ‘View JSmol’ button. Importantly, using structural similarity
              search one could either explore similar molecules within SpiceRx,
              or could identify commercially available molecules from ZINC.
              Further, an option is provided to download the molecule data in
              Mol2, SDF, 2D image, and JSON format. Below the ‘Downloads’
              button, clicking the ‘Spice/Herb’ button will provide a list of
              spices/herbs in which the phytochemical is present. ‘Disease’
              button will provide the list of all diseases with which the given
              phytochemical is linked. Physicochemical as well as ADMET
              properties of the compound can also be obtained by clicking
              respective tabs.
            </p>
          </section>
        );
      case "statistics":
        return (
          <section id="statistics" className="section">
            <h2>Statistics</h2>
            <h3>
              1. Statistics of research articles reporting positive and negative
              disease associations for spices/herbs with 10 or more publications
            </h3>
            <img
              src={phytochemical}
              alt="Statistics"
              className="disease-image"
            />
            <p>
              Among the spices/herbs with largest number of disease associations
              were Garlic (782+40), Ginkgo (554+25), Turmeric (515+6) and Ginger
              (505+3) with more than 500 research articles reported for each.
              Liquorice (123) and Mugwort (49) had the largest number of
              negative disease associations. Click here to go to the interactive
              graphics on the SpiceRx webpage.
            </p>

            <h3>
              2. Statistics of research articles with reports of positive and
              negative associations of spices/herbs corresponding to MeSH
              disease categories
            </h3>
            <img
              src={phytochemical}
              alt="Statistics"
              className="disease-image"
            />
            <p>
              A total of 25 MeSH disease categories were reported with
              therapeutic and/or adverse effects for culinary spices and herbs.
              Among major disease categories that are influenced by spices/herbs
              were ‘Pathological conditions, Signs and Symptoms’ (1690+127),
              ‘Neoplasms’ (1033+9), ‘Nervous System Diseases’ (859+84),
              ‘Nutritional and Metabolic Diseases’ (857+74), ‘Cardiovascular
              Disease’ (765+95), ‘Digestive Systems Disease’ (755+35),
              ‘Endocrine Systems Diseases’ (635+10) and ‘Mental Disorders’
              (561+7), with more than 500 research articles reported for each.
              Together, these MeSH categories cover a large number of diseases
              for which diet has been reported to have major role in
              pathological development and progression such as diabetes mellitus
              type 2, obesity, coronary artery disease, hypertension, and
              prostate cancer, among others. Click here to go to the interactive
              graphics on the SpiceRx webpage.
            </p>

            <h3>
              3. Statistics of research articles reporting positive associations
              for phytochemicals against MeSH disease categories
            </h3>
            <img
              src={phytochemical}
              alt="Statistics"
              className="disease-image"
            />
            <p>
              These data were obtained from Comparative Toxocogenomics Database.
              Amongst the top disease categories that phytochemicals were
              beneficial against were ‘Pathological conditions, signs and
              symptoms’ (903), ‘Nervous system disorders (629)’, ‘Neoplasms’
              (303) ‘Digestive system disorders’ (283) and ‘Cardiovascular
              disorders’ (250). Click here to go to the interactive graphics on
              the SpiceRx webpage.
            </p>

            <h3>4. Molecular weight distribution of phytochemicals</h3>
            <img
              src={phytochemical}
              alt="Statistics"
              className="disease-image"
            />
            <p>
              Distribution of molecular weights of phytochemicals from
              spices/herbs. Majority of the compounds had weight below 500
              g/mol. Click here to go to the interactive graphics on the SpiceRx
              webpage.
            </p>

            <h3>5. Partition coefficient distribution of phytochemicals</h3>
            <img
              src={phytochemical}
              alt="Statistics"
              className="disease-image"
            />
            <p>
              Distribution of partition coefficients (ALogP) of phytochemicals
              from spices/herbs. Majority of the molecules compounds had the
              partition coefficient below 5, thus fulfilling one of the criteria
              for drug-likeness. Click here to go to the interactive graphics on
              the SpiceRx webpage.
            </p>
          </section>
        );
      case "use-cases":
        return (
          <section id="use-cases" className="section">
            <h2>Use Cases</h2>
            <h3>(A) Searching for drug-like compounds in SpiceRx</h3>
            <img
              src={phytochemical}
              alt="Statistics"
              className="disease-image"
            />
            <p>
              One may search for spice phytochemicals which have drug-like
              properties using the phytochemical search tab in SpiceRx by using
              criteria for fulfilling Lipinski’s rule. Lipinski's rule specifies
              conditions to evaluate drug-likeness of a compound; the
              suitability of a chemical compound to have pharmacological or
              biological activity making it a likely candidate for orally active
              drug. <br></br>
              <br></br>According to Lipinski’s rule, an orally active drug has no
              more than one violation of the following criteria: No more than 5
              hydrogen bond donors; No more than 10 hydrogen bond acceptors;
              Molecular mass less than 500 Daltons; and an octanol-water
              partition coefficient (log P) not greater than 5. By specifying
              these conditions in the relevant search tabs, all compounds
              satisfying the above conditions can be obtained. This search in
              yields 639 (74 %) of all the phytochemicals in SpiceRx (866)
              suggesting the as potential therapeutic value of these compounds.
            </p>

            <h3>
              (B) Investigating molecular mechanisms behind therapeutic effects
              of spices and herbs.
            </h3>
            <p>
              One of the key attributes of spices and herbs are that they are
              antimicrobial agents. Billing and Sherman (Billing and Sherman,
              1998; Sherman and Billing, 1999) suggested that one of the reasons
              for the widespread use of spices in recipes is primarily due to
              their antimicrobial properties. One can search for spices and
              their phytochemicals which are active against microbial
              infections. Searching the broad category “Bacterial Infections and
              Mycosis” reveals that a wide range of culinary spices and herbs
              have positive associations against this category of diseases.
              Fennel and cinnamon have been reported with antimicrobial
              properties against salmonella infections. Common culinary spices
              and herbs such as garden thyme, oregano, clove, garlic, cinnamon,
              rosemary and turmeric have positive associations against
              “Pneumonia Staphylococcal”. <br></br> 
              <br></br>
              Similarly, garlic, turmeric, oregano
              and clove are among spices which are reported to be beneficial for
              “Escherichia coli Infections”. Garlic clove and thyme are among
              spices which are reported to be beneficial for “Mycosis”.
              Interestingly, the molecular mechanism behind some of these
              antimicrobial effects of spices are yet to be uncovered. SpiceRx
              provides a fertile ground for further investigations into such
              cases where the molecular mechanisms for their actions are not yet
              evident. Similarly, a large number of daily culinary spices and
              herbs have beneficial associations with Diabetes Mellitus, a
              common Nutritional and Metabolic Diseases. Among them, fenugreek,
              cinnamon, garlic, turmeric, ginger, and black cumin have been
              reported most frequently in literature. Beyond the three spice
              phytochemicals (‘gallic acid’, ‘berberine’,
              ‘sophoraflavonoloside’) which have been linked to diabetes
              mellitus, further investigations into the effects of phytochemical
              content in these spices can reveal their synergistic actions in
              disease regression and control.
            </p>

            <h3>
              (C) Hypothesis generation and knowledge discovery through SpiceRx
            </h3>
            <p>
              SpiceRx can be used as a platform for knowledge discovery and
              hypothesis generation. For specific diseases, SpiceRx provides
              phytochemicals which are therapeutically associated with them. By
              finding out the spices in which these phytochemicals occur, one
              can generate and test hypothesis confirming whether these spices
              have beneficial effects for these diseases. A few examples can
              further exemplify this point. ‘Glycyrrizin’ is a phytochemical
              therapeutically associated with ‘Hepatitis A’. The phytochemical
              ‘Glycyrrizin’ is reported to be found in the herb liquorice.
              Similarly, ‘(-)- Epigallocatechin gallate’ is another
              phytochemical associated the disease ‘Herpes Simplex’. <br></br>
              <br></br>
              This chemical is present in various spices such as peppermint, avocado
              leaf, bell pepper and german chamomile. These spices and herbs are
              not directly associated with Herpes Simplex which gives room for
              testing the hypothesis. Likewise, ‘Apigen’ is a phytochemical in
              many spices and herbs including thyme, coriander, hyssop and
              fennel among others, found to be effective for Adenoviridae
              Infections. No spices so far have been reported to be beneficial
              for Adenoviridae Infections. Further studies can be undertaken to
              confirm the efficacy of spices/herbs containing apigen against
              Adenoviridae Infections.
            </p>
          </section>
        );
      default:
        return null;
    }
  };

  // Define sidebar links with a function to set the active tab
  const sidebarLinks = [
    { id: "overview", label: "Overview" },
    { id: "spice-search", label: "Spice Search" },
    { id: "disease-search", label: "Disease Search" },
    { id: "phytochemical-search", label: "Phytochemical Search" },
    { id: "statistics", label: "Statistics" },
    { id: "use-cases", label: "Use Cases" },
  ];

  return (
    <div className="howtouse-page">
      <Navbar />
      <div className="howtouse-container">
        {/* Sidebar with navigation links */}
        <aside className="sidebar">
          <div className="link-box">
            {sidebarLinks.map((link) => (
              <a
                key={link.id}
                href="#!"
                className={`sidebar-link ${
                  activeTab === link.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Main content area */}
        <main className="content-area">{renderContent()}</main>
      </div>
      <Footer />
    </div>
  );
};

export default HowToUse;
