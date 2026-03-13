import {
  CheckboxFiltersGroup,
  FilterCheckbox,
  RangeSlider,
  Title,
} from "@/components/shared";
import { Checkbox, Input, Label } from "../ui";
import { Field, FieldGroup } from "../ui/field";

interface Props {
  className?: string;
}

export const Filters = (props: Props) => {
  const { className } = props;

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* чекбокс-фильтры */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="123" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <FieldGroup className="gap-3">
        <Field orientation="horizontal" >
          <Checkbox id="terms-checkbox" name="terms-checkbox" />
          <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
        </Field>

        <Field orientation="horizontal">
          <Checkbox id="terms-checkbox1" name="terms-checkbox1" />
          <Label htmlFor="terms-checkbox1">Accept terms and conditions</Label>
        </Field>
      </FieldGroup>

      {/* фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>

        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        items={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "2",
          },
          {
            text: "Солённые огурчики",
            value: "2",
          },
          {
            text: "Красный лук",
            value: "2",
          },
          {
            text: "Томаты",
            value: "2",
          },
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "2",
          },
          {
            text: "Солённые огурчики",
            value: "2",
          },
          {
            text: "Красный лук",
            value: "2",
          },
          {
            text: "Томаты",
            value: "2",
          },
        ]}
        defaultItems={[
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "2",
          },
          {
            text: "Солённые огурчики",
            value: "2",
          },
          {
            text: "Красный лук",
            value: "2",
          },
          {
            text: "Томаты",
            value: "2",
          },
          {
            text: "Сырный соус",
            value: "1",
          },
          {
            text: "Моццарелла",
            value: "2",
          },
          {
            text: "Чеснок",
            value: "2",
          },
          {
            text: "Солённые огурчики",
            value: "2",
          },
          {
            text: "Красный лук",
            value: "2",
          },
          {
            text: "Томаты",
            value: "2",
          },
        ]}
      />
    </div>
  );
};
