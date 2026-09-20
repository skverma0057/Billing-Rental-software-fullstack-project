




import axios from "axios";

const URL = "http://localhost:8000/api/items";

// Add Item
export const addItem = async (item) => {
  return await axios.post(URL, item);
};

// Delete Item
export const deleteItem = async (itemId) => {
  return await axios.delete(`${URL}/${itemId}`);
};

// Fetch Items
export const fetchItem = async () => {
  return await axios.get(URL);
};