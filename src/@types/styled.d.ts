import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    title: string;
    colors:{
      primaryText: string;
      primaryBackground: string;
      secondaryText: string;
      secondaryBackground: string;
    }
  }
}
