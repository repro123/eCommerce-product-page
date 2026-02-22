import Button from "../ui/Button.jsx";

function Thumbnail({ img, index, currentImageIndex, setCurrentImageIndex }) {
  function handleSetCurrentImage() {
    setCurrentImageIndex(index);
  }
  return (
    <Button
      onClick={handleSetCurrentImage}
      aria-label={`Show image ${index + 1}`}
      className={`relative rounded-2xl size-20 cursor-pointer overflow-hidden border-2 border-transparent after:absolute after:inset-0 after:bg-pale-primary/50 after:opacity-0 after:transition-opacity hover:after:opacity-100 focus:after:opacity-100 ${currentImageIndex === index ? "outline-2 outline-primary after:opacity-100  after:bg-pale-primary/50" : ""}`}
    >
      <span className=""></span>
      <img src={img} alt="" />
    </Button>
  );
}

export default Thumbnail;
