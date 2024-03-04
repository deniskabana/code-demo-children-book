import { Theme } from '@mui/material'
import { css } from '@emotion/react'

export const styles = {
  slide: (isActive: boolean, sizes: DOMRect | any) => css`
    width: ${isActive ? sizes?.width / 2 : 100}px;
  `,
  slideContainer: (theme: Theme) => css`
    display: flex;
    width: 100%;
    height: 100%;
    gap: ${theme.spacing(4)};
  `,
  wrapper: css`
    width: 100%;
    overflow: hidden;
  `,
}
