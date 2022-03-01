import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      Main_lighten: '#bd98ff';
      Main: '#6b17fe';
      Main_darken: '#540fcc';
      Secondary_lighten: '#f998c5';
      Secondary: '#ff1883';
      Secondary_darken: '#d4116c';
      system_red: '#ff1717';
      system_yellow: '#ffcb22';
      system_green: '#2bd131';
      system_blue: '#1aa8ff';
      light_gray: '#ebebeb';
      medium_gray: '#cccccc';
      dark_gray: '#939393';
      black: '#3d3d3d';
      white: '#FFFFFF';
    };
  }
}
