import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../styles/DetailsPage.css'; 


const SearchPage = () => {
  // Sample data for illustration. Replace with your actual data.
  const firstTableData = [
    { commonName: 'Depressive Disorder', associations: '22,0', details: 'Show More' },
  ];

  const secondTableData = [
    // e.g. { pmid: '123456', disease: 'Depressive Disorder', title: 'Sample Title', journal: 'Nature', year: 2023 }
  ];

  return (
    <>
      <Navbar />

      <div className="search-page-container">
        <h1 className="search-title">Search Results</h1>

        {/* FIRST FULL-WIDTH TABLE */}
        <div className="full-bleed-table first-table-container">
          <table className="search-table">
            <thead>
              <tr>
                <th>Common_name / Sci_name</th>
                <th>Associations</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {firstTableData.map((item, index) => (
                <tr key={index}>
                  <td>{item.commonName}</td>
                  <td>{item.associations}</td>
                  <td>
                    <button className="show-more-btn">{item.details}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* SECOND FULL-WIDTH TABLE */}
        <div className="full-bleed-table second-table-container">
        <div className="second-table-scroll-wrapper">
          <table className="search-table">
            <thead>
              <tr>
                <th>PMID</th>
                <th>Disease</th>
                <th>Title</th>
                <th>Journal</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {secondTableData.length > 0 ? (
                secondTableData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.pmid}</td>
                    <td>{row.disease}</td>
                    <td>{row.title}</td>
                    <td>{row.journal}</td>
                    <td>{row.year}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="no-data">No data found</td>
                </tr>
                
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>

      <Footer />
    </>
  );
};

export default SearchPage;