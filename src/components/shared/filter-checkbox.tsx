import { Checkbox, Label } from "@/components/ui";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox = (props: FilterCheckboxProps) => {
  const { text, value, endAdornment, onCheckedChange, checked } = props;

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        value={value}
        id={`checkbox-${String(value)}`}
        onCheckedChange={onCheckedChange}
        checked={checked}
      />
      <Label htmlFor={`checkbox-${String(value)}`}>{text}</Label>
      {endAdornment}
    </div>
  );
};
