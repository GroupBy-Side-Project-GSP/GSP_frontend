import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { theme } from '../style/theme';
import ReportModal from './ReportModal';

const CompanyItem = () => {
  //즐겨찾기 표시
  const [onHeart, setOnHeart] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClickReport = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  const onClickHeart = useCallback(() => {
    setOnHeart(!onHeart);
  }, [onHeart]);

  return (
    <>
      {isModalOpen && <ReportModal onClickReport={onClickReport}></ReportModal>}
      <Container>
        <div className="report">
          <img
            src="/image/Icon report.svg"
            alt="신고"
            onClick={onClickReport}
          />
        </div>
        <div className="company-information">
          <div className="company-image">
            <img src="" alt="회사사진" />
            <Heart
              src={
                onHeart
                  ? '/image/Icon heart.svg'
                  : '/image/Icon empty-heart.svg'
              }
              alt="하트"
              onClick={onClickHeart}
            />
          </div>
          <div className="title">
            <img className="company-logo" src="" alt="회사로고" />
            <p className="company-name">(주) 조아라</p>
          </div>
          <p className="description">
            회사 소개 저희는 이런 저런거 다 하는 회사구요 어쩌구 플젝 자신
            있습니다. 롸롸롸롸롸
          </p>
        </div>
      </Container>
    </>
  );
};

export default CompanyItem;

const Container = styled.div`
  width: 28rem;
  height: 36rem;
  box-sizing: border-box;
  border: 1px solid ${theme.color.light_gray};
  border-radius: 0.5rem;
  box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem ${theme.color.medium_gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:active {
    border: 1px solid ${theme.color.Main};
  }

  .report {
    display: flex;
    justify-content: flex-end;
    align-item: center;
    width: 90%;
    height: 3.5rem;
    box-sizing: border-box;

    img {
      width: 3rem;
      margin-left: 1.5rem;
      cursor: pointer;
    }
  }

  .company-information {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 90%;

    .company-image {
      position: relative;
      width: 24.8rem;
      height: 16.4rem;
      border-radius: 1rem;
      background: ${theme.color.light_gray};
      //현재 이미지 받아오는 게 없어서 임시로 백그라운드 컬러 변경해놓았습니다.
      margin-bottom: 1rem;
    }

    .title {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;
    }
    .company-logo {
      width: 4rem;
      height: 4rem;
      border-radius: 0.6rem;
      background: ${theme.color.light_gray};
      margin-right: 1rem;
    }
    .company-name {
      font-size: 1.6rem;
      font-weight: bold;
    }

    .description {
      font-size: 1.8rem;
      color: ${theme.color.dark_gray};
      line-height: 2.5rem;
      font-weight: lighter;
    }
  }
`;

const Heart = styled.img`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
`;
