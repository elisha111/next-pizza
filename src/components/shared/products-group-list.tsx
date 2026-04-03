"use client";

import { useIntersection } from "react-use";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useEffect, useRef } from "react";

interface Props {
  title: string;
  products: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList = (props: Props) => {
  const { title, products, className, listClassName, categoryId } = props;

  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.intersectionRatio) {
      console.log(title, categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-12.5", listClassName)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
