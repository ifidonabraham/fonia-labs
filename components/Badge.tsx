type Props = {
  children: React.ReactNode;
  solid?: boolean;
};

export function Badge({ children, solid }: Props) {
  return <span className={"badge" + (solid ? " solid" : "")}>{children}</span>;
}
