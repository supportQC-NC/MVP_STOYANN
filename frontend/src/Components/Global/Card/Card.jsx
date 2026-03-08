import "./Card.css";

const Card = ({
  children,
  title,
  subtitle,
  image,
  imageAlt = "",
  footer,
  hoverable = false,
  variant = "default",
  className = "",
  onClick,
  ...props
}) => {
  const cardClasses = [
    "card",
    `card-${variant}`,
    hoverable && "card-hoverable",
    onClick && "card-clickable",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {image && (
        <div className="card-image">
          <img src={image} alt={imageAlt} />
        </div>
      )}

      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {children}
      </div>

      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};

export default Card;
