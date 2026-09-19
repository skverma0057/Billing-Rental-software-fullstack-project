/*import axios from "axios";


export const  login = async(data) =>{
 //  return  await axios.post("http://localhost :8080/api/v1.0/login",data);

   
    return  await axios.post("http://localhost:8000/api/categories",data);
}*/








import axios from "axios";

export const login = async (data) => {
    const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        data
    );

    return response.data;
};