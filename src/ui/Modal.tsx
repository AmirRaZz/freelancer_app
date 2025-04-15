import { HiOutlineX } from "react-icons/hi";
import useOutsideClick from "@hooks/useOutsideClick";

function Modal({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800/30 z-50">
        <div
          ref={ref}
          className="fixed inset-1/2 rounded-lg bg-secondary-0 shadow-lg transition-all duration-500 ease-out overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-secondary-300 pb-2 mb-6">
            <p className="text-secondary-700 font-bold text-base">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
