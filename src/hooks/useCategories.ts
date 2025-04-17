import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "@/services/categoryService";

// Define the Category interface
type Category = {
  _id: string;
  title: string;
  englishTitle: string;
};

export default function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((category: Category) => ({
    label: category.title,
    value: category._id,
  }));

  const transformedCategories = rawCategories.map((category: Category) => ({
    label: category.title,
    value: category.englishTitle,
  }));

  return { categories, transformedCategories, isLoading };
}
