import React from 'react';
import styled from 'styled-components';
import { theme, flexCenter } from '../style/theme';

const TopNav = () => {
  return (
    <Wrapper>
      <div className="nav-box">
        <ul className="menu-text">
          <li>메인</li>
          <li>회사 리스트</li>
          <li>채팅</li>
        </ul>
        <ul className="icons">
          <img src="/image/Icon ionic-md-heart-empty.svg" alt="하트" />
          <img src="/image/Icon alarmbell.svg" alt="알림" />
          <img src="" alt="프로필" />
        </ul>
      </div>
    </Wrapper>
  );
};

export default TopNav;

const Wrapper = styled.nav`
  width: 100%;
  position: sticky;
  top: 0;
  background: white;
  z-index: 5;
  ${flexCenter}
  .nav-box {
    width: 118rem;
    height: 6.8rem;
    ${flexCenter}
    justify-content: space-between;

    ul {
      ${flexCenter}
    }

    .menu-text {
      font-size: 1.8rem;

      li {
        margin: 0rem 3rem;
        color: ${theme.color.medium_gray};
      }
    }
  }

  .icons {
    img {
      width: 2rem;
      margin-right: 1rem;
    }
  }
`;
