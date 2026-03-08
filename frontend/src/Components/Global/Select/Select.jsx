import { forwardRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Select.css";

const Select = forwardRef(
  (
    {
      label,
      name,
      options = [],
      value,
      onChange,
      onBlur,
      error,
      success,
      disabled = false,
      required = false,
      placeholder = "Sélectionner...",
      helperText,
      className = "",
      ...props
    },
    ref
  ) => {
    const selectClasses = [
      "select",
      error && "select-error",
      success && "select-success",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="form-group">
        {label && (
          <label htmlFor={name} className="label">
            {label}
            {required && <span className="label-required">*</span>}
          </label>
        )}

        <div className="select-wrapper">
          <select
            ref={ref}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            required={required}
            className={selectClasses}
            {...props}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FaChevronDown className="select-icon" />
        </div>

        {helperText && !error && (
          <span className="form-helper">{helperText}</span>
        )}
        
        {error && <span className="form-error">{error}</span>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
