import React from 'react';
import { Link } from 'react-router-dom';

//Crée les catégories Sport, Musique et Voyage
const categories = ['Sport', 'Musique', 'Voyage'];

//Crée la fonction CategorieList qui retourne les clés category et index avec leurs données
const CategorieList = () => {
  return (
    <div>
      <h2>Liste de catégories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorieList;
