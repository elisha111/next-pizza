import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Container = (props: Props) => {
  const { className, children } = props;

  return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
};
