import AvatarIcon from "../../assets/images/image-avatar.png";

function Avatar() {
  return (
    <button
      className="cursor-pointer rounded-full"
      type="button"
      aria-label="Profile"
    >
      <img src={AvatarIcon} alt="User" className="size-12 " />
    </button>
  );
}

export default Avatar;
