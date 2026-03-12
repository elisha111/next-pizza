import { FilterCheckboxProps } from "./filter-checkbox";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup = (props: Props) => {
  const {
    className,
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = "Поиск..",
    defaultValue,
    onChange,
  } = props;

  return <div>checkbox-filters-group</div>;
};
