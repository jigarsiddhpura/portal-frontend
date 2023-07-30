import React, { createContext, useState } from "react";

// Create a new context
const AppContext = createContext();

// Create a context provider component to wrap the entire application
export const AppProvider = ({ children }) => {
    const [selectedTags, setSelectedTags] = useState({internship_Type:[],internship_Title:[],stipend:[]});

  return (
    <AppContext.Provider value={{ selectedTags, setSelectedTags }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
