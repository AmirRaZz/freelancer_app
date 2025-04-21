import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import useCreateProposal from "./useCreateProposal";
import Loading from "@/ui/Loading";

type ProposalFormData = {
  description: string;
  price: number;
  duration: number;
};

function CreateProposal({
  onClose,
  projectId,
}: {
  projectId: string;
  onClose: () => void;
}) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ProposalFormData>();

  const { isCreating, createProposal } = useCreateProposal();

  const onSubmit = (data: ProposalFormData) => {
    createProposal(
      {
        ...data,
        projectId,
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "این فیلد الزامی است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر وارد کنید",
            },
          }}
          errors={errors}
        />
        <RHFTextField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "این فیلد الزامی است",
          }}
          errors={errors}
        />
        <RHFTextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "این فیلد الزامی است",
          }}
          errors={errors}
        />
        <div className="mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
