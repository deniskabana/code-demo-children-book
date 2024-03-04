import { styles } from './StoryWrapper.styles'

export const StoryWrapper = () => {
  const [page, setPage] = useState(0)

  return (
    <div css={styles.wrapper}>
      <div css={styles.illustration()} />
    </div>
  )
}
