import "./Avatar.css";

const Avatar = ({
  src,
  alt = "Avatar",
  name,
  size = "md",
  status = null,
  className = "",
  ...props
}) => {
  // Génère les initiales à partir du nom
  const getInitials = (name) => {
    if (!name) return "?";
    const words = name.trim().split(" ");
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  };

  const avatarClasses = [
    "avatar",
    `avatar-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={avatarClasses} {...props}>
      {src ? (
        <img src={src} alt={alt} className="avatar-image" />
      ) : (
        <span className="avatar-initials">{getInitials(name)}</span>
      )}
      
      {status && <span className={`avatar-status avatar-status-${status}`}></span>}
    </div>
  );
};

export default Avatar;
