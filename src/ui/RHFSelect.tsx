import { FieldValues, Path, UseFormRegister } from "react-hook-form";

function RHFSelect<T extends FieldValues>({
  name,
  register,
  options,
  required,
  label,
}: {
  name: Path<T>;
  register: UseFormRegister<T>;
  options: { label: string; value: string }[];
  required?: boolean;
  label: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select id={name} {...register(name)} className="textField__input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
