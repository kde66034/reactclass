import React from 'react';

const imageTitle = {
    title: "별빛제빵교실 개강 소식🍞",
    desc: "별빛제빵교실이 올 겨울에 개강합니다. 수강신청 기회는 지금 뿐이니 서두르세요!",
};

const imageText = [
    {
        title: "Class A",
        desc: "12월 17일부터 23년 3월 18일까지 약 3개월동안 진행되며, 입문자 눈높이에 맞춰 제빵의 기초에 포커스를 두고 차근차근 수업이 이루어집니다.",
        imgClass: "img1",
        btnLink: "/",
    },
    {
        title: "Class B",
        desc: "12월 22일부터 23년 6월 21일까지 약 6개월동안 진행되며, 베이킹 입문 제과+제빵 기능사와 실무에서의 기본기, 제조 기술 습득 과정인 디저트 '올베이직',케이크디자인 자격증 과정까지 실무 끝판왕 '올마스터' 교육을 목표로 하는 파티셰 완성 과정입니다.",
        imgClass: "img2",
        btnLink: "/",
    },
];

const CardCont = ({title, desc, imgClass, btnLink}) => {
    return (
        <article className={`image ${imgClass}`}>
            <h3 className="image__title">{title}</h3>
            <p className="image__desc">
                {desc}
            </p>
            <a className="image__btn" href={`${btnLink}`} title="자세히 보기">
                자세히 보기
            </a>
        </article>
    )
}

function Image(props) {
  return (
    <section 
        id="imageType" 
        className={`image__wrap scroll ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}>
        
        <h2>{imageTitle.title}</h2>
        <p>{imageTitle.desc}</p>

        <div className="image__inner">
            {imageText.map(info => (
                <CardCont title={info.title} 
                        desc={info.desc} 
                        imgClass={info.imgClass} 
                        btnLink={info.btnLink}
                />
            ))} 
            {/* <article className="image img1">
                <h3 className="image__title">Class A</h3>
                <p className="image__desc">
                    12월 17일부터 23년 3월 18일까지 약 3개월동안 진행되며, 
                    입문자 눈높이에 맞춰 제빵의 기초에 포커스를 두고 차근차근 수업이 이루어집니다.
                </p>
                <a className="image__btn" href="/" title="자세히 보기">
                    자세히 보기
                </a>
            </article>
            <article className="image img2">
                <h3 className="image__title">Class B</h3>
                <p className="image__desc">
                    12월 22일부터 23년 6월 21일까지 약 6개월동안 진행되며, 
                    베이킹 입문 제과+제빵 기능사와 실무에서의 기본기, 제조 기술 습득 과정인 디저트 '올베이직',
                    케이크디자인 자격증 과정까지 실무 끝판왕 '올마스터' 교육을 목표로 하는 파티셰 완성 과정입니다.
                </p>
                <a className="image__btn" href="/" title="자세히 보기">
                    자세히 보기
                </a>
            </article> */}
        </div>
    </section>
  );
}

export default Image;