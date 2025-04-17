import DatePickerField from "@/ui/DatePickerField";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TagsInput } from "react-tag-input-component";

type ProjectFormData = {
  title: string;
  description: string;
  budget: number;
  category: string;
};

function CreateProjectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormData>();

  const [tags, setTags] = useState<string[]>([]);
  const [date, setDate] = useState(new Date());

  const onSubmit = (data: ProjectFormData) => {
    console.log(data);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField<ProjectFormData>
        label="عنوان"
        name="title"
        register={register}
        required={true}
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است",
          },
        }}
        errors={errors}
      />
      <RHFTextField<ProjectFormData>
        label="توضیحات"
        name="description"
        register={register}
        required
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 15,
            message: "حداقل 15 کاراکتر را وارد کنید",
          },
        }}
        errors={errors}
      />
      <RHFTextField<ProjectFormData>
        label="بودجه"
        name="budget"
        type="number"
        register={register}
        required
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        errors={errors}
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        register={register}
        options={[]}
        required
      />
      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput value={tags} onChange={setTags} name="tags" />
      </div>
      <DatePickerField label="ددلاین" date={date} setDate={setDate} />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}
export default CreateProjectForm;
