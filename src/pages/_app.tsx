import { AppProps } from "next/app";
import { AnimationEvent, useEffect, useState } from "react";
import "../styles/index.scss";

export default function(prop:AppProps){
  const { Component, pageProps } = prop;
  const [closeSplash, setCloseSplash] = useState(false);

  useEffect(() => {
    if(window){
      setTimeout(() => {
        setCloseSplash(true);
      }, 2500);
      window.document.documentElement.style.setProperty("--vh", window.innerHeight / 100 + "px");
    }
  }, []);

  const onAnimationEnd = (event:AnimationEvent<HTMLDivElement>) => {
    (event.target as HTMLDivElement).style.display = "none";
  };

  return (
    <>
    <main className={closeSplash ? "show" : ""}>
      <Component {...pageProps} />
    </main>
    <div className={"splash" + (closeSplash ? " close" : "")} onAnimationEnd={onAnimationEnd}>
      <div className="center">
        <span>10sec-cooking</span>
        <span>-１０秒合作-</span>
        <span>Loading...</span>
      </div>
    </div>
    </>
  );
}