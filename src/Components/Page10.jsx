import React from "react";
import { Link } from "react-router-dom";

export function Page10() {
  return (
    <div className="pageBackground">
      <div className="page">
        <div className="pageContent">
          <h2>Page 10: </h2>
          <p>
            “Oh David, no,” I said, warning him in case it might be risky. “Some
            dumb teenagers probably just left it here as a prank for a friend.”
            “Come on… I reeeeeeeaally wanna know what’s inside!” He said, his
            hands folded together, begging me to see things from his point of
            view. “Dav—” I begun, readying my next dose of “No,” and stopping
            short when I realized Jude wasn’t standing next to me anymore – he
            has made his way over next to it, and was holding a big rock over
            the box. “J… Jude. Don’t do that.” I hesitated, expecting defiance –
            hoping he’d listen just this once. He looked back at me over his
            shoulder, rock still aloft in his small, devious hands, smiling like
            it was his birthday. With a small crunch, and a moderate crinkle,
            the box was done for. We all looked at him, clueless as to what to
            say. Finally, Heidi spoke up, “That wasn’t yours, Jude. Let’s just
            get going. It looks like the box was empty anyway.” Will, David, and
            I watched as Jude stumbled back into line with the rest of us,
            picking up a few more scraps of forgotten possessions that littered
            the road. “… Probably for the best. I’ll bet the box actually just
            had a few dookers in it,” I said, expecting the— “DON’T SAY
            ‘DOOKERS’!” Gavin shouted back at me. “It always works. Every single
            time,” I smiled to myself. “Heidi! How are you doing?” I called out
            to her. “I’m just taking a picture of the sky,” she told me as I
            caught up with her. “Isn’t it so pretty?” she said, pointing her
            phone at the horizon to capture the sunlight shining through a bare
            tree across another road-side field. “Wow,” I exhaled, taking in the
            view. “It looks so beautiful…”
          </p>
          <div className="pageChoice">
            <p>
              <b>To tell Heidi she too looks beautiful, turn to page 14.</b>
            </p>
            <p>
              <b>To not do that, turn to page 9.</b>
            </p>
          </div>
          <div className="pages">
            <Link to="/family-cyoa/page9/" className="rightLink pageLink">
              Page 9
            </Link>
            <Link to="/family-cyoa/page14/" className="leftLink pageLink">
              Page 14
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
