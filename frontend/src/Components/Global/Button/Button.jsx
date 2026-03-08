import { NavLink } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  loading = false,
  icon = null,
  iconPosition = "left",
  to = null,
  href = null,
  onClick,
  className = "",
  ...props
}) => {
  const classNames = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    loading && "btn-loading",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && <span className="spinner spinner-sm"></span>}
      {icon && iconPosition === "left" && !loading && (
        <span className="btn-icon-left">{icon}</span>
      )}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === "right" && !loading && (
        <span className="btn-icon-right">{icon}</span>
      )}
    </>
  );

  // Lien interne (React Router)
  if (to) {
    return (
      <NavLink to={to} className={classNames} {...props}>
        {content}
      </NavLink>
    );
  }

  // Lien externe
  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  // Bouton standard
  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
