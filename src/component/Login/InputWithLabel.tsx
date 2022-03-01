import React from 'react';
import styled from 'styled-components';

const InputWithLabel = ({
  label,
  name,
  placeholder,
  ...rest
}: {
  label: string;
  name: string;
  placeholder: string;
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input name={name} placeholder={placeholder} {...rest} />
    </Wrapper>
  );
};

export default InputWithLabel;

const Wrapper = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.div`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-weight: bold;
  color: #9e9e9e;
`;

const Input = styled.input`
  width: 300px;
  border: 0;
  border-bottom: 1px solid #e0e0e0;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 14px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;
