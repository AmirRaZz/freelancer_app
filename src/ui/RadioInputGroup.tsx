import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import RHFRadioInput from "./RHFRadioInput";

function RadioInputGroup<T extends FieldValues>({
  register,
  watch,
  errors,
  configs,
}: {
  errors?: FieldErrors<T>;
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  configs: {
    name: Path<T>;
    validationSchema?: RegisterOptions<T, Path<T>>;
    options: { label: string; value: string }[];
  };
}) {
  const { name, validationSchema = {}, options } = configs;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-8">
        {options.map(({ label, value }) => (
          <RHFRadioInput
            key={value}
            label={label}
            name={name}
            id={value}
            value={value}
            register={register}
            watch={watch}
            errors={errors}
            validationSchema={validationSchema}
          />
        ))}
      </div>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2 flex-1">
          {errors[name]?.message as string}
        </span>
      )}
    </div>
  );
}

export default RadioInputGroup;
