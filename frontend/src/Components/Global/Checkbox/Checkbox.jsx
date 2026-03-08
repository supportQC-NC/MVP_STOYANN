import { FaCheck } from "react-icons/fa";
import "./Checkbox.css";

const Checkbox = ({
  label,
  name,
  checked = false,
  onChange,
  disabled = false,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className={`checkbox-wrapper ${className}`}>
      <label className={`checkbox-label ${disabled ? "checkbox-disabled" : ""}`}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="checkbox-input"
          {...props}
        />
        <span className={`checkbox-custom ${checked ? "checkbox-checked" : ""}`}>
          {checked && <FaCheck />}
        </span>
        {label && <span className="checkbox-text">{label}</span>}
      </label>
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default Checkbox;
