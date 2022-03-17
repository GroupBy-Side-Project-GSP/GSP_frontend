import React from 'react';
import styled from 'styled-components';
import { theme } from '../style/theme'; //범위 체크용 추후 삭제 예정

const CompanyListSearch = () => {
  return (
    <Wrapper>
      <input placeholder="기업이나 카테고리를 입력해주세요"></input>
      <button>검색</button>
    </Wrapper>
  );
};

export default CompanyListSearch;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  input {
    width: 96rem;
    height: 6.8rem;
    border: 1px solid ${theme.color.Main};
    box-sizing: border-box;
    border-radius: 10px;
    padding-left: 3rem;
    margin: 0px;
    font-size: 1.7rem;
  }
  input::placeholder {
    color: ${theme.color.light_gray};
    font-size: 1.8rem;
  }
  input:focus {
    outline: none;
  }

  button {
    background: ${theme.color.Main};
    border-radius: 10px;
    width: 19rem;
    height: 6.8rem;
    color: ${theme.color.white};
    font-size: 2.5rem;
  }
`;
