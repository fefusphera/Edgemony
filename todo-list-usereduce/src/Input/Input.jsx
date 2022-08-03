import "./index.css";

const Input = ({ onChange, children }) => {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div>
      <input
        name="task"
        placeholder="type here"
        onChange={handleChange}
        type="text"
      />
      {children}
    </div>
  );
};

export default Input;
