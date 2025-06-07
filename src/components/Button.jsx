import { Link } from 'react-router-dom';

const colorClasses = {
  green: "bg-green-500 hover:bg-green-600",
  red: "bg-red-500 hover:bg-red-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  coursBtn: "bg-black hover:px-5 border-[3px]"
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = ({
  to = "#",
  text = "Voir les cours",
  icon: Icon,
  props = {},
  color = "green",
  size = "md",
}) => {
  const btnColor = colorClasses[color] || colorClasses.green;
  const btnSize = sizeClasses[size] || sizeClasses.md;

  return (
    <Link to={to}>
      <button className={`flex items-center justify-center gap-2 rounded-xl font-semibold shadow-md transition text-white mx-auto ${btnColor} ${btnSize}`}>
        {Icon && <Icon {...props} />}
        {text}
      </button>
    </Link>
  );
};

export default Button;
