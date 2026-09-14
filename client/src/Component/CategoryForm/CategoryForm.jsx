/*import { useContext, useEffect, useState } from "react";
import { data } from "react-router-dom";
import {AppContext} from "../../Context/AppContext.jsx";
import { addCategory } from "../../Service/CategoryService.js";




const CategoryForm = () => {
   const {setCategories,categories} =useContext(AppContext);

  const [ loading,setLoading] = useState(false);
  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name : "",
    description : "",
    bgColor : "#c2c2c2",
  })

 useEffect(() => {
  console.log(data);
 },[data]);

  const  onChangeHandler = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    setDate((data) => ({...data,[name] : value}));
  }

  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append(" category",JSON.stringify(data));
    formData.append("file",image);
    try{
      const response = await addCategory(formDate);
      if(response.status == 201){
        setCategories([...categories,response.data]);
        setData({
          name :"",
          description :"",
          bgColor :"#2c2c2c",
        });
        setImage(false);
      }
    }catch(err){
      console.error(err);
    }finally{
      setLoading(false);
    }

  }
  return (
    <div className="mx-2 mt-2">
      <div className="row">
        <div className="card col-md-12 form-container">
          <div className="card-body">
            <form onSubmit = {onSubmitHandler} >
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img src="https://placehold.co/48x48" alt="" />
                </label>
                <input type="file" name="image" id="image"className="form-control" hidden onChange={(e) => setImage(e.targert.file[0])}  />
                
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  name
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Category name"
                    onChange={onChangeHandler}
                    value ={data.name}
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  description
                  <textarea
                    rows="5"
                    name="description"
                    id="description"
                    className="form-control"
                    placeholder="write content here"
                    onChange={onChangeHandler}
                    value ={data.description}
                  />
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="bg-color" className="form-label">
                  background color
                </label>
                <br />
                <input
                  type="color"
                  name="bgcolor"
                  id="bg-color"
                  onChange={onChangeHandler}
                    value ={data.bgColor}
                  placeholder="#ffffff"
                />
              </div>
              <button type="submit"  disabled ={loading} className="btn btn-warning w-100">
                {loading ? "Loading..." : "submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryForm;*/

// /*import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../../Context/AppContext.jsx";
// import { addCategory } from "../../Service/CategoryService.js";

// const CategoryForm = () => {
//   const { setCategories, categories } = useContext(AppContext);

//   const [loading, setLoading] = useState(false);
//   const [image, setImage] = useState(null);

//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     bgColor: "#c2c2c2",
//   });

//   useEffect(() => {
//     console.log(data);
//   }, [data]);

//   const onChangeHandler = (e) => {
//     const value = e.target.value;
//     const name = e.target.name;

//     setData((data) => ({
//       ...data,
//       [name]: value,
//     }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     setLoading(true);

//     const formData = new FormData();

//     formData.append("category", JSON.stringify(data));

//     if (image) {
//       formData.append("file", image);
//     }

//     try {
//       const response = await addCategory(formData);

//       if (response.status === 201) {
//         setCategories([...categories, response.data]);

//         setData({
//           name: "",
//           description: "",
//           bgColor: "#c2c2c2",
//         });

//         setImage(null);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="mx-2 mt-2">
//       <div className="row">
//         <div className="card col-md-12 form-container">
//           <div className="card-body">
//             <form onSubmit={onSubmitHandler}>

//               {/* Image */}
//               <div className="mb-3">
//                 <label htmlFor="image" className="form-label">
//                   <img
//                     src={
//                       image
//                         ? URL.createObjectURL(image)
//                         : "https://placehold.co/48x48"
//                     }
//                     alt="category"
//                     width="48"
//                     height="48"
//                   />
//                 </label>

//                 <input
//                   type="file"
//                   name="image"
//                   id="image"
//                   className="form-control"
//                   hidden
//                   onChange={(e) => setImage(e.target.files[0])}
//                 />
//               </div>

//               {/* Name */}
//               <div className="mb-3">
//                 <label htmlFor="name" className="form-label">
//                   Name
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="form-control"
//                   placeholder="Category name"
//                   onChange={onChangeHandler}
//                   value={data.name}
//                 />
//               </div>

