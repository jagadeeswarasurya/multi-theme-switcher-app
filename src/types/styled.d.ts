// src/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    background: string;
    color: string;
    font: string;
    fontSize: string; // ✅ this is required to fix your error
    layout: 'header' | 'sidebar'; // ✅ better as union type
    button?: {
      background?: string;
      color?: string;
    };
  }
}
