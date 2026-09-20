import { useState } from "react";

const ItemForm = () => {
  const [ image,setImage] = useState();
  const [ loading,setLoading] = useState();
  const [ data,setData] = useState({
    name :"",
    category:"",
    price:"",
    description :"",
  });


  const onChangeHandler =(e) => {

  }
  const onSubmitHander = (e) => {
    e.preventDefault();
  }


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
              <form>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    <img src="https://placehold.co/48x48" alt="" />
                  </label>
                  
                </div>

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    name
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Item name"
                      onChange={ onChangeHandler} value={data.name}
                    />
                  </label>
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="category">
                    Category
                  </label>

                  <select
                    name="category"
                    id="category"
                    className="form-control"  onChange={ onChangeHandler} value={data.category}
                  >
                    <option value="">Select a category</option>
                    <option value="Category 1">Electronics</option>
                    <option value="Category 2">Clothing</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    placeholder="&#8377; 200.00"
                     onChange={ onChangeHandler} value={data.price}
                  />
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
                       onChange={ onChangeHandler} value={data.description}
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
                    placeholder="#ffffff"
                  />
                </div>

                <button type="submit" className="btn btn-warning w-100" disabled ={loading}>
                  {loading ? "loading...." : "save"}
                  
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
