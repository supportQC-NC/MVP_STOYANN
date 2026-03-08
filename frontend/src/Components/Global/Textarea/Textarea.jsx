import { forwardRef } from "react";
import "./Textarea.css";

const Textarea = forwardRef(
  (
    {
      label,
      name,
      placeholder,
      value,
      onChange,
      onBlur,
      error,
      success,
      disabled = false,
      required = false,
      rows = 4,
      maxLength,
      helperText,
      showCount = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const textareaClasses = [
      "textarea",
      error && "textarea-error",
      success && "textarea-success",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const currentLength = value?.length || 0;

    return (
      <div className="form-group">
        {label && (
          <label htmlFor={name} className="label">
            {label}
            {required && <span className="label-required">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          rows={rows}
          maxLength={maxLength}
          className={textareaClasses}
          {...props}
        />

        <div className="textarea-footer">
          {helperText && !error && (
            <span className="form-helper">{helperText}</span>
          )}
          {error && <span className="form-error">{error}</span>}
          
          {showCount && maxLength && (
            <span className="textarea-count">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
