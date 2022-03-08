import { Register } from '../../component/Auth/.';
import styled from 'styled-components';

const Registerpage = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  );
};

export default Registerpage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;
