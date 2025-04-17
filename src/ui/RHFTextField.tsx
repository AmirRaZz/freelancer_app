import {
  FieldValues,
  UseFormRegister,
  RegisterOptions,
  FieldErrors,
  Path,
} from "react-hook-form";

type RHFTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  type?: string;
  required?: boolean;
  validationSchema?: RegisterOptions<T, Path<T>>;
  errors?: FieldErrors<T>;
};

function RHFTextField<T extends FieldValues>({
  name,
  label,
  register,
  type = "text",
  required,
  validationSchema,
  errors,
}: RHFTextFieldProps<T>) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        type={type}
        className="textField__input"
        autoComplete="off"
        id={name}
        {...register(name, validationSchema)}
      />
      {errors?.[name] && (
        <span className="text-error text-sm block mt-2">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}

export default RHFTextField;
