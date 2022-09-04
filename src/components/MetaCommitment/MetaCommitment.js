import React from "react";
import "./MetaCommitment.css";
import MetaCommitmentTenet from "./MetaCommitmentTenet";

function MetaCommitment() {
  return (
    <div className="flexible">
      <article className="meta__commitment container">
        <h2>meta embraces open source</h2>
        <section className="meta__commitment__note">
          <p>
            Meta is committed to the notion that open source not only provides
            great technology for developers, but also brings the best out in
            people. Meta believes in the following tenets:
          </p>
        </section>
        <section className="meta__commitment__tenets">
          <MetaCommitmentTenet
            title={"collaboration"}
            text={
              "Open source allows developers from around the world to proactively work together to achieve common goals."
            }
          />
          <MetaCommitmentTenet
            title={"community"}
            text={
              "Open source provides opportunities for the creation of diverse communities in support of the betterment of everyone."
            }
          />
          <MetaCommitmentTenet
            title={"technology"}
            text={
              "Open source has produced historic technologies, including operating systems, frameworks and programming languages."
            }
          />
        </section>
      </article>
    </div>
  );
}

export default MetaCommitment;
