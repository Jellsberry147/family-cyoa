import React from "react";
import { Link } from "react-router-dom";

export function Page13() {
  return (
    <div className="pageBackground">
      <div className="page">
        <div className="pageContent">
          <h2>Page 13: </h2>
          <p>
            “Let’s check out the other way,” I said back to her. We had walked
            by her dad’s house only a day or two ago on our last outing, and I
            wanted to experience the rest of what the peaceful little woods had
            to offer us. “Okay,” I turned to Will, “where were we?” “Do you want
            to go outside, or stay inside?” He continued. “Alright, how about we
            stay inside? I think last time I chose to go outside, so might as
            well.” “Okay, then we go to page 39,” he said, flipping pages
            between his fingers.
          </p>
          <p>
            As the next step drew nearer in his book, our next steps led us to a
            4-way stop. Looking to our right, we saw several cows, and to the
            left was a peaceful road, lined with beautiful flowers. Heidi had
            warned us that sunset was in only an hour, and with food in the oven
            back at the Coes, we needed to make a decision – and fast!
          </p>
          <div className="pageChoice">
            <p>
              <b>To turn right and walk by the cows, go to page 16.</b>
            </p>
            <p>
              <b>
                To turn left and approach the beautiful flowers, turn to page 19
              </b>
            </p>
          </div>
          <div className="pages">
            <Link to="/page16/" className="leftLink pageLink">
              Page 16
            </Link>
            <Link to="/page19/" className="rightLink pageLink">
              Page 19
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
