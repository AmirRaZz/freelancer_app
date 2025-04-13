function RadioInput({
  label,
  name,
  id,
  value,
  checked,
  onChange,
}: {
  label: string;
  name: string;
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="radio-md text-primary-500"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
