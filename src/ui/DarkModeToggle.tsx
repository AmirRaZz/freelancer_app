import { useDarkMode } from "@/context/DarkModeContext";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-primary-900" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-primary-900" />
      )}
    </button>
  );
}

export default DarkModeToggle;
