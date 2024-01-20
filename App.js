import React from 'react';
import './App.css';
import FetchData from './FetchData.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DetailView from "./DetailView";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FetchData />} />
          <Route path="/details/:id" element={<DetailView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
