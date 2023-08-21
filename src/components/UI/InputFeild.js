import './InputFeild.css'

const InputFeild = (props) => {
  
  return (
      <input
        className="input-control"
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
      />
    
    );
};

export default InputFeild;
