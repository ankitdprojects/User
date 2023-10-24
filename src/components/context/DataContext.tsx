import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }:any) => {
  const [storyText, setStoryText] = useState("")
  const [storyImage, setStoryImage] = useState(null);
  

  return (
    <DataContext.Provider value={{ storyText, setStoryText, storyImage, setStoryImage }}>
      {children}
    </DataContext.Provider>
  );
};
