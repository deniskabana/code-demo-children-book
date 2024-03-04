import { Theme } from '@mui/material'
import { css } from '@emotion/react'

export const styles = {
  container: (theme: Theme) => css`
    display: flex;
    gap: ${theme.spacing(2)};
    align-items: center;
    padding: ${theme.spacing(7)} 0 ${theme.spacing(4)};
  `,
}
