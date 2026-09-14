/*import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import "../CategoryList/CategoryList.css";

const CategoryList = () => {
  const { categories } = useContext(AppContext);
  return (
    <div
      className="category-list-container"
      style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
    >
      <div className="row pe-2">search bar</div>
      <div className="row g-3 pe-2">
        {categories.map((Category, index) => (
          <div style={{ marginRight: "15px" }} className="col-12">
            <div
              className="card p-3"
              style={{ backgroundColor: Category.bgColor }}
            >
              <div className="d-flex align-items-center">
                <div style={{ marginRight: "15px" }}>
                  <img
                    src={Category.imgUrl}
                    alt={Category.name}
                    className="category-image"
                  />
                </div>
                <div className="flex grow-1">
                  <h5 className="mb-1 text-white">{Category.name}</h5>
                  <p ClassName="mb-0 text-white">{Category.items}items</p>
                </div>
                <div>
                  <button ClassName="btn btn-danger btn-sm">
                    <i ClassName="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryList;*/

/*import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import "../CategoryList/CategoryList.css";

const CategoryList = () => {
  const { categories, setCategories } = useContext(AppContext);
  const [searchterm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().include(searchterm.toLowerCase()),
  
  );

  const deleteByCategoryId = async (categoryId) => {
    const response = await deleteCategory(categoryId);

    if (response.status === 204) {
      setCategories(
        categories.filter((category) => category.categoryId !== categoryId),
      );
    }
  };

  return (
    <div
      className="category-list-container"
      style={{
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <div className="row pe-2">
        <div className="input-group mb-3">
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Search by keyword"
            className="form-control"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchterm}
          />
          <span className="input-group-text bg-warning">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      <div className="row g-3 pe-2">
        {filteredCategories.map((category, index) => (
          <div key={index} style={{ marginRight: "15px" }} className="col-12">
            <div
              className="card p-3"
              style={{ backgroundColor: category.bgColor }}
            >
              <div className="d-flex align-items-center">
                <div style={{ marginRight: "15px" }}>
                  <img
                    src={category.imgUrl}
                    alt={category.name}
                    className="category-image"
                  />
                </div>

                <div className="flex-grow-1">
                  <h5 className="mb-1 text-white">{category.name}</h5>

                  <p className="mb-0 text-white">5 items</p>
                </div>

                <div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteByCategoryId(category.categoryId)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;*/

//  /*import { useContext, useState } from "react";
// import { AppContext } from "../../Context/AppContext";
// import { deleteCategory } from "../../Service/CategoryService.js";
// import "../CategoryList/CategoryList.css";

// const CategoryList = () => {
//   const { categories, setCategories } = useContext(AppContext);

//   const [searchterm, setSearchTerm] = useState("");

//   // Search categories
//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(searchterm.toLowerCase()),
//   );

//   // Delete category
//   const deleteByCategoryId = async (categoryId) => {
//     try {
//       const response = await deleteCategory(categoryId);

//       if (response.status === 204) {
//         setCategories(
//           categories.filter((category) => category.categoryId !== categoryId),
//         );
//       }
//     } catch (error) {
//       console.error("Error deleting category:", error);
//     }
//   };

//   /*const deleteByCategoryId = async (categoryId) => {
//     try {
//       await deleteCategory(categoryId);

//       setCategories((prev) =>
//         prev.filter((category) => category.categoryId !== categoryId),
//       );
//     } catch (error) {
//       console.error("Error deleting category:", error);
//     }
//   };*/

//   console.log("CATEGORIES:", categories);

//   return (
//     <div
//       className="category-list-container"
//       style={{
//         height: "100%",
//         overflowY: "auto",
//         overflowX: "hidden",
//       }}
//     >
//       {/* Search bar */}
//       <div className="row pe-2">
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             name="keyword"
//             id="keyword"
//             placeholder="Search by keyword"
//             className="form-control"
//             onChange={(e) => setSearchTerm(e.target.value)}
//             value={searchterm}
//           />

//           <span className="input-group-text bg-warning">
//             <i className="bi bi-search"></i>
//           </span>
//         </div>
//       </div>

//       {/* Category list */}
//       <div className="row g-3 pe-2">
//         {filteredCategories.map((category, index) => (
//           <div key={index} style={{ marginRight: "15px" }} className="col-12">
//             <div
//               className="card p-3"
//               style={{ backgroundColor: category.bgColor }}
//             >
//               <div className="d-flex align-items-center">
//                 {/* Category image */}
//                 <div style={{ marginRight: "15px" }}>
//                   <img
//                     src={category.imgUrl}
//                     alt={category.name}
//                     className="category-image"
//                   />
//                 </div>

//                 {/* Category information */}
//                 <div className="flex-grow-1">
//                   <h5 className="mb-1 text-white">{category.name}</h5>

//                   <p className="mb-0 text-white">5 items</p>
//                 </div>

//                 {/* Delete button */}
//                 <div>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => deleteByCategoryId(category.categoryid)}
//                   >
//                     <i className="bi bi-trash"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryList;













import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { deleteCategory } from "../../Service/CategoryService.js";
import "../CategoryList/CategoryList.css";

const CategoryList = () => {

  const {
    categories,
    setCategories
  } = useContext(AppContext);

  const [searchterm, setSearchTerm] = useState("");

  const filteredCategories =
    categories.filter((category) =>
      category.name
        .toLowerCase()
        .includes(searchterm.toLowerCase())
    );

  const deleteByCategoryId = async (categoryId) => {

    try {

      const response =
        await deleteCategory(categoryId);

      if (response.status === 204) {

        setCategories((prev) =>
          prev.filter(
            (category) =>
              category.categoryId !== categoryId
          )
        );
      }

    } catch (error) {

      console.error(
        "Error deleting category:",
        error
      );

      console.error(
        "Backend response:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
        "Failed to delete category"
      );
    }
  };

  return (
    <div
      className="category-list-container"
      style={{
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >

      {/* Search */}

      <div className="row pe-2">

        <div className="input-group mb-3">

          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Search by keyword"
            className="form-control"
            value={searchterm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

          <span className="input-group-text bg-warning">
            <i className="bi bi-search"></i>
          </span>

        </div>

      </div>

      {/* Category List */}

      <div className="row g-3 pe-2">

        {filteredCategories.map((category) => (

          <div
            key={category.categoryId}
            style={{ marginRight: "15px" }}
            className="col-12"
          >

            <div
              className="card p-3"
              style={{
                backgroundColor:
                  category.bgColor
              }}
            >

              <div className="d-flex align-items-center">

                {/* Image */}

                <div
                  style={{
                    marginRight: "15px"
                  }}
                >

                  {category.imgUrl ? (

                    <img
                      src={category.imgUrl}
                      alt={category.name}
                      className="category-image"
                    />

                  ) : (

                    <img
                      src="https://placehold.co/60x60"
                      alt="category"
                      className="category-image"
                    />

                  )}

                </div>

                {/* Information */}

                <div className="flex-grow-1">

                  <h5 className="mb-1 text-white">
                    {category.name}
                  </h5>

                  <p className="mb-0 text-white">
                    {category.description}
                  </p>

                </div>

                {/* Delete */}

                <div>

                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deleteByCategoryId(
                        category.categoryId
                      )
                    }
                  >

                    <i className="bi bi-trash"></i>

                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default CategoryList;