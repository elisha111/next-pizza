import { FilterCheckbox, Title } from "@/components/shared";

interface Props {
  className?: string;
}

export const Filters = (props: Props) => {
  const { className } = props;

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        {/* чекбокс-фильтры */}
        <FilterCheckbox text="123" value="" />
      </div>
    </div>
  );
};
