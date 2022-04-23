import React from "react";
import { Link } from "react-router-dom";

export function Page1() {
  return (
    <div className="pageBackground">
      <div className="page">
        <div className="pageContent">
          <h2>Page 1: </h2>
          <p>
            “Now, as I was saying,” Will repeated for seemingly the hundredth
            time. We had been walking for well over 30 minutes now, all the
            while he was trying to share his home-made “Choose Your Own
            Adventure” novel.
          </p>
          <p>
            “Trevor and I were sitting in the front room of –” “Joseph!” Heidi
            exclaimed. “Which road should we take this time? It’d be nice to
            walk by dad’s house again, or we could try to walk further than last
            time and see what we find.” “Hmm,” I wondered, feeling Will’s eyes
            on me, waiting to continue his story with a paradoxical mixture of
            patience and agitation.
          </p>
          <div className="pageChoice">
            <p>
              <b>To go down by Heidi’s dad’s house, turn to page 7.</b>
            </p>
            <p>
              <b>To take the new route, turn to page 13.</b>
            </p>
          </div>
          <div className="pages">
            <Link to="/page7/" className="leftLink pageLink">
              Page 7
            </Link>
            <Link to="/page13/" className="rightLink pageLink">
              Page 13
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
