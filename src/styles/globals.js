import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }
`

const Globals = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default Globals
