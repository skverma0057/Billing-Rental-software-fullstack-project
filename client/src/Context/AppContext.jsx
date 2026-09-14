/*import { createContext } from "react";
import { useState, useEffect } from "react";
import { fetchCategories } from "../Service/CategoryService";

export const AppContext = createContext();

export const AppContextProvider = ({ props }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadDate() {
      const response = await fetchCategories();
      setCategories(response.data);
    }
    loadDate();
  }, []);

  const contextValue = {
    categories,
    setCategories,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};*/

/*import { createContext, useState, useEffect } from "react";

import { fetchCategories } from "../Service/CategoryService";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await fetchCategories();
      setCategories(response.data);
    }

    loadData();
  }, []);

  const contextValue = {
    categories,
    setCategories,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
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

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const [categories, setCategories] =
    useState([]);

  useEffect(() => {

    const loadData = async () => {

      try {

        const response =
          await fetchCategories();

        setCategories(response.data);

      } catch (error) {

        console.error(
          "Error fetching categories:",
          error
        );
      }
    };

    loadData();

  }, []);

  const contextValue = {
    categories,
    setCategories,
  };

  return (
    <AppContext.Provider
      value={contextValue}
    >
      {children}
    </AppContext.Provider>
  );
};
