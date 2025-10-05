import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import NewsTable from "./components/NewsTable";
import SentimentChart from "./components/SentimentChart";
import axios from "axios";
import "./index.css";

function App() {
  const [company, setCompany] = useState("");
  const [headlines, setHeadlines] = useState([]);
  const [sentimentData, setSentimentData] = useState({ positive: 0, negative: 0, neutral: 0 });

  const handleSearch = async () => {
    if (!company) return;
    try {
      const res = await axios.post("http://127.0.0.1:5000/analyze", { company });
      setHeadlines(res.data.headlines || []);
      setSentimentData(res.data.sentiment || { positive: 0, negative: 0, neutral: 0 });
    } catch (error) {
      console.error("API Error:", error);
      setHeadlines([]);
      setSentimentData({ positive: 0, negative: 0, neutral: 0 });
      alert("Failed to fetch data from backend.");
    }
  };

  return (
    <div className="container">
      <h1>Stock News Sentiment Analyzer</h1>
      <div className="search-bar">
        <SearchBar company={company} setCompany={setCompany} onSearch={handleSearch} />
      </div>

      {/* Sentiment Cards */}
      <div className="sentiment-cards">
        <div className="sentiment-card positive">Positive: {sentimentData.positive}</div>
        <div className="sentiment-card negative">Negative: {sentimentData.negative}</div>
        <div className="sentiment-card neutral">Neutral: {sentimentData.neutral}</div>
      </div>

      {/* News Table */}
      {headlines.length > 0 && <div className="card"><NewsTable headlines={headlines} /></div>}

      {/* Sentiment Pie Chart */}
      <div className="card chart-container">
        <SentimentChart sentimentData={sentimentData} />
      </div>
    </div>
  );
}

export default App;
