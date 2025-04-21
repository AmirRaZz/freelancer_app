import RHFSelect from "@/ui/RHFSelect";
import { useForm } from "react-hook-form";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import Loading from "@/ui/Loading";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تایید",
    value: 1,
  },
  {
    label: "تایید شده",
    value: 2,
  },
];

type FormValues = {
  status: number;
};

function ChangeProposalStatus({
  proposalId,
  onClose,
}: {
  proposalId: string;
  onClose: () => void;
}) {
  const { register, handleSubmit } = useForm<FormValues>();
  const { isUpdating, changeProposalStatus } = useChangeProposalStatus();
  const queryClient = useQueryClient();
  const { id: projectId } = useParams();

  const onSubmit = (data: FormValues) => {
    changeProposalStatus(
      { proposalId, projectId: projectId as string, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
          });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect<FormValues>
          name="status"
          options={options}
          label="تغییر وضعیت"
          register={register}
          required
        />
        <div className="mt-8">
          {isUpdating ? (
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

export default ChangeProposalStatus;
