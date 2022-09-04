import React from "react";

function MetaCommitmentTenet({ title, text }) {
  return (
    <article className="meta__commitment__tenet">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default MetaCommitmentTenet;
