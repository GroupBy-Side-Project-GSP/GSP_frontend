// 전역-스타일 모음
import { createGlobalStyle } from 'styled-components';
import './reset.scss';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        color: ${theme.color.black};
    }
`;
