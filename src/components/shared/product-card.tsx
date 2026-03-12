import Image from "next/image";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard = (props: Props) => {
  const { id, name, price, imageUrl, className } = props;
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-65">
          <Image className="w-53.75 h-53.75" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          autem recusandae, modi mollitia voluptatem culpa, esse dicta porro
          libero, qui id delectus! Officiis exercitationem quas quo recusandae
          cumque impedit placeat.
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="flex items-center gap-2">
            <Plus size={20} />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
