import './button.css';

const Button = ({callFunc, callCount}) => {
  return (
    <div>
      <button class="btn" onClick={callFunc}>Button</button>
      <span class="text">
        Times called: {callCount}
      </span>
    </div>
  );
}

export default Button;