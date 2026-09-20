








// import axios from "axios";

// const URL = "http://localhost:8000/api/items";

// // Add Item
// export const addItem = async (item, image) => {
//   const formData = new FormData();

//   formData.append(
//     "item",
//     new Blob([JSON.stringify(item)], {
//       type: "application/json",
//     })
//   );

//   formData.append("file", image);

//   return await axios.post(URL, formData);
// };

// // Delete Item
// export const deleteItem = async (itemId) => {
//   return await axios.delete(`${URL}/${itemId}`);
// };

// // Fetch Items
// export const fetchItem = async () => {
//   return await axios.get(URL);
// };
























import axios from "axios";

const URL = "http://localhost:8000/api/items";

// Add Item
export const addItem = async (item, image) => {
  const formData = new FormData();

  // Convert item object into JSON string
  formData.append("item", JSON.stringify(item));

  // Add image file
  formData.append("file", image);

  return await axios.post(
    "http://localhost:8000/api/admin/items",
    formData
  );
};

// Delete Item
export const deleteItem = async (itemId) => {
  return await axios.delete(
    `http://localhost:8000/api/admin/items/${itemId}`
  );
};

// Fetch Items
export const fetchItem = async () => {
  return await axios.get(URL);
};