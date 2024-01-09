import React from 'react';
import { Link, useParams } from 'react-router-dom';

//Crée la fonction CategoryDetails qui passe les données en tant que paramètres
const CategoryDetails = () => {
  const { category } = useParams();

  //Données de remplacement pour les détails de la catégorie
  const categoryDetails = {
    Sport: { name: 'Sport', description: 'Derby Demolition', image: 'derby.jpg' },
    Musique: { name: 'Musique', description: 'Mozart - Symphony No. 40 in G minor, K. 550 [complete]', image: 'mozartqurantesymphonie.jpg', sound: 'Mozart - Symphony No. 40 in G minor, K. 550 [complete].mp3' },
    Voyage: { name: 'Voyage', description: 'Canada', image: 'canada.jpg' },
  };

  const details = categoryDetails[category];

  //Pour mettre un fichier audio mp3 dans la catégorie Musique
  return (
    <div>
      <h2>Détails de la catégorie</h2>
      {details ? (
        <>
          <h3>{details.name}</h3>
          <p>{details.description}</p>
          <img src={`/images/${details.image}`} alt={details.name} />

          {/* Ajoutez le lecteur audio pour le fichier MP3 */}
          {details.sound && (
            <audio controls>
              <source src={`/sounds/${details.sound}`} type="audio/mp3" />
              Votre navigateur ne prend pas en charge l'élément audio.
            </audio>
          )}
        </>
      ) : (
        <p>Catégorie non trouvée</p>
      )}
      <Link to="/">Retour à la liste des catégories</Link>
    </div>
  );
};

export default CategoryDetails;
