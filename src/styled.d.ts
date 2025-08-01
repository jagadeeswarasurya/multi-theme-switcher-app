// src/styles/theme.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: 'theme1' | 'theme2' | 'theme3';
    background: string;
    color: string;
    font: string;
    layout: string;
    fontSize?: string;
    spacing?: string;
    button: {
      background: string;
      color: string;
      borderRadius: string;
      padding: string;
      fontWeight: string;
      hoverEffect: string;
    };
  }
}
