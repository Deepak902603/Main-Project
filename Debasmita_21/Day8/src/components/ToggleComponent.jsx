import useToggle from "../hooks/useToggle";

const ToggleComponent = () => {
  const [isOn, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
    </div>
  );
};

export default ToggleComponent;
