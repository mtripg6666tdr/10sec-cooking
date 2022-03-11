import Head from "next/head";
import React from "react";
import WorkCard from "../components/workCard";
import AAwebp from "../../assets/images/aa.webp";
import AApng from "../../assets/images/aa.png";
import Footer from "../components/footer";

export default class extends React.Component {
  render(){
    return (
      <>
      <Head>
        <title>１０秒合作ホームページ</title>
      </Head>
      <div className="top">
        <h1>
          <span>１０秒合作</span>
        </h1>
        <div className="description">
          <p>パート分けされた音楽のPVを１０秒で制作する全く新しい映像制作イベント。</p>
          <p>サイトのデザインも１０秒クオリティ。</p>
          <p>限られた時間内だから、参加者のクオリティがみんな同じなので、参加の際には実力は不問です。</p>
          <p>１０秒という限られた時間内だからできるイベントに、あなたもサクッと参加してみませんか。</p>
        </div>
        <div className="past_works">
          <h2>過去の作品</h2>
          <div className="cards_container">
            <WorkCard 
              title="幻の第一回１０秒合作(非公開)">
              <picture>
                <source srcSet={AAwebp.src} type="image/webp" />
                <img src={AApng.src} />
              </picture>
            </WorkCard>
            <WorkCard
              title="第二回１０秒合作「れっつ！みらくる☆はーどこあっ！」">
              <iframe src="https://www.youtube.com/embed/pPfC3DnkHZc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </WorkCard>
          </div>
        </div>
        <Footer />
      </div>
      </>
    );
  }
}