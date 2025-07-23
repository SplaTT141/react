export function Title({text, desc}) {
    return (
    <>
      <h1>{text}</h1>
      {desc ? <p>{desc}</p> : null}
      {desc && <p>{desc}</p>}
    </>
    );
}