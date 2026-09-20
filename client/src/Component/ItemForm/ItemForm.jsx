// import { useContext, useState } from "react";
// import { AppContext } from "../../Context/AppContext";

// const ItemForm = () => {
//   const {categories} = useContext(AppContext);
//   const [ image,setImage] = useState();
//   const [ loading,setLoading] = useState();
//   const [ data,setData] = useState({
//     name :"",
//     categoryId:"",
//     price:"",
//     description :"",
//   });
  


//   const onChangeHandler =(e) => {
//     const value = e.target.value;
//     const name = e.target.name;
//     setData((data) =>({...data,[name] : value})))


//   }
//   const onSubmitHander = (e) => {
//     e.preventDefault();
//   }


//   return (
//     <div
//       className="item-form-container"
//       style={{
//         width: "100%",
//         overflowY: "auto",
//         overflowX: "hidden",
//       }}
//     >
//       <div className="mx-2 mt-2">
//         <div className="row">
//           <div className="card col-md-8 form-container">
//             <div className="card-body">
//               <form>
//                 <div className="mb-3">
//                   <label htmlFor="image" className="form-label">
//                     <img src={image ? URL.createObjectURL(image) :"https://placehold.co/48x48"} alt="" />
//                   </label>
//                   <input tupe = "file" name  ="image" id="image" className="form-control" hidden onChange={(e) =>setImage(e.target.file[e])}/>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     name
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       className="form-control"
//                       placeholder="Item name"
//                       onChange={ onChangeHandler} value={data.name}
//                     />
//                   </label>
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label" htmlFor="category">
//                     Category
//                   </label>

//                   <select
//                     name="categoryId"
//                     id="category"
//                     className="form-control"  onChange={ onChangeHandler} value={data.categoryId}
//                   >
//                     <option value="">Select a category</option>
//                   {categories.map((category,index) => (
//                     <option key={index} value={category.categoryId}>{category.name}</option>
//                   ))}
//                   </select>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="price" className="form-label">
//                     Price
//                   </label>
//                   <input
//                     type="number"
//                     name="price"
//                     id="price"
//                     className="form-control"
//                     placeholder="&#8377; 200.00"
//                      onChange={ onChangeHandler} value={data.price}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="description" className="form-label">
//                     description
//                     <textarea
//                       rows="5"
//                       name="description"
//                       id="description"
//                       className="form-control"
//                       placeholder="write content here"
//                        onChange={ onChangeHandler} value={data.description}
//                     />
//                   </label>
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="bg-color" className="form-label">
//                     background color
//                   </label>

//                   <br />

//                   <input
//                     type="color"
//                     name="bgcolor"
//                     id="bg-color"
//                     placeholder="#ffffff"
//                   />
//                 </div>

//                 <button type="submit" className="btn btn-warning w-100" disabled ={loading}>
//                   {loading ? "loading...." : "save"}
                  
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemForm;














// import { useContext, useState } from "react";
// import { AppContext } from "../../Context/AppContext";

// const ItemForm = () => {
//   const { categories } = useContext(AppContext);

//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const [data, setData] = useState({
//     name: "",
//     categoryId: "",
//     price: "",
//     description: "",
//     bgColor: "#ffffff",
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;

//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const onImageChangeHandler = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setImage(file);
//     }
//   };

//   const onSubmitHandler = (e) => {
//     e.preventDefault();

//     console.log("Form Data:", data);
//     console.log("Selected Image:", image);

//     // Backend integration will be added here
//   };

//   return (
//     <div
//       className="item-form-container"
//       style={{
//         width: "100%",
//         overflowY: "auto",
//         overflowX: "hidden",
//       }}
//     >
//       <div className="mx-2 mt-2">
//         <div className="row">
//           <div className="card col-md-8 form-container">
//             <div className="card-body">
//               <form onSubmit={onSubmitHandler}>

//                 {/* Image */}
//                 <div className="mb-3">
//                   <label htmlFor="image" className="form-label">
//                     <img
//                       src={
//                         image
//                           ? URL.createObjectURL(image)
//                           : "https://placehold.co/48x48"
//                       }
//                       alt="Item Preview"
//                       style={{
//                         width: "100px",
//                         height: "100px",
//                         objectFit: "cover",
//                         cursor: "pointer",
//                       }}
//                     />
//                   </label>

//                   <input
//                     type="file"
//                     name="image"
//                     id="image"
//                     className="form-control"
//                     accept="image/*"
//                     hidden
//                     onChange={onImageChangeHandler}
//                   />
//                 </div>

//                 {/* Name */}
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label">
//                     Name
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     id="name"
//                     className="form-control"
//                     placeholder="Item name"
//                     value={data.name}
//                     onChange={onChangeHandler}
//                     required
//                   />
//                 </div>

//                 {/* Category */}
//                 <div className="mb-3">
//                   <label
//                     className="form-label"
//                     htmlFor="category"
//                   >
//                     Category
//                   </label>

//                   <select
//                     name="categoryId"
//                     id="category"
//                     className="form-control"
//                     value={data.categoryId}
//                     onChange={onChangeHandler}
//                     required
//                   >
//                     <option value="">
//                       Select a category
//                     </option>

//                     {categories.map((category) => (
//                       <option
//                         key={category.categoryId}
//                         value={category.categoryId}
//                       >
//                         {category.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {/* Price */}
//                 <div className="mb-3">
//                   <label
//                     htmlFor="price"
//                     className="form-label"
//                   >
//                     Price
//                   </label>

