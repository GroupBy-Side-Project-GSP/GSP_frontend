import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../style/theme';

const RightAlignedLink = ({
  to,
  children,
}: {
  to: string;
  children: string;
}) => {
  const navigate = useNavigate();
  return (
    <Aligner>
      <div className="styled-link" onClick={() => navigate(`/${to}`)}>
        {children}
      </div>
    </Aligner>
  );
};

export default RightAlignedLink;

const Aligner = styled.div`
  text-align: right;
  display: flex;
  width: 58rem;
  margin-top: 2rem;
  .styled-link {
    color: ${theme.color.medium_gray};
    font-size: 1.6rem;
    margin-left: 31rem;
    margin-right: 0;
    border-bottom: 1px solid ${theme.color.medium_gray};
    &:hover {
      color: ${theme.color.medium_gray};
    }
  }
`;
