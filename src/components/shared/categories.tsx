import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui";

interface Props {
  className?: string;
}

export const Categories = (props: Props) => {
  const { className } = props;

  const cats = [
    "Пиццы",
    "Комбо",
    "Закуски",
    "Коктейли",
    "Кофе",
    "Напитки",
    "Десерты",
    "Десерты",
  ];
  const activeIndex = 0;

  return (
    <div
      className={cn("inline-flex gap-1 bg-secondary p-1 rounded-md", className)}
    >
      {cats.map((cat, index) => (
        <Button
          variant={`${activeIndex === index ? "outline" : "ghost"}`}
          asChild
          key={index}
        >
          <Link
            href="#"
            className={cn(
              activeIndex === index && "pointer-events-none text-primary",
            )}
          >
            {cat}
          </Link>
        </Button>
      ))}
    </div>
  );
};
