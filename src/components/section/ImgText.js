import React from 'react';

const imgTextTypeTitle = {
    subject: "CERTIFICATION",
    title: "자격증 과정",
    desc: "수강 중, 취득 가능한 자격증 목록입니다."
}

const imgTextListInfo = [
    {
        listname: "조리기능사 필기",
        link: "/",
    },
    {
        listname: "제과·제빵기능사",
        link: "/",
    },
    {
        listname: "커피 바리스타",
        link: "/",
    },
    {
        listname: "산업기사/기능장",
        link: "/",
    },
    {
        listname: "양식조리기능사",
        link: "/",
    },
    {
        listname: "한식조리기능사",
        link: "/",
    },
]

const ImgTextList = ({listname, link}) => {
    return (
        <ul>
            <li><a href={`${link}`}>{listname}</a></li>
        </ul>
    )
}

const imgTextThumbnailInfo = [
    {
        imgClass: "img1",
        link: "/",
        btnClass: "",
    },
    {
        imgClass: "img2",
        link: "/",
        btnClass: "blue",
    },
]

const ImgTextThumbnail = ({imgClass, link, btnClass}) => {
    return (
        <div class={`imgText__img ${imgClass}`}>
            <a href={`${link}`} class={`${btnClass}`}>자세히 보러가기</a>
        </div>
    )
}

function ImgText(props) {
  return (
    <section id="imgTextType" className={`imgText__wrap scroll ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}>
        <h2 class="blind">자격증 과정</h2>
        <div class="imgText__inner container">
            <div class="imgText__txt">
                <span>{imgTextTypeTitle.subject}</span>
                <h3>{imgTextTypeTitle.title}</h3>
                <p>{imgTextTypeTitle.desc}</p>

                {imgTextListInfo.map(info => (
                    <ImgTextList listname={info.listname} link={info.link} />
                ))} 

                {/* <ul>
                    <li><a href="/">조리기능사 필기</a></li>
                    <li><a href="/">제과·제빵기능사</a></li>
                    <li><a href="/">커피 바리스타</a></li>
                    <li><a href="/">산업기사/기능장</a></li>
                    <li><a href="/">양식조리기능사</a></li>
                    <li><a href="/">한식조리기능사</a></li>
                </ul> */}
            </div>

            {imgTextThumbnailInfo.map(info => (
                <ImgTextThumbnail imgClass={info.imgClass} link={info.link} btnClass={info.btnClass} />
            ))}

            {/* <div class="imgText__img img1">
                <a href="/">자세히 보러가기</a>
            </div>
            <div class="imgText__img img2">
                <a href="/" class="blue">큐넷 바로가기</a>
            </div> */}
        </div>
    </section>
  );
}

export default ImgText;