import MinusIcon from "../../assets/images/icon-minus.svg";
import PlusIcon from "../../assets/images/icon-plus.svg";
import Button from "./Button.jsx";

function QuantitySelector({ numberOfItems, onAddOne, onRemoveOne }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 w-full rounded-lg">
      <Button
        aria-label="remove one"
        className={`${!numberOfItems ? "cursor-not-allowed" : "cursor-pointer"} border p-3 rounded-md`}
        onClick={onRemoveOne}
      >
        <img src={MinusIcon} alt="" />
      </Button>
      <span>{numberOfItems}</span>
      <Button
        aria-label="add one"
        className="cursor-pointer border p-3 rounded-md"
        onClick={onAddOne}
      >
        <img src={PlusIcon} alt="" />
      </Button>
    </div>
  );
}

export default QuantitySelector;
