import '@/styles/globals.css'

const App = ({ Component, pageProps }) => (
  <div>
    <Globals />
    <Component {...pageProps} />
  </div>
)

export default App
