import '../styles/global.css'; /* para todas as páginas */
import { ChallengesProvider } from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {
  return (
      <ChallengesProvider>
          <Component {...pageProps} />
      </ChallengesProvider>
  )
}

export default MyApp
