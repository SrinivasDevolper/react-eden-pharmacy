// Better Ingredients

import React from "react";
import vit1 from "../images/vit-1.png";
import vit2 from "../images/vit-2.png";
import vit3 from "../images/vit-3.png";
import vit4 from "../images/vit-4.png";
import vit5 from "../images/vit-5.png";
import vit6 from "../images/vit-6.png";
function BetterIngredientsPage() {
  return (
    <div className="batter-container">
      <div className="batter-items-container">
        <div className="item1">
          <div className="batter-plain-card">
            <p>Ingredients</p>
            <h1>Better Ingredients</h1>
            <p>
              Only the best when you choose products offered on our platform -
              high-quality ingredients for high quality products!
            </p>
          </div>
          <div className="vitamin-c">
            <img src={vit1} className="vit-img" />
          </div>
          <div className="vitamin-c">
            <img src={vit2} className="vit-img" />
          </div>
        </div>
        <div className="item2">
          <div className="vitamin-c1">
            <img src={vit3} className="vit-img" />
          </div>
          <div className="vitamin-c1">
            <img src={vit4} className="vit-img" />
          </div>
          <div className="vitamin-c1">
            <img src={vit5} className="vit-img" />
          </div>
          <div className="vitamin-c1 last-img">
            <img src={vit6} className="vit-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BetterIngredientsPage;
