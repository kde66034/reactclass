import React from 'react';

function Banner(props) {
  return (
    <section id="bannerType" class={`banner__wrap scroll ${props.attr[0]} ${props.attr[1]}`}>
        <h2 class="blind">배너 영역</h2>
        <div class="banner__inner">
            <h3 class="title">김제빵 유튜브</h3>
            <p class="desc">
                별빛제빵교실 유명 강사 김제빵의 유튜브 채널입니다!
                <a href="https://www.youtube.com/c/CozyRain" title="유튜브 페이지로 이동">https://www.youtube.com/c/kim_baking</a>
            </p>
        </div>
    </section>
  );
}

export default Banner;