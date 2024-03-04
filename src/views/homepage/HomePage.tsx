import { Container } from '@mui/material'
import { HomepageDescription } from '@/modules/homepageDescription/HomepageDescription'
import { styles } from './styles'

export const HomePage = () => {
  return (
    <main>
      <Container className={styles.container}>
        <HomepageDescription />
      </Container>
    </main>
  )
}
