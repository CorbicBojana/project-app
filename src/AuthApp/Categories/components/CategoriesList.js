import React, { useEffect, useState } from "react";

import { Categories } from "../../../services/http";

function CategoriesList() {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    const getAllResponse = await Categories.getAll();
    setCategories(getAllResponse.data);
  };

  const handleClick = async id => {
    const deleteCategorie = await Categories.delete({ id });
  };

  useEffect(() => {
    getAllCategories();
  }, [categories]);

  const categoriesList = categories.map(categorie => (
    <div key={categorie.id}>
      <h2>{categorie.name}</h2>
      <p>{categorie.description}</p>
      <button onClick={() => handleClick(categorie.id)}>
        Delete categorie
      </button>
    </div>
  ));

  return <>{categoriesList}</>;
}

export default CategoriesList;
