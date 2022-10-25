import React from 'react';

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
        <div class="header__inner">
          <h1 class="header__logo">
            <a href="/">별빛제빵교실 <em>Baking Class</em></a>
          </h1>
          <div class="header__menu">
            <ul>
              <li class="active"><a href="#headerType">MAIN</a></li>
              <li><a href="#imageType">NOTICE</a></li>
              <li><a href="#imgTextType">CERTIFICATION</a></li>
              <li><a href="#cardType">CLASS</a></li>
              <li><a href="#bannerType">YOUTUBE</a></li>
              <li><a href="#textType">GOAL</a></li>
            </ul>
          </div>
          <div class="header__member">
            <a href="/">SIGN IN</a>
          </div>
          <div class="header__ham">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
  );
}

export default Header;