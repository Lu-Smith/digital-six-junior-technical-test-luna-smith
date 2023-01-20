import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import classes from "./topBannerSection.sass";


export default function TopBannerSection() {
  const messages = ['REUSE', 'RESET', 'REFRESH'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setIndex((index + 1) % messages.length);
    }, 1500);
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div className="TopBannerSection">
        <h1>{messages[index]}</h1>
        <button>
            <Link to={`/basket/`}>Shop now</Link>
            <p className="bubble1"></p>
            <p className="bubble2"></p>
            <p className="bubble3"></p>
            <p className="bubble4"></p>
            <p className="bubble5"></p>
            <p className="bubble6"></p>
        </button>
    </div>
  );
}
