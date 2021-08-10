// STYLES //
import './Button.scss';

const Button = ({ type, href, className, children, onClick }) => {
  if (type === 'button' || type === 'submit') {
    return (
      <button type={type} className={className}>
        {children}
      </button>
    );
  } else {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
};

export default Button;
