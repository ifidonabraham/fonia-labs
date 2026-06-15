import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  action?: ReactNode;
};

export function SectionHeader({ eyebrow, title, text, action }: Props) {
  return (
    <div className="section-head">
      <div className="sh-copy">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      {action ? <div className="sh-action">{action}</div> : null}
    </div>
  );
}
