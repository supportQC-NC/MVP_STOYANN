import { FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle, FaTimes } from "react-icons/fa";
import "./Alert.css";

const Alert = ({
  children,
  variant = "info",
  title = null,
  dismissible = false,
  onDismiss,
  icon = true,
  className = "",
}) => {
  const icons = {
    success: <FaCheckCircle />,
    danger: <FaExclamationCircle />,
    alert: <FaExclamationTriangle />,
    info: <FaInfoCircle />,
  };

  return (
    <div className={`alert alert-${variant} ${className}`}>
      {icon && <span className="alert-icon">{icons[variant]}</span>}
      
      <div className="alert-content">
        {title && <div className="alert-title">{title}</div>}
        <div className="alert-message">{children}</div>
      </div>

      {dismissible && (
        <button className="alert-dismiss" onClick={onDismiss} aria-label="Fermer">
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Alert;
