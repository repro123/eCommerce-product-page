function Overlay({ onClose, className = "" }) {
  return (
    <div
      className={`bg-black/75 w-full h-full fixed top-0 left-0 z-5 ${className}`}
      onClick={onClose}
    ></div>
  );
}

export default Overlay;
