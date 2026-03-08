import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      name,
      placeholder,
      value,
      onChange,
      onBlur,
      error,
      success,
      disabled = false,
      required = false,
      icon = null,
      helperText,
      className = "",
      ...props
    },
    ref
  ) => {
    const inputClasses = [
      "input",
      error && "input-error",
      success && "input-success",
      icon && "input-with-icon",
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

        <div className="input-wrapper">
          {icon && <span className="input-icon">{icon}</span>}
          
          <input
            ref={ref}
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            required={required}
            className={inputClasses}
            {...props}
          />
        </div>

        {helperText && !error && (
          <span className="form-helper">{helperText}</span>
        )}
        
        {error && <span className="form-error">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
