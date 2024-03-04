import { Theme } from '@mui/material'
import { css } from '@emotion/react'

export const styles = {
  buttons: (isActive: boolean, theme: Theme) => css`
    transition: 0.2s ease-in;
    margin-left: -${theme.spacing(1)};
    opacity: 0;
    transform: translate3d(0, -20px, 0);
    visibility: hidden;

    ${isActive &&
    css`
      opacity: 1;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    `}
  `,
  card: (isActive: boolean) => css`
    transition: opacity 0.2s ease-in;
    background-color: transparent;
    box-shadow: none;
    opacity: 0.6;

    ${isActive &&
    css`
      opacity: 1;
    `}
  `,
  excerpt: (isActive: boolean) => css`
    transition: 0.2s ease-in;
    opacity: 0;
    transform: translate3d(0, -20px, 0);
    visibility: hidden;

    ${isActive &&
    css`
      opacity: 0.8;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    `}
  `,
  img: css`
    width: 100%;
    border-radius: 12px;
  `,
  wrapper: css`
    transition: width 0.2s ease-in;
    /* width: 50%; */
  `,
}
