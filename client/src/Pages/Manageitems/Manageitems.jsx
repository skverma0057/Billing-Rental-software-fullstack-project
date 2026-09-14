import ItemForm from "../../Component/ItemForm/ItemForm";
import ItemList from "../../Component/ItemList/ItemList";
import "./Manageitems.css";
const ManageItems = () => {
  return (
    <div className="items-container text-light">
      <div className="left-column">
        {/* form 70 */} <ItemForm />
      </div>
      <div className="right-column">
        {/* cotegory */}
        <ItemList />
      </div>
    </div>
  );
};

export default ManageItems;
