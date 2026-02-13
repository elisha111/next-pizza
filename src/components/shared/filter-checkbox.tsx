import { Checkbox, Label } from "@/components/ui";

export const FilterCheckbox = (props) => {
  const { text, value } = props;

  return (
    <div className="flex items-center gap-2">
      <Checkbox value={value} id={`checkbox-${String(value)}`} />
      <Label htmlFor={`checkbox-${String(value)}`}>{text}</Label>
    </div>
  );
};
