import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      black: string;
      grey: string;
    };
    fontColors: {
      black: string;
      grey: string;
    };
    fontSizes: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
    };
    zIndex: {
      modal: number;
      menu: number;
    };
  }
}
