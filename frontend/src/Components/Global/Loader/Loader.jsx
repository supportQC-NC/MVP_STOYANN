import "./Loader.css";

const Loader = ({
  size = "md",
  variant = "primary",
  fullScreen = false,
  text = null,
  className = "",
}) => {
  const loaderClasses = [
    "loader",
    `loader-${size}`,
    `loader-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <div className={loaderClasses}>
      <div className="loader-spinner"></div>
      {text && <span className="loader-text">{text}</span>}
    </div>
  );

  if (fullScreen) {
    return <div className="loader-fullscreen">{content}</div>;
  }

  return content;
};

export default Loader;
