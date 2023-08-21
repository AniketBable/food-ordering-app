import "./Button.css";

const Button = (props) => {
  return (
    <button className="btn" type={props.type} onClick={props.onClickHandler}>
      {props.placeholder}
    </button>
  );
};

export default Button;
