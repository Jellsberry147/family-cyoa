import React from "react";
import { Link } from "react-router-dom";

export function Page7() {
  return (
    <div className="pageBackground">
      <div className="page">
        <div className="pageContent">
          <h2>Page 7: </h2>
          <p>
            We turned the corner, and after a handful of minutes of random
            chatter and shouting at kids to get out of the road, we were passing
            Heidi’s dad’s house. At this point, Heidi and I were walking in
            front of everyone but Jude, who was happily gathering branches at
            every opportunity. As we walked past the mailbox, we saw a squirrel
            digging up its dinner at the base of one of the trees. Beyond the
            squirrel, we noticed Heidi’s dad combing the yard for stray pine
            cones. A shout from Heidi to say Hello, and a mutual wave later, the
            kids and Will caught up with us while Heidi’s dad walked over.
            “What’s up old man,” Will said, distracted. “Oh you know, just
            cleaning the yard from all these little…” He trailed off, looking at
            his torn store bag full of pine cones and needles. “What are you
            guys up to,” he laughed and stopped down to pick up another few pine
            cones. “Just going for a walk,” Heidi cheerfully answered, “Want to
            join us?” She asked. “Oh that’s okay. I’ve spent my whole life
            walking. That’s why they invented cars so we wouldn’t have to walk
            anymore,” every word echoed by Will in a mocking tone. “Well,
            alright. Have fun, dad! See you later!” Heidi waved to him. “Bye
            grandpa!” the kids chimed in. He grunted a goodbye, laughed at the
            funny face David made as we kept walking, and we were on our way.
          </p>
          <div className="pageChoice">
            <p>
              <b>This Path is not mapped yet.</b>
            </p>
            <p>
              <b>This Path is not mapped yet.</b>
            </p>
          </div>
          <div className="pages">
            <Link to="/family-cyoa/page1/" className="leftLink pageLink">
              Page 1
            </Link>
            <Link to="/family-cyoa/page1/" className="rightLink pageLink">
              Page 11
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
