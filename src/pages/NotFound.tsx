import { HiArrowRight } from "react-icons/hi2";
import useMoveBack from "@hooks/useMoveBack";

function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="sm:max-w-sm flex justify-center pt-10">
      <div>
        <h1 className="text-xl font-bold text-secondary-700 mb-8">
          صفحه ای که دنبالش بودید، پیدا نشد
        </h1>
        <button className="flex items-center gap-x-2" onClick={moveBack}>
          <HiArrowRight className="text-primary-900 w-6 h-6" />
          <span>برگشت</span>
        </button>
      </div>
    </div>
  );
}
export default NotFound;
