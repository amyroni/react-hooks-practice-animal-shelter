import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petsArray = pets.map(pet => {
    return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  })
  return <div className="ui cards">{petsArray}</div>;
}

export default PetBrowser;
