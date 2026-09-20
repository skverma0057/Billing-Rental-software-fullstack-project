


/*
import {
  createContext,
  useState,
  useEffect
} from "react";

import {
  fetchCategories
} from "../Service/CategoryService";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [categories, setCategories] = useState([]);

  const [auth, setAuth] = useState({
    user: null,
    role: null
  });

  useEffect(() => {

    const loadData = async () => {

      try {
        const response = await fetchCategories();

        setCategories(response.data);

      } catch (error) {
        console.error("Error fetching categories:", error);
      }

    };

    loadData();

  }, []);

  // Save login details
  const setAuthData = (user, role) => {

    setAuth({
      user: user,
      role: role
    });

  };

  const contextValue = {
    categories,
    setCategories,
    auth,
    setAuthData
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};*/

















import {
  createContext,
  useState,
  useEffect
} from "react";

import {
  fetchCategories
} from "../Service/CategoryService";

import {
  fetchItem
} from "../Service/ItemService";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  // Categories state
  const [categories, setCategories] = useState([]);

  // Items state
  const [items, setItems] = useState([]);

  // Authentication state
  const [auth, setAuth] = useState({
    user: null,
    role: null
  });

  // Fetch categories and items
  useEffect(() => {

    const loadData = async () => {

      try {

        const categoryResponse = await fetchCategories();
        setCategories(categoryResponse.data);

        const itemResponse = await fetchItem();
        setItems(itemResponse.data);

      } catch (error) {

        console.error("Error fetching data:", error);

      }

    };

    loadData();

  }, []);

  // Save login details
  const setAuthData = (user, role) => {

    setAuth({
      user: user,
      role: role
    });

  };

  // Context values
  const contextValue = {

    categories,
    setCategories,

    items,
    setItems,

    auth,
    setAuthData

  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );

};