//               {/* Description */}
//               <div className="mb-3">
//                 <label htmlFor="description" className="form-label">
//                   Description
//                 </label>

//                 <textarea
//                   rows="5"
//                   name="description"
//                   id="description"
//                   className="form-control"
//                   placeholder="Write content here"
//                   onChange={onChangeHandler}
//                   value={data.description}
//                 />
//               </div>

//               {/* Background Color */}
//               <div className="mb-3">
//                 <label htmlFor="bg-color" className="form-label">
//                   Background Color
//                 </label>

//                 <br />

//                 <input
//                   type="color"
//                   name="bgColor"
//                   id="bg-color"
//                   onChange={onChangeHandler}
//                   value={data.bgColor}
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn btn-warning w-100"
//               >
//                 {loading ? "Loading..." : "Submit"}
//               </button>

//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryForm;
















import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext.jsx";
import { addCategory } from "../../Service/CategoryService.js";

const CategoryForm = () => {

  const { setCategories } = useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [data, setData] = useState({
    name: "",
    description: "",
    bgColor: "#c2c2c2",
  });

  // Handle text and color changes
  const onChangeHandler = (e) => {

    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image selection
  const onImageChange = (e) => {

    const selectedImage = e.target.files[0];

    if (!selectedImage) {
      return;
    }

    setImage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  // Clean image preview URL
  useEffect(() => {

    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };

  }, [imagePreview]);

  // Submit category
  const onSubmitHandler = async (e) => {

    e.preventDefault();

    if (!data.name.trim()) {
      alert("Please enter category name");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("name", data.name.trim());
    formData.append("description", data.description);
    formData.append("bgColor", data.bgColor);

    if (image) {
      formData.append("image", image);
    }

    try {

      const response = await addCategory(formData);

      if (response.status === 201) {

        // Add newly created category to right-side list
        setCategories((prev) => [
          ...prev,
          response.data,
        ]);

        // Reset form
        setData({
          name: "",
          description: "",
          bgColor: "#c2c2c2",
        });

        setImage(null);
        setImagePreview(null);

        // Clear file input
        e.target.reset();

        alert("Category added successfully");
      }

    } catch (error) {

      console.error("Error adding category:", error);

      console.error(
        "Backend response:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
        "Failed to add category"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="mx-2 mt-2">

      <div className="row">

        <div className="card col-md-12 form-container">

          <div className="card-body">

            <form onSubmit={onSubmitHandler}>

              {/* IMAGE */}

              <div className="mb-3">

                <label
                  htmlFor="image"
                  className="form-label"
                  style={{ cursor: "pointer" }}
                >

                  <img
                    src={
                      imagePreview ||
                      "https://placehold.co/48x48"
                    }
                    alt="category"
                    width="48"
                    height="48"
                  />

                </label>

                <input
                  type="file"
                  name="image"
                  id="image"
                  className="form-control"
                  hidden
                  accept="image/*"
                  onChange={onImageChange}
                />

              </div>

              {/* NAME */}

              <div className="mb-3">

                <label
                  htmlFor="name"
                  className="form-label"
                >
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Category name"
                  value={data.name}
                  onChange={onChangeHandler}
                />

              </div>

              {/* DESCRIPTION */}

              <div className="mb-3">

                <label
                  htmlFor="description"
                  className="form-label"
                >
                  Description
                </label>

                <textarea
                  rows="5"
                  name="description"
                  id="description"
                  className="form-control"
                  placeholder="Write content here"
                  value={data.description}
                  onChange={onChangeHandler}
                />

              </div>

              {/* BACKGROUND COLOR */}

              <div className="mb-3">

                <label
                  htmlFor="bg-color"
                  className="form-label"
                >
                  Background Color
                </label>

                <br />

                <input
                  type="color"
                  name="bgColor"
                  id="bg-color"
                  value={data.bgColor}
                  onChange={onChangeHandler}
                />

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="btn btn-warning w-100"
              >

                {loading
                  ? "Loading..."
                  : "Submit"}

              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CategoryForm;