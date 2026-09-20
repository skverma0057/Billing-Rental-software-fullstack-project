/*import axios from "axios";


// export const getCategory = async (category) => {
//    return await axios.post("http://localhost:8000/api/v1.0.categories", category);
// }

export const addCategory = async (formData) => {
    return await axios.post(
        "http://localhost:8000/api/categories",
        formData
    );
};

export const deleteCategory = async (categoryId) => {
    return await axios.delete(`http://localhost:8000/api/v1.0.categories/${categoryId}`);
}

/*export const fetchCategories = async () => {
    return await axios.get("http://localhost:8000/api/v1.0.categories");
}*/

// export const fetchCategories = async () => {
//     return await axios.get(
//         "http://localhost:8000/api/categories"
//     );
// };

// export const addCategory = async (category) => { return await axios.post( "http://localhost:8000/api/v1.0/categories", category ); };

/*import axios from "axios";

export const addCategory = async (formData) => {
    return await axios.post(
        "http://localhost:8000/api/categories",
        formData
    );
};

export const deleteCategory = async (categoryId) => {
    return await axios.delete(
        `http://localhost:8000/api/categories/${categoryId}`
    );
};

export const fetchCategories = async () => {
    return await axios.get(
        "http://localhost:8000/api/categories"
    );
};*/
    
import axios from "axios";

const API_URL = "http://localhost:8000/api/categories";

export const addCategory = async (formData) => {
  return await axios.post(API_URL, formData);
};

export const fetchCategories = async () => {
  return await axios.get(API_URL);
};

export const deleteCategory = async (categoryId) => {
  return await axios.delete(`${API_URL}/${categoryId}`);
};
