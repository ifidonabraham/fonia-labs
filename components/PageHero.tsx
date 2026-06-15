type Props = {
  eyebrow?: string;
  title: string;
  text: string;
  support?: string;
};

export function PageHero({ eyebrow, title, text, support }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h1>{title}</h1>
        <p className="wide-text">{text}</p>
        {support ? <p className="muted-line ph-support">{support}</p> : null}
      </div>
    </section>
  );
}
