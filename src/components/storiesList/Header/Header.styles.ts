import { Theme } from '@mui/material'
import { css } from '@emotion/react'

export const styles = {
  divider: (theme: Theme) => css`
    width: 2px;
    height: 24px;
    opacity: 0.2;
    background: ${theme.palette.common.white};
  `,
  insideContainer: (theme: Theme) => css`
    display: flex;
    gap: ${theme.spacing(2)};
    align-items: center;
    padding: ${theme.spacing(7)} 0 ${theme.spacing(4)};
    margin-top: -${theme.spacing(1.5)};
  `,
}
