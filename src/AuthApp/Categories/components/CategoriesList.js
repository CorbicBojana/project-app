import React, { useEffect, useState } from "react";

import { Categories } from "../../../services/http";

function CategoriesList() {
  const [categories, setCategories] = useState([]);
  console.log("!!!!!!");

  const getAllCategories = async () => {
    const getAllResponse = await Categories.getAll();
    setCategories(getAllResponse);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return <h1>category</h1>;
}

export default CategoriesList;
