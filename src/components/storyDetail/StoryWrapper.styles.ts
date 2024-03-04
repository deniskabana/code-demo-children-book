import { css } from '@emotion/react'

export const styles = {
  illustration: (src: string) => css`
    background-image: url(${src});
    background-size: cover;
    flex: 0 0 50%;
  `,
  wrapper: css`
    display: flex;
  `,
}
