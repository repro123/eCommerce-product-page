import MinusIcon from "@/assets/images/icon-minus.svg";
import PlusIcon from "@/assets/images/icon-plus.svg";
import Button from "@/components/ui/Button.jsx";

function QuantitySelector({ numberOfItems, setNumberOfItems }) {
  function handleRemoveOne() {
    numberOfItems && setNumberOfItems((i) => i - 1);
  }

  function handleAddOne() {
    setNumberOfItems((i) => i + 1);
  }
  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 w-full rounded-lg">
      <Button
        aria-label="remove one"
        className={`${!numberOfItems ? "cursor-not-allowed" : "cursor-pointer"} border p-3 rounded-md`}
        onClick={handleRemoveOne}
      >
        <img src={MinusIcon} alt="" />
      </Button>
      <span>{numberOfItems}</span>
      <Button
        aria-label="add one"
        className="cursor-pointer border p-3 rounded-md"
        onClick={handleAddOne}
      >
        <img src={PlusIcon} alt="" />
      </Button>
    </div>
  );
}

export default QuantitySelector;
