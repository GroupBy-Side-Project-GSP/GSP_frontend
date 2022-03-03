import styled, { DefaultTheme, css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// font랑 margin은 아직 디자인에 맞게 수정 안한 상태입니다
export const margins = {
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

// 웹 디자인 컬러 올려주시면 거기에 맞게 수정해야 합니다
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

const calculateMargin = (
  gap: string,
  direction: 'row' | 'column' | 'column-reverse'
) => {
  if (direction === 'row') return `margin-left: ${gap}`;
  if (direction === 'column') return `margin-top: ${gap}`;
  if (direction === 'column-reverse') return `margin-bottom: ${gap}`;
  return '';
};

export const gap = (
  gapLength: string,
  direction: 'row' | 'column' | 'column-reverse'
) => {
  return css`
    & > * + * {
      ${calculateMargin(gapLength, direction)}
    }
  `;
};

export const size = {
  mobile: '425px',
  tablet: '768px',
  desktop: '1440px',
};

export const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};
