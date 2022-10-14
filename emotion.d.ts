import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      black: string;
      grey: string;
      lightGrey: string;
    };
    font: {
      size: {
        xSmall: string;
        small: string;
        medium: string;
        large: string;
      };
      color: {
        black: string;
        grey: string;
      };
      family: {
        roboto: string;
        josefin: string;
      };
    };
    mq: {
      tablet: string;
      desktop: string;
      bigDesktop: string;
      huge: string;
    };
    zIndex: {
      modal: number;
      menu: number;
    };
  }
}
