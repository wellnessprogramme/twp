import '@/styles/globals.css'

import { AuthProvider } from '@/contexts/authContext'

const App = ({ Component, pageProps }) => (
  <AuthProvider>
    <Component {...pageProps} />
  </AuthProvider>
)

export default App
