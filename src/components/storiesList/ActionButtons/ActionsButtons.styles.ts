import { Theme } from '@mui/material'
import { css } from '@emotion/react'

export const styles = {
  wrapper: (theme: Theme) => css`
    margin: ${theme.spacing(3)} 0;
  `,
}
