import styled, { DefaultTheme, css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const margins = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

export const paddings = {
  sm: '.5rem',
  base: '1rem',
  lg: '2rem',
  xl: '3rem',
};

export const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: '0.8rem',
    base: '1.1rem',
    lg: '2rem',
    xl: '2.5rem',
    title: '6rem',
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

export const theme: DefaultTheme = {
  color: {
    Main_lighten: '#bd98ff',
    Main: '#6b17fe',
    Main_darken: '#540fcc',
    Secondary_lighten: '#f998c5',
    Secondary: '#ff1883',
    Secondary_darken: '#d4116c',
    system_red: '#ff1717',
    system_yellow: '#ffcb22',
    system_green: '#2bd131',
    system_blue: '#1aa8ff',
    light_gray: '#ebebeb',
    medium_gray: '#cccccc',
    dark_gray: '#939393',
    black: '#3d3d3d',
    white: '#FFFFFF',
  },
};

export const Button = styled.div`
  ${flexCenter};
  color: ${theme.color.Main};
  font-size: 1.5rem;
`;

export const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px',
};

// 미디어 쿼리의 중복 코드를 줄이기 위해 정의된 변수
export const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};
