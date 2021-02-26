import { ChallengesProvider } from '../contexts/ChallengesContext';
import '../styles/global.css'; /* para todas as páginas */

function MyApp({ Component, pageProps }) {
  return (
      <ChallengesProvider>
          <Component {...pageProps} />
      </ChallengesProvider>
  )
}

export default MyApp
