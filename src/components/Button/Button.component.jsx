/* eslint-disable react/prop-types */
const Button = ({ children, ...otherProps }) => {
  return <button {...otherProps}> {children} </button>;
};
export default Button;
