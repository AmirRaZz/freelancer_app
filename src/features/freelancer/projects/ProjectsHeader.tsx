import useCategories from "@/hooks/useCategories";
import Filter from "@/ui/Filter";
import FilterDropDown from "@/ui/FilterDropDown";

const sortOptions = [
  { label: "مرتب سازی (جدیدترین)", value: "latest" },
  { label: "مرتب سازی (قدیمی ترین)", value: "earliest" },
];

const statusOptions = [
  { label: "همه", value: "ALL" },
  { label: "باز", value: "OPEN" },
  { label: "بسته", value: "CLOSED" },
];

function ProjectsHeader() {
  const { transformedCategories } = useCategories();
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold">لیست پروژه ها</h1>
      <div>
        <Filter options={statusOptions} filterField="status" />
        <FilterDropDown options={sortOptions} filterField="sort" />
        <FilterDropDown
          options={[
            { value: "ALL", label: "دسته بندی (همه)" },
            ...transformedCategories,
          ]}
          filterField="category"
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
