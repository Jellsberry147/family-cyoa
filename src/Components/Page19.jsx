import React from "react";
import { Link } from "react-router-dom";

export function Page19() {
  return (
    <div className="pageBackground">
      <div className="page">
        <div className="pageContent">
          <h2>Page 19: </h2>
          <p>
            We all looked right in unison, other than dear Will, still searching
            for page 39. “It should be between ‘38’ and ‘40’,” I said, trying to
            mess with him a bit. “You would think so…” he huffed, this time
            searching the book from the back to the front. Jude’s bundle of
            firewood I was carrying had grown from its humble beginnings of a
            bundle of twigs, into the sum of a small tree in parts. “Here we
            go!” I heard from behind me. Will had his pointer finger in the air,
            and thumb firmly pressed over the number “39” in the bottom left
            corner of his book. “So from here, we –” “Joseph! If you could fly
            really really fast, and, and no one could tell you not to, would
            you?” David cut in, as passionate to ask his question as a starving
            man to attend a feast. “Well, I… Flying is a bit overrated, David…”
            I answered, confused as to why he had come to think of such a thing.
            As I spoke, I noticed Heidi, Gavin, and Brianna had stopped up
            ahead, and Brianna was pointing towards the pasture. I spun my head
            to look in the direction of where I expected to see cows, only to
            discover the same peculiar item as the others. A box, wrapped in
            silver paper with an illuminated red bow on top. “Of course…” I
            heard Will whisper to himself. “Why wouldn’t there be a mysterious
            box! Anything to keep me from reading this thing to Joseph,” he
            said, glaring up from his book at the box. “David!” He shouted. “Go
            get it for us and bring it here!” “Okay!” Exclaimed David, an
            expectant grin covering his face.
          </p>
          <div className="pageChoice">
            <p>
              <b>To let David go, turn to page 4.</b>
            </p>
            <p>
              <b>To stop him and keep walking, turn to page 10.</b>
            </p>
          </div>
          <div className="pages">
            <Link to="/family-cyoa/page4/" className="leftLink pageLink">
              Page 4
            </Link>
            <Link to="/family-cyoa/page10/" className="rightLink pageLink">
              Page 10
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
