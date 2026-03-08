import "./Badge.css";

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  icon = null,
  className = "",
  ...props
}) => {
  const badgeClasses = [
    "badge",
    `badge-${variant}`,
    `badge-${size}`,
    rounded && "badge-rounded",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={badgeClasses} {...props}>
      {icon && <span className="badge-icon">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
