import { useSearchParams } from "react-router";
import Select from "./Select";
function FilterDropDown({
  options,
  filterField,
}: {
  options: { value: string; label: string }[];
  filterField: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) ?? "";

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return <Select options={options} value={filterValue} onChange={handleChange} />;
}

export default FilterDropDown;
