
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import StatisticsPage from './pages/StatisticsPage';
import HowToUsePage from './pages/HowToUse';
import FAQPage from './pages/FAQ';
import DownloadDataPage from './pages/DownloadData';
import Details from './pages/searchpages/DetailsPage';
import './App.css';
import ContactUs from './pages/ContactUs';
import SearchResult from './pages/searchpages/SearchResult';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/statistics" element={<StatisticsPage />} /> */}
        <Route path="/how-to-use" element={<HowToUsePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/download" element={<DownloadDataPage />} />
        <Route path="/contactus"  element={<ContactUs />} />
        <Route path="/details" element={<Details />} />
        <Route path="/searchresult" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;