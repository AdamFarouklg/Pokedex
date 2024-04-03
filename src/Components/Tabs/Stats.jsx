import React from "react";
import Progress_bar from "../ProgressBar";


const SecondTab = () => {
  return (
    <div className="SecondTab">
      <div className="grid-container">
            <div className="grid-item-stat">Hp</div>
            <div className="grid-item-number">58</div>
            <Progress_bar
                bgcolor="#EB6C6C"
                progress="58"
                height={7}
            />
            <div className="grid-item-stat">Attack</div>
            <div className="grid-item-number">64</div>
            <Progress_bar
                bgcolor="#EB6C6C"
                progress="64"
                height={7}
            />
            <div className="grid-item-stat">Defense</div>
            <div className="grid-item-number">58</div>
            <Progress_bar
                bgcolor="#EB6C6C"
                progress="58"
                height={7}
            />
            <div className="grid-item-stat">Sp.Attack</div>
            <div className="grid-item-number">80</div>
            <Progress_bar
                bgcolor="#EB6C6C"
                progress="80"
                height={7}
            />
            <div className="grid-item-stat">SP.Defense</div>
            <div className="grid-item-number">65</div>
            <Progress_bar
                bgcolor="#EB6C6C"
                progress="65"
                height={7}
            />
            <div className="grid-item-stat">Speed</div>
            <div className="grid-item-number">80</div>
            <Progress_bar
                bgcolor="#EB6C6C"
                progress="65"
                height={7}
            />
            <div className="grid-item-stat">Total avg</div>
            <div className="grid-item-number">65.5</div>
            <Progress_bar
                bgcolor="#EB6C6C"
                progress="65.5"
                height={7}
            />
        </div>
    </div>
  );
};
export default SecondTab;