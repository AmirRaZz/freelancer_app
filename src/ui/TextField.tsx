type TextfieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextField({ label, name, value, onChange }: TextfieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="textField__input"
        value={value}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
