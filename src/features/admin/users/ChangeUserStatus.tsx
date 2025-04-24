import RHFSelect from "@/ui/RHFSelect";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useChangeUserStatus from "./useChangeUserStatus";
import Loading from "@/ui/Loading";

type FormValues = {
  status: number;
};

function ChangeUserStatus({
  userId,
  onClose,
}: {
  userId: string;
  onClose: () => void;
}) {
  const { register, handleSubmit } = useForm<FormValues>();
  const { changeUserStatus, isUpdating } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data: FormValues) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["users"] });
          onClose();
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت کاربر"
          register={register}
          required
          options={[]}
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

export default ChangeUserStatus;
