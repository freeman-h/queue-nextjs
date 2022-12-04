const Input = (props) => {
  return (
    <div>
      <label className="text-sm font-medium ">{props.label}</label>
      <input
        className="block w-full rounded-md border-gray-300 pl-2 pr-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-base"
        type={props.type}
        required={props.required}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
