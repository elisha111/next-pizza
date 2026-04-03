"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
}

export const Categories = (props: Props) => {
  const { className } = props;

  const cats = [
    { id: 1, name: "Пиццы" },
    { id: 2, name: "Комбо" },
    { id: 3, name: "Закуски" },
    { id: 4, name: "Коктейли" },
    { id: 5, name: "Кофе" },
    { id: 6, name: "Напитки" },
    { id: 7, name: "Десерты" },
    { id: 8, name: "Десерты" },
  ];

  const activeIndex = 0;

  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 bg-secondary p-1 rounded-md", className)}
    >
      {cats.map(({ name, id }, index) => (
        <Button
          variant={`${categoryActiveId === id ? "outline" : "ghost"}`}
          asChild
          key={index}
        >
          <Link
            href={`/#${name}`}
            className={cn(
              categoryActiveId === id && "pointer-events-none text-primary",
            )}
          >
            {name}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export const CategoriesTest = (props: Props) => {
  const { className } = props;

  const cats = [
    "Пиццы",
    "Комбо",
    "Закуски",
    "Коктейли",
    "Кофе",
    "Напитки",
    "Десерты",
  ];
  const activeIndex = 0;

  return (
    <Tabs defaultValue={cats[0]}>
      <TabsList>
        {cats.map((cat, index) => (
          <TabsTrigger value={cat} key={index}>
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
