import React, { useState, useEffect } from "react";

import { getCategoriesandDocuments } from "../../utils/firebase/firebase.utils.js";
export const CategoriesContext = React.createContext({
  categoriesMap: {},
});

const CategoriesContextProvider = (props) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap };

  useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesandDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {props.children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContextProvider;
