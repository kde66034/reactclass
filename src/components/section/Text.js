import React from 'react';

function Text(props) {
  return (
    <section id="textType" class={`text__wrap scroll ${props.attr[0]} ${props.attr[1]} ${props.attr[2]}`}>
        <span>GOAL</span>
        <h2 class="mb70">강의 목표에 대해 설명합니다.</h2>
        <div class="text__inner">
            <div class="text t1">
                <h3 class="text__title">형태와 맛 표현</h3>
                <p class="text__desc">
                    빵과 과자의 고유 형태와 맛을
                    표현하는 방법을 습득하고 레시피를
                    정확하게 이해하며 기초 조리 기술을
                    습득할 수 있습니다. 
                </p>
                <a class="text__btn" href="/">더보기</a>
            </div>
            <div class="text t2">
                <h3 class="text__title">제과/제빵사 자격증 취득</h3>
                <p class="text__desc">
                    시험대비에 맞춘 체계적인 실기 수업
                    진행으로 제과/제빵사 자격증 합격을
                    위한 취득 노하우를 확실하게
                    전수합니다.
                </p>
                <a class="text__btn" href="/">더보기</a>
            </div>
            <div class="text t3">
                <h3 class="text__title">1시간 이내에 빠르게 만들기</h3>
                <p class="text__desc">
                    지급된 재료로 요구하는 품목을
                    시험기간(1시간이내)에 1인분을
                    만들어내는 실기 시험 형태로 진행할
                    수 있게 준비합니다.
                </p>
                <a class="text__btn" href="/">더보기</a>
            </div>
            <div class="text t4">
                <h3 class="text__title">훌륭한 파티시에로 성장하기</h3>
                <p class="text__desc">
                    디저트 문화를 이끌어 갈 파티시에
                    양성을 목표로 최선의 교육을
                    제공하여 수강생 모두가 원하는 꿈을
                    이루실 수 있습니다.
                </p>
                <a class="text__btn" href="/">더보기</a>
            </div>
            <div class="text t5">
                <h3 class="text__title">창업 노하우 학습</h3>
                <p class="text__desc">
                    훌륭한 제빵사로 일하는 것도 물론 좋지만
                    자본이 모이게 된다면 제과점을 차리는 것도
                    좋지요. 저희 학원에서 창업 노하우도 알려드립니다.
                </p>
                <a class="text__btn" href="/">더보기</a>
            </div>
            <div class="text t6">
                <h3 class="text__title">맛나게 먹기</h3>
                <p class="text__desc">
                    맛있게 만든 빵을 맛나게 먹는 것도 중요합니다. 
                    여기까지 오셨다면 '내가 만든 게 맞나?' 싶을 정도로
                    빵의 맛이 무척 맛있을 것입니다. 
                </p>
                <a class="text__btn" href="/">더보기</a>
            </div>
        </div>
    </section>
  );
}

export default Text;