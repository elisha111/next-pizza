"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { InputGroupAddon } from "../ui/input-group";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { apiClient } from "@/services/api-client";
import { Product } from "@/prisma/generated/prisma/client";

export function SearchInput() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  const searchProducts = (query: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setProducts([]);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      const data = await apiClient.products.search(trimmedQuery);
      setProducts(data);
    }, 250);
  };

  return (
    <Combobox<Product>
      items={products}
      filter={null}
      open={open}
      onOpenChange={setOpen}
      inputValue={searchValue}
      itemToStringLabel={(product) => product.name}
      isItemEqualToValue={(a, b) => a.id === b.id}
      onInputValueChange={(value, { reason }) => {
        setSearchValue(value);
        setOpen(value.trim().length > 0);

        if (reason === "item-press") {
          return;
        }

        searchProducts(value);
      }}
      onValueChange={(product) => {
        if (product) {
          router.push(`/product/${product.id}`);
          setSearchValue("");
          setProducts([]);
          setOpen(false);
        }
      }}
    >
      <div ref={anchorRef}>
        <ComboboxInput placeholder="Поиск..." showTrigger={false}>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </ComboboxInput>
      </div>

      <ComboboxContent anchor={anchorRef}>
        <ComboboxEmpty>
          {searchValue.trim()
            ? "Ничего не найдено"
            : "Начните вводить название"}
        </ComboboxEmpty>
        <ComboboxList>
          {products.map((product) => (
            <ComboboxItem key={product.id} value={product} className="py-2">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={32}
                height={32}
                className="size-8 shrink-0 rounded-md object-cover"
              />
              <span className="truncate">{product.name}</span>
            </ComboboxItem>
          ))}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
