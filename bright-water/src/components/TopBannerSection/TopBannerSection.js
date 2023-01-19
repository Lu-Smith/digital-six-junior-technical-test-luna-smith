import React, { useState, useEffect } from 'react';
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
        <button>Shop now</button>
    </div>
  );
}
