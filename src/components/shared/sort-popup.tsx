import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface Props {
  className?: string;
}

export const SortPopup = (props: Props) => {
  const { className } = props;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-secondary p-1 rounded-md",
        className,
      )}
    >
      <ArrowUpDown size={16} />
      <b>Сортировка по:</b>
      <b className="text-primary">популярное</b>
    </div>
  );
};
