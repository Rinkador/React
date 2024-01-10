//Routes React
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategorieList from './components/CategorieList'; //Route menant à CategorieList
import CategorieDetails from './components/CategorieDetails'; //Route menant à CategorieDetails

//Fonction App permettant d'appeler les routes CategorieList et CategorieDetails
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CategorieList />} />
        <Route path="/category/:category" element={<CategorieDetails />} />
      </Routes>
    </Router>
  );
}

//Exporte par défaut App
export default App;
