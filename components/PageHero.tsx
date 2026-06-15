type Props = {
  eyebrow?: string;
  title: string;
  text: string;
};

export function PageHero(props: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        {props.eyebrow ? <div className="eyebrow">{props.eyebrow}</div> : null}
        <h1>{props.title}</h1>
        <p className="wide-text">{props.text}</p>
      </div>
    </section>
  );
}