//                   <input
//                     type="number"
//                     name="price"
//                     id="price"
//                     className="form-control"
//                     placeholder="₹ 200.00"
//                     value={data.price}
//                     onChange={onChangeHandler}
//                     min="0"
//                     step="0.01"
//                     required
//                   />
//                 </div>

//                 {/* Description */}
//                 <div className="mb-3">
//                   <label
//                     htmlFor="description"
//                     className="form-label"
//                   >
//                     Description
//                   </label>

//                   <textarea
//                     rows="5"
//                     name="description"
//                     id="description"
//                     className="form-control"
//                     placeholder="Write content here"
//                     value={data.description}
//                     onChange={onChangeHandler}
//                   />
//                 </div>

//                 {/* Background Color */}
//                 <div className="mb-3">
//                   <label
//                     htmlFor="bg-color"
//                     className="form-label"
//                   >
//                     Background Color
//                   </label>

//                   <br />

//                   <input
//                     type="color"
//                     name="bgColor"
//                     id="bg-color"
//                     value={data.bgColor}
//                     onChange={onChangeHandler}
//                   />
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="btn btn-warning w-100"
//                   disabled={loading}
//                 >
//                   {loading ? "Loading..." : "Save"}
//                 </button>

//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ItemForm;








































import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { addItem } from "../../Service/ItemService";

const ItemForm = () => {
  const { categories, items, setItems } = useContext(AppContext);

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    name: "",
    categoryId: "",
    price: "",
    description: "",
  });

  // Handle input changes
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image selection
  const onImageChangeHandler = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    // Check image type
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file.");
      return;
    }

    // Check image size (5 MB maximum)
    if (file.size > 20 * 1024 * 1024) {
      alert("Image size must be less than 20 MB.");
      return;
    }

    setImage(file);
  };

  // Submit form
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate image
    if (!image) {
      alert("Please select an item image.");
      return;
    }

    // Validate name
    if (!data.name.trim()) {
      alert("Please enter item name.");
      return;
    }

    // Validate category
    if (!data.categoryId) {
      alert("Please select a category.");
      return;
    }

    // Validate price
    if (data.price === "" || Number(data.price) < 0) {
      alert("Please enter a valid price.");
      return;
    }

    setLoading(true);

    try {
      // Data sent to the backend
      const itemData = {
        name: data.name.trim(),
        categoryId: data.categoryId,
        price: Number(data.price),
        description: data.description.trim(),
      };

      // Call backend API
      const response = await addItem(itemData, image);

      console.log("Item added successfully:", response.data);

      // Add newly created item to AppContext
      setItems((prevItems) => [
        ...prevItems,
        response.data,
      ]);

      // Reset form
      setData({
        name: "",
        categoryId: "",
        price: "",
        description: "",
      });

      setImage(null);

      // Reset file input
      document.getElementById("image").value = "";

      alert("Item added successfully!");

    } catch (error) {
      console.error("Error adding item:", error);

      if (error.response) {
        alert(
          error.response.data?.message ||
          "Failed to add item. Please check your input."
        );
      } else {
        alert("Unable to connect to the server.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="item-form-container"
      style={{
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div className="mx-2 mt-2">
        <div className="row">

          <div className="card col-md-8 form-container">

            <div className="card-body">

              <h4 className="mb-4">
                Add Item
              </h4>

              <form onSubmit={onSubmitHandler}>

                {/* Image */}
                <div className="mb-3">

                  <label
                    htmlFor="image"
                    className="form-label"
                  >
                    <img
                      src={
                        image
                          ? URL.createObjectURL(image)
                          : "https://placehold.co/100x100"
                      }
                      alt="Item Preview"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        cursor: "pointer",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                      }}
                    />
                  </label>

                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="form-control"
                    accept="image/*"
                    hidden
                    onChange={onImageChangeHandler}
                  />

                  <p className="text-muted mt-1">
                    Click the image to select an item picture.
                  </p>

                </div>

                {/* Name */}
                <div className="mb-3">

                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Item Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    placeholder="Enter item name"
                    value={data.name}
                    onChange={onChangeHandler}
                    required
                  />

                </div>

                {/* Category */}
                <div className="mb-3">

                  <label
                    htmlFor="category"
                    className="form-label"
                  >
                    Category
                  </label>

                  <select
                    name="categoryId"
                    id="category"
                    className="form-control"
                    value={data.categoryId}
                    onChange={onChangeHandler}
                    required
                  >

                    <option value="">
                      Select a category
                    </option>

                    {categories.map((category) => (

                      <option
                        key={category.categoryId}
                        value={category.categoryId}
                      >
                        {category.name}
                      </option>

                    ))}

                  </select>

                </div>

                {/* Price */}
                <div className="mb-3">

                  <label
                    htmlFor="price"
                    className="form-label"
                  >
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    placeholder="₹ 200.00"
                    value={data.price}
                    onChange={onChangeHandler}
                    min="0"
                    step="0.01"
                    required
                  />

                </div>

                {/* Description */}
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
                    placeholder="Write item description"
                    value={data.description}
                    onChange={onChangeHandler}
                  />

                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-warning w-100"
                  disabled={loading}
                >

                  {loading ? "Saving..." : "Save Item"}

                </button>

              </form>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ItemForm;
