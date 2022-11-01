import React from 'react';

const bannerInfo = {
  title: "김제빵 유튜브",
  desc: "별빛제빵교실 유명 강사 김제빵의 유튜브 채널입니다!",
  link: "https://www.youtube.com/c/CozyRain",
}

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap scroll ${props.attr[0]} ${props.attr[1]}`}>
        <h2 className="blind">배너 영역</h2>
        <div className="banner__inner">  
          <h3 className="title">{bannerInfo.title}</h3>
          <p className="desc">
              {bannerInfo.desc}
              <a href={`${bannerInfo.link}`} title="유튜브 페이지로 이동">{bannerInfo.link}</a>
          </p>
        </div>
    </section>
  );
}

export default Banner;