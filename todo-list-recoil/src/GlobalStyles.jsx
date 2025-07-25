/** @jsxImportSource @emotion/react */
import { css, Global } from '@emotion/react';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      body {
        font-family: ${({ theme }) => theme.fonts.primary};
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        line-height: 1.6;
      }
      
      button, input, select {
        font-family: inherit;
      }
      
      button {
        cursor: pointer;
      }
    `}
  />
);

export default GlobalStyles;