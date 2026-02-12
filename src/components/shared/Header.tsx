import { cn } from "@/lib/utils";

import Image from "next/image";
import { Button } from "../ui";
import { Container } from "../shared";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header = (props: Props) => {
  const { className } = props;

  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex  items-center justify-between py-8">
        {/* левая часть */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={35} height={35} />
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              вкусней уже некуда
            </p>
          </div>
        </div>

        {/* правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className="group relative">
              <b>520 ₽</b>

              <span className="h-full w-0.25 bg-white/30 mx-1" />

              <div className="flex items-center gap-2 transition duration-200 group-hover:opacity-0">
                <ShoppingCart size={16} />
                <b>3</b>
              </div>
              
              <ArrowRight
                size={20}
                className="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
