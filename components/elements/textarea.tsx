const TextArea = ({ value, placeholder, name, onChange, label, rows }) => {
  return (
    <div>
      <label className="text-sm font-medium ">{label}</label>
      <textarea
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        rows={rows ? rows : 4}
      ></textarea>
    </div>
  );
};

export default TextArea;
