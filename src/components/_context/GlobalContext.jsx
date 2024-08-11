import {createContext, useContext, useState} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
  const [updateCart, setUpdateCart] = useState(false);

  return (
    <GlobalContext.Provider value={{updateCart, setUpdateCart}}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
