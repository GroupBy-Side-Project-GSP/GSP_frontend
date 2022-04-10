import React from 'react';
import styled from 'styled-components';
import { theme } from '../../style/theme';
// import { theme } from '../../style/theme';

const CompanyinfoBox = () => {
  const companyList = [
    { icon: '/image/ic-home.svg', title: '홈페이지' },
    { icon: '/image/ic-business.svg', title: '업종' },
    { icon: '/image/ic-call.svg', title: '전화번호' },
    { icon: '/image/ic-building.svg', title: '주소' },
  ];
  const projectList = [
    { icon: '/image/ic-user.svg', title: '담당자 성함' },
    { icon: '/image/ic-mail.svg', title: '담당자 이메일' },
  ];

  return (
    <Wrapper>
      <section className="introduce">
        <h2>기업 소개</h2>
        {companyList.map((item, index) => (
          <div className="category" key={index}>
            <img src={item.icon} />
            <p className="title">{item.title}</p>
            <p className="content">받아온거 배열 state에 저장해서 보여줄 값</p>
          </div>
        ))}
      </section>
      <section className="introduce">
        <h2>프로젝트 소개</h2>
        {projectList.map((item, index) => (
          <div className="category" key={index}>
            <img src={item.icon} />
            <p className="title">{item.title}</p>
            <p className="content">받아온거 배열 state에 저장해서 보여줄 값</p>
          </div>
        ))}
      </section>
      <section className="introduce">
        <h2>설명</h2>
        <p className="explain-content">
          인생을 무한한 안고, 가지에 풀이 그들은 황금시대를 것이다. 뜨거운지라,
          노래하며 풍부하게 사라지지 속에 역사를 이상을 뿐이다. 대한 기쁘며,
          사람은 길을 청춘의 우리는 수 인간의 부패뿐이다. 풍부하게 풀이 밥을
          보는 가는 싸인 가치를 어디 이상의 힘있다. 같은 위하여서, 사는가 끓는
          것이다. 인간의 이는 끝에 힘차게 따뜻한 청춘에서만 이것이야말로 싶이
          주며, 힘있다. 이성은 천하를 할지라도 작고 고동을 이 미묘한 두손을
          쓸쓸하랴? 영락과 인류의 예가 풀이 품고 봄바람이다. 눈이 붙잡아 없으면,
          피가 산야에 그들은 아름답고 설산에서 새 힘있다. 넣는 같지 못할
          봄바람을 이는 피가 그들은 교향악이다. 어쩌구
        </p>
      </section>
    </Wrapper>
  );
};

export default CompanyinfoBox;

const Wrapper = styled.div`
  width: 118rem;
  .introduce {
    padding-top: 1rem;
  }
  h2 {
    font-size: 2.4rem;
    font-weight: 700;
    padding: 3.5rem 0;
  }
  .category {
    display: flex;
    align-items: center;
    line-height: 4rem;
    margin-bottom: 2rem;
    position: relative;
    font-size: 2.1rem;
    .title {
      color: ${theme.color.black};
      margin-left: 1.5rem;
    }
    .content {
      margin-left: 2rem;
      font-weight: 700;
    }
  }

  .explain-content {
    font-size: 2.1rem;
    color: ${theme.color.black};
    line-height: 3rem;
    word-break: keep-all;
    padding-bottom: 5rem;
  }
`;
