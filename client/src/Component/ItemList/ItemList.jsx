import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { deleteItem } from "../../Service/ItemService";

const ItemList = () => {
  const { items, setItems } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  // Backend base URL for images

  const IMAGE_BASE_URL = "http://localhost:8000/api";

  // Delete item
  const onDeleteHandler = async (itemId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) {
      return;
    }

    setDeletingId(itemId);

    try {
      await deleteItem(itemId);

      // Remove deleted item from context
      setItems((prevItems) =>
        prevItems.filter((item) => item.itemId !== itemId)
      );

      alert("Item deleted successfully!");

    } catch (error) {
      console.error("Error deleting item:", error);

      alert(
        error.response?.data?.message ||
        "Failed to delete item."
      );

    } finally {
      setDeletingId(null);
    }
  };

  // Search items
  const filteredItems = items.filter((item) => {
    const searchText = search.toLowerCase();

    return (
      item.name?.toLowerCase().includes(searchText) ||
      item.categoryName?.toLowerCase().includes(searchText) ||
      item.description?.toLowerCase().includes(searchText)
    );
  });

  return (
    <div
      className="container-fluid mt-3"
      style={{
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">

        <h3>Item List</h3>

        <span className="badge bg-primary">
          Total Items: {items.length}
        </span>

      </div>

      {/* Search box */}
      <div className="mb-4">

        <input
          type="text"
          className="form-control"
          placeholder="Search by item name, category or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      {/* Items table */}
      <div className="card shadow-sm">

        <div className="card-body p-0">

          <div className="table-responsive">

            <table className="table table-hover table-bordered align-middle mb-0">

              <thead className="table-dark">

                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Item Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {filteredItems.length > 0 ? (

                  filteredItems.map((item, index) => (

                    <tr key={item.itemId}>

                      {/* Number */}
                      <td>{index + 1}</td>

                      {/* Image */}
                      <td>
                        <img
  src={
    item.imgUrl
      ? item.imgUrl.startsWith("http")
        ? item.imgUrl
        : `${IMAGE_BASE_URL}${item.imgUrl}`
      : "https://placehold.co/70x70"
  }
  alt={item.name}
  style={{
    width: "65px",
    height: "65px",
    objectFit: "cover",
    borderRadius: "8px",
    border: "1px solid #ddd",
  }}
  onError={(e) => {
    e.currentTarget.src = "https://placehold.co/70x70";
  }}
/>

                        
                        

                      </td>

                      {/* Name */}
                      <td>
                        <strong>{item.name}</strong>
                      </td>

                      {/* Category */}
                      <td>
                        {item.categoryName || "N/A"}
                      </td>

                      {/* Price */}
                      <td>
                        ₹{Number(item.price || 0).toFixed(2)}
                      </td>

                      {/* Description */}
                      <td>
                        {item.description || "No description"}
                      </td>

                      {/* Delete */}
                      <td>

                        <button
                          className="btn btn-danger btn-sm"
                          disabled={deletingId === item.itemId}
                          onClick={() =>
                            onDeleteHandler(item.itemId)
                          }
                        >

                          {deletingId === item.itemId
                            ? "Deleting..."
                            : "Delete"}

                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="7"
                      className="text-center py-4"
                    >
                      {search
                        ? "No matching items found."
                        : "No items available."}
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ItemList;

































