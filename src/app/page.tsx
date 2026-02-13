import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar className="mt-6 mb-10" />

      <Container className="mb-14">
        <div className="flex gap-14">
          {/* фильтрация */}
          <div className="w-64">
            <Filters />
          </div>

          {/* список товаров */}
          <div className="flex-1">список товаров</div>
        </div>
      </Container>
    </>
  );
}
