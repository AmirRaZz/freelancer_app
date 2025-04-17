import {FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

function RHFRadioInput<T extends FieldValues>({
  label,
  id,
  value,
  // errors,
  register,
  name,
  watch,
  validationSchema,
}: {
  label: string;
  id: string;
  value: string;
  errors?: FieldErrors<T>;
  register: UseFormRegister<T>;
  name: Path<T>;
  watch: UseFormWatch<T>;
  validationSchema?: RegisterOptions<T, Path<T>>;
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="radio-md text-primary-500"
        type="radio"
        id={id}
        value={value}
        checked={watch(name) === value}
        {...register(name, validationSchema)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RHFRadioInput;
