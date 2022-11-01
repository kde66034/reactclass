import React from 'react';

const cardTypeTitle = {
    title: "과정 소개",
    desc: "기초 과정부터 심화 과정까지, 그리고 나만의 제빵 포트폴리오를 만들기까지의 과정을 소개합니다.",
}

const cardInfo = [
    {
        title: "제빵 기초 강의",
        desc: "제빵의 기초가 되는 강의입니다. 초심자도 이해하기 쉽게 강의가 진행되며 초반에는 이론 강의부터 시작해 중반부터는 실습을 시작하여 제빵의 기초를 익히도록 합니다.",
        btnLink: "/",
        imgLink: "assets/img/cardType/card_bg01.jpg",
    },
    {
        title: "제빵 심화 과정",
        desc: "이제 기초 강의가 너무 쉬워 시시하다고 느껴질 즈음 심화과정에 들어가게 될 겁니다. 시중에 판매되고 있는 제과점 빵들을 직접 만들어보는 시간을 갖게 됩니다.",
        btnLink: "/",
        imgLink: "assets/img/cardType/card_bg02.jpg",
    },
    {
        title: "나만의 제빵 포트폴리오 만들기",
        desc: "이제 빵집 창업해도 문제 없을 정도의 실력을 갖추게 되셨을 겁니다! 이제는 능숙해진 제빵 실력에 나만의 개성을 더하여 튼튼한 포트폴리오를 만들어보아요!",
        btnLink: "/",
        imgLink: "assets/img/cardType/card_bg03.jpg",
    },
]

const CardTypeCont = ({title, desc, btnLink, imgLink}) => {
    return (
        <article class="card">
            <figure class="card__header">
                <img src={`${imgLink}`} alt={`${title}`} />
            </figure>
            <div class="card__body">
                <h3 class="title">{title}</h3>
                <p class="desc">
                    {desc}
                </p>
                <a class="btn" href={`${btnLink}`}>
                    더 자세히 보기
                    <span aria-hidden="true">
                        <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black"/>
                        </svg>
                    </span>
                </a>
            </div>
        </article>
    )
}

function Card(props) {
  return (
    <section id="cardType" className={`card__wrap scroll ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}>
        <h2>{cardTypeTitle.title}</h2>
        <p>{cardTypeTitle.desc}</p>
        <div class="card__inner">
            {cardInfo.map(info => (
                <CardTypeCont title={info.title} 
                        desc={info.desc} 
                        imgLink={info.imgLink} 
                        btnLink={info.btnLink}
                />
            ))} 

            {/* <article class="card">
                <figure class="card__header">
                    <img src="assets/img/cardType/card_bg01.jpg" alt="제빵 기초 강의" />
                </figure>
                <div class="card__body">
                    <h3 class="title">제빵 기초 강의</h3>
                    <p class="desc">
                        제빵의 기초가 되는 강의입니다. 초심자도 이해하기 쉽게 강의가 진행되며 
                        초반에는 이론 강의부터 시작해 중반부터는 실습을 시작하여 제빵의 기초를 익히도록 합니다.
                    </p>
                    <a class="btn" href="/">
                        더 자세히 보기
                        <span aria-hidden="true">
                            <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </article>
            <article class="card">
                <figure class="card__header">
                    <img src="assets/img/cardType/card_bg02.jpg" alt="제빵 심화 과정" />
                </figure>
                <div class="card__body">
                    <h3 class="title">제빵 심화 과정</h3>
                    <p class="desc">
                        이제 기초 강의가 너무 쉬워 시시하다고 느껴질 즈음 심화과정에 들어가게 될 겁니다.
                        시중에 판매되고 있는 제과점 빵들을 직접 만들어보는 시간을 갖게 됩니다.
                    </p>
                    <a class="btn" href="/">
                        더 자세히 보기
                        <span aria-hidden="true">
                            <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </article>
            <article class="card">
                <figure class="card__header">
                    <img src="assets/img/cardType/card_bg03.jpg" alt="나만의 제빵 포트폴리오 만들기" />
                </figure>
                <div class="card__body">
                    <h3 class="title">나만의 제빵 포트폴리오 만들기</h3>
                    <p class="desc">
                        이제 빵집 창업해도 문제 없을 정도의 실력을 갖추게 되셨을 겁니다! 이제는 능숙해진 제빵 실력에
                        나만의 개성을 더하여 튼튼한 포트폴리오를 만들어보아요!
                    </p>
                    <a class="btn" href="/">
                        더 자세히 보기
                        <span aria-hidden="true">
                            <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </article> */}
        </div>
    </section>
  );
}

export default Card;