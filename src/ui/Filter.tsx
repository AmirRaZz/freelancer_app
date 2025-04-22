import { useSearchParams } from "react-router";

function Filter({
  options,
  filterField,
}: {
  options: { label: string; value: string }[];
  filterField: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0)?.value;

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-x-2 text-xs">
      <span>وضعیت</span>
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map(({ label, value }) => {
          const isActive = value === currentFilter;
          return (
            <button
              onClick={() => handleClick(value)}
              key={value}
              disabled={isActive}
              className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300 ${
                isActive
                  ? "bg-primary-900 text-white"
                  : "bg-secondary-0 text-secondary-800"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
