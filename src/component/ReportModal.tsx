import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { flexCenter, theme } from '../style/theme';

interface ModalDefaultType {
  onClickReport: () => void;
}

const ReportModal = ({
  onClickReport,
}: PropsWithChildren<ModalDefaultType>) => {
  return (
    <ModalBox>
      <DialogBox>
        <Report>
          <p className="report-title">신고하기</p>
          <p className="report-subtitle">문의 사항을 입력해주세요.</p>
          <form>
            <p className="section">
              <span className="title">제목</span>
              <input
                className="title-input"
                type="text"
                name="title"
                placeholder="Title"
              ></input>
            </p>
            <p className="section">
              <span className="title">내용</span>
              <textarea
                className="content-input"
                name="content"
                placeholder="신고내용을 입력하세요."
              ></textarea>
            </p>
            <p className="section" id="img-section">
              <span className="title">사진</span>
              <input
                className="img-input"
                type="file"
                accept="image.gif,image/jpeg, image/png, image/jpg"
                name="image"
                multiple
              ></input>
              <img src="/image/Icon fileAdd.svg" />
            </p>
            <p className="submit-section">
              <input className="submit" type="submit" value="신고하기"></input>
            </p>
          </form>
        </Report>
      </DialogBox>
      <Back
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickReport) onClickReport();
        }}
      ></Back>
    </ModalBox>
  );
};

export default ReportModal;

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  ${flexCenter}
`;

const DialogBox = styled.div`
  width: 55.4rem;
  height: 65rem;
  ${flexCenter}
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 100;
`;

const Back = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Report = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 12rem;

  .report-title {
    color: ${theme.color.dark_gray};
    font-size: 2.1rem;
    margin-bottom: 1.2rem;
    font-weight: bold;
  }
  .report-subtitle {
    color: ${theme.color.medium_gray};
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 1.8rem;
    color: ${theme.color.dark_gray};
    margin-bottom: 1rem;
  }
  .title-input {
    width: 46.6rem;
    height: 5rem;
    font-size: 1.8rem;
    border: none;
    border-bottom: 0.1rem solid ${theme.color.medium_gray};
  }
  .title-input::placeholder {
    color: ${theme.color.light_gray};
    font-size: 1.8rem;
  }
  .title-input:focus {
    border-bottom: 0.1rem solid ${theme.color.Main};
    outline: none;
  }

  .content-input {
    width: 43.5rem;
    height: 5.6rem;
    border: 0.1rem solid ${theme.color.medium_gray};
    border-radius: 0.5rem;
    font-size: 1.8rem;
    padding: 1.5rem;
    word-wrap: break-word;
    word-break: break-all;
  }
  .content-input::placeholder {
    color: ${theme.color.light_gray};
    font-size: 1.8rem;
  }
  .content-input:focus {
    border: 0.1rem solid ${theme.color.Main};
    outline: none;
  }
  .img-input {
    width: 46.6rem;
    overflow: scroll;
  }

  .submit-section {
    position: absolute;
    bottom: 8rem;
  }
  .submit {
    width: 19rem;
    height: 4.4rem;
    background: ${theme.color.Main};
    border: none;
    border-radius: 0.5rem;
    color: white;
    font-size: 1.8rem;
  }

  .section {
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
  }

  #img-section {
    input[type='file'] {
      height: 4.6rem;
      opacity: 0;
      z-index: 1;
    }
    img {
      width: 4.6rem;
      position: absolute;
      bottom: 19.5rem;
      cursor: pointer;
    }
  }
`;
