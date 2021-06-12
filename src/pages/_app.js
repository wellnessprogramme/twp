import Globals from '@/styles/globals'

const App = ({ Component, pageProps }) => (
  <div>
    <Globals />
    <Component {...pageProps} />
  </div>
)

export default App
